import type { Page } from '../App'

interface ButtonbushProps {
  onNavigate: (page: Page) => void
}

export default function Buttonbush({ onNavigate }: ButtonbushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cephalanthus_occidentalis_kz1.jpg/1280px-Cephalanthus_occidentalis_kz1.jpg"
          alt="Several Buttonbush flower spheres at different stages of opening, surrounded by glossy green leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={1481}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Cephalanthus_occidentalis_kz1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Buttonbush</h1>
        <p className="hero__lead">
          Buttonbush (<em>Cephalanthus occidentalis</em>) is a native shrub built for the wettest,
          least plantable corner of a yard — roots that tolerate three to four feet of standing
          water during flood periods. In July and August it opens 1-inch white spheres, each one
          packed with 200 or more florets, pollen-bearing anthers protruding from every one. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A native bee with a tongue under 4 millimeters can't reach nectar inside a tubular
            flower like bergamot or mint — but a Buttonbush sphere has no tube to enter. Its
            anthers extend roughly 5mm above each floret's opening, exposed on every side of the
            ball. The bee lands anywhere on the sphere's surface and works across it, harvesting
            pollen the same way a bumblebee does. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cephalanthus-occidentalis-flower-head.JPG/1280px-Cephalanthus-occidentalis-flower-head.JPG"
            alt="Close-up of a single Buttonbush flower sphere showing dozens of thread-like anthers radiating outward"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Florets at a sphere's outer edge open first while the center is still in bud — a
            single head stays in active pollen production for three to four weeks.
            <span className="photo-credit"> Photo: Sten Porse&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Cephalanthus-occidentalis-flower-head.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Buttonbush blooms from early July through late August, the gap between spring natives
            like New Jersey Tea and the late-August opening of Canada Goldenrod and New England
            Aster. Migrating monarchs, sphinx moths working the spheres at dusk, and Ruby-throated
            Hummingbirds all visit during this window. After bloom, each sphere hardens into a
            cluster of small seeds that ripens in September and stays on the branch through
            winter — Wood Ducks and other waterfowl pick them off the water's surface below. New
            leaves don't emerge until late May, so the shrub looks bare into early June; that's
            normal, not dieback. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Buttonbush isn't at risk, but it's rarely planted, because the spot it needs — a low
            corner that holds standing water for weeks at a time — is the spot most yards try to
            drain rather than plant.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Site it in the lowest, wettest corner of the yard — a spot that holds standing water
              for two to six weeks after rain and dries down through summer is ideal. [2]
            </li>
            <li>
              Skip irrigation once established; a Buttonbush in a true wet site reaches full
              height in four to five years without supplemental water. [2]
            </li>
            <li>
              Leave the seed clusters on the branches through winter — they don't drop on their
              own, and waterfowl work them from the water below well into fall. [2]
            </li>
            <li>
              Cut back hard in late winter if size needs control; it tolerates aggressive pruning
              and regrows readily from the base. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Short-tongued species that can't reach into tubular flowers harvest pollen freely from the exposed anthers covering each sphere.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">A declining native bumblebee documented foraging on Buttonbush spheres through July and August.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('swamp-milkweed')}>
            <span className="neighbor-name">Swamp Milkweed</span>
            <span className="neighbor-note">Shares the same wet-site preference and July-August bloom window; planting both doubles mid-summer nectar in a low corner.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Probes the short floret tubes for nectar in July and August, picking up pollen on its bill from the same anthers bees visit.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Cephalanthus_occidentalis" target="_blank" rel="noopener noreferrer">Wikipedia — Cephalanthus occidentalis (Buttonbush)</a></li>
            <li><a href="https://xerces.org/bees" target="_blank" rel="noopener noreferrer">Xerces Society — Protecting Native Bees</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
