import { useState, useEffect, useMemo } from 'react'
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
  trackMigration: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Monarch_butterfly_on_common_milkweed_%2848372506736%29.jpg/960px-Monarch_butterfly_on_common_milkweed_%2848372506736%29.jpg',
  nativeWildflowers: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Solidago_canadensis_20050815_04.jpg/960px-Solidago_canadensis_20050815_04.jpg',
}

const HERO_PHOTO_URL = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Angangueo_monarchs.jpg'

const INAT_MONARCH_TAXON_ID = 48662
const INAT_US_PLACE_ID = 1
const FALLBACK_MONARCH_SIGHTINGS = 1466

function monthStartIso(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1)).toISOString().slice(0, 10)
}

function formatSightings(count: number): string {
  return new Intl.NumberFormat('en-US').format(count)
}

// Neighbor species preview photos — iNaturalist open data + Wikimedia Commons
const NEIGHBOR_PHOTOS = {
  cottontail: 'https://inaturalist-open-data.s3.amazonaws.com/photos/91229197/large.jpg',
  opossum: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Opossum_2.jpg/960px-Opossum_2.jpg',
  skunk: 'https://inaturalist-open-data.s3.amazonaws.com/photos/186427674/large.jpeg',
  squirrel: 'https://inaturalist-open-data.s3.amazonaws.com/photos/176023576/large.jpeg',
}

