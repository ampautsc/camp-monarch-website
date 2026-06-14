import type { Page } from '../App'

interface WoodThrushProps {
  onNavigate: (page: Page) => void
}

export default function WoodThrush({ onNavigate }: WoodThrushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wood_thrush_%28Hylocichla_mustelina%29_Peten.jpg/1280px-Wood_thrush_%28Hylocichla_mustelina%29_Peten.jpg"
          alt="A Wood Thrush perched in shaded forest, reddish-brown above with a white breast covered in large dark spots"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Charles J. Sharp&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Wood_thrush_(Hylocichla_mustelina)_Peten.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wood Thrush</h1>
        <p className="hero__lead">
          The Wood Thrush is a songbird about the size of the American Robin and related to it,
          with reddish-brown upperparts and a white breast covered in large dark spots. It breeds
          in mature deciduous and mixed forests across the eastern United States and southern
          Canada, staying low in the trees and on the ground, where it is heard far more often
          than seen. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Males sing most at dawn and dusk. The song comes from a two-sided voice box, the
            syrinx, that lets a bird sound two notes at once. The rest of the day is spent mostly
            on the forest floor, flipping through leaf litter for beetles, caterpillars, spiders,
            millipedes, and other small invertebrates, with fruit added in late summer and
            fall. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Wood_thrush_%2891798%292.jpg/1280px-Wood_thrush_%2891798%292.jpg"
            alt="A Wood Thrush on the forest floor among leaf litter, head down as it searches for invertebrates"
            width={1280}
            height={975}
            loading="lazy"
          />
          <figcaption>
            Wood Thrushes feed mostly on the forest floor, flipping through leaf litter for the
            invertebrates that live in it.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Wood_thrush_(91798)2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            A pair nests low in a shrub or young tree, building a cup of grass, leaves, and mud,
            and usually raises one or two broods over the summer. In fall the birds migrate more
            than 2,000 miles to Central America, where many depend on the lowland broadleaf
            forests of the Yucatán, Guatemala, and Belize. [1][5]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Wood Thrush is in long-term decline. Partners in Flight estimates about 12 million
            remain, [2] and the U.S. Breeding Bird Survey shows a drop of roughly 1% a year from
            1966 to 2023, close to a 45% loss over that period. [3] The IUCN lists it as Near
            Threatened. [4] The main causes are the breaking of large forests into smaller
            patches, where more nests fail to predators and to cowbirds that lay their eggs in
            thrush nests, [5] and the loss of the tropical forests it winters in. Acid rain is
            another factor: it strips calcium from the soil, and females short on calcium lay
            thinner, weaker eggs. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <p>
            Wood Thrushes need large, unbroken forests, more than any single yard can provide, so
            protecting and reconnecting woodland does the most. The actions within reach of most
            people:
          </p>
          <ol className="step-list">
            <li>
              Keeping cats indoors prevents the largest human-linked source of bird deaths.
              Outdoor cats kill well over a billion birds a year in the United States. [7]
            </li>
            <li>
              Treating windows so birds can see them, with screens or patterns on the outside of
              the glass, prevents most collisions. Windows kill hundreds of millions of birds a
              year in the United States. [7][8]
            </li>
            <li>
              A yard with native trees and shrubs and no pesticides gives thrushes and other
              songbirds the insects and berries they feed on. This helps most near woodland. [7]
            </li>
            <li>
              Coffee labeled &quot;Bird Friendly,&quot; a Smithsonian certification, is grown under
              forest shade instead of on cleared land, which keeps standing the Central American
              forests these birds winter in. [9]
            </li>
            <li>
              Supporting land trusts and forest-conservation groups protects the large woods Wood
              Thrushes depend on, and sightings reported to eBird help track where they are
              holding on. [7]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">A close relative that uses the same forest floor, more common farther north and at higher elevations.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">The thrush most people know, working open ground at the edges where Wood Thrushes work the woods.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">Another ground forager that works leaf litter, more often along brushy edges than deep in the forest.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Scratches through leaf litter under shrubs at the wood edge, sharing the same invertebrate food web.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Wood_Thrush/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Wood Thrush (Life History)</a></li>
            <li><a href="https://partnersinflight.org/species/wood-thrush/" target="_blank" rel="noopener noreferrer">Partners in Flight — Wood Thrush species profile</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/wood-thrush-hylocichla-mustelina" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Wood Thrush factsheet</a></li>
            <li><a href="https://abcbirds.org/birds/wood-thrush/" target="_blank" rel="noopener noreferrer">American Bird Conservancy — Wood Thrush</a></li>
            <li><a href="https://www.audubon.org/field-guide/bird/wood-thrush" target="_blank" rel="noopener noreferrer">Audubon Field Guide — Wood Thrush</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
            <li><a href="https://abcbirds.org/glass-collisions/" target="_blank" rel="noopener noreferrer">American Bird Conservancy — Glass collisions (bird-window strikes)</a></li>
            <li><a href="https://nationalzoo.si.edu/migratory-birds/bird-friendly-coffee" target="_blank" rel="noopener noreferrer">Smithsonian Migratory Bird Center — Bird Friendly coffee</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
