import type { Page } from '../App'

interface HermitThrushProps {
  onNavigate: (page: Page) => void
}

export default function HermitThrush({ onNavigate }: HermitThrushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Hermit_thrush_%2810787%29.jpg/1280px-Hermit_thrush_%2810787%29.jpg"
          alt="A Hermit Thrush perched on a branch, showing its spotted breast, warm brown back, and rufous tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1065}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hermit_thrush_(10787).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Hermit Thrush</h1>
        <p className="hero__lead">
          The Hermit Thrush is a small, brown, spotted thrush that breeds in cool forests across
          Canada, Alaska, the western mountains, and the northeastern United States south through
          the Appalachians. It is the only member of its genus that regularly winters in the
          United States, switching from insects to berries when the cold arrives. It raises its
          rufous tail in a slow pump and lets it drop, a gesture no other common thrush
          makes. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Hermit Thrushes feed on the ground, hopping through leaf litter and flipping leaves
            aside with the bill to uncover beetles, earthworms, ants, caterpillars, and spiders.
            In fall and winter they shift heavily to fruit, eating the berries of viburnum,
            winterberry holly, dogwood, and other native shrubs. They forage alone, not in
            flocks, and tend to stay close to dense cover. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Catharus_guttatus_GJ.jpg/1280px-Catharus_guttatus_GJ.jpg"
            alt="A Hermit Thrush on a branch, showing spotted breast and warm brown plumage"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The Hermit Thrush raises its rufous tail slowly and lets it drop, a repeated
            motion that distinguishes it from other spotted thrushes at a distance.
            <span className="photo-credit"> Photo: Cephas&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Catharus_guttatus_GJ.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Hermit Thrushes nest on or near the ground in cool, moist forests, building a cup of
            grass, moss, and mud. They typically raise one or two broods per season. In fall,
            the other spotted thrushes of the genus Catharus (Wood Thrush, Swainson&apos;s Thrush,
            Veery) all migrate to the tropics. The Hermit Thrush stays, wintering across the
            southern and central United States wherever native fruit persists. Its digestive
            system handles berry pulp efficiently enough to sustain it through a northern
            winter. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 72 million. [2] The
            U.S. Breeding Bird Survey shows an overall stable trend since 1966, though regional
            patterns vary: populations in parts of the western United States and British Columbia
            have declined, while numbers in the Appalachians and parts of the northern Rockies
            have increased. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native fruit-bearing shrubs such as viburnum, winterberry holly, and dogwood
              provide the berries Hermit Thrushes switch to in fall and winter. [5]
            </li>
            <li>
              Leaving leaf litter in place under shrubs keeps the beetles, earthworms, and other
              invertebrates the thrush forages on through the ground layer. [5]
            </li>
            <li>
              Windows with visible patterns or external screens prevent collisions, which affect
              ground-moving birds that approach buildings closely while following fruit. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that spends most of its time feeding on
              the ground in leaf litter. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A close relative that shares the same forests in summer but migrates to Central America in winter.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">Another winter ground forager that works the same leaf litter for seeds and insects.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Arrives in winter flocks to strip the same native berry shrubs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Another thrush that overwinters on native fruit where berry-producing shrubs persist.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Hermit_Thrush/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Hermit Thrush (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/hermit-thrush-catharus-guttatus" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Hermit Thrush</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
