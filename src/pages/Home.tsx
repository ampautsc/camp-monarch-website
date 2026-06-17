import { useState, useEffect, useMemo } from 'react'
import type { Page } from '../App'

// Photo sources: Wikimedia Commons. Attribution at the bottom of the page.
// All URLs verified against the live Commons API and reused from the matching
// species pages, so they stay in sync and stay alive.
const HERO_PHOTO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Angangueo_monarchs.jpg/1280px-Angangueo_monarchs.jpg'

const INAT_MONARCH_TAXON_ID = 48662
const INAT_US_PLACE_ID = 1
const FALLBACK_MONARCH_SIGHTINGS = 1466

function monthStartIso(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1)).toISOString().slice(0, 10)
}

function formatSightings(count: number): string {
  return new Intl.NumberFormat('en-US').format(count)
}

// Cards that navigate somewhere. A photo is optional (quick-start cards are text-only).
type NavCard = { page: Page; photo?: string; alt?: string; title: string; note: string }

const ACTION_CARDS: NavCard[] = [
  {
    page: 'plant-milkweed',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg',
    alt: 'Monarch butterfly on butterfly weed (Asclepias tuberosa) in bloom — the host plant for monarch caterpillars',
    title: 'Plant milkweed',
    note: 'Monarchs lay eggs on milkweed and no other plant. One patch in your yard becomes a waystation on a 3,000-mile corridor.',
  },
  {
    page: 'log-a-sighting',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Danaus_plexippus_caterpillar_on_milkweed.jpg/960px-Danaus_plexippus_caterpillar_on_milkweed.jpg',
    alt: 'Monarch caterpillar on milkweed — green-striped larva feeding on a leaf',
    title: 'Log a sighting',
    note: 'Researchers track population corridors using iNaturalist observations. A photo and a GPS pin take 60 seconds.',
  },
  {
    page: 'plants-finder',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Monarch_on_Goldenrod_%285230034900%29.jpg/1280px-Monarch_on_Goldenrod_%285230034900%29.jpg',
    alt: 'Monarch butterfly nectaring on goldenrod in bloom',
    title: 'Plant native wildflowers',
    note: 'Native asters, goldenrod, and coneflowers feed monarchs and 400+ other native bee species. Non-native flowers often don’t.',
  },
]

const MAMMAL_CARDS: NavCard[] = [
  {
    page: 'eastern-cottontail',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/20250708_eastern_cottontail_front_yard_PD208193.jpg/1280px-20250708_eastern_cottontail_front_yard_PD208193.jpg',
    alt: 'Eastern Cottontail rabbit sitting in a suburban front yard, ears alert',
    title: 'Eastern Cottontail',
    note: 'She nests in a shallow depression in your lawn and leaves the kits alone all day — absence is how she keeps the nest invisible to predators.',
  },
  {
    page: 'virginia-opossum',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Didelphis_virginiana_188111999.jpg/1280px-Didelphis_virginiana_188111999.jpg',
    alt: 'Virginia Opossum with white-gray fur and a pink nose on the ground',
    title: 'Virginia Opossum',
    note: 'A single opossum eats thousands of ticks per week, grooming them off its fur before they can finish a feeding.',
  },
  {
    page: 'striped-skunk',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Striped_Skunk_%28Mephitis_mephitis%29_01.jpg/1280px-Striped_Skunk_%28Mephitis_mephitis%29_01.jpg',
    alt: 'Striped Skunk foraging, bold black-and-white stripe down its back',
    title: 'Striped Skunk',
    note: 'She stamps her front feet as a warning before she sprays — the pattern gives you a second to back off. She sprays fewer than five times a year because it takes ten days to replenish.',
  },
  {
    page: 'eastern-gray-squirrel',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Grey_squirrel_%28Sciurus_carolinensis%29_01.jpg/1280px-Grey_squirrel_%28Sciurus_carolinensis%29_01.jpg',
    alt: 'Eastern Gray Squirrel perched alert on a surface, fluffy tail arched over its back',
    title: 'Eastern Gray Squirrel',
    note: 'She buries up to 10,000 acorns each fall and recovers about 40%. The other 6,000 become seedlings — the most active tree-planting force in the eastern hardwood forest.',
  },
]

