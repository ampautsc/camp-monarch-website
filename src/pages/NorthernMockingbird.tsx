import type { Page } from '../App'

interface NorthernMockingbirdProps {
  onNavigate: (page: Page) => void
}

export default function NorthernMockingbird({ onNavigate }: NorthernMockingbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mockingbird_in_Bay_Ridge_%2885082%29.jpg/1280px-Mockingbird_in_Bay_Ridge_%2885082%29.jpg"
          alt="A Northern Mockingbird perched on a branch, gray above with white wing patches and a long tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={913}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Mockingbird_in_Bay_Ridge_(85082).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Northern Mockingbird</h1>
        <p className="hero__lead">
          The Northern Mockingbird is a medium-sized gray songbird with white wing patches and
          a long tail, found year-round across the southern and central United States. Males
          sing long, varied sequences of phrases copied from other birds and from sounds in
          the surrounding environment. A single male can have a repertoire of 150 to 200 song
          types. It is the state bird of Arkansas, Florida, Mississippi, Tennessee, and
          Texas. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Mockingbirds eat insects on the ground in summer, switching to berries and fruit in
            fall and winter. They flash their white wing patches while foraging, a motion that
            may startle insects into moving. They are strongly territorial year-round and will
            chase other birds, cats, and even people away from a claimed shrub or feeder. Males
            sometimes sing at night, especially unmated ones in spring. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Northern_mockingbird_%28Mimus_polyglottos_orpheus%29_wing_flash.JPG/1280px-Northern_mockingbird_%28Mimus_polyglottos_orpheus%29_wing_flash.JPG"
            alt="A Northern Mockingbird on the ground with wings spread, showing white wing patches"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Mockingbirds flash their white wing patches while foraging on the ground. The
            behavior may flush insects from hiding.
            <span className="photo-credit"> Photo: Charles J. Sharp&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Northern_mockingbird_(Mimus_polyglottos_orpheus)_wing_flash.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Mockingbirds do not migrate. Pairs nest in dense shrubs or small trees, building a
            bulky twig cup 3 to 10 feet off the ground, and often raise two or three broods per
            season. Both parents feed the young. In winter they hold individual territories
            centered on a reliable food source, often a fruiting shrub such as holly or
            pyracantha, and defend it aggressively against other fruit-eating birds. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates a breeding population of about 43 million. [2] The
            U.S. Breeding Bird Survey shows a decline of roughly 0.7% per year since 1966, a
            cumulative loss of about 30%. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense native shrubs such as holly, serviceberry, and viburnum provide both the
              nesting cover and the winter fruit mockingbirds defend and depend on. [5]
            </li>
            <li>
              Leaving some lawn unmowed or maintaining a patch of native plantings supports
              the ground-level insect populations mockingbirds feed on in summer. [5]
            </li>
            <li>
              Windows with visible patterns or external screens prevent collisions with a bird
              that flies low between shrubs and structures. [5]
            </li>
            <li>
              Keeping cats indoors removes the leading human-caused threat to a bird that
              forages on the ground and nests in low shrubs. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">Another year-round resident of the same shrubby yards, often sharing the same feeder and berry shrubs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">A relative in the mimid family that shares the same shrubby thickets but sings original phrases, not copies.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">The third eastern mimid, nesting in the same dense shrubs and singing a rambling, improvised stream.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Shares the same yards and often the same berry shrubs in winter.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Northern_Mockingbird/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Northern Mockingbird (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/northern-mockingbird-mimus-polyglottos" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Northern Mockingbird</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
