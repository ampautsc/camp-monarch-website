import { useState, useEffect, useMemo } from 'react'
import type { Page } from '../App'

// Hero + step images: Wikimedia Commons, verified. Attribution at the bottom of the page.
// The hero should become a real photo of a restored home habitat when one is available.
const HERO_PHOTO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Monarch_butterfly_on_common_milkweed_%2848372506736%29.jpg/1280px-Monarch_butterfly_on_common_milkweed_%2848372506736%29.jpg'

const INAT_MONARCH_TAXON_ID = 48662
const INAT_US_PLACE_ID = 1
const FALLBACK_MONARCH_SIGHTINGS = 1466

function monthStartIso(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1)).toISOString().slice(0, 10)
}

function formatSightings(count: number): string {
  return new Intl.NumberFormat('en-US').format(count)
}

// The first step into making habitat. Every card is a monarch/habitat action.
type Step = { page: Page; photo: string; alt: string; title: string; note: string }

const START_STEPS: Step[] = [
  {
    page: 'plant-milkweed',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Danaus_plexippus_caterpillar_on_milkweed.jpg/960px-Danaus_plexippus_caterpillar_on_milkweed.jpg',
    alt: 'A monarch caterpillar feeding on a milkweed leaf',
    title: 'Plant milkweed',
    note: 'A monarch caterpillar eats milkweed and nothing else. One patch is where the next generation begins.',
  },
  {
    page: 'plants-finder',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Monarch_on_Goldenrod_%285230034900%29.jpg/1280px-Monarch_on_Goldenrod_%285230034900%29.jpg',
    alt: 'A monarch butterfly feeding on goldenrod flowers',
    title: 'Add native nectar plants',
    note: 'Asters, goldenrod, and coneflowers fuel the long flight south. Find the ones suited to your soil and sun.',
  },
  {
    page: 'growing-guide',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/American_lady_on_purple_coneflower_%2874770%29.jpg/1280px-American_lady_on_purple_coneflower_%2874770%29.jpg',
    alt: 'A butterfly on a purple coneflower in a native planting',
    title: 'Grow it from seed',
    note: 'Clearing lawn, preparing soil, starting seed: the eight steps that turn a patch of ground into habitat.',
  },
]

// Timely, monarch-specific guidance for the current month.
type SeasonalItem = { label: string; detail: string }
type SeasonalContent = { header: string; items: [SeasonalItem, SeasonalItem] }

function getSeasonalContent(month: number): SeasonalContent {
  if (month >= 2 && month <= 3) {
    return {
      header: 'Right now: spring migration is moving north',
      items: [
        { label: 'Watch for milkweed coming up.', detail: 'Thick, gray-green shoots push up from bare ground. Leaving them is the single most useful thing this month, since the first monarchs arrive when the plant is about six inches tall.' },
        { label: 'Order or start seed.', detail: 'Native milkweed and nectar plugs sell out by mid-April. Seed started or sown now is in the ground before the breeding season begins.' },
      ],
    }
  }
  if (month === 4) {
    return {
      header: 'Right now: monarchs are arriving to breed',
      items: [
        { label: 'Leave the milkweed standing.', detail: 'A female tests a leaf with her feet before laying a single egg beneath it. Cut the plant now and there is nothing left for her to find.' },
        { label: 'Look on the undersides of leaves.', detail: 'Monarch eggs are the size of a pinhead, pale and ribbed, one per leaf, on milkweed six inches or taller.' },
      ],
    }
  }
  if (month >= 5 && month <= 7) {
    return {
      header: 'Right now: caterpillars are on the milkweed',
      items: [
        { label: 'Check milkweed for eggs and caterpillars.', detail: 'Look under the leaves for pinhead eggs and for the striped caterpillars that hatch from them. A single plant can raise several.' },
        { label: 'Skip the insecticide near milkweed and nectar plants.', detail: 'The sprays meant for pests reach caterpillars and the bees working the same flowers.' },
      ],
    }
  }
  if (month >= 8 && month <= 10) {
    return {
      header: 'Right now: the fall migration is underway',
      items: [
        { label: 'Keep late nectar blooming.', detail: 'Goldenrod, native asters, and ironweed flower into October and fuel the 2,000-mile flight to Mexico. Leaving them up matters more than tidiness.' },
        { label: 'Hold off on cutting back.', detail: 'Seed heads and standing stems feed and shelter wildlife through winter, and next year’s plants reseed from them.' },
      ],
    }
  }
  return {
    header: 'Right now: monarchs are overwintering in Mexico',
    items: [
      { label: 'Plan the spring planting.', detail: 'Winter is the time to decide where milkweed and nectar plants will go. A bed as small as ten feet square gives a monarch somewhere to stop.' },
      { label: 'Cold-stratify seed.', detail: 'Many native seeds need a cold, damp spell before they sprout. Started now, they are ready to plant by spring.' },
    ],
  }
}

interface HomeProps {
  onNavigate: (page: Page) => void
}

