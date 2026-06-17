import type { Page } from '../App'

interface WinterberryHollyProps {
  onNavigate: (page: Page) => void
}

export default function WinterberryHolly({ onNavigate }: WinterberryHollyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/American_Winterberry_Ilex_verticillata_%27Winter_Red%27_Berries_3264px.jpg/1280px-American_Winterberry_Ilex_verticillata_%27Winter_Red%27_Berries_3264px.jpg"
          alt="Dense clusters of bright red Winterberry Holly berries on bare stems"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Derek Ramsey&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_Winterberry_Ilex_verticillata_'Winter_Red'_Berries_3264px.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Winterberry Holly</h1>
        <p className="hero__lead">
          Winterberry Holly (<em>Ilex verticillata</em>) is a native deciduous shrub of wet
          ground — stream banks, pond margins, swamp edges — that grows 6 to 10 feet tall and
          tolerates standing water through spring. It is dioecious: only female plants bear
          berries, and a female needs a male plant within about 50 feet to set any fruit at all.
          When its leaves drop in October, a well-fruited female stands with hundreds of bright
          red berries on bare gray stems, often the last fruit left in the yard by midwinter. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A Cedar Waxwing flock of 20 to 60 birds descends on a fruiting winterberry in
            December, working it systematically cluster by cluster, and strips it bare in 15 to
            20 minutes before moving on. A Hermit Thrush waits alone in the nearby brush, too
            small and solitary to compete with the flock, then moves in afterward to work the
            stems the waxwings bypassed. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2022-12-26_14_11_10_A_Winterberry_in_winter_with_fruit_at_the_Mountain_View_Golf_Course_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-thumbnail.jpg"
            alt="Bare Winterberry Holly stems loaded with red berries in winter"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            With the leaves gone, every berry on a fruiting female is visible at once — and so is
            whether a male plant was ever there to pollinate it.
            <span className="photo-credit"> Photo: Famartin&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:2022-12-26_14_11_10_A_Winterberry_in_winter_with_fruit_at_the_Mountain_View_Golf_Course_in_the_Mountainview_section_of_Ewing_Township,_Mercer_County,_New_Jersey.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Small white flowers open in late June, when bees carry pollen from male plants to
            female ones. Berries form green and hard by late August, hidden under dense summer
            foliage. Winterberry's fruit holds lower sugar than viburnum or dogwood, so migrating
            birds reach for those first in October; winterberry waits, often holding its crop
            into January or February, after every other fruit in the landscape is gone. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Winterberry is common and easy to grow in the right site, but the dioecious pairing
            trips up many homeowners. A single plant — even a healthy, well-established one —
            stays bare every winter if no male is planted within range, and that absence is easy
            to miss since nursery tags rarely flag it clearly.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Buy a male and female together, and confirm the sex of each tag before buying — one
              male pollinates up to five females within about 50 feet. [2]
            </li>
            <li>
              Plant it in the low, wet corner of the yard where other shrubs struggle. Standing
              water for 2 to 6 weeks after rain is a planting site for winterberry, not a problem
              to fix. [2]
            </li>
            <li>
              Plant a group of three to five females rather than one. A cluster holds fruit-eating
              birds across the whole winter instead of for a single fast visit. [2]
            </li>
            <li>
              Add Arrowwood Viburnum nearby. It fruits in August and September, before winterberry
              is ready, extending native fruit availability from late summer through February. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">A nomadic flock can strip a fruiting winterberry in 15 to 20 minutes in December, then moves on to the next patch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">Moves in after waxwing flocks leave to work the berries they bypassed, relying on winterberry into February.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Winter flocks of 30 to 200 birds can descend on a fruiting winterberry and clear it in a single afternoon.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('arrowwood-viburnum')}>
            <span className="neighbor-name">Arrowwood Viburnum</span>
            <span className="neighbor-note">Fruits in August and September, before winterberry is ready — planting both covers fruit from late summer through February.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Ilex_verticillata" target="_blank" rel="noopener noreferrer">Wikipedia — Ilex verticillata (Winterberry)</a></li>
            <li><a href="https://www.allaboutbirds.org/guide/Cedar_Waxwing/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Cedar Waxwing</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
