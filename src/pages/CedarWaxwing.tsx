import type { Page } from '../App'

interface CedarWaxwingProps {
  onNavigate: (page: Page) => void
}

export default function CedarWaxwing({ onNavigate }: CedarWaxwingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/20230608_cedar_waxwing_PD26635.jpg/1280px-20230608_cedar_waxwing_PD26635.jpg"
          alt="A Cedar Waxwing with sleek brown plumage, a pointed crest, black mask, and yellow-tipped tail, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20230608_cedar_waxwing_PD26635.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cedar Waxwing</h1>
        <p className="hero__lead">
          The Cedar Waxwing is a sleek, crested, brown bird with a black mask, a yellow band
          at the tip of the tail, and small waxy red tips on several wing feathers. It travels
          in flocks that follow ripe fruit, appearing in a yard one morning and gone the next.
          It is one of the most specialized fruit-eating birds in North America, and its
          movements through the year are shaped almost entirely by where berries are
          available. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Cedar Waxwings eat fruit year-round, plucking berries whole and swallowing them
            quickly. A flock can strip a berry-laden shrub in minutes. They also catch insects
            on the wing during the breeding season, sallying out from a perch and returning.
            Their call is a thin, high-pitched trill that a flock keeps up steadily while
            feeding and in flight. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cedar_waxwing_eating_a_mulberry_%2812175%29.jpg/1280px-Cedar_waxwing_eating_a_mulberry_%2812175%29.jpg"
            alt="A Cedar Waxwing eating a mulberry, with the berry visible in its bill"
            width={1280}
            height={939}
            loading="lazy"
          />
          <figcaption>
            Cedar Waxwings eat berries whole and in quantity. A flock moving through a fruiting
            tree or shrub can clear it in a single visit.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Cedar_waxwing_eating_a_mulberry_(12175).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Cedar Waxwings nest later than most songbirds, in June through August, timed to the
            summer fruit crop. They build a loose cup of twigs, grass, and plant fibers in a
            tree, often 6 to 20 feet up. Five to six eggs per clutch. Their movements are
            nomadic rather than strictly migratory. Flocks shift north and south following fruit
            availability, and they can appear in large numbers one winter and be absent the
            next, depending on the berry crop. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 64 million. [2] The
            U.S. Breeding Bird Survey shows a stable or slightly increasing population since
            1966, likely helped by the spread of fruiting ornamental trees and the regrowth of
            shrubby habitat in parts of the range. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native fruit-bearing trees and shrubs such as serviceberry, dogwood, winterberry
              holly, and cedar (eastern red cedar) draw waxwing flocks when the fruit
              ripens. [5]
            </li>
            <li>
              A mix of species that fruit at different times, from early summer serviceberry
              through winter-persistent winterberry, extends the window when waxwings have
              reason to visit. [5]
            </li>
            <li>
              Windows near fruiting trees are a collision risk for fast-flying flocks. Visible
              patterns or external screens on glass within 30 feet of a berry-producing tree
              reduce strikes. [5]
            </li>
            <li>
              Avoiding pesticides on fruit-bearing plants protects a bird that eats berries
              whole and in large quantities. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Another fruit-eating thrush that shares the same berry shrubs, especially in winter.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">Winters on the same native viburnum and winterberry shrubs, foraging alone where the waxwing arrives in flocks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round seed-and-fruit eater that shares many of the same native shrubs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another late nester of yards and field edges, though it eats seeds where the waxwing eats fruit.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Cedar_Waxwing/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Cedar Waxwing (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/cedar-waxwing-bombycilla-cedrorum" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Cedar Waxwing</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