const BIRD_INSECT_CARDS: NavCard[] = [
  {
    page: 'eastern-bluebird',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg',
    alt: 'Eastern Bluebird pair — male with sky-blue back and rust chest, female nearby at a nest box',
    title: 'Eastern Bluebird',
    note: 'Nest box monitoring in the 1970s reversed a population collapse within two decades. A 1.5-inch entrance hole fits a bluebird and stops a starling.',
  },
  {
    page: 'american-kestrel',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/American_kestrel_%2844273%29.jpg/1280px-American_kestrel_%2844273%29.jpg',
    alt: 'American Kestrel perched upright — rust back, slate-blue head, scanning for prey',
    title: 'American Kestrel',
    note: 'Kestrels see vole urine trails in ultraviolet — they read a field by flying a slow grid, scanning for the glow of a fresh runway through the grass below.',
  },
  {
    page: 'fireflies',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Eastern_firefly_%28Photinus_pyralis%29%2C_June_2025%2C_Virginia.jpg/1280px-Eastern_firefly_%28Photinus_pyralis%29%2C_June_2025%2C_Virginia.jpg',
    alt: 'Eastern firefly (Photinus pyralis) on a leaf at dusk, lantern organ visible on its abdomen',
    title: 'Fireflies',
    note: 'The adult flashing in June was a larva hunting earthworms in your leaf litter last November. Grub pesticides reach the soil where larvae spend one to two years living.',
  },
  {
    page: 'luna-moth',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/d/d6/Actias_luna-male.jpg',
    alt: 'Luna Moth with pale green wings spread and long hindwing tails — an adult that emerges with no mouth',
    title: 'Luna Moth',
    note: 'The adult emerges with no functioning mouth parts. Every night it flies runs on fat stored as a caterpillar — enough for seven to ten days of searching before it dies.',
  },
]

const QUICKSTART_CARDS: NavCard[] = [
  {
    page: 'plant-milkweed',
    title: 'Milkweed: which species, where to plant',
    note: 'The right milkweed for your soil, sun, and hardiness zone — and the one type to avoid in the Midwest.',
  },
  {
    page: 'plants-bloom-calendar',
    title: 'Native wildflowers by season',
    note: 'Spring ephemerals through fall asters — which plants bloom when, and which native bees depend on them.',
  },
  {
    page: 'log-a-sighting',
    title: 'How to log a monarch sighting',
    note: 'iNaturalist in 60 seconds: photo, GPS, submit. Your observation goes directly into the research database.',
  },
]

// Seasonal right-now content — 2 items shown on the homepage.
type SeasonalItem = { label: string; detail: string }
type SeasonalContent = { header: string; items: [SeasonalItem, SeasonalItem] }

function getSeasonalContent(month: number): SeasonalContent {
  // Early spring: March (2), April (3)
  if (month >= 2 && month <= 3) {
    return {
      header: 'Spring migration: what to watch for right now',
      items: [
        {
          label: 'Milkweed is emerging.',
          detail:
            "Look for thick, gray-green leaves pushing up from bare ground. Don't mow over it. " +
            "Monarchs arrive when it's 6 inches tall. That window opens in most of the Midwest in the next 3–5 weeks.",
        },
        {
          label: 'Log any monarch you see on iNaturalist.',
          detail:
            'The spring migration has no organized reporting network. ' +
            'Your observation tells researchers which corridors the population is using this year. It takes 60 seconds.',
        },
      ],
    }
  }
  // Late spring: May (4) — breeding monarchs arriving in the Midwest
  if (month === 4) {
    return {
      header: 'Monarchs are arriving in the Midwest this week',
      items: [
        {
          label: "Don't mow the milkweed.",
          detail:
            'A female monarch finds milkweed by landing on leaves and testing them — ' +
            'she has chemoreceptors on her feet that detect the cardiac glycosides milkweed produces. ' +
            'She lays a single egg on the underside of each leaf. Cut the plant now and there is nothing left to test.',
        },
        {
          label: 'Log any monarch you see.',
          detail:
            'Spring sighting data is sparse compared to fall — fewer observers are watching in May. ' +
            'Your iNaturalist observation tells researchers which northbound corridors the population is actually using this year.',
        },
      ],
    }
  }
  // Summer: June (5), July (6), August (7)
  if (month >= 5 && month <= 7) {
    return {
      header: 'Breeding season: caterpillars are here now',
      items: [
        {
          label: 'Check the underside of milkweed leaves.',
          detail:
            'Monarch eggs are the size of a pinhead: pale yellow, ribbed, one per leaf. ' +
            'Look on the underside of leaves on milkweed 6 inches or taller.',
        },
        {
          label: 'Log what you see on iNaturalist.',
          detail:
            'Every caterpillar observation adds to the breeding-range data researchers use to track recovery. ' +
            'It takes 60 seconds.',
        },
      ],
    }
  }
  // Fall: September (8), October (9), November (10)
  if (month >= 8 && month <= 10) {
    return {
      header: 'Fall migration: the roost movement is beginning',
      items: [
        {
          label: 'Late-blooming nectar plants are critical.',
          detail:
            'Goldenrod, native asters, and ironweed keep blooming into October. ' +
            'Monarchs need nectar to build fat reserves for the 2,500-mile flight to Mexico.',
        },
        {
          label: 'Log every monarch you see.',
          detail:
            'Fall migration counts are sparse outside traditional corridors. ' +
            'Your sighting on iNaturalist helps researchers understand where corridors are shifting.',
        },
      ],
    }
  }
  // Winter: December (11), January (0), February (1)
  return {
    header: 'Winter: monarchs are in Mexico right now',
    items: [
      {
        label: 'Order milkweed for spring planting.',
        detail:
          'Native milkweed plugs sell out by mid-April. ' +
          'Order now from Prairie Moon Nursery, Midwest Wildflowers, or a local native plant nursery.',
      },
      {
        label: "Tell someone what you're planning.",
        detail:
          'Habitat is a corridor, not a single yard. ' +
          'A conversation in January turns into two milkweed patches by June.',
      },
    ],
  }
}

