import type { Page } from '../App'

interface NorthernCardinalProps {
  onNavigate: (page: Page) => void
}

export default function NorthernCardinal({ onNavigate }: NorthernCardinalProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Northern_Cardinal_%28Cardinalis_cardinalis%29_male.jpg/1280px-Northern_Cardinal_%28Cardinalis_cardinalis%29_male.jpg"
          alt="A bright red male Northern Cardinal with a black face mask, pointed crest, and heavy orange-red bill, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: DickDaniels&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Northern_Cardinal_(Cardinalis_cardinalis)_male.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Northern Cardinal</h1>
        <p className="hero__lead">
          The Northern Cardinal is a year-round resident across the eastern and central United
          States, and one of the most recognizable birds at a feeder. The male is bright red with a
          black face and a pointed crest; the female is warm brown with red in the wings, tail, and
          crest. Both have a heavy orange-red bill built for cracking seeds. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Cardinals feed mostly on seeds and fruit, using that thick bill to crack hard shells,
            and they add insects in the breeding season. They do not migrate, so the same birds
            hold a territory all year. Both the male and the female sing, which is unusual among
            North American songbirds. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northern_cardinal_female_in_CP_%2802035%29.jpg/1280px-Northern_cardinal_female_in_CP_%2802035%29.jpg"
            alt="A female Northern Cardinal, warm brown with red tints in the wings, tail, and crest, and an orange-red bill"
            width={1280}
            height={1276}
            loading="lazy"
          />
          <figcaption>
            The female is warm brown with red tints, not the bright red of the male, but she shares
            the crest and the heavy seed-cracking bill, and she sings too.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Northern_cardinal_female_in_CP_(02035).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            A pair nests in dense shrubs or low trees and often raises two or three broods in a
            season. Cardinals do not gather in big flocks the way juncos and goldfinches do;
            outside the breeding season they stay near cover and visit food in small numbers. Over
            the last century the species has expanded its range steadily northward. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Northern Cardinal is common and slowly increasing. Partners in Flight estimates a
            breeding population around 130 million, [1][2] and the U.S. Breeding Bird Survey shows a
            slight increase since 1966, with the range still expanding north. [3] The IUCN lists it
            as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Black-oil sunflower seed is a cardinal favorite, and a platform or hopper feeder
              suits a bird that likes a solid perch. [5]
            </li>
            <li>
              Dense native shrubs give cardinals the low cover they nest and shelter in. [5]
            </li>
            <li>
              Skipping pesticides keeps the insects cardinals feed their young. [5]
            </li>
            <li>
              Windows with screens or visible patterns prevent collisions, and they also stop a
              cardinal from wearing itself out battling its own reflection in spring. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">A winter feeder neighbor that takes the seed dropped below while the cardinal works the perch above.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another year-round seed-eater of yards and field edges, sharing feeders and native seed heads.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-mockingbird')}>
            <span className="neighbor-name">Northern Mockingbird</span>
            <span className="neighbor-note">Another non-migratory neighbor that holds a year-round territory in the same shrubby yards.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Shares the same yards and shrubs, taking worms and fruit where the cardinal takes seeds.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Northern_Cardinal/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Northern Cardinal (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/northern-cardinal-cardinalis-cardinalis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Northern Cardinal</a></li>
            <li><a href="https://www.audubon.org/field-guide/bird/northern-cardinal" target="_blank" rel="noopener noreferrer">Audubon Field Guide — Northern Cardinal</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
