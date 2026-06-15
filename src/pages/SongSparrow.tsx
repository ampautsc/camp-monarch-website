import type { Page } from '../App'

interface SongSparrowProps {
  onNavigate: (page: Page) => void
}

export default function SongSparrow({ onNavigate }: SongSparrowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Song_Sparrow.jpg/1280px-Song_Sparrow.jpg"
          alt="A Song Sparrow with brown-streaked plumage, a streaked breast with a central spot, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cephas&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Song_Sparrow.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Song Sparrow</h1>
        <p className="hero__lead">
          The Song Sparrow is a medium-sized, brown-streaked sparrow found across most of
          North America, from southern Alaska to central Mexico. It has a streaked breast with
          a dark central spot, a broad gray stripe over each eye, and a rounded tail it pumps
          in flight. It is one of the most widespread and variable songbirds on the continent,
          with more than 20 recognized subspecies that differ in size and color across
          regions. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Song Sparrows forage on the ground and in low vegetation, scratching through leaf
            litter and hopping under shrubs to find seeds, insects, and berries. Males sing
            from an exposed perch, typically a low branch or the top of a shrub, delivering a
            song that starts with two or three clear notes and breaks into a buzzy trill. Each
            male has a repertoire of 6 to 20 song variants. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Song_sparrow_in_Prospect_Park_%2893031%29.jpg/1280px-Song_sparrow_in_Prospect_Park_%2893031%29.jpg"
            alt="A Song Sparrow on the ground among leaves, showing its streaked brown plumage"
            width={1280}
            height={898}
            loading="lazy"
          />
          <figcaption>
            Song Sparrows forage mostly on the ground, scratching through leaf litter under
            shrubs for seeds and insects.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Song_sparrow_in_Prospect_Park_(93031).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Song Sparrows nest in dense vegetation on or near the ground, building a cup of
            grass and leaves. Three to five eggs per clutch, and pairs raise two or three
            broods per season. Northern populations migrate south in fall; southern and coastal
            populations stay year-round. In winter, Song Sparrows often join loose mixed flocks
            with juncos, White-throated Sparrows, and other ground-feeding birds. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 130 million. [2] The
            U.S. Breeding Bird Survey shows a decline of about 27% between 1966 and 2019. [3]
            The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense low shrubs and brushy ground cover provide the nesting and foraging habitat
              Song Sparrows use. Native shrubs, unmowed field edges, and brush piles all
              work. [5]
            </li>
            <li>
              Leaving leaf litter and seed heads on native plants through fall and winter
              provides both food and the invertebrates Song Sparrows eat. [5]
            </li>
            <li>
              A shallow water source at ground level draws Song Sparrows, which bathe
              frequently and stay close to water. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that nests and forages on the ground. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">A fellow ground-feeder that joins mixed winter flocks with Song Sparrows under the same shrubs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Another ground-scratching sparrow of the same brushy edges, working the leaf litter in the same thickets.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('indigo-bunting')}>
            <span className="neighbor-name">Indigo Bunting</span>
            <span className="neighbor-note">A summer neighbor of the same weedy field edges and brushy roadsides.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round seed-eater that shares feeders and the same dense shrubby cover.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Song_Sparrow/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Song Sparrow (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/song-sparrow-melospiza-melodia" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Song Sparrow</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
