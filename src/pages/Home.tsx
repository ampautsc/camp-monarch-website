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
  reducePesticides: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Summit_Packet_Granules.jpg/480px-Summit_Packet_Granules.jpg',
  leaveLeaves: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fall_leaves_2021_6.jpg/480px-Fall_leaves_2021_6.jpg',
  addWater: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Birdbath016.jpg/480px-Birdbath016.jpg',
  monarch: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Monarch_Butterfly_Danaus_plexippus_Migrating 2.jpg/480px-Monarch_Butterfly_Danaus_plexippus_Migrating 2.jpg',
  firefly: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Firefly_Lampyris_noctiluca_%28Robert_Eisele%29.jpg/480px-Firefly_Lampyris_noctiluca_%28Robert_Eisele%29.jpg',
  boxTurtle: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_%28cropped%29.jpg',
}

// Seasonal action content — indexed by month (0=Jan … 11=Dec)
const SEASONAL_CONTENT: { header: string; items: { label: string; detail: string }[] }[] = [
  // January (0) — winter
  {
    header: 'January: plan your yard now so it’s ready when monarchs return.',
    items: [
      {
        label: 'Plan your spring milkweed planting',
        detail: 'Order native milkweed seeds or plants now for early spring planting.',
      },
      {
        label: 'Leave leaf litter in place',
        detail: 'Firefly larvae overwinter in the leaf litter. Don’t chip or remove it.',
      },
      {
        label: 'Reduce or eliminate pesticides',
        detail:
          'Insecticides kill monarchs directly and eliminate the insect food sources other species need.',
      },
    ],
  },
  // February (1) — late winter
  {
    header: 'February: prepare your yard now so it’s ready when monarchs return.',
    items: [
      {
        label: 'Order native milkweed',
        detail: 'Native species like butterfly weed (Asclepias tuberosa) are available online now.',
      },
      {
        label: 'Leave leaf litter in place',
        detail: 'Firefly larvae overwinter in the leaf litter. Don’t chip or remove it.',
      },
      {
        label: 'Skip the pre-emergent herbicides',
        detail: 'Pre-emergents applied now will prevent your milkweed from germinating in spring.',
      },
    ],
  },
  // Early spring: March (2), April (3)
  {
    header: 'March: help monarchs find food and lay eggs as they move north.',
    items: [
      {
        label: 'Plant or locate milkweed',
        detail:
          'Milkweed is the only plant monarchs will lay eggs on. Look for native species at a local nursery.',
      },
      {
        label: 'Log any monarch you see on iNaturalist.',
        detail:
          'Spring sightings help researchers track which corridors the migration is using each year.',
      },
      {
        label: 'Skip the pesticides',
        detail:
          'Your iNaturalist observation tells researchers which northbound corridors the population is actually using this year.',
      },
    ],
  },
  // April (3)
  {
    header: 'April: help monarchs find food and lay eggs as they move north.',
    items: [
      {
        label: 'Plant or locate milkweed',
        detail:
          'Milkweed is the only plant monarchs will lay eggs on. Look for native species at a local nursery.',
      },
      {
        label: 'Log any monarch you see on iNaturalist.',
        detail:
          'Spring sightings help researchers track which corridors the migration is using each year.',
      },
      {
        label: 'Skip the pesticides',
        detail: 'Insecticides kill monarchs directly and eliminate insect food sources birds need.',
      },
    ],
  },
  // Late spring: May (4) — breeding monarchs arriving in the Midwest
  {
    header: 'May: breeding monarchs are arriving in the Midwest. Make your yard count.',
    items: [
      {
        label: 'Plant milkweed now',
        detail: 'May is when breeding monarchs arrive. Native milkweed planted now will support egg-laying this season.',
      },
      {
        label: 'Add a shallow water source',
        detail: 'A birdbath or dripping hose supports monarchs, bees, and song birds during dry stretches.',
      },
      {
        label: 'Log what you see on iNaturalist.',
        detail:
          'Your sighting on iNaturalist helps researchers understand where corridors are shifting.',
      },
    ],
  },
  // June (5) — peak breeding
  {
    header: 'June: peak breeding season. Every milkweed plant in your yard matters.',
    items: [
      {
        label: 'Leave leaf litter in place',
        detail: 'Fireflies, salamanders, and box turtles all depend on dead leaves for larval habitat.',
      },
      {
        label: 'Add a shallow water source',
        detail: 'A birdbath or dripping hose supports butterflies, bees, and song birds during dry stretches.',
      },
      {
        label: 'Log what you see on iNaturalist.',
        detail:
          'Summer is peak monarch breeding season. Every sighting helps researchers understand where populations are concentrating.',
      },
    ],
  },
  // July (6) — midsummer
  {
    header: 'July: build the breeding habitat that sustains multiple generations.',
    items: [
      {
        label: 'Leave leaf litter in place',
        detail: 'Fireflies, salamanders, and box turtles all depend on dead leaves for larval habitat.',
      },
      {
        label: 'Add a shallow water source',
        detail: 'A birdbath or dripping hose supports butterflies, bees, and song birds during dry stretches.',
      },
      {
        label: 'Log what you see on iNaturalist.',
        detail:
          'Summer is peak monarch breeding season. Every sighting helps researchers understand where populations are concentrating.',
      },
    ],
  },
  // August (7) — late summer / early migration
  {
    header: 'August: the southbound migration is starting. Help monarchs fuel up.',
    items: [
      {
        label: 'Plant late-blooming native flowers',
        detail: 'Goldenrod, asters, and ironweed provide nectar for fall migrants fueling up for the journey south.',
      },
      {
        label: 'Skip the pesticides',
        detail: 'Fall migrants need every nectar source they can find. Insecticides eliminate both insects and their food.',
      },
      {
        label: 'Log what you see on iNaturalist.',
        detail: 'Fall migration sightings help researchers map which corridors the population is using this year.',
      },
    ],
  },
  // September (8) — peak fall migration
  {
    header: 'September: peak fall migration. Help monarchs fuel up for Mexico.',
    items: [
      {
        label: 'Plant late-blooming native flowers',
        detail: 'Goldenrod, asters, and ironweed provide nectar for fall migrants fueling up for the journey south.',
      },
      {
        label: 'Skip the pesticides',
        detail: 'Fall migrants need every nectar source they can find. Insecticides eliminate both insects and their food.',
      },
      {
        label: 'Log what you see on iNaturalist.',
        detail: 'Fall migration sightings help researchers map which corridors the population is using this year.',
      },
    ],
  },
  // October (9) — late migration
  {
    header: 'October: the last migrants are moving south. Make your yard a rest stop.',
    items: [
      {
        label: 'Plant late-blooming native flowers',
        detail: 'Late asters and goldenrod still blooming in October provide critical fuel for the last migrants.',
      },
      {
        label: 'Leave leaf litter in place',
        detail: 'Firefly larvae overwinter in the leaf litter. Don’t chip or remove it.',
      },
      {
        label: 'Log what you see on iNaturalist.',
        detail: 'Late October sightings tell researchers where the trailing edge of the migration is each year.',
      },
    ],
  },
  // November (10) — early winter
  {
    header: 'November: prepare your yard now so it’s ready when monarchs return.',
    items: [
      {
        label: 'Leave leaf litter in place',
        detail: 'Firefly larvae overwinter in the leaf litter. Don’t chip or remove it.',
      },
      {
        label: 'Plan your spring milkweed planting',
        detail: 'Order native milkweed seeds or plants now for early spring planting.',
      },
      {
        label: 'Reduce or eliminate pesticides',
        detail:
          'Insecticides kill monarchs directly and eliminate the insect food sources other species need.',
      },
    ],
  },
  // December (11) — winter
  {
    header: 'December: prepare your yard now so it’s ready when monarchs return.',
    items: [
      {
        label: 'Plan your spring milkweed planting',
        detail: 'Order native milkweed seeds or plants now for early spring planting.',
      },
      {
        label: 'Leave leaf litter in place',
        detail: 'Firefly larvae overwinter in the leaf litter. Don’t chip or remove it.',
      },
      {
        label: 'Reduce or eliminate pesticides',
        detail:
          'Insecticides kill monarchs directly and eliminate the insect food sources other species need.',
      },
    ],
  },
]

