import type { Page } from '../App'

interface WhiteOakProps {
  onNavigate: (page: Page) => void
}

export default function WhiteOak({ onNavigate }: WhiteOakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg/1280px-Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg"
          alt="The Keeler Oak, a massive ~600-year-old white oak with a crown spread near 80 feet, standing alone in a field"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={1029}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Marty Aligata&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Keeler_Oak_Tree_-_distance_photo,_May_2013.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>White Oak</h1>
        <p className="hero__lead">
          The oak genus supports 557 caterpillar species — more than any other tree genus in North
          America. That matters because a nesting chickadee pair brings 350 to 570 caterpillars a day
          to the nest, and the oak is where most of them come from. A white oak (<em>Quercus alba</em>)
          half a mile away doesn't help: a chickadee raising five young works a 25-to-50-acre
          territory, and only what grows inside it ends up in the nest. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            In late April and early May, a white oak's expanding buds are crawling with caterpillars —
            inchworms of 200-plus moth species dangling on silk, hairstreak larvae chewing new leaf
            tissue from inside rolled tubes. The branches are never still: chickadees, nuthatches, and
            vireos move through them twig to twig and back to the nest. Nestlings can't be raised on
            seed; they need insect protein, and caterpillars are the most calorie-dense, abundant
            source spring offers. If the oak is there, the caterpillars are there. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Quercus_alba_leaf_spring.jpg"
            alt="A white oak leaf showing rounded lobes with smooth, rounded tips and no bristle points"
            width={1100}
            height={825}
            loading="lazy"
          />
          <figcaption>
            The ID is in the lobes: white oak's curve to smooth, rounded tips. Run a finger down the
            edge and it never snags — a red oak leaf catches on a bristle at every lobe point.
            <span className="photo-credit"> Photo: Harborsparrow&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Quercus_alba_leaf_spring.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            White oak acorns ripen in a single season and run low in tannin (3 to 5%, versus 5 to 10%
            in red oaks), so deer, turkeys, squirrels, and blue jays eat them on the spot in October
            rather than caching them — a white oak acorn left in the ground germinates within weeks. A
            mature tree drops thousands within a 30-to-50-foot radius, and a single blue jay may cache
            2,000 to 5,000 acorns in a fall, planting oaks across a half-mile. White oak reaches 60 to
            100 feet and can live three to six centuries; the Keeler Oak above is estimated at 600
            years. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            White oak is secure as a species but slow to establish and routinely missing from newer
            yards — and where there's no oak within a nesting bird's territory, the spring caterpillar
            base collapses. Raking every leaf each fall compounds it, removing the overwintering
            Juvenal's Duskywing and the pupae of hundreds of moth species from the litter below.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant a 1-gallon or bareroot seedling rather than a big balled-and-burlapped tree — it
              establishes faster and skips transplant shock; state forestry programs sell them cheaply
              in bundles. [2]
            </li>
            <li>
              Site it in full sun and well-drained soil, with at least 20 feet of clearance on each
              side for the eventual crown. [2]
            </li>
            <li>
              Cage or tube the seedling against deer browse for its first three to four years, while
              the leader is within reach. [2]
            </li>
            <li>
              Leave the leaves under the tree each fall — Juvenal's Duskywing overwinters in a rolled
              oak leaf on the ground, and countless moths pupate in that layer. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
            <span className="neighbor-name">Black-capped Chickadee</span>
            <span className="neighbor-note">Makes 350 to 570 caterpillar runs a day during the nestling window, drawing almost entirely on the oak-feeding larvae in its small territory.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('juvenals-duskywing')}>
            <span className="neighbor-name">Juvenal's Duskywing</span>
            <span className="neighbor-note">An oak-specialist skipper whose caterpillars roll white oak leaves into silk tubes and overwinter as larvae inside fallen rolled leaves on the ground.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-turkey')}>
            <span className="neighbor-name">Wild Turkey</span>
            <span className="neighbor-note">Works the leaf litter under white oaks in October and November; a flock of six can clear most of a mature tree's acorn drop in two weeks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">Scatter-caches acorns by the thousand each fall; the roughly quarter it never recovers become the oaks that appear along fence rows and yard edges.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Quercus_alba" target="_blank" rel="noopener noreferrer">Wikipedia — Quercus alba (White Oak)</a></li>
            <li><a href="https://xerces.org/leave-the-leaves" target="_blank" rel="noopener noreferrer">Xerces Society — Leave the Leaves</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
