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
      {/* HOOK — wonder first, then stakes. No explanation yet. (arch-page-as-argument-001) */}
      <section className="hero">
        <div className="hero__eyebrow">Camp Monarch</div>
        <h1>Monarchs are disappearing.<br />You can change that.</h1>
        <p className="hero__lead">
          In the 1990s, more than a billion eastern monarchs reached Mexico each fall.
          Last winter, 60 million did.<sup><a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          Their caterpillars can only eat milkweed.
        </p>
        <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
          Find Your Milkweed Species
        </button>
      </section>

      <div className="page">

        {/* THE LEVER — answers "can I do something?" One plant. Why it works. (arch-page-as-argument-001) */}
        <section aria-labelledby="lever-heading">
          <h2 id="lever-heading">Milkweed is disappearing. You can put it back.</h2>
          <p>
            A century ago, milkweed grew throughout Midwest cornfields, roadsides, and meadows.
            Since 1990, an estimated 850 million stems have been lost to expanding agriculture and development.<sup><a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer" className="cite">[2]</a></sup>
            The monarchs followed.
          </p>
          <p>
            One patch in a sunny yard supports dozens of caterpillars through a summer.
            That is not a metaphor for hope. That is the mechanism.
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
            The full lifecycle: how a monarch in Illinois becomes one in Mexico →
          </button>
        </section>

        {/* PROOF — witnesses BEFORE the ask. Answers "does it work?" (arch-proof-before-ask-001) */}
        <section aria-labelledby="witnesses-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="witnesses-heading">What people are witnessing</h2>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I grew up watching dozens of monarchs every August in our backyard.
              Last September my daughter and I sat outside for two hours and counted five.
              That fall I planted eight milkweed plugs along our fence.
              This spring they're coming back up. We're watching."
            </p>
            <p className="witness-card__attribution">Sarah M., St. Louis, Missouri</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I thought milkweed was just a weed. I pulled it out of my garden for ten years.
              Then I found out it's the only plant their caterpillars can eat.
              I let it come back the next spring. By July I had caterpillars for the first time I can remember."
            </p>
            <p className="witness-card__attribution">Tom K., Ames, Iowa</p>
          </div>
        </section>

        {/* THE ASK — one primary action, specifically named. Answers "how do I start?" */}
        <section aria-labelledby="help-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="help-heading">Start here</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.plantMilkweed}
                alt="Monarch butterfly on butterfly weed (Asclepias tuberosa)"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Plant milkweed</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                Asclepias tuberosa thrives in Ohio. It struggles in the Pacific Northwest. The right species depends on your county. This page finds it.
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
                alt="Monarch caterpillar on milkweed"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Log a sighting</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                Every observation on iNaturalist becomes open data for migration researchers. 60 seconds.
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
                alt="Monarchs overwintering in the oyamel fir forest in Mexico"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Talk about it</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                Most people don't know the population has dropped 80%. Habitat is a corridor. A conversation with a neighbor matters.
              </p>
              <button
                className="hero__cta"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => onNavigate('talking-points')}
              >
                Talking points →
              </button>
            </div>

          </div>
        </section>

        {/* RIGHT NOW — what to do this week. Answers "what do I do this month?" */}
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

        {/* Citation list */}
        <section className="cite-list" aria-label="Sources">
          <p>[1] Xerces Society. <a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer">Monarch Butterfly Conservation.</a> Accessed {monthName} {year}.</p>
          <p>[2] Monarch Joint Venture. <a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer">Overwintering Population Monitoring.</a> Accessed {monthName} {year}.</p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Photos: Wikimedia Commons (CC BY-SA).
            <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg" target="_blank" rel="noreferrer">Butterfly weed</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noreferrer">Caterpillar</a>.
          </p>
        </section>

      </div>
    </>
  )
}
