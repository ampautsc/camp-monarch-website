import type { Page } from '../App'

interface BlackWalnutProps {
  onNavigate: (page: Page) => void
}

export default function BlackWalnut({ onNavigate }: BlackWalnutProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Juglans_Nigra_02117.jpg/1280px-Juglans_Nigra_02117.jpg"
          alt="Black walnut compound leaf — many paired leaflets along a single arching stem, lit against a blue sky"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: R. A. Nonenmacher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Juglans_Nigra_02117.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Black Walnut</h1>
        <p className="hero__lead">
          Black walnut (<em>Juglans nigra</em>) is the tree with a reputation for killing the
          vegetable garden — it releases juglone, which wilts tomatoes, blueberries, and
          rhododendrons within 50 to 80 feet. But the native plants that grew beside it for millennia
          are untouched, and planted in a far corner it becomes one of the highest-value caterpillar
          host trees in eastern North America, feeding Luna, Cecropia, and Polyphemus moths. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Through a single summer, a mature black walnut can carry Luna, Cecropia, and Polyphemus
            caterpillars in its canopy at once — three of North America's giant silkmoths, each
            growing to three or four inches before pupating. All three emerge as adults with no
            functional mouth: they cannot eat or drink, and every calorie for their week of flight,
            scent-tracking, and mating was banked in the leaves they ate here as caterpillars. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Actias_luna_4th_instar_sjh.JPG/1280px-Actias_luna_4th_instar_sjh.JPG"
            alt="A bright green Luna Moth caterpillar, each segment ringed in pale yellow, feeding on a leaf"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            A Luna Moth caterpillar feeds on black walnut, hickory, and sweetgum leaves for about six
            weeks, then drops to the litter below to spin its cocoon — the fat it stores now is the
            only fuel its mouthless adult will ever have.
            <span className="photo-credit"> Photo: Kugamazog&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Actias_luna_4th_instar_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The juglone that makes black walnut difficult leaches from its roots, leaves, and hulls
            and blocks respiration in sensitive plants — tomatoes, peppers, blueberries, rhododendron,
            lilac — within 50 to 80 feet. Native woodland species evolved alongside it and don't
            care: wild columbine, wild ginger, ferns, asters, and goldenrod all grow freely in the
            root zone. In fall, Eastern Gray Squirrels bury the nuts up to 300 feet from the trunk and
            recover most by scent through winter; the ones they forget become next spring's seedlings. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Black walnut isn't at risk — its obstacles are reputational. The juglone clash with garden
            crops and the black hull that permanently stains driveways and skin both vanish with one
            decision: plant it at the far edge of the yard, away from vegetable beds and hardscape.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant a sapling at least 50 feet from vegetable beds and sensitive ornamentals — native
              understory plants grow fine in the root zone. [2]
            </li>
            <li>
              Leave the fallen hulls and nut debris under the tree from September through March, when
              squirrels are working the cache by scent. [2]
            </li>
            <li>
              Skip canopy insecticide from May through September, when Luna, Cecropia, and Polyphemus
              caterpillars are feeding in the leaves. [2]
            </li>
            <li>
              Leave the leaf litter undisturbed beneath the canopy from October through May — the
              silkmoth pupae are overwintering in it. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">Black walnut is a primary Luna host across eastern North America — caterpillars feed through July, overwinter as pupae in the litter, and emerge as mouthless adults the next May.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">North America's largest moth also develops on black walnut, its four-inch caterpillar spinning a papery cocoon on a branch where it overwinters fully exposed.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">The walnut's main seed disperser — it caches nuts up to 300 feet out, recovers most by scent, and the forgotten ones regenerate the tree across a neighborhood.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('white-oak')}>
            <span className="neighbor-name">White Oak</span>
            <span className="neighbor-note">The other great canopy mast producer of the same woodland; a yard with both walnut and oak carries a far wider caterpillar food web than either alone.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Juglans_nigra" target="_blank" rel="noopener noreferrer">Wikipedia — Juglans nigra (Black Walnut)</a></li>
            <li><a href="https://xerces.org/leave-the-leaves" target="_blank" rel="noopener noreferrer">Xerces Society — Leave the Leaves</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
