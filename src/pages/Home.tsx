import { useEffect, useMemo, useState } from 'react'
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

// Neighbor species preview photos — Wikimedia Commons
const NEIGHBOR_PHOTOS = {
  fireflies: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Photuris_lucicrescens.jpg',
  screechOwl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Screech_Owl.jpg',
  boxTurtle: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_%28cropped%29.jpg',
  chickadee: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg',
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
      {/* HOOK — wonder first, then stakes. No explanation yet. (arch-page-as-argument-001) */}
      <section className="hero" style={{ background: `linear-gradient(rgba(26,46,26,0.82), rgba(26,46,26,0.82)), url('${HERO_PHOTO_URL}') center/cover no-repeat` }}>
        <div className="hero__eyebrow">Camp Monarch</div>
        {/* LOCKED COPY — hero H1. Do not change without explicit Boss approval. */}
        <h1>Monarchs are disappearing.<br />You can help.</h1>
        <p className="hero__lead">
          In the 1990s, hundreds of millions of monarchs reached Mexico each fall.<sup><a href="https://xerces.org/monarchs/eastern-monarch-conservation" target="_blank" rel="noreferrer" className="cite">[1]</a></sup><br />
          Last winter, about 60 million did.<sup><a href="https://xerces.org/press/eastern-monarch-butterfly-numbers-increase-but-remain-below-historic-levels" target="_blank" rel="noreferrer" className="cite">[2]</a></sup>
        </p>
      </section>

      <div className="page">

        {/* THE LEVER — answers "can I do something?" One plant. Why it works. (arch-page-as-argument-001) */}
        <section aria-labelledby="lever-heading">
          <h2 id="lever-heading">Monarch caterpillars can only eat milkweed, and it has vanished from many fields and roadsides. You can plant it at home.</h2>
          <p>
            A century ago, milkweed grew throughout Midwest cornfields, roadsides, and meadows.
            Between 1999 and 2010, an estimated 850 million stems were lost to expanding agriculture and development.<sup><a href="https://doi.org/10.1111/j.1752-4598.2012.00196.x" target="_blank" rel="noreferrer" className="cite">[3]</a></sup>
            The monarchs followed.
          </p>
          <p>
            One patch in a sunny yard supports dozens of caterpillars through a summer.
            Dozens of milkweed species are native to different regions of the US.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('habitat-hero')}>
              Get free seeds for your yard →
            </button>
            <button
              onClick={() => onNavigate('why-monarchs')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--monarch-green)',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Why it matters →
            </button>
          </div>
        </section>

        {/* THE ASK — one primary action, specifically named. Answers "how do I start?" */}
        <section aria-labelledby="help-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="help-heading">Monarchs breed in the Midwest, migrate through your county, and overwinter in Mexico — the corridor runs through your yard whether you notice it or not.</h2>
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
                Each sighting goes directly to migration researchers tracking which corridors the population is still using. Takes 60 seconds — snap a photo and submit.
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
                Most people don't know the population has dropped 80%. Two yards with milkweed make a corridor. One yard with milkweed makes an island. A conversation with a neighbor turns an island into a corridor segment.
              </p>
              <button
                className="hero__cta"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => onNavigate('talking-points')}
              >
                Talking points →
              </button>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.nativeWildflowers}
                alt="Canada goldenrod in bloom — one of the most important fall nectar sources for migrating monarchs"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Plant perennial wildflowers</h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', flex: 1 }}>
                Monarchs need nectar throughout their migration, not just at one stop. Native perennials blooming from spring through fall keep the corridor open.
              </p>
              <button
                className="hero__cta"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => onNavigate('canada-goldenrod')}
              >
                Canada goldenrod — the fall fuel stop →
              </button>
            </div>

          </div>
        </section>
        {/* MEET YOUR NEIGHBORS — preview the species gallery; routes homepage traffic to 35 species pages */}
        <section aria-labelledby="neighbors-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="neighbors-heading">The firefly that lights up your yard each June spent most of its life living in your leaf litter.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            52 species share backyards, gardens, and suburban lots up and down the migration corridor.
            The four below are probably in yours.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('fireflies')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.fireflies} alt="Firefly perched on plant stem at dusk" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Fireflies</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>The larvae live in your leaf litter all winter. When you rake in fall, you're raking them away.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('eastern-screech-owl')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.screechOwl} alt="Eastern screech owl perched on a branch, cryptic bark pattern" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Eastern Screech Owl</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>There&apos;s probably one within a mile of your house right now. You&apos;ve almost certainly never seen it.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('box-turtles')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.boxTurtle} alt="Eastern box turtle with domed orange-patterned shell on leaf litter" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Box Turtles</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>A box turtle&apos;s home range is about 5 acres. She may have been crossing your yard her entire 40-year life.</p>
              </div>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('black-capped-chickadee')}>
              <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
                <img src={NEIGHBOR_PHOTOS.chickadee} alt="Black-capped chickadee perched on a branch showing black cap and white cheek" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.9rem 1rem 1rem', flex: 1 }}>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem' }}>Black-capped Chickadee</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Each winter night, she burns through 10% of her body fat just surviving until sunrise. Native berries are what gets her there.</p>
              </div>
            </div>

          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('species-gallery')}>
              Meet all 52 neighbors →
            </button>
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
                                        {/* iNaturalist Monarch count widget — start */}
        <div
          className="action-panel"
          style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 251, 235, 0.95) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.24)',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Each sighting logged on iNaturalist becomes open data for researchers tracking which migration corridors are still working.</h2>
          <p>
            <strong style={{ color: 'var(--monarch-orange)' }}>{formatSightings(monarchSightings)} Monarch sightings</strong>{' '}
            have been logged on iNaturalist in the United States this month.
            Each sighting becomes open data that researchers can use to track the migration.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1rem' }}>
            {hasLiveSightings
              ? `Live count for ${monthName} ${year}, refreshed when this page loads.`
              : `Showing the latest saved count for ${monthName} ${year}; refreshes when live data is available.`}
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
        {/* iNaturalist Monarch count widget — end */}

        {/* Citation list */}
        <section className="cite-list" aria-label="Sources">
          <p>[1] Xerces Society. <a href="https://xerces.org/monarchs/eastern-monarch-conservation" target="_blank" rel="noreferrer">Eastern Monarch Conservation.</a> Accessed {monthName} {year}.</p>
          <p>[2] Xerces Society / WWF-Mexico. <a href="https://xerces.org/press/eastern-monarch-butterfly-numbers-increase-but-remain-below-historic-levels" target="_blank" rel="noreferrer">Eastern Monarch Butterfly Numbers Increase, but Remain Below Historic Levels.</a> March 17, 2026.</p>
          <p>[3] Pleasants JM, Oberhauser KS. Milkweed loss in agricultural fields because of herbicide use: effect on the monarch butterfly population. <a href="https://doi.org/10.1111/j.1752-4598.2012.00196.x" target="_blank" rel="noreferrer">Insect Conservation and Diversity 6(2):135–144.</a> 2013.</p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Photos: Wikimedia Commons.
            <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg" target="_blank" rel="noreferrer">Butterfly weed</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noreferrer">Caterpillar</a>.
            Hero photo: <a href="https://commons.wikimedia.org/wiki/File:Angangueo_monarchs.jpg" target="_blank" rel="noreferrer">Angangueo monarchs</a> (Bfpage, CC BY 3.0).
          </p>
        </section>

      </div>
    </>
  )
}
