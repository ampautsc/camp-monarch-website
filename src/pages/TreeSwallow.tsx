import type { Page } from '../App'

interface TreeSwallowProps {
  onNavigate: (page: Page) => void
}

export default function TreeSwallow({ onNavigate }: TreeSwallowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/20240501_tree_swallow_keeney_cove_PD202545.jpg/1280px-20240501_tree_swallow_keeney_cove_PD202545.jpg"
          alt="A Tree Swallow in flight showing its iridescent blue-green back and clean white underparts"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20240501_tree_swallow_keeney_cove_PD202545.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Tree Swallow</h1>
        <p className="hero__lead">
          The Tree Swallow is a small swallow with iridescent blue-green upperparts and
          clean white underparts. Males are brighter; females are slightly duller and
          browner. It breeds across most of North America wherever nest cavities are
          available near water or open habitat. It is one of the earliest spring migrants,
          arriving weeks before most other swallows, and one of the latest to depart
          in fall. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Tree Swallows catch insects in the air, hunting over open fields, marshes, and
            ponds in graceful, swooping flights. They eat flies, beetles, ants, and
            dragonflies. Unlike most swallows, Tree Swallows can also digest the waxy coating
            on bayberries and wax myrtle berries, which allows them to survive cold snaps
            when insects are unavailable. They drink and bathe by skimming open water at
            low speed. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tree_swallow_in_JBWR_%2825579%29.jpg/1280px-Tree_swallow_in_JBWR_%2825579%29.jpg"
            alt="A Tree Swallow perched on a post, showing its iridescent blue-green back"
            width={1280}
            height={968}
            loading="lazy"
          />
          <figcaption>
            Tree Swallows perch on posts and wires near open water between foraging bouts.
            The iridescent back flashes green or blue depending on the light angle.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Tree_swallow_in_JBWR_(25579).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Tree Swallows nest in tree cavities, old woodpecker holes, and nest boxes,
            lining the cavity with feathers. They readily accept nest boxes and have
            become one of the most-studied birds in North America as a result. Four to
            six eggs per clutch, incubated by the female. They arrive early in spring —
            sometimes March — and the ability to eat berries lets them survive cold
            stretches that would strand other swallows. In fall, large flocks gather in
            coastal areas, feeding on bayberries, before migrating to the Gulf Coast and
            Central America. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 20 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of about 30% between
            1966 and 2019. [3] The IUCN lists it as Least Concern. [4] Loss of dead trees
            that provide natural cavities is a primary driver of decline; nest boxes
            partially offset this. Declining insect populations over open water also reduce
            food availability. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A nest box with a 1 1/2-inch entry hole, mounted on a pole in an open area
              near water, draws Tree Swallows reliably. Space boxes at least 25 feet apart
              to reduce competition. [5]
            </li>
            <li>
              Dead trees and snags left standing near water provide natural nest cavities.
              A single standing dead tree can support multiple years of Tree Swallow
              nesting. [5]
            </li>
            <li>
              Native bayberry and wax myrtle plantings provide the berries Tree Swallows
              eat in cold snaps and during fall migration staging. [5]
            </li>
            <li>
              Skipping insecticides preserves the aquatic and aerial insects that make up
              the diet through the breeding season. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('purple-martin')}>
            <span className="neighbor-name">Purple Martin</span>
            <span className="neighbor-note">A larger colonial swallow that shares the same open habitats and nest box competition.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-bluebird')}>
            <span className="neighbor-name">Eastern Bluebird</span>
            <span className="neighbor-note">A common nest box competitor; pair boxes 5 to 25 feet apart to allow both species to coexist.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('chimney-swift')}>
            <span className="neighbor-name">Chimney Swift</span>
            <span className="neighbor-note">Another aerial insect hunter that sweeps the same skies over open water and fields.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A ground-feeding neighbor of the same wet edges and marshy areas where swallows hunt above.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Tree_Swallow/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Tree Swallow (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/tree-swallow-tachycineta-bicolor" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Tree Swallow</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