// Seasonal right-now content — 2 items max on homepage (bta-004, bta-005)
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
  const monthStart = useMemo(() => monthStartIso(now), [now])
  const sightingsUrl = useMemo(
    () => `https://www.inaturalist.org/observations?month=${month + 1}&place_id=${INAT_US_PLACE_ID}&taxon_id=${INAT_MONARCH_TAXON_ID}&d1=${monthStart}`,
    [month, monthStart],
  )
  const [monarchSightings, setMonarchSightings] = useState(FALLBACK_MONARCH_SIGHTINGS)
  const [hasLiveSightings, setHasLiveSightings] = useState(false)

  const seasonal = useMemo(() => getSeasonalContent(month), [month])

  useEffect(() => {
    let cancelled = false

    fetch(`https://api.inaturalist.org/v1/observations?taxon_id=${INAT_MONARCH_TAXON_ID}&place_id=${INAT_US_PLACE_ID}&d1=${monthStart}&per_page=1`)
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
        role="img"
        aria-label="Monarch butterflies massed on oyamel fir trees at Angangueo overwintering colony, Mexico"
        style={{
          height: 'min(60vh, 520px)',
          background: `url(${HERO_PHOTO_URL}) center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '2rem',
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.55)',
            borderRadius: '6px',
            padding: '1.25rem 1.5rem',
            maxWidth: '540px',
          }}
        >
          <h1 style={{ margin: '0 0 0.5rem', color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            One yard at a time
          </h1>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem' }}>
            The monarch population has dropped 85% in 30 years. The corridors they fly
            are made of individual yards. Start here.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.25rem' }}>

        {/* Seasonal right-now content (bta-004, bta-005) */}
        <section aria-labelledby="seasonal-heading" style={{ marginBottom: '2.5rem' }}>
          <h2 id="seasonal-heading">{seasonal.header}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {seasonal.items.map(item => (
              <div key={item.label} className="action-panel" style={{ padding: '1.1rem 1.25rem' }}>
                <p style={{ margin: '0 0 0.4rem', fontWeight: '600' }}>{item.label}</p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Three-card action strip */}
        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">Three actions that move the needle</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>

            <div className="fact-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('plant-milkweed')}>
              <CardPhoto
                src={CARD_PHOTOS.plantMilkweed}
                alt="Monarch butterfly on butterfly weed (Asclepias tuberosa) in bloom — the sole host plant for monarch caterpillars"
              />
              <h3>Plant milkweed</h3>
              <p>Monarchs lay eggs on milkweed and no other plant. One patch in your yard becomes a waystation on a 3,000-mile corridor.</p>
            </div>

            <div className="fact-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('log-sighting')}>
              <CardPhoto
                src={CARD_PHOTOS.logSighting}
                alt="Monarch caterpillar on milkweed — green-striped larva feeding on a leaf"
              />
              <h3>Log a sighting</h3>
              <p>Researchers track population corridors using iNaturalist observations. A photo and a GPS pin take 60 seconds.</p>
            </div>

            <div className="fact-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('native-wildflowers')}>
              <CardPhoto
                src={CARD_PHOTOS.nativeWildflowers}
                alt="Goldenrod (Solidago canadensis) in bloom — tall yellow flower spikes in a sunny meadow"
              />
              <h3>Plant native wildflowers</h3>
              <p>Native asters, goldenrod, and coneflowers feed monarchs and 400+ other native bee species. Non-native flowers often don't.</p>
            </div>

          </div>
        </section>

        {/* Mammal neighbors section — preview cards routing to species pages */}
        <section aria-labelledby="neighbors-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="neighbors-heading">Your yard already has neighbors</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Four mammals active within a quarter-mile of most suburban homes — each one running on a biological clock your landscaping either supports or interrupts.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('eastern-cottontail')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.cottontail} alt="Eastern Cottontail rabbit crouching in leaf litter, ears alert, brown-gray fur blending into dry leaves" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Eastern Cottontail</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>She nests in a shallow depression in your lawn and leaves the kits alone all day — absence is how she keeps the nest invisible to predators.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('virginia-opossum')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.opossum} alt="Virginia Opossum on a log at night, white-gray fur, pink nose, prehensile tail visible against bark" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Virginia Opossum</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>A single opossum eats 4,000 ticks per week. She grooms them off her fur and kills them before they can complete a feeding.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('striped-skunk')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.skunk} alt="Striped Skunk foraging in grass at dusk, bold black and white pattern visible from behind" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
<h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Striped Skunk</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>She stamps her front feet as a warning before she sprays — the pattern gives you a second to back off. She uses the spray fewer than five times a year because it takes ten days to replenish.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('eastern-gray-squirrel')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.squirrel} alt="Eastern Gray Squirrel on a branch, fluffy gray tail arched over its back, alert eyes watching the camera" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Eastern Gray Squirrel</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>She buries up to 10,000 acorns each fall and recovers about 40% of them. The other 6,000 become seedlings. She is the most active tree-planting force in the eastern hardwood forest.</p>
              </div>
            </div>

          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('species-gallery')}>
              Explore the species gallery →
            </button>
          </div>
        </section>

        {/* BIRDS AND INSECTS — preview cards; routes homepage traffic to species pages */}
        <section aria-labelledby="birds-insects-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="birds-insects-heading">A firefly larva spends two years hunting earthworms in your leaf litter before it spends three weeks flashing in the air above it.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Four species active in your yard after dark or at tree height — two birds, two insects — each running on a mechanism most homeowners have never noticed.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('eastern-bluebird')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg" alt="Eastern Bluebird pair — male with sky-blue back and rust chest, female nearby at a nest box" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Eastern Bluebird</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Nest box monitoring programs in the 1970s reversed a population collapse within two decades. A 1.5-inch entrance hole fits a bluebird and stops a starling.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('american-kestrel')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Falco-sparverius-001.jpg/960px-Falco-sparverius-001.jpg" alt="Male American Kestrel perched upright — rust back, slate-blue head, scanning for prey below" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>American Kestrel</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Kestrels see vole urine trails in ultraviolet — they read a field by flying a slow grid, scanning for the glow of a fresh runway through the grass below.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('fireflies')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Photuris_lucicrescens.jpg" alt="Firefly resting on a leaf at dusk, bioluminescent lantern organ visible on abdomen" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Fireflies</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>The adult flashing in June was a larva hunting earthworms in your leaf litter last November. Grub pesticides reach the soil where larvae spend one to two years living.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('luna-moth')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Actias_luna-male.jpg" alt="Luna Moth with pale green wings spread and long hindwing tails — an adult that emerges with no mouth" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Luna Moth</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>The adult emerges with no functioning mouth parts. Every night it flies runs on fat stored as a caterpillar — enough for seven to ten days of searching before it dies.</p>
              </div>
            </div>

          </div>
        </section>

                                {/* iNaturalist Monarch count widget — start */}
        <div
          className="action-panel"
          style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 251, 235, 0.95) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.24)',
          }}
        >
          <h2 style={{ marginTop: 0 }}>People are already logging Monarchs</h2>
          <p>
            <strong style={{ color: 'var(--monarch-orange)' }}>353 Monarch sightings</strong>{' '}
            have been logged on iNaturalist in the United States this month.
            Each sighting becomes open data that researchers can use to track the migration.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1rem' }}>
            Updated June 4, 2026 · current count covers observations since 2026-06-01.
          </p>
          <a
            href="https://www.inaturalist.org/observations?month=6&place_id=1&taxon_id=48662&d1=2026-06-01"
            target="_blank"
            rel="noreferrer"
            className="hero__cta"
            style={{ display: 'inline-block' }}
          >
            See this month's sightings on iNaturalist →
          </a>
        </div>
        {/* iNaturalist Monarch count widget — end */}

        {/* Quick-start guide cards */}
        <section aria-labelledby="guide-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="guide-heading">Start with what you have</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>

            <div className="fact-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('plant-milkweed')}>
              <h3>Milkweed: which species, where to plant</h3>
              <p>The right milkweed for your soil, sun, and hardiness zone — and the one type to avoid in the Midwest.</p>
            </div>

            <div className="fact-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('native-wildflowers')}>
              <h3>Native wildflowers by season</h3>
              <p>Spring ephemerals through fall asters — which plants bloom when, and which 400 native bee species depend on them.</p>
            </div>

            <div className="fact-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('log-sighting')}>
              <h3>How to log a monarch sighting</h3>
              <p>iNaturalist in 60 seconds: photo, GPS, submit. Your observation goes directly into the research database.</p>
            </div>

          </div>
        </section>

        {/* Attribution footer */}
        <section aria-label="Photo attribution" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            <strong>Photos:</strong>{' '}
            Hero — <a href="https://commons.wikimedia.org/wiki/File:Angangueo_monarchs.jpg" target="_blank" rel="noopener noreferrer">Bfpage</a>, CC BY 3.0;{' '}
            Milkweed card — <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg" target="_blank" rel="noopener noreferrer">Derek Ramsey</a>, CC BY-SA 2.5;{' '}
            Caterpillar card — <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noopener noreferrer">Derek Ramsey</a>, CC BY-SA 2.5;{' '}
            Monarch on milkweed — <a href="https://commons.wikimedia.org/wiki/File:Monarch_butterfly_on_common_milkweed_(48372506736).jpg" target="_blank" rel="noopener noreferrer">USFWS Midwest Region</a>, CC BY 2.0;{' '}
            Goldenrod — <a href="https://commons.wikimedia.org/wiki/File:Solidago_canadensis_20050815_04.jpg" target="_blank" rel="noopener noreferrer">Fir0002</a>, GNU FDL;{' '}
            Cottontail — iNaturalist open data, CC BY-NC 4.0;{' '}
            Opossum — Wikimedia Commons, public domain;{' '}
            Skunk — iNaturalist open data, CC BY-NC 4.0;{' '}
            Squirrel — iNaturalist open data, CC BY-NC 4.0;{' '}
            Bluebird pair — <a href="https://commons.wikimedia.org/wiki/File:Sialia_sialis_-Michigan,_USA_-pair-8c.jpg" target="_blank" rel="noopener noreferrer">Dave Menke / USFWS</a>, public domain;{' '}
            Kestrel — <a href="https://commons.wikimedia.org/wiki/File:Falco-sparverius-001.jpg" target="_blank" rel="noopener noreferrer">Mdf</a>, CC BY-SA 3.0;{' '}
            Firefly — <a href="https://commons.wikimedia.org/wiki/File:Photuris_lucicrescens.jpg" target="_blank" rel="noopener noreferrer">Jonnymccullagh</a>, CC BY-SA 3.0;{' '}
            Luna Moth — <a href="https://commons.wikimedia.org/wiki/File:Actias_luna-male.jpg" target="_blank" rel="noopener noreferrer">Westonhighschool</a>, CC BY-SA 3.0.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '0.5rem' }}>
            Monarch count sourced from iNaturalist research-grade observations —{' '}
            <a href="https://www.inaturalist.org/" target="_blank" rel="noopener noreferrer">iNaturalist.org</a>.{' '}
            Overwintering colony photo: <a href="https://commons.wikimedia.org/wiki/File:Angangueo_monarchs.jpg" target="_blank" rel="noopener noreferrer">Angangueo monarchs</a> (Bfpage, CC BY 3.0).
          </p>
        </section>

      </div>
    </>
  )
}
