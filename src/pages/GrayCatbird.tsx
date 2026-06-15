import type { Page } from '../App'

interface GrayCatbirdProps {
  onNavigate: (page: Page) => void
}

export default function GrayCatbird({ onNavigate }: GrayCatbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/20240622_gray_catbird_casa_PD201816.jpg/1280px-20240622_gray_catbird_casa_PD201816.jpg"
          alt="A Gray Catbird perched on a branch, showing its slate-gray plumage, darker cap, and long tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20240622_gray_catbird_casa_PD201816.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Gray Catbird</h1>
        <p className="hero__lead">
          The Gray Catbird is a slim, slate-gray bird with a darker cap and a patch of
          chestnut under the tail, found in dense shrubs and thickets across the eastern
          United States and southern Canada. It is named for its flat, nasal &quot;mew&quot;
          call. It is the third eastern member of the mimid family, alongside the Northern
          Mockingbird and the Brown Thrasher, and it sings a long rambling stream of notes and
          phrases, each one used once before moving on. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Gray Catbirds forage in dense shrubs and in the leaf litter beneath them, eating
            insects, spiders, and berries. They glean insects from leaves and branches at
            mid-shrub height and pick fruit directly from stems. They tend to stay hidden
            inside tangles of vegetation, and the cat-like call from inside a bush is often
            the first sign one is present. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gray_catbird_with_a_berry_%2816665%29.jpg/1280px-Gray_catbird_with_a_berry_%2816665%29.jpg"
            alt="A Gray Catbird holding a berry in its bill"
            width={1280}
            height={947}
            loading="lazy"
          />
          <figcaption>
            Catbirds eat both insects and berries, shifting toward fruit in late summer and
            fall as native berries ripen.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Gray_catbird_with_a_berry_(16665).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Gray Catbirds nest in dense shrubs 3 to 10 feet off the ground, building a bulky
            cup of twigs and leaves. Three to five eggs per clutch, and pairs often raise two
            broods. Unlike the mockingbird and the Brown Thrasher, catbirds are one of the few
            species that regularly recognize and eject Brown-headed Cowbird eggs from their
            nests. They migrate in fall, wintering in the southeastern United States, the
            Caribbean, and Central America, and return in late April and May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 29 million. [2] The
            U.S. Breeding Bird Survey shows a stable population since 1966. [3] The IUCN lists
            it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense native shrubs such as viburnum, dogwood, elderberry, and spicebush provide
              the tangled nesting cover catbirds need and the berries they eat in late summer
              and fall. [5]
            </li>
            <li>
              Leaving leaf litter under shrubs supports the insects and spiders catbirds forage
              on at ground level. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that forages low in dense cover and moves
              close to the ground. [5]
            </li>
            <li>
              Reducing or eliminating pesticide use preserves the insect populations catbirds
              depend on during the breeding season when they are feeding young. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">A fellow mimid that shares the same dense shrub layer, singing paired phrases where the catbird sings each one once.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-mockingbird')}>
            <span className="neighbor-name">Northern Mockingbird</span>
            <span className="neighbor-note">The third eastern mimid, singing copied phrases from exposed perches where the catbird stays hidden in the thicket.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Shares the same shrubby understory in eastern forests, foraging in the same leaf litter for the same invertebrates.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Shares the same yards and berry shrubs, foraging in the open where the catbird stays in cover.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Gray_Catbird/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Gray Catbird (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/grey-catbird-dumetella-carolinensis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Gray Catbird</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
