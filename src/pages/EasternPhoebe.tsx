import type { Page } from '../App'

interface EasternPhoebeProps {
  onNavigate: (page: Page) => void
}

export default function EasternPhoebe({ onNavigate }: EasternPhoebeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/20230909_eastern_phoebe_pleasant_valley_PND02927-.jpg/1280px-20230909_eastern_phoebe_pleasant_valley_PND02927-.jpg"
          alt="An Eastern Phoebe perched on a branch, showing olive-brown upperparts and pale underparts"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20230909_eastern_phoebe_pleasant_valley_PND02927-.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Phoebe</h1>
        <p className="hero__lead">
          The Eastern Phoebe is a small flycatcher with olive-brown upperparts, a pale
          belly, and no wing bars or eye ring. It is one of the earliest spring migrants
          in the East, often arriving before winter is fully over. Its habit of pumping
          its tail up and down while perched is distinctive and makes it easy to identify
          even when silent. It calls its name — a raspy &quot;fee-bee&quot; — repeatedly
          from exposed perches. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Phoebes hunt by watching from a low perch, darting out to catch flying
            insects, and returning to the same perch. They eat beetles, wasps, flies,
            grasshoppers, and occasionally small berries or seeds. They tend to forage lower
            than most flycatchers, often near water. The tail-pumping behavior that makes
            them recognizable happens constantly — they pump at rest, between sallies, and
            while singing. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/20241001_eastern_phoebe_south_meadows_PD207396.jpg/1280px-20241001_eastern_phoebe_south_meadows_PD207396.jpg"
            alt="An Eastern Phoebe on a low perch, tail slightly raised"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Phoebes hunt from low perches, sallying out to catch insects in flight and
            returning to the same spot. The constant tail-pump identifies them at a glance.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20241001_eastern_phoebe_south_meadows_PD207396.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Phoebes nest on ledges under bridges, on building eaves, or on rock
            outcroppings, typically near water. The nest is a cup of mud, moss, and plant
            fibers. Pairs raise two broods per season and often reuse nests between years.
            They arrive early in spring — sometimes February or March in the South — and
            linger late in fall. They winter along the Gulf Coast and in the southeastern
            United States. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 35 million. [2] The
            U.S. Breeding Bird Survey shows a slight overall increase since 1966. [3] The
            IUCN lists it as Least Concern. [4] Phoebes have benefited from the abundance of
            bridges and buildings that provide nest ledges. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A small wooden nesting shelf mounted under an eave, porch, or garage overhang
              gives phoebes the ledge they nest on. Place it at least 8 feet up and under
              cover from rain. [5]
            </li>
            <li>
              Native shrubs and perches near open ground or water provide the low hunting
              platforms phoebes use. A brush pile with a clear view around it works. [5]
            </li>
            <li>
              A shallow pond or water feature supports the aquatic insects — mayflies,
              damselflies — that phoebes eat, especially in spring. [5]
            </li>
            <li>
              Skipping pesticides preserves the flying insects phoebes depend on throughout
              the breeding season. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-wood-pewee')}>
            <span className="neighbor-name">Eastern Wood-Pewee</span>
            <span className="neighbor-note">A fellow flycatcher that hunts from higher perches in the same woodland edges.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Another early spring arrival that nests on similar ledges and under eaves.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">A shrubby-edge insect eater that shares the same low brushy habitats near water.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A ground-level neighbor of the same weedy, wet edges where phoebes hunt.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Phoebe/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Phoebe (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-phoebe-sayornis-phoebe" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Phoebe</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
