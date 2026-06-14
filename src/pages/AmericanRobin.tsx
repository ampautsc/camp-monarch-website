import type { Page } from '../App'

interface AmericanRobinProps {
  onNavigate: (page: Page) => void
}

export default function AmericanRobin({ onNavigate }: AmericanRobinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/American_robin_%2871307%29.jpg/1280px-American_robin_%2871307%29.jpg"
          alt="An American Robin on a lawn, gray back and brick-orange breast, in the head-tilted pause it uses to find earthworms"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          width={1280}
          height={961}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_robin_(71307).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Robin</h1>
        <p className="hero__lead">
          The American Robin is one of the most widespread birds in North America. It lives on
          lawns, in parks, gardens, and at the edges of woods, and it feeds in the open during the
          day. Males and females look much alike, with a gray back and a brick-orange breast,
          though the female&apos;s colors are a little duller. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            On the ground, robins forage in short bursts: a few quick steps, a stop, a cock of the
            head, then a strike. They eat mostly earthworms and insects in the morning and shift to
            fruit later in the day, taking berries, crabapples, and other small fruits from trees
            and shrubs. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/American_Robin.jpg"
            alt="An American Robin on grass, head cocked toward the ground just before pulling an earthworm"
            width={1024}
            height={683}
            loading="lazy"
          />
          <figcaption>
            The head-tilt is the bird locating a worm by sight and sound before it strikes.
            <span className="photo-credit"> Photo: Alan Vernon&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_Robin.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            A female builds a cup of mud and grass on a branch or a ledge and lines it with finer
            grass. The eggs are pale blue. A pair usually raises two or three broods between April
            and July. Robins stay all year across much of their range, but they are less visible in
            winter, when they leave lawns for woods and fruiting trees, gather into flocks, and
            roost together at night, sometimes in the thousands. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The American Robin is common, and its numbers are stable. Partners in Flight puts the
            breeding population near 370 million, [1][2] and the U.S. Breeding Bird Survey shows a
            slight increase since 1966. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A lawn and garden kept off pesticides leaves robins the worms and insects they depend
              on, most of all when they are feeding young.
            </li>
            <li>
              Native fruiting trees and shrubs give them food in the colder months; serviceberry,
              dogwood, and winterberry are examples.
            </li>
            <li>
              A shallow dish of clean water, set on or near the ground, gets used for drinking and
              bathing.
            </li>
            <li>
              Robins fly fast and low, so windows with screens or visible patterns on the outside
              prevent most collisions.
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">Works the same lawn edges and leaf litter the robin does, mostly through the winter months.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round neighbor that shares the same shrubby yard edges and winter fruit.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another familiar yard bird, feeding on seeds where the robin hunts worms and fruit.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/American_Robin/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: American Robin (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/american-robin-turdus-migratorius" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — American Robin</a></li>
            <li><a href="https://www.audubon.org/field-guide/bird/american-robin" target="_blank" rel="noopener noreferrer">Audubon Field Guide — American Robin</a></li>
            <li><a href="https://www.fws.gov/species/american-robin-turdus-migratorius" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service — American Robin</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
