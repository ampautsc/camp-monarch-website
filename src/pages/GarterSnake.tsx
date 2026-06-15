import type { Page } from '../App'

interface GarterSnakeProps {
  onNavigate: (page: Page) => void
}

export default function GarterSnake({ onNavigate }: GarterSnakeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Common_Garter_Snake_-_Thamnophis_sirtalis_%2846916271911%29.jpg/1280px-Common_Garter_Snake_-_Thamnophis_sirtalis_%2846916271911%29.jpg"
          alt="A Common Garter Snake resting on a log, showing its dark body with three yellow stripes running from head to tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Christina Butler&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Common_Garter_Snake_-_Thamnophis_sirtalis_(46916271911).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Garter Snake</h1>
        <p className="hero__lead">
          The Common Garter Snake is the most widespread snake in North America, found
          in every habitat from suburban gardens to prairie to forest. It is slender,
          typically 2 to 3 feet long, and striped in yellow, green, or red on a darker
          background — though color varies widely by region. It is harmless to people,
          controls slugs, earthworms, frogs, and small rodents, and is active during
          the day. It is the snake most likely to be seen in any eastern yard. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Garter snakes emerge in the morning to bask and raise their body
            temperature, then spend the day hunting. They follow earthworm trails
            through moist soil, hunt frogs and toads along pond and stream edges, and
            take salamanders and small fish in shallow water. They swim readily.
            When alarmed, a garter snake will flatten and musk — releasing a foul-
            smelling cloacal secretion — before biting. Their saliva is mildly toxic
            to amphibians and small prey but causes no significant reaction in people.
            They are preyed on by red-tailed hawks, herons, raccoons, and larger snakes.
            [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Common_Garter_Snake_%28Thamnophis_sirtalis%29_-_Flickr_-_GregTheBusker.jpg/1280px-Common_Garter_Snake_%28Thamnophis_sirtalis%29_-_Flickr_-_GregTheBusker.jpg"
            alt="A Common Garter Snake moving through grass, its tongue extended, showing its characteristic striped pattern"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            The flickering tongue collects chemical particles from the air and delivers
            them to the Jacobson&apos;s organ in the roof of the mouth — a sense organ
            that gives garter snakes a detailed chemical picture of their surroundings.
            <span className="photo-credit"> Photo: Greg Schechter&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Common_Garter_Snake_(Thamnophis_sirtalis)_-_Flickr_-_GregTheBusker.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Garter snakes hibernate from October to April in communal dens — rock
            crevices, mammal burrows, or building foundations — sometimes with hundreds
            of individuals. Spring emergence triggers mating, with multiple males
            pursuing a single female in a writhing mating ball. Young are born live —
            10 to 40 per litter — from July through September, after a roughly three-
            month gestation. Newborns are 5 to 8 inches long and fully independent.
            Adult females typically breed every other year. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Common Garter Snake is listed as Least Concern by the IUCN and remains
            locally abundant through most of its range. [2] Mortality from vehicles and
            from deliberate killing by people who misidentify them as dangerous are
            significant threats. Garter snakes bioaccumulate pesticides from the prey
            they eat — worms, frogs, and insects — making them sensitive indicators
            of pesticide load in the local environment. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Never kill a garter snake. They eat slugs, cutworm moths, and
              voles that damage gardens, and they control frog populations near
              ponds. A garter snake in the garden is providing active pest
              control. [3]
            </li>
            <li>
              Leave brush piles, flat rocks, and loose boards at yard edges. Garter
              snakes use these for thermoregulation (warming up in the morning) and
              for shelter between foraging bouts. [3]
            </li>
            <li>
              Reduce pesticide use, especially near wet areas. Garter snakes sit
              high enough in the food chain to bioaccumulate toxins from every worm,
              frog, and insect they eat through the season. [3]
            </li>
            <li>
              Create or maintain a small pond or rain garden. Water attracts the
              frogs, toads, and earthworms that garter snakes depend on as their
              primary food sources through the summer. [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-chipmunk')}>
            <span className="neighbor-name">Eastern Chipmunk</span>
            <span className="neighbor-note">Shares the same forest floor and is occasionally taken as prey; both species are most active along the same rocky and brushy edges.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">One of the most important predators of garter snakes, hunting them from perches over the same open and edge habitats where snakes bask.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-tree-frogs')}>
            <span className="neighbor-name">Gray Tree Frogs</span>
            <span className="neighbor-note">A primary prey species for garter snakes near ponds and wet edges — the same breeding choruses that attract birds also draw in hunting snakes.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('virginia-opossum')}>
            <span className="neighbor-name">Virginia Opossum</span>
            <span className="neighbor-note">Shares the same ground-level suburban and forest edge habitat; opossums are largely immune to pit viper venom, and garter snakes are completely harmless to them.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Thamnophis_sirtalis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Common Garter Snake</a></li>
            <li><a href="https://www.iucnredlist.org/species/62320/12594598" target="_blank" rel="noopener noreferrer">IUCN Red List — Common Garter Snake</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
