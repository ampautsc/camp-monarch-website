import type { Page } from '../App'

interface OvenbirdProps {
  onNavigate: (page: Page) => void
}

export default function Ovenbird({ onNavigate }: OvenbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ovenbird_%2848612593968%29.jpg/1280px-Ovenbird_%2848612593968%29.jpg"
          alt="An Ovenbird walking on the forest floor, showing its olive-brown back, streaked white breast, and orange crown stripe"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={838}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Andrew Weitzel&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Ovenbird_(48612593968).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Ovenbird</h1>
        <p className="hero__lead">
          The Ovenbird is a ground-walking warbler of mature deciduous forest, olive-brown
          above with a heavily streaked white breast and a bold orange crown stripe bordered
          by dark lines. It walks — it does not hop — through the leaf litter on pink legs.
          Its loud, ringing &quot;TEACH-er, TEACH-er, TEACH-er&quot; call, rising in volume
          with each repetition, carries through the forest and is one of the most recognized
          sounds of eastern summer woodlands. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Ovenbirds forage entirely on the ground, walking deliberately through leaf litter
            and probing for beetles, ants, earthworms, caterpillars, and other invertebrates.
            Males sing persistently from an elevated perch in the mid-canopy, then descend
            to the ground to forage. They are named for their domed ground nest, which
            resembles a Dutch oven in shape. The nest entrance faces to the side and the
            structure is so well camouflaged that it is rarely found. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ovenbird_-20_100-_%2834128007436%29.jpg/1280px-Ovenbird_-20_100-_%2834128007436%29.jpg"
            alt="An Ovenbird on the forest floor among leaf litter, showing its upright posture and streaked breast"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Ovenbirds walk rather than hop, moving deliberately through leaf litter on
            the forest floor. The bold eye ring and orange crown stripe are visible at close range.
            <span className="photo-credit"> Photo: Tim Sackton&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Ovenbird_-20_100-_(34128007436).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Ovenbirds arrive on the breeding grounds in May, among the neotropical migrants
            that reach eastern forests in the second wave of spring migration. Males
            establish territories in mature forest with open understory and a deep layer of
            leaf litter. After breeding, they depart by September for wintering grounds in
            the Caribbean, Central America, and northern South America. About 49% of the
            North American population breeds in Canada&apos;s boreal forest. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight rates the Ovenbird 9 out of 20 on the Continental Concern
            Score, indicating relatively low conservation concern. [2] The U.S. Breeding
            Bird Survey shows a stable overall population. [3] The IUCN lists it as Least
            Concern. [4] As a forest interior specialist, it is vulnerable to forest
            fragmentation — small forest patches increase nest parasitism by Brown-headed
            Cowbirds and predation rates near forest edges. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Large, contiguous forest patches with closed canopy and a deep leaf litter
              layer provide the breeding habitat Ovenbirds require. Connecting forested
              areas reduces edge effects. [5]
            </li>
            <li>
              Leaving leaf litter intact through fall and winter — rather than blowing or
              raking it away — maintains the layer Ovenbirds and many other ground-foraging
              birds depend on. [5]
            </li>
            <li>
              Skipping pesticides preserves the earthworms, beetles, and invertebrates
              Ovenbirds forage for in the leaf litter. [5]
            </li>
            <li>
              Supporting boreal forest conservation in Canada directly protects nearly half
              of the Ovenbird breeding population. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A fellow mature-forest ground-forager that shares the same interior woodland habitat and faces similar pressures.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-wood-pewee')}>
            <span className="neighbor-name">Eastern Wood-Pewee</span>
            <span className="neighbor-note">A forest flycatcher that arrives the same week in May and hunts the canopy above where Ovenbirds walk below.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">A ground-foraging thrush of similar forest interiors that passes through on migration.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Another ground-scratching bird of the forest edge, working the leaf litter just beyond the Ovenbird&apos;s territory.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Ovenbird/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Ovenbird (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/ovenbird-seiurus-aurocapilla" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Ovenbird</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