interface CardPhotoProps {
  src: string
  alt: string
}

function CardPhoto({ src, alt }: CardPhotoProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        margin: '0 0 0.75rem -1.25rem',
        overflow: 'hidden',
        background: '#eee',
      }}
    >
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={{
            width: 'calc(100% + 1.25rem)',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: status === 'loaded' ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </div>
  )
}

export default function Home({ onNavigate }: HomeProps) {
  const [monarchSightings, setMonarchSightings] = useState<number | null>(null)
  const [hasLiveSightings, setHasLiveSightings] = useState(false)

  const now = useMemo(() => new Date(), [])
  const month = now.getMonth() // 0-11
  const year = now.getFullYear()
  const monthName = now.toLocaleString('en-US', { month: 'long' })

  const seasonal = SEASONAL_CONTENT[month]

  const sightingsUrl = `https://www.inaturalist.org/observations?taxon_id=48662&place_id=1&month=${month + 1}&year=${year}`

  useEffect(() => {
    const CACHE_KEY = `monarch-sightings-${year}-${month + 1}`

    const cached = sessionStorage.getItem(CACHE_KEY)
    if (cached !== null) {
      setMonarchSightings(Number(cached))
      return
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    fetch(
      `https://api.inaturalist.org/v1/observations?taxon_id=48662&place_id=1&month=${month + 1}&year=${year}&per_page=1`,
      { signal: controller.signal }
    )
      .then((response) => {
        if (!response.ok) throw new Error(`iNaturalist request failed: ${response.status}`)
        return response.json()
      })
      .then((data) => {
        clearTimeout(timeoutId)
        const total = data?.total_results ?? 0
        setMonarchSightings(total)
        setHasLiveSightings(true)
        sessionStorage.setItem(CACHE_KEY, total.toString())
      })
      .catch(() => {
        clearTimeout(timeoutId)
      })
  }, [month, year])

  function formatSightings(n: number | null): string {
    if (n === null) return 'Thousands of'
    return n.toLocaleString()
  }

  return (
    <main className="home">
      {/* HERO --- anchor */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">Camp Monarch</p>
          <h1 className="hero__title">Monarchs are disappearing. You can help.</h1>
        </div>
      </section>

      {/* THE BURN --- threat. Answers "why should I care?" */}
      <section aria-labelledby="burn-heading" style={{ marginTop: '2.5rem' }}>
        <h2 id="burn-heading">Monarch populations have declined by more than 80% since the 1980s. [[1]]</h2>
        <div className="fact-row">

          <div className="fact-card">
            <div className="fact-card__number">&darr; 80%</div>
            <p>Monarch population decline since the 1980s. [1]</p>
          </div>

          <div className="fact-card">
            <div className="fact-card__number">372<span className="fact-card__unit">M acres</span></div>
            <p>Of milkweed habitat lost in the Midwest alone. [3]</p>
          </div>

          <div className="fact-card">
            <div className="fact-card__number">2.2</div>
            <p>Acres of forest at the Mexican overwintering sites in 2024. Peak: 18.16 acres in 1996. [2]</p>
          </div>

        </div>
      </section>

      {/* THE LEVER --- causal mechanism. Answers "why is this happening?" */}
      <section aria-labelledby="lever-heading" style={{ marginTop: '2.5rem' }}>
        <h2 id="lever-heading">A monarch cannot lay an egg without milkweed. The milkweed is gone because the landscape changed.</h2>
        <div className="fact-row">

          <div className="fact-card" style={{ padding: '1.25rem', maxWidth: '600px' }}>
            <p>Agricultural herbicides have eliminated milkweed from farmfields across the Midwest. Where milkweed once grew along every field edge, there is now only bare soil or pavement. [3]</p>
            <p>The monarch migration runs through millions of private yards. If even a small fraction of those yards restore some habitat, the cumulative effect is real.</p>
            <button
              className="hero__cta"
              style={{
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--text-primary)',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
              onClick={() => onNavigate('milkweed')}
            >
              Why it matters →
            </button>
          </div>
        </div>
      </section>

        {/* RIGHT NOW --- what to do this week. Answers "what do I do this month?" */}
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

        {/* THE ASK --- one primary action, specifically named. Answers "how do I start?" */}
        <section aria-labelledby="help-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="help-heading">Monarchs breed in the Midwest, migrate through your county, and overwinter in Mexico — the corridor runs through your yard whether you notice it or not.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.plantMilkweed}
                alt="Monarch butterfly on butterfly weed (Asclepias tuberosa)"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Plant milkweed</h3>
              <p>Milkweed is the only plant monarchs will lay eggs on. One native plant in your yard gives the migration a foothold.</p>
              <button className="hero__cta" onClick={() => onNavigate('milkweed')}>Get started —</button>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.reducePesticides}
                alt="Pesticide granules"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Reduce pesticides</h3>
              <p>Insecticides kill monarchs directly. Eliminating them from your yard also preserves the insect food sources that birds and other wildlife need.</p>
              <button className="hero__cta" onClick={() => onNavigate('pesticides')}>Get started —</button>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.leaveLeaves}
                alt="Fall leaves on the ground"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Leave the leaves</h3>
              <p>Firefly larvae overwinter in leaf litter. Removing it kills the next generation before it hatches.</p>
              <button className="hero__cta" onClick={() => onNavigate('leave-the-leaves')}>Get started —</button>
            </div>

            <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.addWater}
                alt="Birdbath with water"
              />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Add water</h3>
              <p>A shallow birdbath or dripping hose supports monarchs, birds, and pollinators during dry stretches.</p>
              <button className="hero__cta" onClick={() => onNavigate('water')}>Get started —</button>
            </div>

          </div>
        </section>

        <section aria-labelledby="neighbors-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="neighbors-heading">The firefly that lights up your yard each June spent most of its life living in your leaf litter.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>

            <div className="fact-card" style={{ padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.monarch}
                alt="Monarch butterfly migrating"
              />
              <button className="hero__cta" onClick={() => onNavigate('species/monarch-butterfly')} style={{ background: 'transparent', color: 'var(--text-primary)', border: 'none', padding: 0, fontWeight: 'normal', textAlign: 'left', fontSize: 'inherit', marginTop: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Monarch butterfly →</h3>
              </button>
              <p>Once a common sight on the migration. Now one of the most threatened animals in North America.</p>
            </div>

            <div className="fact-card" style={{ padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.firefly}
                alt="Firefly glowing in the dark"
              />
              <button className="hero__cta" onClick={() => onNavigate('species/eastern-firefly')} style={{ background: 'transparent', color: 'var(--text-primary)', border: 'none', padding: 0, fontWeight: 'normal', textAlign: 'left', fontSize: 'inherit', marginTop: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Eastern firefly →</h3>
              </button>
              <p>Larvae overwinter in the leaf litter for up to two years. Remove the leaves and you kill the next generation.</p>
            </div>

            <div className="fact-card" style={{ padding: '1.25rem', paddingTop: 0, overflow: 'hidden' }}>
              <CardPhoto
                src={CARD_PHOTOS.boxTurtle}
                alt="Eastern box turtle"
              />
              <button className="hero__cta" onClick={() => onNavigate('species/box-turtle')} style={{ background: 'transparent', color: 'var(--text-primary)', border: 'none', padding: 0, fontWeight: 'normal', textAlign: 'left', fontSize: 'inherit', marginTop: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Eastern box turtle →</h3>
              </button>
              <p>Moves through yards, woodland edges, and leaf litter --- all of which have shrid.</p>
            </div>

          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('species-gallery')}>
              Meet all 59 neighbors →
            </button>
          </div>
        </section>
                                        {/* iNaturalist Monarch count widget --- start */}
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
        {/* iNaturalist Monarch count widget --- end */}

        {/* Citation list */}
        <section className="cite-list" aria-label="Sources">
          <p>[1] Xerces Society. <a href="https://xerces.org/monarchs/eastern-monarch-conservation" target="_blank" rel="noreferrer">Eastern Monarch Conservation.</a> Accessed {monthName} {year}.</p>
          <p>[2] Xerces Society / WWF-Mexico. <a href="https://xerces.org/press/eastern-monarch-butterfly-numbers-increase-but-remain-below-historic-levels" target="_blank" rel="noreferrer">Eastern Monarch Butterfly Numbers Increase, but Remain Below Historic Levels.</a> March 17, 2026.</p>
          <p>[3] Pleasants JM, Oberhauser KS. Milkweed loss in agricultural fields because of herbicide use: effect on the monarch butterfly population. <a href="https://doi.org/10.1111/j.1752-4598.2012.00196.x" target="_blank" rel="noreferrer">Insect Conservation and Diversity 6(2):135–144.</a> 2013.</p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Photos: Wikimedia Commons.
            <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg" target="_blank" rel="noreferrer">Butterfly weed</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Summit_Packet_Granules.jpg" target="_blank" rel="noreferrer">Pesticide granules</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Fall_leaves_2021_6.jpg" target="_blank" rel="noreferrer">Fall leaves</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Birdbath016.jpg" target="_blank" rel="noreferrer">Birdbath</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Migrating_2.jpg" target="_blank" rel="noreferrer">Monarch migrating</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Firefly_Lampyris_noctiluca_(Robert_Eisele).jpg" target="_blank" rel="noreferrer">Firefly</a>.
            <a href="https://commons.wikimedia.org/wiki/File:Eastern_Box_Turtle,_North_Carolina,_US_imported_from_iNaturalist_photo_71168521_(cropped).jpg" target="_blank" rel="noreferrer">Box turtle</a>.
          </p>
        </section>
    </main>
  )
}
