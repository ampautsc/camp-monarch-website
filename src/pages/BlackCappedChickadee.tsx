import type { Page } from '../App'

interface BlackCappedChickadeeProps {
  onNavigate: (page: Page) => void
}

export default function BlackCappedChickadee({ onNavigate }: BlackCappedChickadeeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/20240314_black_capped_chickadee_earle_park_PD203908.jpg/1280px-20240314_black_capped_chickadee_earle_park_PD203908.jpg"
          alt="A Black-capped Chickadee with a black cap and bib, white cheeks, and gray back, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20240314_black_capped_chickadee_earle_park_PD203908.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Black-capped Chickadee</h1>
        <p className="hero__lead">
          The Black-capped Chickadee is a small, active bird with a black cap and bib, white
          cheeks, a gray back, and buff flanks. It lives year-round across the northern half
          of the United States and southern Canada, in forests, woodlands, parks, and
          backyards. Its two-note &quot;fee-bee&quot; whistle and its buzzy &quot;chick-a-dee-
          dee-dee&quot; call are among the most recognizable bird sounds in North
          America. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Black-capped Chickadees eat insects, seeds, and berries, gleaning caterpillars and
            insect eggs from twigs and bark and visiting feeders for sunflower seed and suet.
            They cache food in hundreds of different locations and can remember where they put
            each item for weeks. In winter they form mixed-species flocks with nuthatches,
            Downy Woodpeckers, and creepers, moving through the woods as a group. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Black-capped_chickadee_%2831171%29.jpg/1280px-Black-capped_chickadee_%2831171%29.jpg"
            alt="A Black-capped Chickadee clinging to a small branch"
            width={1280}
            height={984}
            loading="lazy"
          />
          <figcaption>
            Chickadees forage acrobatically on small twigs and branches, often hanging upside
            down to reach insects and seeds.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Black-capped_chickadee_(31171).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Chickadees do not migrate. Pairs excavate a nest cavity in soft, rotting wood or
            use an existing hole or nest box, lining the cavity with moss, animal fur, and
            plant fibers. Six to eight eggs per clutch, incubated by the female for about
            twelve days. In winter they enter a state of regulated hypothermia on cold nights,
            lowering their body temperature by up to 12°F to conserve energy. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 43 million. [2] The
            U.S. Breeding Bird Survey shows a slight overall increase since 1966, with eastern
            populations growing while western populations have declined somewhat. [3] The IUCN
            lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dead trees and dead branches left standing provide the soft, rotting wood
              chickadees excavate for nest cavities. A nest box with a 1 1/8-inch entry hole
              is an alternative. [5]
            </li>
            <li>
              Native trees and shrubs, especially oaks, birches, and willows, host the
              caterpillars that make up the majority of the diet during nesting season. A
              single clutch of chickadees requires 6,000 to 9,000 caterpillars to reach
              fledging. [5]
            </li>
            <li>
              A feeder with black-oil sunflower seed or suet provides reliable food in
              winter. [5]
            </li>
            <li>
              Skipping pesticides preserves the caterpillar populations chickadees depend on
              to feed their young. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">Joins the same mixed winter flocks, working the trunk while the chickadee works the outer branches.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">A winter ground-feeder that forages below the trees where chickadee flocks are working above.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round feeder neighbor that takes seeds from the platform while the chickadee takes one at a time and flies off to eat it.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another small year-round bird that shares feeders and backyards.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Black-capped_Chickadee/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Black-capped Chickadee (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/black-capped-chickadee-poecile-atricapillus" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Black-capped Chickadee</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
