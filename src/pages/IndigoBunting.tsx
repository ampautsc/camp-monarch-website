import type { Page } from '../App'

interface IndigoBuntingProps {
  onNavigate: (page: Page) => void
}

export default function IndigoBunting({ onNavigate }: IndigoBuntingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Male_Indigo_Bunting_%2852768279874%29.jpg/1280px-Male_Indigo_Bunting_%2852768279874%29.jpg"
          alt="A male Indigo Bunting, entirely deep blue, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Shenandoah National Park&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Male_Indigo_Bunting_(52768279874).jpg" target="_blank" rel="noopener noreferrer">Public Domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Indigo Bunting</h1>
        <p className="hero__lead">
          The Indigo Bunting is a small finch-like bird of brushy edges, roadsides, and
          overgrown fields across the eastern United States and southeastern Canada. The
          breeding male is entirely deep blue, a color produced by the structure of the
          feathers rather than by pigment. The female is plain brown, streaked below, and
          easily overlooked. Males sing from exposed perches along roadsides, power lines, and
          the tops of shrubs. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Indigo Buntings eat insects and spiders during the breeding season, switching to
            seeds and grain in fall and winter. They forage in weedy fields, along roadsides,
            and at the edges of brushy areas. Males sing persistently through the heat of
            the day, when most other songbirds have gone quiet. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Indigo_bunting_at_Smith_Oaks_Sanctuary%2C_High_Island.jpg/1280px-Indigo_bunting_at_Smith_Oaks_Sanctuary%2C_High_Island.jpg"
            alt="An Indigo Bunting perched on a twig, showing its deep blue plumage in sunlight"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The male&apos;s blue color is structural, not pigment. In shade the bird looks
            nearly black; in direct sunlight the feathers refract blue light.
            <span className="photo-credit"> Photo: Frank Schulenburg&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Indigo_bunting_at_Smith_Oaks_Sanctuary,_High_Island.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Indigo Buntings nest in dense shrubs and tangles at field edges, building a compact
            cup 1 to 3 feet off the ground. The female incubates three to four eggs for about
            twelve days and does most of the feeding. Pairs often raise two broods. In fall they
            migrate to Central America, Mexico, and the Caribbean, traveling at night and
            navigating by the stars. They return in late April and May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 77 million. [2] The
            U.S. Breeding Bird Survey shows a decline of roughly 0.6% per year since 1966, a
            cumulative loss of about 28%. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Brushy field edges, hedgerows, and overgrown fence lines provide the nesting
              habitat Indigo Buntings use. Leaving these areas unmowed supports them
              directly. [5]
            </li>
            <li>
              Native seed-bearing plants like coneflowers, asters, and native grasses provide
              food during migration and in late summer when seeds ripen. [5]
            </li>
            <li>
              Reducing artificial light at night helps a species that navigates by the stars
              during migration. Drawing curtains and turning off unnecessary outdoor lights
              during spring and fall migration reduces disorientation. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that nests and forages close to the
              ground. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another small seed-eater of field edges and roadsides, staying year-round where the bunting visits only in summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Shares the same brushy thickets, foraging in the leaf litter below where the bunting sings from above.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">Another bird of brushy edges that nests in the same dense shrub layer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A fellow seed-eating bird of weedy fields and shrub edges, often in the same patch of habitat.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Indigo_Bunting/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Indigo Bunting (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/indigo-bunting-passerina-cyanea" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Indigo Bunting</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
