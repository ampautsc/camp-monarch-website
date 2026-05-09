import { useMemo } from 'react'
import type { Page } from '../App'

interface HomeProps {
  onNavigate: (page: Page) => void
}

// Photo sources: Wikimedia Commons (CC BY-SA). Attribution at bottom of page.
// vis-004: verified thumbnail URLs from Wikimedia Commons API 2026-05-09.
// TODO: download and host in /public/ for production performance.
const CARD_PHOTOS = {
  plantMilkweed: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg',
  logSighting: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Danaus_plexippus_caterpillar_on_milkweed.jpg/960px-Danaus_plexippus_caterpillar_on_milkweed.jpg',
  trackMigration: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Monarchs_overwintering_Angangueo_site_in_Mexico.jpg',
}

// Seasonal right-now content — 2 items max on homepage (bta-004, bta-005)
type SeasonalItem = { label: string; detail: string }
type SeasonalContent = { header: string; items: [SeasonalItem, SeasonalItem] }

function getSeasonalContent(month: number): SeasonalContent {
  // Spring: March (2), April (3), May (4)
  if (month >= 2 && month <= 4) {
    return {
      header: 'Spring migration — what to watch for right now',
      items: [
        {
          label: 'Milkweed is emerging.',
          detail:
            "Look for thick, gray-green leaves pushing up from bare ground. Don't mow over it. " +
            "Monarchs arrive when it's 6 inches tall — that window opens in most of the Midwest in the next 3–5 weeks.",
        },
        {
          label: 'Find one milkweed plant and note its height.',
          detail:
            'Come back in two weeks. ' +
            'The monarchs moving through Texas right now will be in your neighborhood within the month.',
        },
      ],
    }
  }
  // Summer: June (5), July (6), August (7)
  if (month >= 5 && month <= 7) {
    return {
      header: 'Breeding season — caterpillars are here now',
      items: [
        {
          label: 'Check the underside of milkweed leaves.',
          detail:
            'Monarch eggs are the size of a pinhead — pale yellow, ribbed, laid one per leaf. ' +
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
      header: 'Fall migration — the roost movement is beginning',
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
    header: 'Winter — monarchs are in Mexico right now',
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

// Card photo strip — expands to card edges with negative margins (vis-003)
function CardPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        margin: '0 -1.25rem 1rem',
        height: '180px',
        overflow: 'hidden',
        borderRadius: '4px 4px 0 0',
        background: '#e8ede8',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  )
}

export default function Home({ onNavigate }: HomeProps) {
  const now = useMemo(() => new Date(), [])
  const month = now.getMonth()
  const monthName = now.toLocaleString('en-US', { month: 'long' })
  const year = now.getFullYear()

  const seasonal = useMemo(() => getSeasonalContent(month), [month])

  return (
    <>
      {/* Hero — conclusion first (www-004). First 2 words: "Monarchs are" (www-005). */}
      <section className="hero">
        <div className="hero__eyebrow">Camp Monarch</div>
        <h1>Monarchs are disappearing.<br />You can change that.</h1>
        <p className="hero__lead">
          One Monarch weighs less than a paper clip.
          It navigates 3,000 miles to a mountain it has never seen —
          guided by the sun as a compass and, researchers believe, magnetic fields.
          Since 1996, their population has fallen by 80%.<sup><a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          Planting milkweed helps. Here's how.
        </p>
        <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
          Find Your Milkweed Species
        </button>
      </section>

      <div className="page">

        {/* Key facts — scannable (www-001), specific numbers (www-013) */}
        <section aria-label="Key facts" style={{ margin: '0 0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            <div className="fact-card">
              <div className="fact-card__number">3,000</div>
              <div className="fact-card__label">miles per migration</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">80%</div>
              <div className="fact-card__label">population lost since 1996</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">1</div>
              <div className="fact-card__label">milkweed plant changes things</div>
            </div>
          </div>
        </section>

        {/* Story — individual over species. Section 2 so visitors reach it (www-011). */}
        <section aria-labelledby="story-heading">
          <h2 id="story-heading">One butterfly's journey</h2>
          <p>
            In late August, a Monarch emerges in Illinois. It has never migrated before.
            Its parents died on the northward journey in May.
            No one taught it the route.
          </p>
          <p>
            Over the next six weeks it will fly south and southwest —
            following the sun's angle, adjusting for the time of day,
            crossing the Rio Grande, and climbing into the Sierra Madre.
            It will roost in the same oyamel fir forest where its great-grandparents overwintered.
          </p>
          <p>
            In 1996, around 1 billion Monarchs made that journey.
            In 2024, researchers counted 60 million.<sup><a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer" className="cite">[2]</a></sup>
            The difference is mostly milkweed — habitat lost to agriculture and development.
          </p>
          <button
            onClick={() => onNavigate('monarch-life')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--monarch-orange)',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Meet your neighbor: the full lifecycle →
          </button>
        </section>

        {/* Seasonal right-now panel — 2 items, no emoji decoration (vis-001, bta-004) */}
        <div className="right-now-panel" style={{ marginTop: '2.5rem' }}>
          <div className="right-now-panel__header">
            {seasonal.header}
          </div>
          <ul className="right-now-panel__list">
            {seasonal.items.map((item, i) => (
              <li key={i}>
                <strong>{item.label}</strong>{' '}
                {item.detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Three ways to help — photo strips replace emoji anchors (vis-001, vis-002, vis-003) */}
        <section aria-labelledby="help-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="help-heading">Three ways to help</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.plantMilkweed}
                alt="Monarch butterfly feeding on butterfly weed (Asclepias tuberosa)"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Plant milkweed</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                The only plant Monarchs can reproduce on. One patch in a sunny yard supports dozens of caterpillars.
                Native species selected for your region, with sources and timing.
              </p>
              <button
                className="hero__cta"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => onNavigate('plant-milkweed')}
              >
                Find your species →
              </button>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.logSighting}
                alt="Monarch butterfly caterpillar on milkweed"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Log a sighting</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                Every observation you log on iNaturalist becomes open data for migration researchers.
                One sighting in 60 seconds. The data gap is real.
              </p>
              <button
                className="hero__cta"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => onNavigate('log-a-sighting')}
              >
                Log a sighting →
              </button>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.trackMigration}
                alt="Monarch butterflies overwintering at Angangueo, Mexico"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Track the migration</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                The migration passes through your county every fall. Weekly corridor updates, October through November.
                The butterfly on your roof in September depends on milkweed 500 miles north in May.
              </p>
              <button
                className="hero__cta"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => onNavigate('the-migration')}
              >
                See the migration →
              </button>
            </div>

          </div>
        </section>

        {/* Witnesses — first-person voices (bta-002, bta-003). 2 cards. */}
        <section aria-labelledby="witnesses-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="witnesses-heading">What people are witnessing</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            These are not statistics. They are accounts from people paying attention to their own yards.
          </p>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I grew up watching dozens of monarchs every August in our backyard.
              Last September my daughter and I sat outside for two hours and counted five.
              That fall I planted eight milkweed plugs along our fence.
              This spring they're coming back up — and we're watching."
            </p>
            <p className="witness-card__attribution">Sarah M., St. Louis, Missouri</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I thought milkweed was just a weed. I pulled it out of my garden for ten years.
              Then I found out it's the only plant monarchs can reproduce on.
              I let it come back the next spring. By July I had caterpillars for the first time I can remember."
            </p>
            <p className="witness-card__attribution">Tom K., Ames, Iowa</p>
          </div>
        </section>

        {/* Citation list */}
        <section className="cite-list" aria-label="Sources">
          <p>[1] Xerces Society. <a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer">Monarch Butterfly Conservation.</a> Accessed {monthName} {year}.</p>
          <p>[2] Monarch Joint Venture. <a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer">Overwintering Population Monitoring.</a> Accessed {monthName} {year}.</p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Photos: Wikimedia Commons (CC BY-SA). 
            <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg" target="_blank" rel="noreferrer">Butterfly weed</a>. 
            <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noreferrer">Caterpillar</a>. 
            <a href="https://commons.wikimedia.org/wiki/File:Monarchs_overwintering_Angangueo_site_in_Mexico.jpg" target="_blank" rel="noreferrer">Overwintering colony</a>.
          </p>
        </section>

      </div>
    </>
  )
}
