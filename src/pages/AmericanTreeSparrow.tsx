import type { Page } from '../App'

interface AmericanTreeSparrowProps {
  onNavigate: (page: Page) => void
}

export default function AmericanTreeSparrow({ onNavigate }: AmericanTreeSparrowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/American_Tree_Sparrow%2C_Housatonic_Valley_WMA%2C_New_Lenox%2C_MA_USA.jpg/1280px-American_Tree_Sparrow%2C_Housatonic_Valley_WMA%2C_New_Lenox%2C_MA_USA.jpg"
          alt="An American Tree Sparrow perched on a branch, showing its rufous cap, gray face, white wing bars, and single dark breast spot"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_Tree_Sparrow,_Housatonic_Valley_WMA,_New_Lenox,_MA_USA.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Tree Sparrow</h1>
        <p className="hero__lead">
          The American Tree Sparrow is a winter visitor across most of the contiguous
          United States, arriving in late October and departing by April. It has a rufous
          cap, a gray face with a thin rufous eye stripe, two white wing bars, and a
          single dark dot in the center of an otherwise clean gray breast. Despite its
          name, it spends little time in trees — it forages mainly on the ground and in
          low shrubs. It breeds in the Arctic and subarctic tundra edge of Canada and
          Alaska. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            American Tree Sparrows forage on the ground and in low weedy vegetation,
            eating seeds of grasses, sedges, goldenrod, ragweed, and other native plants.
            They scratch at the snow surface to expose seeds and glean from seed heads
            standing above it. In winter they form flocks of 30 to 40 birds that move
            together through fields, shrubby edges, and weedy roadsides. They visit
            feeders in cold weather and take millet, milo, and sunflower chips from
            platform and ground feeders. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/American_tree_sparrow_in_CP_%2841272%29.jpg/1280px-American_tree_sparrow_in_CP_%2841272%29.jpg"
            alt="An American Tree Sparrow perched on a branch in winter, showing its rufous cap and gray breast with central spot"
            width={1280}
            height={1456}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            The single dark spot on an otherwise plain gray breast separates this species
            from the similar-looking Field Sparrow, which lacks the spot.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_tree_sparrow_in_CP_(41272).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            American Tree Sparrows breed in the northern boreal edge and tundra, nesting
            on or near the ground in dense low vegetation among willows and alders.
            They arrive in the northern US in late October, often before the first snow,
            and depart northward in March and April. The same winter territories are used
            by the same individual birds year after year. Partners in Flight estimates
            that a single Tree Sparrow eats about 875 pounds of seeds over a winter
            on the continent — an enormous contribution to seed dispersal. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 29 million. [2]
            The U.S. Breeding Bird Survey shows a long-term stable to slightly declining
            trend. [3] The IUCN lists it as Least Concern. [4] Loss of weedy fields and
            shrubby open habitat on the wintering grounds — habitat not managed for
            birds — reduces food availability during winter, but the species remains common.
            [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leaving native plant seed heads standing through winter — goldenrod, sunflower,
              coneflower, aster, grasses — provides exactly what American Tree Sparrows
              forage for through December and February. [5]
            </li>
            <li>
              A ground-level or platform feeder with white millet in December through March
              attracts winter flocks during cold snaps. [5]
            </li>
            <li>
              Leaving weedy or shrubby areas at field edges and in corners provides foraging
              cover for winter flocks that need to retreat quickly when predators appear. [5]
            </li>
            <li>
              Avoiding winter yard cleanup — not clearing dead stems and leaf litter until
              spring — maintains the seed-bearing material sparrows depend on. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">Arrives from the same northern breeding grounds and forages in the same winter seed flocks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A year-round resident that joins the same weedy-edge winter flocks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Forages in the same goldenrod and thistle patches for seeds through the winter months.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
            <span className="neighbor-name">Black-capped Chickadee</span>
            <span className="neighbor-note">Another cold-hardy winter feeder visitor that often arrives at the same feeders Tree Sparrows use.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/American_Tree_Sparrow/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: American Tree Sparrow (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/american-tree-sparrow-spizelloides-arborea" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — American Tree Sparrow</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
