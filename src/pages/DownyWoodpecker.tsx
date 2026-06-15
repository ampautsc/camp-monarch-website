import type { Page } from '../App'

interface DownyWoodpeckerProps {
  onNavigate: (page: Page) => void
}

export default function DownyWoodpecker({ onNavigate }: DownyWoodpeckerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Downy_woodpecker_in_PP_%2890879%29.jpg/1280px-Downy_woodpecker_in_PP_%2890879%29.jpg"
          alt="A Downy Woodpecker clinging to a branch, showing black-and-white plumage and a short bill"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={868}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Downy_woodpecker_in_PP_(90879).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Downy Woodpecker</h1>
        <p className="hero__lead">
          The Downy Woodpecker is the smallest woodpecker in North America, about 6 inches
          long, with black-and-white plumage and a short, stubby bill. Males have a small red
          patch on the back of the head. It lives year-round across most of the United States
          and Canada, wherever there are trees, and is one of the most frequent visitors to
          backyard suet feeders. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Downy Woodpeckers hitch along trunks and branches, probing bark crevices for
            beetles, beetle larvae, ants, and caterpillars. Their small size lets them forage
            on thin branches and weed stems that larger woodpeckers cannot use. They also eat
            seeds, berries, and suet at feeders. In winter they often join mixed-species flocks
            with chickadees, nuthatches, and creepers, moving through the woods together. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Downy_woodpecker_in_GWC_%2833941%29.jpg/1280px-Downy_woodpecker_in_GWC_%2833941%29.jpg"
            alt="A Downy Woodpecker on a tree trunk, probing bark with its bill"
            width={1280}
            height={956}
            loading="lazy"
          />
          <figcaption>
            Downy Woodpeckers probe bark crevices for insects and larvae. Their small size
            lets them work thin branches that larger woodpeckers pass over.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Downy_woodpecker_in_GWC_(33941).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Downy Woodpeckers do not migrate. Pairs excavate a new nest cavity each year in
            dead wood, typically 5 to 50 feet up. Four to five eggs, incubated by both
            parents. The male usually incubates at night. Outside the breeding season they
            roost alone in cavities. They drum on resonant wood to establish territory, a
            rapid burst that carries through the woods in late winter and early spring. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 13 million. [2] The
            U.S. Breeding Bird Survey shows a stable overall population since 1966, with slight
            declines in the western portion of the range. [3] The IUCN lists it as Least
            Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dead trees and dead branches left standing (called snags) provide the wood
              Downy Woodpeckers excavate for nesting and roosting cavities. A standing dead
              tree that poses no safety risk is habitat. [5]
            </li>
            <li>
              A suet feeder draws Downy Woodpeckers year-round and provides high-energy food
              in winter when insects are scarce. [5]
            </li>
            <li>
              Native trees and shrubs support the beetle and caterpillar populations that make
              up most of the woodpecker&apos;s diet. [5]
            </li>
            <li>
              Skipping pesticides preserves the bark-dwelling insects the woodpecker depends
              on. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('carolina-wren')}>
            <span className="neighbor-name">Carolina Wren</span>
            <span className="neighbor-note">Another year-round insect eater that probes bark and tangles in the same yards.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
            <span className="neighbor-name">Black-capped Chickadee</span>
            <span className="neighbor-note">Joins the same mixed winter flocks, foraging on nearby branches while the woodpecker works the trunk.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round feeder neighbor that takes seeds while the woodpecker takes suet.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">A larger relative that forages on the ground for ants rather than on bark for beetles.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Downy_Woodpecker/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Downy Woodpecker (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/downy-woodpecker-dryobates-pubescens" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Downy Woodpecker</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
