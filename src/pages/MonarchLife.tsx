import type { Page } from '../App'

interface MonarchLifeProps {
  onNavigate: (page: Page) => void
}

export default function MonarchLife({ onNavigate }: MonarchLifeProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>The monarch butterfly</h1>
        <p className="hero__lead">
          It weighs less than a paper clip and navigates 3,000 miles to a mountain
          it has never seen, guided by the sun and, researchers believe, magnetic fields.
          No individual completes the round trip. The migration runs on inherited memory,
          carried forward by generations that each live six weeks.
        </p>
      </section>

      <figure className="species-hero-photo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Monarch_butterfly_US_migration.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Monarch Butterfly nectaring on native milkweed flower, showing vivid orange and black wing pattern — a species whose population has dropped 85%"
          loading="lazy"
        />
        <figcaption>
          Photo: MonarchWanderungKlein.gif: Harald Süpfle derivative work: B kimmel ·{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Monarch_butterfly_US_migration.png" target="_blank" rel="noopener noreferrer">
            CC BY-SA 3.0
          </a>{' '}
          via Wikimedia Commons
        </figcaption>
      </figure>

      <div className="page">
        <section aria-labelledby="watch-heading">
          <h2 id="watch-heading">What to look for in your yard</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', margin: '1rem 0' }}>
            <div className="callout callout--green" style={{ margin: 0 }}>
              <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Eggs (May-Aug)</h3>
              <p style={{ marginBottom: 0 }}>
                Pale yellow, ribbed, the size of a pin head. One per leaf, on the underside of milkweed.
                Check leaves that are 6 inches or taller. The female lays 300-500 over her adult life,
                each one alone.
              </p>
            </div>
            <div className="callout callout--orange" style={{ margin: 0 }}>
              <h3 style={{ marginTop: 0 }}>Caterpillars (Jun-Sep)</h3>
              <p style={{ marginBottom: 0 }}>
                Bold yellow, black, and white bands. Grows 2,000 times its hatching mass in two weeks.
                When you see one on milkweed, leave the plant alone.
                The caterpillar will eat the whole thing before forming a chrysalis.
              </p>
            </div>
            <div className="callout callout--green" style={{ margin: 0 }}>
              <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Adults (Apr-Nov)</h3>
              <p style={{ marginBottom: 0 }}>
                Orange with black veining, white spots on the wing edges.
                In spring and summer, watch for them nectaring on milkweed blooms, coneflowers, and bergamot.
                In September, watch for southbound movement in the mornings.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="diapause-heading">
          <h2 id="diapause-heading">The generation that migrates</h2>
          <p>
            Summer monarchs live about six weeks. They mate, lay eggs, and die.
            But the generation that hatches in late August is different.
            This is the <em>diapause generation</em>. It does not reproduce until spring.
            Instead it stores fat, delays sexual maturity, and flies 3,000 miles
            to the oyamel fir forests of Michoacan, Mexico.
          </p>
          <p>
            It overwinters there in clusters so dense that tree branches bend under the weight.
            In February it begins the return — and dies somewhere in Texas or northern Mexico,
            having laid the eggs of the generation that will reach Illinois and Michigan in June.
          </p>
          <p>
            No individual monarch knows the full route. The navigational program runs on genetics.
            Scientists still do not fully understand how they know where to go.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three ways to help this season</h2>
          <ol className="step-list">
            <li>
              <strong>Plant milkweed.</strong>{' '}
              It is the only plant monarchs can reproduce on. Any sunny spot with a native milkweed species
              is a potential nursery. Three plants can support a full summer generation.
            </li>
            <li>
              <strong>Log a sighting.</strong>{' '}
              Every observation on iNaturalist adds to the data researchers use to track population recovery.
              Eggs, caterpillars, adults in flight — all count.
            </li>
            <li>
              <strong>Watch in September.</strong>{' '}
              The fall migration passes through most of the US between mid-September and mid-October.
              Roost trees near open fields, late-blooming goldenrod, and river corridors are places to look.
            </li>
          </ol>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
              Find Your Milkweed Species
            </button>
            <button
              onClick={() => onNavigate('log-a-sighting')}
              style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Log a Sighting
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
