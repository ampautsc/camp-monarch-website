import type { Page } from '../App'

interface ButterflyWeedProps {
  onNavigate: (page: Page) => void
}

export default function ButterflyWeed({ onNavigate }: ButterflyWeedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Butterfly-weed_%28Asclepias_tuberosa%29.jpg/1280px-Butterfly-weed_%28Asclepias_tuberosa%29.jpg"
          alt="Butterfly weed in full bloom — clusters of vivid orange flowers on upright stems in a sunny meadow"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={857}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: wackybadger&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Butterfly-weed_(Asclepias_tuberosa).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Butterfly Weed</h1>
        <p className="hero__lead">
          Butterfly weed (<em>Asclepias tuberosa</em>) is the milkweed that runs clear sap instead
          of white — yet still loads every monarch caterpillar feeding on it with enough cardiac
          glycosides to make the adult butterfly toxic to birds. Its blazing orange clusters open
          in June and July, the same weeks monarchs are laying eggs, on a plant whose deep taproot
          thrives in the dry, sandy soils where common milkweed struggles. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A monarch caterpillar feeding on butterfly weed doesn't digest the plant's cardenolides —
            it stores them, concentrating the toxin in its own tissue until it is more bitter than
            the leaf it ate. That defense rides through the chrysalis into the adult's wings and
            abdomen. A blue jay that catches one monarch in July vomits within minutes and avoids
            orange-and-black wings for the rest of the season — protection formed at the caterpillar
            stage that still guards the butterfly on its September flight to Mexico. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Butterfly_Weed_Asclepias_tuberosa_and_Monarch_Caterpillar_2056px.jpg/1280px-Butterfly_Weed_Asclepias_tuberosa_and_Monarch_Caterpillar_2056px.jpg"
            alt="A banded monarch caterpillar feeding on butterfly weed among its orange flowers"
            width={1280}
            height={1245}
            loading="lazy"
          />
          <figcaption>
            As this caterpillar feeds, it sequesters the plant's cardenolides into its own body —
            the same chemistry that will protect the adult butterfly weeks later.
            <span className="photo-credit"> Photo: Derek Ramsey&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Butterfly_Weed_Asclepias_tuberosa_and_Monarch_Caterpillar_2056px.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Bumblebees, swallowtails, and hummingbird clearwing moths all work the orange flowers in
            June and July, often within a few feet of each other. By August the plant forms long
            spindle-shaped pods that split in October, releasing 50 to 60 silk-borne seeds per pod
            that can travel a hundred yards on the wind. Below ground, a carrot-like taproot reaches
            18 inches by the end of the second year — the source of its drought tolerance, and the
            reason it can't be divided or moved once established. Like common milkweed, it emerges
            late, often not breaking ground until late May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Butterfly weed is widely sold and easy to grow in the right spot, but two habits cost it
            in yards: rich, amended, or wet soil rots the taproot, and the plant's late spring
            emergence means a gardener who forgets where it is can dig straight through the living
            root while planting annuals in April.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Buy a container plant in late May or June and set it in its permanent spot in full
              sun — six hours of direct light minimum, in lean, sandy, or rocky soil. [2]
            </li>
            <li>
              Don't amend the soil or fertilize; rich ground pushes floppy top growth at the expense
              of the taproot, and wet soil rots it. [2]
            </li>
            <li>
              Water weekly for the first month only — once the taproot is down, it finds its own
              moisture and resents being watered. [2]
            </li>
            <li>
              Leave the pods and stems standing over winter for shelter, cut back in early April,
              and mark the spot so the late-emerging crown isn't dug up by mistake. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Lays eggs on butterfly weed leaves in June and July; the cardenolides the caterpillar absorbs ride through metamorphosis into the adult's wings.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">The taller, rhizome-spreading milkweed for moist, fertile soil — planted alongside butterfly weed, the two cover both wet and dry ground in one yard.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('coral-hairstreak')}>
            <span className="neighbor-name">Coral Hairstreak</span>
            <span className="neighbor-note">Treats butterfly weed as a favorite nectar source during its brief July flight; a patch near wild plum or cherry keeps adults close to where females lay eggs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Nectars at the orange clusters in July — a large, high-contrast visitor easy to spot from across the yard against the bright flowers.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Asclepias_tuberosa" target="_blank" rel="noopener noreferrer">Wikipedia — Asclepias tuberosa (Butterfly Weed)</a></li>
            <li><a href="https://www.xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarchs (conservation and milkweed)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