export default function Home({ onNavigate }: HomeProps) {
  const now = useMemo(() => new Date(), [])
  const month = now.getMonth()
  const monthName = now.toLocaleString('en-US', { month: 'long' })
  const year = now.getFullYear()
  const monthStart = useMemo(() => monthStartIso(now), [now])
  const sightingsUrl = useMemo(
    () =>
      `https://www.inaturalist.org/observations?month=${month + 1}&place_id=${INAT_US_PLACE_ID}&taxon_id=${INAT_MONARCH_TAXON_ID}&d1=${monthStart}`,
    [month, monthStart],
  )
  const [monarchSightings, setMonarchSightings] = useState(FALLBACK_MONARCH_SIGHTINGS)
  const [hasLiveSightings, setHasLiveSightings] = useState(false)
  const seasonal = useMemo(() => getSeasonalContent(month), [month])

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.inaturalist.org/v1/observations?taxon_id=${INAT_MONARCH_TAXON_ID}&place_id=${INAT_US_PLACE_ID}&d1=${monthStart}&per_page=1`)
      .then(r => {
        if (!r.ok) throw new Error(String(r.status))
        return r.json() as Promise<{ total_results?: number }>
      })
      .then(data => {
        if (!cancelled && typeof data.total_results === 'number') {
          setMonarchSightings(data.total_results)
          setHasLiveSightings(true)
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [monthStart])

  return (
    <>
      {/* Hero: the monarch, the mission, one first step */}
      <div
        className="home-hero"
        role="img"
        aria-label="A monarch butterfly feeding on common milkweed flowers"
        style={{ backgroundImage: `url(${HERO_PHOTO_URL})` }}
      >
        <div className="home-hero__panel">
          <h1>Bring the monarch home</h1>
          <p>
            The monarch is disappearing along with the wild places it needs. Camp Monarch helps you
            rebuild those places where you live, starting with the ground outside your door.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('growing-guide')}>
              Start your habitat →
            </button>
          </div>
        </div>
      </div>

      <div className="home-wrap">
        {/* The idea, in one move */}
        <section className="home-section home-mission" aria-labelledby="mission-heading">
          <h2 id="mission-heading">Habitat is the fix</h2>
          <p>
            The eastern monarch has fallen to about 2.9 hectares of overwintering forest, less than
            half the area scientists consider stable. The cause is lost habitat, and so is the
            answer: a connected network of it, rebuilt from the yards, schoolyards, farms, and small
            plots where people already are. That network starts with one planted patch. [1]
          </p>
        </section>

        {/* Start here: three habitat steps */}
        <section className="home-section" aria-labelledby="start-heading">
          <h2 id="start-heading">Start here</h2>
          <div className="card-grid card-grid--3">
            {START_STEPS.map(step => (
              <button key={step.page} className="home-card" onClick={() => onNavigate(step.page)}>
                <span className="home-card__photo">
                  <img src={step.photo} alt={step.alt} loading="lazy" width={640} height={420} />
                </span>
                <span className="home-card__body">
                  <span className="home-card__title">{step.title}</span>
                  <span className="home-card__note">{step.note}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Timely, monarch-specific guidance */}
        <section className="home-section" aria-labelledby="seasonal-heading">
          <h2 id="seasonal-heading">{seasonal.header}</h2>
          <div className="card-grid">
            {seasonal.items.map(item => (
              <div key={item.label} className="home-seasonal-card">
                <p className="home-seasonal-card__label">{item.label}</p>
                <p className="home-seasonal-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live monarch sightings */}
        <div className="home-inat">
          <h2 style={{ marginTop: 0 }}>People are logging monarchs right now</h2>
          <p>
            <strong className="home-inat__count">{formatSightings(monarchSightings)} monarch sightings</strong>{' '}
            have been recorded across the United States{' '}
            {hasLiveSightings ? 'this month' : 'in a recent month'}, each one open data that helps
            researchers track the migration. Logging what you see is a way to help that takes a
            minute.
          </p>
          <p className="home-inat__meta">
            {hasLiveSightings
              ? `Live count from iNaturalist · since ${monthName} 1, ${year}.`
              : 'Recent monthly total from iNaturalist · live count temporarily unavailable.'}
          </p>
          <a href={sightingsUrl} target="_blank" rel="noreferrer" className="hero__cta" style={{ display: 'inline-block' }}>
            See this month's sightings →
          </a>
        </div>

        {/* The wider payoff → one door into the species library */}
        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant for the monarch, and you plant for everyone</h2>
          <p>
            The milkweed, nectar, and native trees a monarch needs are the same ones that feed the
            bees, birds, frogs, and other butterflies sharing the neighborhood. Restore habitat for
            one, and the rest come back with it.
          </p>
          <p style={{ marginBottom: 0 }}>
            <button className="hero__cta" onClick={() => onNavigate('species-gallery')}>
              Meet your neighbors →
            </button>
          </p>
        </div>

        {/* Attribution */}
        <section className="home-credits" aria-label="Photo attribution">
          <p>
            <strong>Photos:</strong>{' '}
            Hero, monarch on common milkweed — <a href="https://commons.wikimedia.org/wiki/File:Monarch_butterfly_on_common_milkweed_(48372506736).jpg" target="_blank" rel="noopener noreferrer">USFWS Midwest Region</a>, CC BY 2.0;{' '}
            caterpillar on milkweed — <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noopener noreferrer">Derek Ramsey</a>, CC BY-SA 2.5;{' '}
            monarch on goldenrod — <a href="https://commons.wikimedia.org/wiki/File:Monarch_on_Goldenrod_(5230034900).jpg" target="_blank" rel="noopener noreferrer">USFWS Northeast Region</a>, public domain;{' '}
            butterfly on coneflower — <a href="https://commons.wikimedia.org/wiki/File:American_lady_on_purple_coneflower_(74770).jpg" target="_blank" rel="noopener noreferrer">Rhododendrites</a>, CC BY-SA 4.0.
          </p>
          <p>
            Monarch count from <a href="https://www.inaturalist.org/" target="_blank" rel="noopener noreferrer">iNaturalist</a>;
            overwintering area from <a href="https://monarchjointventure.org/blog/eastern-monarch-overwintering-population-increases-from-last-year" target="_blank" rel="noopener noreferrer">Monarch Joint Venture</a> [1].
          </p>
        </section>
      </div>
    </>
  )
}
