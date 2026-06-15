import type { Page } from '../App'

interface YellowWarblerProps {
  onNavigate: (page: Page) => void
}

export default function YellowWarbler({ onNavigate }: YellowWarblerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Yellow_warbler_%2882905%29.jpg/1280px-Yellow_warbler_%2882905%29.jpg"
          alt="A male Yellow Warbler, bright yellow with reddish streaks on the breast, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={956}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Yellow_warbler_(82905).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Yellow Warbler</h1>
        <p className="hero__lead">
          The Yellow Warbler is one of North America&apos;s most widespread warblers, a
          small bird that is almost entirely yellow. Males have fine reddish streaks on
          the breast; females are plainer yellow-green. It breeds across most of North
          America from Alaska to Mexico wherever willows, alders, and shrubby vegetation
          grow near water, and winters from Mexico through Central America to South
          America. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Yellow Warblers glean insects from the outer tips of branches and leaves, moving
            constantly through the foliage of willows, alders, and shrubs. Caterpillars make
            up a large part of the diet. They also hover briefly to pick insects from leaf
            surfaces and catch flying insects. Males sing a clear, sweet series of notes
            often described as &quot;sweet-sweet-sweet, I&apos;m so sweet,&quot; delivered
            persistently from the top of a shrub. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/A_male_Yellow_warbler_%28Setophaga_petechia%29_at_the_John_Heinz_National_Wildlife_Refuge%2C_Philadelphia%2C_PA%2C_USA.png/1280px-A_male_Yellow_warbler_%28Setophaga_petechia%29_at_the_John_Heinz_National_Wildlife_Refuge%2C_Philadelphia%2C_PA%2C_USA.png"
            alt="A male Yellow Warbler perched among green foliage, showing bright yellow plumage and red breast streaks"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Males have reddish streaks on the breast that distinguish them from the
            plainer females. Both forage by gleaning caterpillars from leaf tips.
            <span className="photo-credit"> Photo: Chuck Homler, Focus on Wildlife&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:A_male_Yellow_warbler_(Setophaga_petechia)_at_the_John_Heinz_National_Wildlife_Refuge,_Philadelphia,_PA,_USA.png" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Yellow Warblers nest in the fork of a shrub or small tree, building a tight cup
            of plant fibers and plant down. Three to five eggs per clutch. They are frequent
            hosts of Brown-headed Cowbirds but have a defense: when a cowbird lays an egg in
            the nest, many Yellow Warblers recognize it and build a new layer of nest
            material over the clutch, burying the cowbird egg. Some nests have been found
            with six layers. They migrate to Central and South America by September and
            return in late April or May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 97 million. [2] The
            U.S. Breeding Bird Survey shows a decline of about 25% since 1966. [3] The IUCN
            lists it as Least Concern. [4] Loss of riparian shrubby habitat — willows and
            alders along streams and wetlands — is a primary threat. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native willows, alders, and native shrubs planted near a water feature provide
              both nesting habitat and the caterpillar-rich foliage Yellow Warblers forage
              through. [5]
            </li>
            <li>
              Protecting existing streamside and wetland edges from mowing, clearing, and
              invasive plants preserves the shrubby riparian corridors warblers use during
              migration and breeding. [5]
            </li>
            <li>
              Skipping pesticides preserves the caterpillars that make up the majority of
              the warbler&apos;s breeding-season diet. [5]
            </li>
            <li>
              Keeping cats indoors reduces predation risk for a bird that nests low to the
              ground in dense shrubs. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('indigo-bunting')}>
            <span className="neighbor-name">Indigo Bunting</span>
            <span className="neighbor-note">A fellow neotropical migrant of the same shrubby field edges, arriving the same spring weeks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A ground-level neighbor of the same wet, shrubby edges where Yellow Warblers nest.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">Shares the same dense shrub thickets and wetland edges.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">A fruit-eating neighbor that shares willows and streamside trees during spring migration.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Yellow_Warbler/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Yellow Warbler (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/american-yellow-warbler-setophaga-petechia" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Yellow Warbler</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
