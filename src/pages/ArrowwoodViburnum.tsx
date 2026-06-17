import type { Page } from '../App'

interface ArrowwoodViburnumProps {
  onNavigate: (page: Page) => void
}

export default function ArrowwoodViburnum({ onNavigate }: ArrowwoodViburnumProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Viburnum_dentatum_16zz.jpg/1280px-Viburnum_dentatum_16zz.jpg"
          alt="Arrowwood viburnum branch showing clusters of ripe blue-black drupes against green dentate leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: David J. Stang&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Viburnum_dentatum_16zz.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Arrowwood Viburnum</h1>
        <p className="hero__lead">
          Arrowwood viburnum (<em>Viburnum dentatum</em>) sets blue-black drupes in August while
          still in full summer leaf — 6 to 9 mm across, 28% fat by dry weight, on dense clusters
          hidden under the canopy and invisible from five feet away. Cedar Waxwing flocks arrive
          from the north in late August, move through the branches by sight and smell, and can
          strip a mature shrub in two days. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A Hermit Thrush arrives in September, alone, after the waxwing flocks have already
            moved through. It works systematically — flicking leaves aside, pulling single drupes
            from stems the flock left behind, foraging close to the ground and at mid-height.
            The same individual returns to the same yard in consecutive winters if the fruiting
            shrubs are still there. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Viburnum_dentatum_flowers.jpg/1280px-Viburnum_dentatum_flowers.jpg"
            alt="Arrowwood viburnum in bloom showing multiple flat-topped white flower cymes at different stages of opening"
            width={1280}
            height={1885}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Flat-topped cymes open outer florets first and move inward over two to three weeks.
            The floret tube is only 2 mm deep — native bees with tongues under 4 mm reach the
            nectar the same as bumblebees do.
            <span className="photo-credit"> Photo: Ted Bodner, USDA Forest Service&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Viburnum_dentatum_flowers.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0 US</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            White flower cymes open in late May across flat heads 3 to 4 inches across. One plant
            sets fruit on its own; two plants from different genetic stock produce heavier, denser
            clusters — bees carry pollen between them during the bloom window without the plants
            needing to be adjacent. By mid-October the drupes are gone — exactly when Winterberry
            Holly begins to color. A yard with both shrubs carries native fruit from August through
            February, the two plants handing off as one empties and the other ripens. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Arrowwood isn&apos;t at risk, but the introduced viburnum leaf beetle (<em>Pyrrhalta
            viburni</em>) has spread through the northeastern U.S. and can defoliate plants
            severely enough to kill them over two or three consecutive seasons. A single November
            check — look for small ridged egg capsules in short rows along the tops of current-year
            stems — and pruning those tips off removes the problem before larvae hatch in April.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Buy two plants from different sources or cultivar lines — cross-pollination during
              the May bloom produces heavier, denser drupe clusters than self-pollination alone. [2]
            </li>
            <li>
              Site in a garden bed or shrub border in average to moist, well-drained soil with at
              least four hours of direct sun; this shrub goes in the upland bed, not the low wet
              corner. [2]
            </li>
            <li>
              Add Winterberry Holly in the lowest, wettest spot nearby — it ripens in late October
              and holds through February, picking up the fruit sequence exactly where arrowwood
              stops. [2]
            </li>
            <li>
              In November, check current-year stems for viburnum leaf beetle egg masses — small
              ridged capsules in short rows along the top — and cut those stem tips off and discard
              them before April. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Nomadic flocks arrive in late August when the first drupes ripen and can strip a mature arrowwood in two days before moving south.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">Arrives in September and works the clusters flocks left behind; the same individual returns to the same yard in consecutive winters.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">Nests in dense arrowwood thickets in spring, then uses the same shrub's drupes heavily in August and September before migrating.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('winterberry-holly')}>
            <span className="neighbor-name">Winterberry Holly</span>
            <span className="neighbor-note">Ripens in late October as arrowwood goes bare — planted together in the same yard, the two shrubs cover fruit from August through February.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Viburnum_dentatum" target="_blank" rel="noopener noreferrer">Wikipedia — Viburnum dentatum (Arrowwood Viburnum)</a></li>
            <li><a href="https://www.allaboutbirds.org/guide/Cedar_Waxwing/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Cedar Waxwing</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
