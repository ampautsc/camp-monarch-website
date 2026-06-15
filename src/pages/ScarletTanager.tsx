import type { Page } from '../App'

interface ScarletTanagerProps {
  onNavigate: (page: Page) => void
}

export default function ScarletTanager({ onNavigate }: ScarletTanagerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Scarlet_tanager_in_GWC_%2825303%29.jpg/1280px-Scarlet_tanager_in_GWC_%2825303%29.jpg"
          alt="A male Scarlet Tanager perched in a tree, showing its brilliant red body and jet-black wings and tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={921}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Scarlet_tanager_in_GWC_(25303).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Scarlet Tanager</h1>
        <p className="hero__lead">
          The male Scarlet Tanager is one of the most striking birds in eastern North
          America — brilliant red body, jet-black wings and tail, no other markings.
          Females are olive-yellow with dark wings. They live in the canopy of mature
          deciduous forest, where they are heard far more often than seen. After breeding,
          males molt into an olive-green plumage similar to the female before migrating
          to South America for the winter. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Scarlet Tanagers forage in the forest canopy, picking caterpillars, beetles,
            wasps, ants, and other insects from leaves and bark. They occasionally hawk
            insects in the air. Their song is a series of burry, robin-like phrases —
            a robin with a sore throat, as it is often described. The sharp &quot;chip-burr&quot;
            call note is distinctive and useful for finding them in the canopy. They favor
            the interior of large, intact forest patches and are rarely found in small
            fragments. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/20240718_immature_scarlet_tanager_pleasant_valley_PD206172_02.jpg/1280px-20240718_immature_scarlet_tanager_pleasant_valley_PD206172_02.jpg"
            alt="An immature Scarlet Tanager perched on a branch, showing the olive-yellow and dark-winged plumage of non-breeding birds"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Females and immature males are olive-yellow with dark wings — a very different
            look from the brilliant red breeding male, but equally distinctive once recognized.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20240718_immature_scarlet_tanager_pleasant_valley_PD206172_02.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Scarlet Tanagers arrive in eastern forests in early to mid-May, one of the
            latest spring migrants. Males arrive first and begin singing immediately to
            establish territories. They build a shallow cup nest on a horizontal branch
            high in the canopy. After the breeding season ends in July and August, males
            undergo a complete molt into olive-yellow plumage. They depart for South
            America by October, wintering in the northern Andes from Colombia to Bolivia.
            [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 2.7 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of approximately 16%
            since 1970. [3] The IUCN lists it as Least Concern. [4] As a forest-interior
            specialist, it is particularly vulnerable to forest fragmentation — small
            patches surrounded by edge habitat have much lower nesting success due to
            Brown-headed Cowbird parasitism and increased predation. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Large, contiguous forest patches provide the interior habitat Scarlet Tanagers
              require. Maintaining forest connectivity — green corridors linking patches —
              supports both breeding success and migration staging. [5]
            </li>
            <li>
              Native oaks support the caterpillar populations that Scarlet Tanagers depend
              on during the energy-intensive nesting period. A single oak tree can support
              hundreds of caterpillar species. [5]
            </li>
            <li>
              Skipping pesticides preserves the insects and caterpillars tanagers feed to
              nestlings during the critical first weeks after hatching. [5]
            </li>
            <li>
              Supporting tropical forest conservation in the Andes protects the wintering
              grounds where Scarlet Tanagers spend half the year. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A fellow mature-forest specialist that arrives the same week in May and faces the same fragmentation pressures.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ovenbird')}>
            <span className="neighbor-name">Ovenbird</span>
            <span className="neighbor-note">A ground-level forest bird that shares the same interior woodland and the same cowbird pressure in small patches.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-wood-pewee')}>
            <span className="neighbor-name">Eastern Wood-Pewee</span>
            <span className="neighbor-note">A neotropical migrant that hunts the same canopy airspace and migrates the same corridor south.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('baltimore-oriole')}>
            <span className="neighbor-name">Baltimore Oriole</span>
            <span className="neighbor-note">Another brilliant canopy neotropical migrant that arrives the same May week in the same tall trees.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Scarlet_Tanager/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Scarlet Tanager (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/scarlet-tanager-piranga-olivacea" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Scarlet Tanager</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
