import type { Page } from '../App'

interface MonarchLifeProps {
  onNavigate: (page: Page) => void
}

export default function MonarchLife({ onNavigate }: MonarchLifeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Monarch_Butterfly_Danaus_plexippus.jpg"
          alt="Monarch butterfly (Danaus plexippus) on milkweed bloom with wings spread open, showing the vivid orange wing panels and black vein network — the adult that emerges from chrysalis in late August will not reproduce; instead it will fly 2,500 miles to a Mexican mountain forest it has never visited"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Derek Ramsey (Ram-Man)&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

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

      

      <div className="page">
        <section aria-labelledby="watch-heading">
          <h2 id="watch-heading">What to look for in your yard</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', margin: '1rem 0' }}>
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

          <figure className="species-content-photo" style={{ maxWidth: '560px', margin: '1rem auto 1.5rem' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg" alt="Butterfly weed (Asclepias tuberosa) in full bloom" loading="lazy" />
            <figcaption>
              Butterfly weed — a native milkweed — thrives in poor soil, tolerates drought, and attracts monarchs reliably. It is the one plant whose presence in a yard has a direct, documented effect on whether the monarch migration continues to function.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
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
          <figure className="species-content-photo species-content-photo--right" style={{ width: '36%' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Danaus_plexippus_emerging_from_chrysalis_04.jpg"
              alt="Monarch butterfly emerging from its jade-green chrysalis — wings crumpled and soft, moments before their first unfurling"
              loading="lazy"
            />
            <figcaption>
              Inside the chrysalis, the caterpillar's tissues dissolve almost entirely — most of its cells break down into an undifferentiated biological broth. Imaginal cells dormant since the egg then organize that material into a butterfly. The monarch that emerges will navigate 2,500 miles to a Mexican mountain using a sun compass calibrated to time of day.
              <span className="photo-credit"> Photo: Captain-tucker · <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_emerging_from_chrysalis_04.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>

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
          <h2 style={{ marginTop: 0 }}>Milkweed, sightings, fall watch, and nectar for the crossing</h2>
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
            <li>
              <strong>Plant native goldenrod or asters near your milkweed.</strong>{' '}
              The diapause generation leaves breeding grounds in late August already storing fat for the
              crossing. It fuels the 3,000-mile flight primarily by nectaring on Solidago and
              Symphyotrichum species, which bloom precisely during the migration window — August through
              October. A monarch working a blooming goldenrod stand in September is not simply passing
              through. It is loading the reserves it needs to reach the overwintering site in Michoacan.
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

        <section aria-labelledby="monarch-neighbors-heading">
          <h2 id="monarch-neighbors-heading">Who shares the fall flyway and the milkweed patch</h2>
          <p>
            The milkweed stand in July and the goldenrod bloom in September that sustain the monarch's
            annual cycle also sustain other species working the same landscape on similar schedules.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>
              {' — '}The diapause generation departing breeding grounds in late August fuels the
              2,500-mile Mexico crossing primarily on goldenrod and aster nectar through September
              and October. A single monarch working a blooming goldenrod stand converts flower sugar
              into the abdominal fat reserves that will carry it to Michoacán — the same goldenrod
              that most homeowners pull because they assume it causes hay fever (ragweed does; goldenrod
              is insect-pollinated and its pollen never reaches your sinuses).
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('green-darner')}>
                Common Green Darner
              </button>
              {' — '}Migrates south on the same September cold fronts. Monarch counters at Atlantic
              flyway hawk-watch stations record darner movement on the same weather days as peak
              butterfly counts. Both species navigate to wintering locations they have never visited;
              neither the darner nor the monarch arriving at your yard in April was there the previous October —
              both are the offspring of the generation that departed.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('tiger-swallowtail')}>
                Tiger Swallowtail
              </button>
              {' — '}Nectars on milkweed blooms in June and July alongside the summer monarch generation,
              and feeds on wild bergamot and coneflowers through August. The tiger swallowtail on your
              coneflowers in August will overwinter as a pupa; the monarch working the same flower heads
              is building fat for a crossing it will complete in six weeks.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>
              {' — '}Blooms from late June through August — the exact window when the pre-diapause
              generation of monarchs is feeding most intensively before its reproductive biology shifts
              toward long-distance flight. A patch of coneflowers in late July carries monarch adults,
              native bees, and fritillaries simultaneously; the monarchs working it in August belong to
              the generation that will leave on the September cold front.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
