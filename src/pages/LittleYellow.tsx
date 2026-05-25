import type { Page } from '../App'

interface LittleYellowProps {
  onNavigate: (page: Page) => void
}

export default function LittleYellow({ onNavigate }: LittleYellowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/305807245/large.jpeg"
          alt="Little Yellow butterfly perched with wings open, showing lemon-yellow upper surfaces with narrow black outer borders and the short black cell-end bar on the forewing, Marais Temps Clair Conservation Area, St. Charles County, Missouri"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/302784643/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: cseantracy&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/175936039" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies</div>
        <h1>The white female and the lemon-yellow male were recorded as separate species — naturalists named the white form <em>Eurema euterpe</em> before field observers watched paired adults and established that the color difference was sex, not species.</h1>
        <p className="hero__lead">
          The Little Yellow (<em>Pyrisitia lisa</em>) is the smallest sulphur in the eastern
          United States. Wingspan runs from about one and a quarter to one and a half inches —
          roughly two-thirds the size of a Clouded Sulphur. Males carry lemon-yellow wings with
          a narrow black outer border and a single short black bar crossing the outer corner of
          the forewing cell. Females range from the same yellow to nearly white, with the black
          markings reduced or absent. Both sexes show a small orange or reddish spot near the
          base of the hindwing on the underside.
        </p>
        <p className="hero__lead">
          The Little Yellow uses exclusively <em>Chamaecrista</em> and <em>Senna</em> — the
          same legume genera that host the Sleepy Orange and the Cloudless Sulphur. Partridge
          Pea (<em>Chamaecrista fasciculata</em>) is the primary host across the eastern range.
          No population of Little Yellow persists north of the Gulf coastal plain through winter.
          Every individual seen in Missouri or Illinois in July hatched from a caterpillar on a
          southern plant and flew north.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="cell-end-bar-heading">
          <h2 id="cell-end-bar-heading">The short black bar at the outer corner of the forewing cell — not a curve, not a border, a bar that separates this species in the field</h2>
          <p>
            The diagnostic mark on the Little Yellow's upper forewing is a short black bar that
            crosses the outer corner of the wing cell — the enclosed area formed by veins near
            the center of the wing. In the{' '}
            <button className="link-button" onClick={() => onNavigate('sleepy-orange')}>
              Sleepy Orange
            </button>
            , the equivalent mark on the forewing is a narrow curved arc that reads as a closed
            eye; in the Little Yellow, the mark is straight, short, and positioned squarely at
            the cell-end. The outer forewing border on the Little Yellow is narrow compared to
            the Sleepy Orange and the Orange Sulphur.
          </p>
          <p>
            With wings closed, the Little Yellow shows pale yellow undersides with faint
            brownish-orange stippling on the hindwing and a small orange or reddish spot near
            the hindwing base. In fresh individuals, the costal margin of the closed hindwing
            carries a faint dark line that does not appear on the Sleepy Orange or the{' '}
            <button className="link-button" onClick={() => onNavigate('clouded-sulphur')}>
              Clouded Sulphur
            </button>
            {' '}under the same conditions.
          </p>
        </section>

        <section aria-labelledby="female-dimorphism-heading">
          <h2 id="female-dimorphism-heading">Two color forms in the same population — yellow females, white females, and the naming error corrected by watching paired adults</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/250850/large.jpg"
              alt="Little Yellow butterfly perched with wings closed, showing the pale yellow underside with faint brownish stippling on the hindwing and the small orange spot near the hindwing base, Hornsby Bend, Austin, Texas"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/302798587/large.jpg'
              }}
            />
            <figcaption>
              A Little Yellow at rest with wings closed, showing the pale yellow underside with
              faint brownish stippling and the small orange spot near the hindwing base. This
              ventral pattern distinguishes the Little Yellow from the Sleepy Orange, which shows
              brighter yellow or brick-red on the underside, and from the Clouded Sulphur, which
              lacks the orange hindwing spot.
              <span className="photo-credit"> greglasley &middot; CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Males are consistently lemon yellow. Females of the same species produce two color
            forms: a yellow form that closely resembles the male, and a white form in which the
            ground color of the wings is cream to nearly pure white with reduced black markings.
            19th-century entomologists described the white female as <em>Eurema euterpe</em> —
            a distinct species — before field observers documented paired adults and established
            that the two appearances belonged to one.
          </p>
          <p>
            Both female color forms occur in the same population, in the same location, at the
            same time. The white form is more common in some regions and in certain broods;
            the yellow form predominates in others. This is not a seasonal change — unlike the
            Sleepy Orange, which shifts from a bright yellow summer underside to a brown winter
            underside, the Little Yellow female's color form is fixed at eclosion and does not
            change across the adult's lifespan.
          </p>
          <p>
            The species produces multiple broods across its permanent range in the Gulf states
            and Florida, where adults fly year-round. In Missouri and Illinois, where no
            population overwinters, the individuals present from late June through September
            represent the second or third generation of migrants whose parents and grandparents
            originated from the south. A Little Yellow nectaring on clover in a St. Louis yard
            in August is as far from its ancestral overwintering ground as a monarch in
            mid-migration.
          </p>
        </section>

        <section aria-labelledby="host-plants-heading">
          <h2 id="host-plants-heading">Partridge Pea, Wild Sensitive Plant, and the tarsal check that reads legume chemistry by touch</h2>
          <p>
            Female Little Yellows identify host plants by pressing their tarsi against leaf
            surfaces. The tarsal chemoreceptors register the glycosides and flavonoids
            characteristic of <em>Chamaecrista</em> and <em>Senna</em> leaves. When the signal
            matches, the female curves her abdomen under the leaf and deposits a single
            spindle-shaped egg on the underside of a leaflet. A grass blade or a violet leaf
            beneath the same feet produces no signal — the female lifts off and continues
            searching.
          </p>
          <p>
            The primary host across the eastern range is{' '}
            <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
              Partridge Pea
            </button>
            {' '}(<em>Chamaecrista fasciculata</em>). Wild Sensitive Plant (<em>Chamaecrista nictitans</em>),{' '}
            <button className="link-button" onClick={() => onNavigate('wild-senna')}>
              Wild Senna
            </button>
            {' '}(<em>Senna hebecarpa</em>), and Maryland Senna (<em>Senna marilandica</em>) are
            also used where they occur. These are the same plants that host Sleepy Orange and
            Cloudless Sulphur caterpillars. Female butterflies of all three species evaluate the
            same Partridge Pea stem on the same afternoon in July.
          </p>
          <p>
            The caterpillar is pale green with a narrow white lateral stripe — nearly identical
            in appearance to the Sleepy Orange caterpillar on the same plant. Both species feed
            from the outside of the leaflet, leaving visible notches at the leaf edge. A Partridge
            Pea with active caterpillar feeding carries notches on multiple leaflets. The
            caterpillars of both species can be developing simultaneously on the same stem,
            eating from separate leaflets, neither visible to the other.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Partridge Pea in a dry, sunny patch — the leaflets that arrive from the south need to be waiting in June</h2>
          <ol className="step-list">
            <li>
              <strong>Plant Partridge Pea in a full-sun, well-drained spot.</strong>{' '}
              Partridge Pea is a summer annual that germinates when soil warms in late spring,
              grows quickly, and flowers from July through September. It does not tolerate shade
              or standing water. A patch of 10–15 plants provides enough leaflet surface for
              several caterpillars simultaneously. Start from transplants or direct-seed after
              last frost. See the{' '}
              <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea profile
              </button>
              {' '}for soil and siting details.
            </li>
            <li>
              <strong>Let Partridge Pea reseed and return each year.</strong>{' '}
              Partridge Pea produces large seed pods that dry and split in fall, scattering seed
              in place or nearby. In subsequent years, seedlings emerge in late spring and read
              as a weed until they reach 12–18 inches. Leave them undisturbed — they are the
              next season's host plant. A single established planting that is left to seed
              requires no replanting.
            </li>
            <li>
              <strong>Leave leaflet notching undisturbed from June through September.</strong>{' '}
              Little Yellow caterpillars are small, green, and feed at the leaflet edge,
              leaving inward-facing notches. The plant recovers full leaf mass within weeks of
              the larvae pupating. Caterpillars complete their full development in two to three
              weeks. A stem with visible notching is a stem in use — not a stem that needs
              treatment.
            </li>
            <li>
              <strong>Check insecticide applications near legume beds before applying.</strong>{' '}
              Caterpillars feeding at the leaf surface are exposed to contact sprays and to
              systemic treatments absorbed through legume roots. A treatment applied to a
              nearby bed for a different pest can reach Partridge Pea through soil or drift.
              If pest management is needed in the same area, confirm whether the treatment
              zone overlaps the Partridge Pea before applying.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who arrives at the same Partridge Pea — the butterflies and bees using the same legume for different purposes in the same afternoon</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; the primary host plant for Little Yellow caterpillars across the eastern
              range; also hosts Sleepy Orange and Cloudless Sulphur; female butterflies of all
              three species evaluate the same stems by pressing their feet to the leaflets in
              the same July afternoon
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; perennial legume host used where Partridge Pea is absent or dormant;
              Wild Senna leaflets carry the same <em>Senna</em> chemistry that Little Yellow
              females check through tarsal contact; pairs well with Partridge Pea to extend
              the host window from May through September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('sleepy-orange')}>
                Sleepy Orange
              </button>{' '}
              &mdash; uses the same host plants and evaluates them the same way; the Sleepy
              Orange caterpillar is pale green with a narrow white stripe, nearly identical
              to the Little Yellow caterpillar on the same Partridge Pea stem; both species
              can be developing simultaneously on the same plant in August
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cloudless-sulphur')}>
                Cloudless Sulphur
              </button>{' '}
              &mdash; also uses Wild Senna and Partridge Pea; its caterpillar turns green or
              yellow depending on what plant tissue it is eating; the Cloudless Sulphur is
              larger than the Little Yellow, with a wingspan up to three inches, and can be
              flying in the same legume bed in the same week
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; visits Partridge Pea flowers for pollen while Little Yellow females
              evaluate the same plant's leaflets for egg-laying; the bumblebee grips the
              anther cluster and vibrates its flight muscles to open the sealed pores — the
              short audible buzz is the pollen releasing; the butterfly and the bee use the
              same plant for different purposes in the same hour
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Little Yellow arrives each June from the south and needs Partridge Pea leaflets already growing.</strong>{' '}
            Pair it with Wild Senna in the same bed to cover the full host window from May
            through September. Browse both in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see all the butterflies that use native legumes in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