function NavCardButton({ card, onNavigate }: { card: NavCard; onNavigate: (page: Page) => void }) {
  return (
    <button
      className={`home-card${card.photo ? '' : ' home-card--text'}`}
      onClick={() => onNavigate(card.page)}
    >
      {card.photo && (
        <span className="home-card__photo">
          <img src={card.photo} alt={card.alt ?? ''} loading="lazy" width={640} height={420} />
        </span>
      )}
      <span className="home-card__body">
        <span className="home-card__title">{card.title}</span>
        <span className="home-card__note">{card.note}</span>
      </span>
    </button>
  )
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

    fetch(
      `https://api.inaturalist.org/v1/observations?taxon_id=${INAT_MONARCH_TAXON_ID}&place_id=${INAT_US_PLACE_ID}&d1=${monthStart}&per_page=1`,
    )
      .then(response => {
        if (!response.ok) throw new Error(`iNaturalist request failed: ${response.status}`)
        return response.json() as Promise<{ total_results?: number }>
      })
      .then(data => {
        if (!cancelled && typeof data.total_results === 'number') {
          setMonarchSightings(data.total_results)
          setHasLiveSightings(true)
        }
      })
      .catch(() => {
        // Keep the saved fallback count when the live request fails.
      })
    return () => {
      cancelled = true
    }
  }, [monthStart])

  return (
    <>
      {/* Hero — full-bleed overwintering colony photo */}
      <div
        className="home-hero"
        role="img"
        aria-label="Monarch butterflies massed on oyamel fir trees at the Angangueo overwintering colony, Mexico"
        style={{ backgroundImage: `url(${HERO_PHOTO_URL})` }}
      >
        <div className="home-hero__panel">
          <h1>One yard at a time</h1>
          <p>
            The monarch population has dropped 85% in 30 years. The corridors they fly are made of
            individual yards. Start here.
          </p>
        </div>
      </div>

      <div className="home-wrap">
        {/* Seasonal right-now content */}
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

        {/* Three-card action strip */}
        <section className="home-section" aria-labelledby="actions-heading">
          <h2 id="actions-heading">Three actions that move the needle</h2>
          <div className="card-grid">
            {ACTION_CARDS.map(card => (
              <NavCardButton key={card.title} card={card} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* Mammal neighbors */}
        <section className="home-section" aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Your yard already has neighbors</h2>
          <p className="home-section__intro">
            Four mammals active within a quarter-mile of most suburban homes — each one running on a
            biological clock your landscaping either supports or interrupts.
          </p>
          <div className="card-grid">
            {MAMMAL_CARDS.map(card => (
              <NavCardButton key={card.page} card={card} onNavigate={onNavigate} />
            ))}
          </div>
          <div className="home-section--center">
            <button className="hero__cta" onClick={() => onNavigate('species-gallery')}>
              Explore the species gallery →
            </button>
          </div>
        </section>

        {/* Birds and insects */}
        <section className="home-section" aria-labelledby="birds-insects-heading">
          <h2 id="birds-insects-heading">After dark and up in the canopy</h2>
          <p className="home-section__intro">
            A firefly larva spends two years hunting earthworms in your leaf litter before it spends
            three weeks flashing in the air above it. Four species active in your yard after dark or
            at tree height — two birds, two insects — each running on a mechanism most homeowners have
            never noticed.
          </p>
          <div className="card-grid">
            {BIRD_INSECT_CARDS.map(card => (
              <NavCardButton key={card.page} card={card} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* iNaturalist live Monarch count */}
        <div className="home-inat">
          <h2 style={{ marginTop: 0 }}>People are already logging Monarchs</h2>
          <p>
            <strong className="home-inat__count">
              {formatSightings(monarchSightings)} Monarch sightings
            </strong>{' '}
            have been logged on iNaturalist in the United States{' '}
            {hasLiveSightings ? 'this month' : 'in a recent month'}. Each sighting becomes open data
            that researchers can use to track the migration.
          </p>
          <p className="home-inat__meta">
            {hasLiveSightings
              ? `Live count · observations since ${monthName} 1, ${year}.`
              : 'Showing a recent monthly total — the live count is temporarily unavailable.'}
          </p>
          <a
            href={sightingsUrl}
            target="_blank"
            rel="noreferrer"
            className="hero__cta"
            style={{ display: 'inline-block' }}
          >
            See this month's sightings on iNaturalist →
          </a>
        </div>

        {/* Quick-start guide cards */}
        <section className="home-section" aria-labelledby="guide-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="guide-heading">Start with what you have</h2>
          <div className="card-grid">
            {QUICKSTART_CARDS.map(card => (
              <NavCardButton key={card.title} card={card} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* Attribution footer */}
        <section className="home-credits" aria-label="Photo attribution">
          <p>
            <strong>Photos:</strong>{' '}
            Hero — <a href="https://commons.wikimedia.org/wiki/File:Angangueo_monarchs.jpg" target="_blank" rel="noopener noreferrer">Bfpage</a>, CC BY 3.0;{' '}
            Milkweed card — <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg" target="_blank" rel="noopener noreferrer">Derek Ramsey</a>, CC BY-SA 2.5;{' '}
            Caterpillar card — <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noopener noreferrer">Derek Ramsey</a>, CC BY-SA 2.5;{' '}
            Goldenrod — <a href="https://commons.wikimedia.org/wiki/File:Monarch_on_Goldenrod_(5230034900).jpg" target="_blank" rel="noopener noreferrer">USFWS — Northeast Region</a>, public domain;{' '}
            Cottontail — <a href="https://commons.wikimedia.org/wiki/File:20250708_eastern_cottontail_front_yard_PD208193.jpg" target="_blank" rel="noopener noreferrer">Paul Danese</a>, CC BY-SA 4.0;{' '}
            Opossum — <a href="https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_188111999.jpg" target="_blank" rel="noopener noreferrer">Matthew Gerke</a>, CC BY 4.0;{' '}
            Skunk — <a href="https://commons.wikimedia.org/wiki/File:Striped_Skunk_(Mephitis_mephitis)_01.jpg" target="_blank" rel="noopener noreferrer">Ryan Hodnett</a>, CC BY-SA 4.0;{' '}
            Squirrel — <a href="https://commons.wikimedia.org/wiki/File:Grey_squirrel_(Sciurus_carolinensis)_01.jpg" target="_blank" rel="noopener noreferrer">Charles J. Sharp</a>, CC BY-SA 4.0;{' '}
            Bluebird pair — <a href="https://commons.wikimedia.org/wiki/File:Sialia_sialis_-Michigan,_USA_-pair-8c.jpg" target="_blank" rel="noopener noreferrer">Dave Menke / USFWS</a>, public domain;{' '}
            Kestrel — <a href="https://commons.wikimedia.org/wiki/File:American_kestrel_(44273).jpg" target="_blank" rel="noopener noreferrer">Rhododendrites</a>, CC BY-SA 4.0;{' '}
            Firefly — <a href="https://commons.wikimedia.org/wiki/File:Eastern_firefly_(Photinus_pyralis),_June_2025,_Virginia.jpg" target="_blank" rel="noopener noreferrer">Celari817</a>, CC BY 4.0;{' '}
            Luna Moth — <a href="https://commons.wikimedia.org/wiki/File:Actias_luna-male.jpg" target="_blank" rel="noopener noreferrer">Westonhighschool</a>, CC BY-SA 3.0.
          </p>
          <p>
            Monarch count sourced from iNaturalist observations —{' '}
            <a href="https://www.inaturalist.org/" target="_blank" rel="noopener noreferrer">iNaturalist.org</a>.
          </p>
        </section>
      </div>
    </>
  )
}
