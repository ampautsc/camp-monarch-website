import type { Page } from '../App'

interface WhipPoorWillProps {
  onNavigate: (page: Page) => void
}

export default function WhipPoorWill({ onNavigate }: WhipPoorWillProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Caprimulgus_vociferus_Sam_Smith_Park_toronto.jpg/1280px-Caprimulgus_vociferus_Sam_Smith_Park_toronto.jpg"
          alt="An Eastern Whip-poor-will perched on a log, showing its cryptically mottled brown and gray plumage that blends with dead leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={870}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Mykola Swarnyk&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Caprimulgus_vociferus_Sam_Smith_Park_toronto.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Whip-poor-will</h1>
        <p className="hero__lead">
          The Eastern Whip-poor-will is a nocturnal bird of open forests and forest edges,
          cryptically camouflaged in mottled brown, black, and gray so that it is nearly
          invisible on the ground or a branch. It is named for its call — a sharp, insistent
          &quot;whip-poor-WILL&quot; repeated rapidly, sometimes hundreds of times without
          pause. On summer nights in eastern woodlands, the call is one of the most
          distinctive sounds of the season. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Whip-poor-wills spend the day roosting motionless on the ground, on logs, or on
            low branches, relying on camouflage for concealment. At dusk they begin calling
            from perches and then take to the air, hunting moths, beetles, and large flying
            insects with a wide, gaping mouth. Their eyes are large and reflect reddish in
            light at night. Calling males repeat their song relentlessly — 1,088 calls
            in a row has been documented — before pausing. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Antrostomus_vociferus%2C_Lancaster%2C_Massachusetts_2.jpg/1280px-Antrostomus_vociferus%2C_Lancaster%2C_Massachusetts_2.jpg"
            alt="An Eastern Whip-poor-will at rest on the forest floor, its plumage virtually invisible among leaf litter"
            width={1280}
            height={1672}
            loading="lazy"
            style={{ objectPosition: 'center center' }}
          />
          <figcaption>
            On the ground or on bark, the mottled plumage makes the Whip-poor-will nearly
            impossible to spot. Most people hear the call long before ever seeing the bird.
            <span className="photo-credit"> Photo: ALAN SCHMIERER&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Antrostomus_vociferus,_Lancaster,_Massachusetts_2.jpg" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Whip-poor-wills arrive on their breeding grounds in April and May, timed to
            coincide with the peak emergence of large moths shortly before the full moon —
            bright moonlit nights increase hunting success. They lay two eggs directly on
            leaf litter with no nest construction. After breeding, they migrate to the
            Caribbean and Central America for the winter. Their arrival and departure are
            closely tied to the lunar cycle. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 1.7 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of approximately 69%
            since 1970. [3] The IUCN lists it as Least Concern, though it is listed as
            Threatened in Canada. [4] The collapse of large moth populations due to
            pesticide use and light pollution is the most likely driver of decline. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Turning off or shielding outdoor lights at night reduces light pollution that
              disrupts large moth populations — the primary food source for Whip-poor-wills.
              [5]
            </li>
            <li>
              Skipping pesticides preserves moths and large nocturnal insects. A single
              female feeding nestlings may catch thousands of moths per night. [5]
            </li>
            <li>
              Native trees and shrubs that support abundant caterpillar and moth populations
              — particularly oaks, cherries, and native willows — support the insects
              Whip-poor-wills depend on. [5]
            </li>
            <li>
              Maintaining forest edges and young forest adjacent to open areas — the habitat
              Whip-poor-wills hunt over — is as important as the interior forest where they
              roost. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
            <span className="neighbor-name">Common Nighthawk</span>
            <span className="neighbor-note">A close relative in the nightjar family that hunts the same summer nights, above open areas rather than forest edges.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">Another nocturnal hunter that shares the same summer woodlands and hunts through the same dark hours.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A forest-interior bird whose evening song overlaps with the start of the Whip-poor-will&apos;s calling period.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('chimney-swift')}>
            <span className="neighbor-name">Chimney Swift</span>
            <span className="neighbor-note">An aerial insectivore that hunts the same dusk hours, taking over the sky just before the Whip-poor-will takes over the night.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Whip-poor-will/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Whip-poor-will (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-whip-poor-will-antrostomus-vociferus" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Whip-poor-will</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
