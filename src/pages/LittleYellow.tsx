import type { Page } from '../App'

interface LittleYellowProps {
  onNavigate: (page: Page) => void
}

export default function LittleYellow({ onNavigate }: LittleYellowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Little_Yellow_butterfly_%2829135101687%29.jpg/1280px-Little_Yellow_butterfly_%2829135101687%29.jpg"
          alt="A Little Yellow butterfly with wings open showing the lemon-yellow upperwings with narrow black borders and the distinctive black cell-end bar on the forewing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={971}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Andy Reago &amp; Chrissy McClarren&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Little_Yellow_butterfly_(29135101687).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Little Yellow</h1>
        <p className="hero__lead">
          The Little Yellow is the smallest sulphur butterfly in the eastern United States —
          a fast, lemon-yellow butterfly about two-thirds the size of a Clouded Sulphur.
          Wingspan is 1.25 to 1.5 inches. Males are lemon yellow with a narrow black outer
          border and a short black bar across the outer forewing cell; females range from
          yellow to nearly white. Both sexes show a small orange or reddish spot near the
          hindwing base on the underside. No population survives winter north of the Gulf
          coastal plain — every Little Yellow in the Midwest or Mid-Atlantic in July flew
          north from the south, hatched from a caterpillar on Partridge Pea or Wild Senna. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Little Yellows are fast, low fliers of open, sunny areas with native legumes.
            Adults nectar on a variety of native wildflowers — native clovers, native
            fleabanes, and native goldenrod are favorites. Their flight is quick and erratic,
            making them difficult to follow. Females spend much of their adult lives pressing
            their feet to the leaves of Partridge Pea, Wild Senna, and Maryland Senna,
            tasting the leaf chemistry to confirm the host plant before laying a single
            spindle-shaped egg on the underside of a leaflet. Three different sulphur
            species — Little Yellow, Cloudless Sulphur, and Sleepy Orange — may evaluate
            the same Partridge Pea stem on the same afternoon in July. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Little_yellow_%28Pyrisitia_lisa%29%2C_ventral.jpg/1280px-Little_yellow_%28Pyrisitia_lisa%29%2C_ventral.jpg"
            alt="A Little Yellow butterfly with wings closed showing the pale yellow underside with faint brownish stippling on the hindwing and the small orange-red spot near the hindwing base"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            With wings closed, the Little Yellow&apos;s pale yellow underside with faint brownish
            stippling and small orange-red spot near the hindwing base is its best field mark.
            Female Little Yellows come in two color forms — yellow (resembling the male) and
            white (with cream to nearly pure white wings) — both forms occurring in the same
            population at the same time.
            <span className="photo-credit"> Photo: Anne Toal&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Little_yellow_(Pyrisitia_lisa),_ventral.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Little Yellow has multiple broods in its permanent Gulf-state range and is
            present there year-round. In the mid-Atlantic and midwest, it is a summer visitor
            that arrives from May or June onward as populations from the south expand northward.
            Northern individuals do not survive winter in any stage. Caterpillars are pale
            green with a narrow white lateral stripe and feed on the outside of leaflets of
            Partridge Pea, Wild Senna, Maryland Senna, and Wild Sensitive Plant, leaving
            visible notches at the leaf edge. The caterpillars of Little Yellow and Sleepy
            Orange are nearly identical in appearance and can develop on the same Partridge
            Pea plant simultaneously. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Little Yellow is common in its resident southern range and not of conservation
            concern. [1] In the northern part of its summer range, populations fluctuate year
            to year based on the strength of northward migration from the south. It depends
            entirely on native Chamaecrista and Senna species for caterpillar development.
            In areas where these native legumes grow in sunny habitat without herbicide
            treatment, Little Yellow is a reliable summer visitor. The same planting of
            Partridge Pea or Wild Senna that hosts Cloudless Sulphur and Sleepy Orange
            will attract Little Yellow as well. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native Partridge Pea (Chamaecrista fasciculata) in full sun. Partridge
              Pea is the primary caterpillar host plant for Little Yellow across the eastern
              range. It is a native annual that grows easily from seed in lean, well-drained
              soil, blooms with yellow flowers all summer, and reseeds readily year after year.
              A patch of 10-15 plants provides enough leaflets for multiple caterpillars. [2]
            </li>
            <li>
              Plant native Wild Senna (Senna hebecarpa) in a moist, sunny spot. Wild Senna
              is a perennial legume host for Little Yellow that returns and grows larger each
              year. Paired with Partridge Pea — Wild Senna in the moister area, Partridge
              Pea in the drier section — both extend host plant availability across the full
              summer season. [2]
            </li>
            <li>
              Leave visible leaflet notching undisturbed from June through September. Little
              Yellow caterpillars feed at the leaf edge and leave visible notches in the
              leaflets. The plant recovers full leaf mass within weeks of the larvae pupating.
              Feeding notches on Partridge Pea or Wild Senna during this window are development
              in progress, not damage requiring treatment. [2]
            </li>
            <li>
              Avoid insecticide applications on or near legume plantings from June through
              September. Little Yellow caterpillars feed at the leaf surface and are exposed
              to contact sprays and systemic insecticides. A treatment for another pest
              applied near a legume bed can eliminate caterpillar development on the host
              plants for the rest of the season. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">Uses the same Wild Senna and Partridge Pea host plants; the Cloudless Sulphur is much larger (wingspan to 3 inches) but both species can be developing on the same plant in the same week in late summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('sleepy-orange')}>
            <span className="neighbor-name">Sleepy Orange</span>
            <span className="neighbor-note">Uses the same host plants and evaluates them the same way; the Sleepy Orange and Little Yellow caterpillars look nearly identical on the same Partridge Pea stem, and both species can be developing simultaneously in August.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-senna')}>
            <span className="neighbor-name">Wild Senna</span>
            <span className="neighbor-note">The perennial legume host that pairs with Partridge Pea to extend host plant availability across the full summer; Wild Senna carries the same leaf chemistry Little Yellow females detect with their feet, and both plant species host caterpillars of all three sulphurs simultaneously.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Visits Partridge Pea flowers for pollen while Little Yellow females evaluate the same plant&apos;s leaflets for egg-laying; the bumblebee and the butterfly use the same plant for different purposes in the same hour on the same July afternoon.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Pyrisitia_lisa/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Little Yellow</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Pyrisitia-lisa" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Little Yellow</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
