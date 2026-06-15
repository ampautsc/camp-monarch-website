import type { Page } from '../App'

interface BaltimoreOrioleProps {
  onNavigate: (page: Page) => void
}

export default function BaltimoreOriole({ onNavigate }: BaltimoreOrioleProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Baltimore_oriole_in_GWC_%2821861%29.jpg/1280px-Baltimore_oriole_in_GWC_%2821861%29.jpg"
          alt="A male Baltimore Oriole with bright orange and black plumage perched in a tree"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1002}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Baltimore_oriole_in_GWC_(21861).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Baltimore Oriole</h1>
        <p className="hero__lead">
          The Baltimore Oriole is a medium-sized songbird with a pointed bill, long tail, and
          vivid orange-and-black plumage in males. Females are yellowish-orange below with
          grayish-olive upperparts. It breeds across the eastern United States and southern
          Canada, arriving in late April or May and departing for Central America and northern
          South America by September. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Baltimore Orioles forage high in the canopy, gleaning caterpillars, beetles, and
            other insects from leaves and branches. They also eat fruit and nectar, visiting
            flowering trees in spring and ripe mulberries, cherries, and serviceberries in
            summer. At feeders they take orange halves, grape jelly, and sugar water from
            oriole feeders. Their song is a series of rich, whistled notes delivered from
            high perches. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/20240511_male_baltimore_oriole_south_meadows_PD204233.jpg/1280px-20240511_male_baltimore_oriole_south_meadows_PD204233.jpg"
            alt="A male Baltimore Oriole in a tree, showing bright orange breast and black head"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Males are brilliant orange and black. Orioles forage in the canopy for
            caterpillars and fruit, often high enough that only the song gives them away.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20240511_male_baltimore_oriole_south_meadows_PD204233.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Females weave a hanging, pouch-shaped nest from plant fibers, bark strips, and
            string, suspended from the tip of a drooping branch, usually in an elm, maple,
            or cottonwood. Four to five eggs. The nest takes about a week to build and hangs
            like a sock, swinging in the wind. By late summer, orioles form loose flocks and
            begin migrating south. They winter from southern Mexico through Central America
            to northern South America. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 12 million. [2] The
            U.S. Breeding Bird Survey shows a decline of about 24% between 1966 and 2019. [3]
            Loss of shade trees in suburban areas and pesticide reduction of caterpillar prey
            are possible contributors. [1] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native shade trees such as elms, maples, and cottonwoods provide both nesting
              sites and the caterpillar prey orioles feed their young. [5]
            </li>
            <li>
              Fruit-bearing trees and shrubs — mulberry, serviceberry, cherry — attract
              orioles throughout the breeding season. [5]
            </li>
            <li>
              Orange halves and grape jelly set out from late April through August draw
              orioles to yards. Oriole nectar feeders also work. [5]
            </li>
            <li>
              Skipping pesticides preserves the caterpillars and beetles that make up most of
              the breeding-season diet. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another bright-colored summer bird of the same yards and field edges.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('indigo-bunting')}>
            <span className="neighbor-name">Indigo Bunting</span>
            <span className="neighbor-note">A fellow neotropical migrant that arrives the same week in spring and sings from the same treetops.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">A fruit-eating neighbor that shares the same berry-laden trees in summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round yard bird that stays through the winter the oriole leaves behind.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Baltimore_Oriole/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Baltimore Oriole (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/baltimore-oriole-icterus-galbula" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Baltimore Oriole</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
