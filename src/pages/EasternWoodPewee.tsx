import type { Page } from '../App'

interface EasternWoodPeweeProps {
  onNavigate: (page: Page) => void
}

export default function EasternWoodPewee({ onNavigate }: EasternWoodPeweeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Eastern_wood_pewee_%2871095%29.jpg/1280px-Eastern_wood_pewee_%2871095%29.jpg"
          alt="An Eastern Wood-Pewee perched on a branch in dappled forest light, showing olive-gray plumage and two wing bars"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={928}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eastern_wood_pewee_(71095).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Wood-Pewee</h1>
        <p className="hero__lead">
          The Eastern Wood-Pewee is a small, drab flycatcher with olive-gray plumage, two
          white wing bars, and no eye ring. It is most often heard before it is seen — its
          slow, plaintive &quot;pee-a-wee&quot; carries through the summer forest and is one
          of the characteristic sounds of eastern woodlands. It breeds across the eastern
          United States and southern Canada, spending winters in South America. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Wood-Pewees hunt from exposed perches in the mid-canopy, sallying out to
            catch flying insects and returning to the same or nearby perch. They take beetles,
            flies, moths, and wasps in flight. Unlike phoebes, which pump their tails
            constantly, pewees hold still on the perch and call persistently. Males continue
            singing deep into August, long after most birds have fallen quiet. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Eastern_wood_pewee_%2812512%29.jpg/1280px-Eastern_wood_pewee_%2812512%29.jpg"
            alt="An Eastern Wood-Pewee on a perch, showing its upright posture and olive-gray coloring"
            width={1280}
            height={917}
            loading="lazy"
          />
          <figcaption>
            Wood-Pewees perch upright and still in the forest mid-story, watching for flying
            insects. The two pale wing bars and no eye ring distinguish them from Empidonax flycatchers.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_wood_pewee_(12512).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Wood-Pewees nest on horizontal branches high in trees, building a flat,
            lichen-covered cup that blends in so well it is rarely noticed from below. Two
            to four eggs. They are among the last neotropical migrants to arrive in spring,
            typically reaching the breeding range in May, and they depart for South America
            by September or October. They winter in Peru, Ecuador, and Colombia. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 6.5 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of about 44% since
            1966. [3] The IUCN lists it as Least Concern. [4] Deer overpopulation in eastern
            forests reduces the mid-story vegetation pewees forage through. Loss of wintering
            habitat in South America is also a likely factor. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Mature forest with a diverse mid-story provides both foraging habitat and
              nesting perches. Supporting local land conservation that protects intact forest
              is the most direct contribution. [5]
            </li>
            <li>
              Native understory trees — dogwood, serviceberry, ironwood — that are often
              browsed out by deer help maintain the forest layers pewees use. Deer-resistant
              plantings or fencing around young trees supports recovery. [5]
            </li>
            <li>
              Skipping insecticides preserves the flying insect populations pewees depend on
              through the breeding season. [5]
            </li>
            <li>
              Shade-grown coffee, which maintains forest canopy on wintering grounds, is a
              direct connection to where this bird spends half the year. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-phoebe')}>
            <span className="neighbor-name">Eastern Phoebe</span>
            <span className="neighbor-note">A fellow flycatcher that arrives weeks earlier and hunts from lower perches near water.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A forest interior bird that shares the same mature deciduous woods and faces similar pressures.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('indigo-bunting')}>
            <span className="neighbor-name">Indigo Bunting</span>
            <span className="neighbor-note">A summer neighbor of the same woodland edges, migrating the same routes through Central America.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('baltimore-oriole')}>
            <span className="neighbor-name">Baltimore Oriole</span>
            <span className="neighbor-note">Another neotropical migrant that sings from the same canopy in May and June.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Wood-Pewee/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Wood-Pewee (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-wood-pewee-contopus-virens" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Wood-Pewee</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
