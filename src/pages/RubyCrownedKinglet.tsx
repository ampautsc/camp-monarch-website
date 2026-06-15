import type { Page } from '../App'

interface RubyCrownedKingletProps {
  onNavigate: (page: Page) => void
}

export default function RubyCrownedKinglet({ onNavigate }: RubyCrownedKingletProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/20250422_ruby_crowned_kinglet_wood_parcel_PD206778.jpg/1280px-20250422_ruby_crowned_kinglet_wood_parcel_PD206778.jpg"
          alt="A Ruby-crowned Kinglet perched on a branch, showing its olive-green plumage, bold white eye ring, and two white wing bars"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20250422_ruby_crowned_kinglet_wood_parcel_PD206778.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Ruby-crowned Kinglet</h1>
        <p className="hero__lead">
          The Ruby-crowned Kinglet is one of the smallest songbirds in North America —
          about 4 inches long, weighing less than a quarter — with olive-green plumage,
          a bold white eye ring, and two white wing bars. Males have a ruby-red crown
          patch that is usually concealed but flashes bright when the bird is excited.
          It breeds in northern coniferous forests and winters across the southern United
          States, passing through much of the continent each spring and fall. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Ruby-crowned Kinglets are in near-constant motion, flitting through foliage
            and flickering their wings rapidly as they glean tiny insects, insect eggs,
            and spiders from leaves, twigs, and bark. The wing-flicking is nearly
            constant — a useful field mark even when the bird is moving too fast to see
            clearly. They also hover briefly to pick prey from the undersides of leaves.
            Despite their tiny size, their song is surprisingly loud: a long, cascading
            series of notes that ends in a three-note repetition. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ruby-crowned_kinglet_%2813478%29.jpg/1280px-Ruby-crowned_kinglet_%2813478%29.jpg"
            alt="A Ruby-crowned Kinglet in a bush showing its small size and olive plumage"
            width={1280}
            height={1001}
            loading="lazy"
          />
          <figcaption>
            The ruby crown patch is usually hidden but flares when the bird is agitated.
            The constant wing-flicking is the most reliable field mark in motion.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Ruby-crowned_kinglet_(13478).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Ruby-crowned Kinglets breed in spruce-fir forests across boreal Canada, Alaska,
            and high western mountains. The female builds a deep cup nest suspended from a
            conifer branch, often laying 7 to 12 eggs — one of the largest clutches relative
            to body size of any North American songbird. In fall and winter they move south
            through the entire continent. They appear in yards and woodlots as early as
            September, often the first migrants of the fall wave, and linger into November
            and beyond. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the global breeding population at about 100 million.
            [2] The U.S. Breeding Bird Survey shows a stable to increasing population. [3]
            The IUCN lists it as Least Concern. [4] The species has shown a 23% increase
            over the past decade in some monitoring data. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native conifers — spruce, fir, and white pine — provide winter foraging
              habitat for kinglets, which glean insects from needles and bark throughout
              the cold months. [5]
            </li>
            <li>
              Native deciduous shrubs and understory trees provide additional insect prey
              and stopover habitat during spring and fall migration. [5]
            </li>
            <li>
              Skipping pesticides preserves the tiny insects and spider eggs that make up
              the diet of one of the smallest insectivores in North America. [5]
            </li>
            <li>
              Supporting boreal forest conservation directly protects the breeding range
              where most of the population nests. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('yellow-rumped-warbler')}>
            <span className="neighbor-name">Yellow-rumped Warbler</span>
            <span className="neighbor-note">Often arrives the same fall weeks, foraging in the same trees and shrubs on migration.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
            <span className="neighbor-name">Black-capped Chickadee</span>
            <span className="neighbor-note">Joins the same mixed-species winter flocks, moving through the same trees as kinglets forage.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('brown-creeper')}>
            <span className="neighbor-name">Brown Creeper</span>
            <span className="neighbor-note">Another small bark-forager that joins the same mixed winter flocks, spiraling up trunks while the kinglet works the outer branches.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">A fellow boreal-forest migrant that passes through at the same fall season.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Ruby-crowned_Kinglet/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Ruby-crowned Kinglet (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/ruby-crowned-kinglet-corthylio-calendula" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Ruby-crowned Kinglet</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
