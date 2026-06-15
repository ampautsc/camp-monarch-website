import type { Page } from '../App'

interface RedTailedHawkProps {
  onNavigate: (page: Page) => void
}

export default function RedTailedHawk({ onNavigate }: RedTailedHawkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Red-tailed_hawk_in_Central_Park_%2824796%29.jpg/1280px-Red-tailed_hawk_in_Central_Park_%2824796%29.jpg"
          alt="A Red-tailed Hawk perched on a branch, showing its brown upperparts, pale breast with a dark belly band, and rusty-red tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Red-tailed_hawk_in_Central_Park_(24796).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Red-tailed Hawk</h1>
        <p className="hero__lead">
          The Red-tailed Hawk is the most common and widespread hawk in North America, found
          year-round from Alaska to Panama. It is a large buteo with brown upperparts, a pale
          breast with a dark belly band of streaks, and — in adults — a distinctive brick-red
          tail that flashes in sunlight when the bird soars. The piercing scream used in
          nearly every movie or TV scene involving an eagle is actually a Red-tailed
          Hawk. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Red-tailed Hawks hunt by soaring on thermals over open ground or perching on
            a tall tree, pole, or highway overpass, scanning for movement below. They drop
            in a steep dive to strike prey with their talons. Small mammals — voles, mice,
            rabbits, squirrels, and ground squirrels — make up the bulk of the diet. They
            also take other birds, snakes, and carrion. A pair will defend a hunting
            territory year-round. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Buteo_jamaicensis_in_flight_at_Llano_Seco-1520.jpg/1280px-Buteo_jamaicensis_in_flight_at_Llano_Seco-1520.jpg"
            alt="A Red-tailed Hawk soaring in flight, showing the rusty-red tail from above"
            width={1280}
            height={600}
            loading="lazy"
          />
          <figcaption>
            In flight, adults show the brick-red tail that gives the species its name.
            Young birds have brown-banded tails and can take two years to acquire the
            adult plumage.
            <span className="photo-credit"> Photo: Frank Schulenburg&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Buteo_jamaicensis_in_flight_at_Llano_Seco-1520.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Red-tailed Hawks nest in tall trees at the edge of open ground, building a
            large stick platform that pairs add to over several years. One to three eggs
            per clutch, incubated by both parents. Young hawks remain near the nest for
            weeks after fledging. Pairs often mate for life and use the same territory
            for years. Northern populations are partially migratory, shifting south in
            winter; southern and western birds are year-round residents. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 3.1 million. [2]
            The U.S. Breeding Bird Survey shows a population increase of about 1.3% per
            year between 1966 and 2019. [3] The IUCN lists it as Least Concern. [4]
            Red-tailed Hawks have benefited from the proliferation of highway overpasses
            and utility poles that provide hunting perches, and from the expansion of
            open habitat in the East as farmland cleared forests. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Tall trees left standing at the edge of open ground provide the nest sites
              and hunting perches Red-tailed Hawks use. A mature tree at the edge of a
              meadow or field is premium habitat. [5]
            </li>
            <li>
              Unmowed areas, meadows, and native grasslands support the vole and mouse
              populations that make up the core of the diet. [5]
            </li>
            <li>
              Rodenticides — especially second-generation anticoagulant rodenticides used
              in and around buildings — kill hawks and owls that eat poisoned rodents. Using
              snap traps or other methods that do not leave toxic carcasses protects
              these predators. [5]
            </li>
            <li>
              Keeping cats and dogs from nest trees during breeding season reduces
              disturbance to nesting pairs. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">A small nocturnal predator that hunts the same yards and woodlots where Red-tailed Hawks hunt by day.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-kestrel')}>
            <span className="neighbor-name">American Kestrel</span>
            <span className="neighbor-note">A smaller falcon that hunts the same open fields and perches on the same utility wires.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">A common yard bird that often mobbs Red-tailed Hawks that land too close to nests.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">A ground-foraging woodpecker that shares the same open-edge habitats and is occasionally taken as prey.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Red-tailed_Hawk/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Red-tailed Hawk (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/red-tailed-hawk-buteo-jamaicensis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Red-tailed Hawk</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
