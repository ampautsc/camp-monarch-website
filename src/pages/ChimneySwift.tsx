import type { Page } from '../App'

interface ChimneySwiftProps {
  onNavigate: (page: Page) => void
}

export default function ChimneySwift({ onNavigate }: ChimneySwiftProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chaetura_pelagica%2C_by_Lake_Erie%2C_Cleveland%2C_Ohio%2C_USA_339593191.jpg/1280px-Chaetura_pelagica%2C_by_Lake_Erie%2C_Cleveland%2C_Ohio%2C_USA_339593191.jpg"
          alt="A Chimney Swift in flight against a pale sky, showing its cigar-shaped body, swept-back wings, and short tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Adam Jackson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Chaetura_pelagica,_by_Lake_Erie,_Cleveland,_Ohio,_USA_339593191.jpg" target="_blank" rel="noopener noreferrer">CC0 / Public Domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Chimney Swift</h1>
        <p className="hero__lead">
          The Chimney Swift is a small, cigar-shaped aerial bird with long, swept-back wings
          and a short, stubby tail. It is almost entirely sooty gray-brown and spends nearly
          all of its life in the air — eating, drinking, and sometimes even sleeping on the
          wing. It breeds across the eastern United States and southern Canada, winters in
          South America, and is one of the fastest fliers of any North American bird. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Chimney Swifts are aerial insectivores — everything they eat, they catch in
            flight. They feed on flies, beetles, ants, wasps, and other small flying
            insects, scooping them from the air with a wide, gaping bill. Flocks sweep low
            over ponds and rooftops in the morning and evening, calling in thin, rapid
            chattering notes that announce their presence well before they are visible.
            They cannot perch on a wire or branch — their feet are designed to cling to
            vertical surfaces only. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chimney_Swift_%28Chaetura_pelagica%29_%2814568670961%29.jpg/1280px-Chimney_Swift_%28Chaetura_pelagica%29_%2814568670961%29.jpg"
            alt="A Chimney Swift in flight, wings swept back in the characteristic swift silhouette"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Swifts fly with rapid, twittering wingbeats and stiff, bowed wings. Their
            silhouette in flight looks like a flying cigar with a bow tie.
            <span className="photo-credit"> Photo: Andrew C&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Chimney_Swift_(Chaetura_pelagica)_(14568670961).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Chimney Swifts nest and roost inside chimneys, building a half-cup nest of small
            twigs glued to the inside wall with sticky saliva. They originally used hollow
            trees. In fall, hundreds or thousands gather at traditional roost chimneys before
            migrating south. In the evening at dusk, the flock spirals down into the chimney
            in a tight vortex — one of the more dramatic wildlife spectacles in eastern North
            America. They winter in Peru and western Brazil, flying roughly 6,000 miles each
            way. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight classifies the Chimney Swift as a &quot;Common Bird in Steep
            Decline.&quot; [2] The U.S. Breeding Bird Survey shows a decline of about 67%
            since 1970. [3] The IUCN lists it as Vulnerable. [4] Capping or removing old
            chimneys eliminates nesting and roost sites. Declining insect populations reduce
            available food. The loss of traditional roost chimneys at migration stopover
            points concentrates birds at fewer sites. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              If you have an uncapped masonry chimney, consider leaving it open during
              nesting season (May through August). Swifts do not damage chimneys and will
              not enter living spaces. [5]
            </li>
            <li>
              A chimney swift tower — a wooden chimney-like structure built to mimic a hollow
              tree — can provide artificial nesting and roosting habitat. Plans are available
              through Driftwood Wildlife Association and local Audubon chapters. [5]
            </li>
            <li>
              Skipping insecticides preserves the flying insects swifts depend on. A single
              swift can eat up to 1,000 insects per day. [5]
            </li>
            <li>
              Watch for and report roost chimneys to local swift networks. Knowing where
              large roost congregations occur helps conservation planning. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-phoebe')}>
            <span className="neighbor-name">Eastern Phoebe</span>
            <span className="neighbor-note">A fellow aerial insect hunter that forages lower, from perches rather than on the wing.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('purple-martin')}>
            <span className="neighbor-name">Purple Martin</span>
            <span className="neighbor-note">Another aerial insectivore that also nests colonially in human-provided structures.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
            <span className="neighbor-name">Common Nighthawk</span>
            <span className="neighbor-note">A crepuscular aerial insect eater that sweeps the same evening skies over neighborhoods.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">A year-round neighbor in the yards and neighborhoods where swifts hunt overhead each summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Chimney_Swift/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Chimney Swift (Life History)</a></li>
            <li><a href="https://partnersinflight.org/species/14048/" target="_blank" rel="noopener noreferrer">Partners in Flight — Chimney Swift Species Account</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/chimney-swift-chaetura-pelagica" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Chimney Swift</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
