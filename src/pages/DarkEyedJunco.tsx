import type { Page } from '../App'

interface DarkEyedJuncoProps {
  onNavigate: (page: Page) => void
}

export default function DarkEyedJunco({ onNavigate }: DarkEyedJuncoProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Dark-eyed_junco_%2821840%29.jpg/1280px-Dark-eyed_junco_%2821840%29.jpg"
          alt="A slate-gray Dark-eyed Junco with a white belly and pale pink bill, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={940}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Dark-eyed_junco_(21840).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Dark-eyed Junco</h1>
        <p className="hero__lead">
          The Dark-eyed Junco is a small sparrow, slate-gray or brown above with a white belly and
          a pale pink bill, that flashes white outer tail feathers when it flies. Across most of
          the United States it is a winter bird, arriving as the weather turns cold and feeding on
          the ground beneath shrubs and feeders. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Juncos feed on the ground, hopping and scratching through leaf litter and snow for
            seeds, and adding insects and spiders in the breeding season. In winter they move in
            loose flocks, often mixed with sparrows and other small birds, and rarely stray far
            from cover. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Dark_eyed_junco.jpg/1280px-Dark_eyed_junco.jpg"
            alt="A Dark-eyed Junco foraging on the ground among fallen leaves"
            width={1280}
            height={859}
            loading="lazy"
          />
          <figcaption>
            Juncos do most of their feeding on the ground, scratching through leaf litter for
            seeds and insects.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Dark_eyed_junco.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Juncos breed in the conifer and mixed forests of Canada, the western mountains, and the
            Appalachians, building a cup nest on or near the ground. In fall most of them move
            south, which is why so much of the country knows the junco as a winter visitor, the
            &quot;snowbird.&quot; The species comes in several regional forms that look different
            enough that they were once treated as separate species. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Dark-eyed Junco is one of the most abundant birds in North America. Partners in
            Flight estimates a breeding population around 630 million. [1][2] The U.S. Breeding Bird
            Survey shows a gradual decline, roughly 0.7% a year between 1966 and 2019, a cumulative
            loss of about 31%. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A patch of native shrubs with leaf litter underneath gives juncos the cover and the
              ground-level seeds and insects they forage in. [5]
            </li>
            <li>
              Seed heads left standing on native grasses and flowers through winter feed juncos
              when other food is scarce; a low or ground-level feeder draws them as well. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that spends almost all of its time on the
              ground. [5]
            </li>
            <li>
              Windows with screens or visible patterns on the outside prevent most collisions. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Works the same lawns and leaf-litter edges, pulling worms where the junco takes seeds.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">A larger ground-scratcher in the same sparrow family, working the leaf litter under shrubs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round feeder neighbor that often shares the winter yard with junco flocks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Another seed-eater of yards and field edges, feeding on the same native seed heads.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Dark-eyed_Junco/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Dark-eyed Junco (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/dark-eyed-junco-junco-hyemalis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Dark-eyed Junco</a></li>
            <li><a href="https://www.audubon.org/field-guide/bird/dark-eyed-junco" target="_blank" rel="noopener noreferrer">Audubon Field Guide — Dark-eyed Junco</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
