import type { Page } from '../App'

interface EasternGraySquirrelProps {
  onNavigate: (page: Page) => void
}

export default function EasternGraySquirrel({ onNavigate }: EasternGraySquirrelProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Grey_squirrel_%28Sciurus_carolinensis%29_01.jpg/1280px-Grey_squirrel_%28Sciurus_carolinensis%29_01.jpg"
          alt="An Eastern Gray Squirrel sitting upright on a branch, showing its gray fur and bushy tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Charles J. Sharp&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Grey_squirrel_(Sciurus_carolinensis)_01.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Gray Squirrel</h1>
        <p className="hero__lead">
          The Eastern Gray Squirrel is the most familiar tree squirrel in eastern North
          America — gray above with a white or pale underside, a broad bushy tail edged
          with white-tipped hairs, and large dark eyes. It is active during the day,
          moves confidently through tree canopy and across the ground, and is a common
          visitor to suburban yards and parks across the eastern United States. It is also
          one of the most important seed dispersers for oaks, beeches, and hickories. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Gray Squirrels are scatter hoarders, burying individual nuts and seeds
            in the ground throughout their home range rather than storing them together in
            one cache. They can relocate buried nuts using their sense of smell through several
            inches of snow. Because they fail to find every nut they bury — estimates suggest
            25% or more are never retrieved — they are responsible for planting a significant
            number of oaks and other trees each year. They also eat buds, bark, mushrooms,
            insects, and occasionally bird eggs. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Grey_squirrel_%28Sciurus_carolinensis%29_02.jpg/1280px-Grey_squirrel_%28Sciurus_carolinensis%29_02.jpg"
            alt="An Eastern Gray Squirrel on a tree trunk, showing its agile posture and alert expression"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Eastern Gray Squirrels are equally at home in tree canopy and on the ground,
            moving between them dozens of times per day as they forage, cache, and watch for predators.
            <span className="photo-credit"> Photo: Charles J. Sharp&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Grey_squirrel_(Sciurus_carolinensis)_02.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Gray Squirrels breed twice a year — in late December or January and
            again in June. Litters of two to four young are born after a 44-day gestation
            in a tree cavity or a large leaf nest (called a drey) built in the fork of a
            tree. Young squirrels are weaned at about 10 weeks and are on their own by
            12 to 14 weeks. They do not hibernate; they remain active year-round, relying
            on their buried food caches through winter. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Gray Squirrel is abundant and not of conservation concern. [2] The
            IUCN lists it as Least Concern. [3] Its populations are closely tied to mast
            production — in years of heavy acorn and nut crops, more young survive winter,
            and populations can be noticeably higher the following spring. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native oaks, hickories, beeches, and walnuts produce the mast crop that
              fuels squirrel populations through the winter. Planting native mast trees
              benefits squirrels, birds, and the forest that squirrels help regenerate. [4]
            </li>
            <li>
              Tree cavities are the preferred nesting site. Leaving large, old trees —
              including dead snags — provides natural cavity resources for nesting
              squirrels and the woodpeckers that create those cavities. [4]
            </li>
            <li>
              Skipping rodenticides preserves squirrels and prevents secondary poisoning
              of the hawks and foxes that depend on them as a food source. [4]
            </li>
            <li>
              Keeping cats indoors reduces predation on juvenile squirrels, which are most
              vulnerable in the first few weeks after leaving the nest. [4]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-chipmunk')}>
            <span className="neighbor-name">Eastern Chipmunk</span>
            <span className="neighbor-note">A fellow nut-caching mammal that works the same forest floor, often foraging within a few feet of a squirrel.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">A woodpecker that excavates the tree cavities that squirrels later use for nesting.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">A major predator of gray squirrels that hunts from the same treetops squirrels move through.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-fox')}>
            <span className="neighbor-name">Red Fox</span>
            <span className="neighbor-note">A ground-level predator of squirrels that moves through the same woodland edges and suburban yards.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Sciurus_carolinensis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Gray Squirrel</a></li>
            <li><a href="https://animaldiversity.org/accounts/Sciurus_carolinensis/" target="_blank" rel="noopener noreferrer">Animal Diversity Web: Eastern Gray Squirrel (status information)</a></li>
            <li><a href="https://www.iucnredlist.org/species/42462/22240475" target="_blank" rel="noopener noreferrer">IUCN Red List — Eastern Gray Squirrel</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
