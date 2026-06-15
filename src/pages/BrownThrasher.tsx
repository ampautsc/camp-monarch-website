import type { Page } from '../App'

interface BrownThrasherProps {
  onNavigate: (page: Page) => void
}

export default function BrownThrasher({ onNavigate }: BrownThrasherProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Brown_thrasher_in_CP_%2802147%29.jpg/1280px-Brown_thrasher_in_CP_%2802147%29.jpg"
          alt="A Brown Thrasher with reddish-brown back, streaked white breast, long tail, and bright yellow eye"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Brown_thrasher_in_CP_(02147).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Brown Thrasher</h1>
        <p className="hero__lead">
          The Brown Thrasher is a large, reddish-brown songbird of dense shrubs and thicket
          edges across the eastern United States and southern Canada. It has a long, slightly
          curved bill, bold brown streaking on a white breast, and bright yellow eyes. It has
          the largest documented song repertoire of any North American songbird, with more than
          1,100 distinct song types per individual, each phrase sung twice before moving to the
          next. It is Georgia&apos;s state bird. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Brown Thrashers forage mostly on the ground, sweeping the bill in wide arcs through
            leaf litter to expose beetles, earthworms, crickets, and caterpillars underneath.
            This sweeping motion is the &quot;thrashing&quot; that gives the species its name.
            They also eat wild fruit in season, including serviceberries, elderberries, and
            dogwood drupes. Males sing from the top of a shrub or small tree, running through
            their paired phrases in unbroken streams that can last several minutes. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Brown_thrasher_in_CP_%2801843%29.jpg/1280px-Brown_thrasher_in_CP_%2801843%29.jpg"
            alt="A Brown Thrasher on the ground, showing its long curved bill and streaked breast"
            width={1280}
            height={1023}
            loading="lazy"
          />
          <figcaption>
            Brown Thrashers forage by sweeping the bill through leaf litter to uncover insects
            underneath, a technique that requires a layer of undisturbed fallen leaves.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Brown_thrasher_in_CP_(01843).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Pairs nest in dense shrubs or small trees, typically 2 to 7 feet off the ground,
            building a bulky cup of twigs and leaves lined with rootlets. Three to five eggs
            per clutch, incubated by both parents for about two weeks. Two broods per season
            are common. Southern and central populations stay year-round; northern birds migrate
            short distances south in October and return in April. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 6.2 million. [2] The
            U.S. Breeding Bird Survey shows a decline of roughly 1% per year since 1966, a
            cumulative loss of about 37%. [3] The losses have been steepest in the northern and
            midwestern parts of the range, where hedgerows and brushy edges have been most
            thoroughly removed. The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense native shrubs at yard edges, such as viburnum, serviceberry, elderberry,
              and native hawthorn, provide the thicket cover Brown Thrashers nest in and the
              fruit they eat in fall. [5]
            </li>
            <li>
              Leaving fallen leaves in place under and around shrubs preserves the layer of
              beetles, earthworms, and other invertebrates the thrasher forages on with its
              bill-sweeping technique. [5]
            </li>
            <li>
              An unmowed brushy corner, even a small one, provides nesting structure. The
              denser and more tangled, the better it works as nesting habitat. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that forages close to the ground at low
              speed through dense cover. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Works the same shrubby thicket floor using a two-footed backward kick instead of a bill sweep.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">Nests in the same dense shrub layer and forages in the same leaf litter beneath it.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Another declining species that depends on the same leaf-litter invertebrates in shrubby understory.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Forages for the same earthworms and insects on the open lawn adjacent to the thrasher&apos;s thicket.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Brown_Thrasher/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Brown Thrasher (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/brown-thrasher-toxostoma-rufum" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Brown Thrasher</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
