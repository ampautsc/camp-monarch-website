import type { Page } from '../App'

interface LunaMothProps {
  onNavigate: (page: Page) => void
}

export default function LunaMoth({ onNavigate }: LunaMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Actias_luna-male.jpg/1280px-Actias_luna-male.jpg"
          alt="A male Luna Moth at rest, pale green wings spread wide with long trailing tails on the hindwings and an eyespot on each wing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1281}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: David notMD&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Actias_luna-male.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Luna Moth</h1>
        <p className="hero__lead">
          The Luna Moth is one of the largest moths in North America, pale green with long
          trailing tails on the hindwings and an eyespot on each wing. It is active only at
          night, and the adult does not feed: it has no working mouthparts and lives about a
          week on fat stored during its caterpillar stage. It flies only at night, and most of
          its life happens earlier, as a green caterpillar on the leaves of native hardwood
          trees. [1][2]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="adult-heading">
          <h2 id="adult-heading">A week as an adult</h2>
          <p>
            An adult Luna Moth lives about a week and does not eat. It spends that week looking
            for a mate. Females release a scent at night that males find with their large,
            feathery antennae. After mating, a female lays her eggs on the leaves of host trees,
            and the adults die soon after. [2][3]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Actias_luna_4th_instar_sjh.JPG/1280px-Actias_luna_4th_instar_sjh.JPG"
            alt="A Luna Moth caterpillar in its fourth instar, bright green with rows of small spines, on a leaf"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Most of a Luna Moth&apos;s life is spent at this stage, eating leaves and growing
            through several molts before spinning a cocoon.
            <span className="photo-credit"> Photo: Kugamazog&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Actias_luna_4th_instar_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">The rest of the year</h2>
          <p>
            Most of a Luna Moth&apos;s life happens in its earlier stages. The eggs hatch into
            green caterpillars that feed on the leaves of deciduous trees, including walnut,
            hickory, sweetgum, sumac, and birch, growing through several molts over about a
            month. The caterpillar then spins a silk cocoon wrapped in a leaf, which usually
            falls to the ground. In the north there is one generation a year, and the moth spends
            the winter as a pupa in the leaf litter before emerging in late spring. Farther south
            there can be two or three generations in a year. [1][2]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            There is no population count for the Luna Moth. It is widespread across eastern
            North America and is not considered rare or endangered, and the IUCN has not
            assessed it. There are reports of local declines. The documented pressures are
            habitat loss, pesticides, and outdoor lighting at night, which can pull the moths
            away from mating and wear them out. An introduced parasitic fly, brought from Europe
            in the early 1900s to control spongy moths, also attacks the caterpillars of Luna
            Moths and other native silk moths. [2][3]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <p>
            The Luna Moth needs leafy native trees and dark nights, both of which a yard can
            provide.
          </p>
          <ol className="step-list">
            <li>
              Native trees such as walnut, hickory, sweetgum, birch, and sumac are what the
              caterpillars eat. A yard with even one of them can support them. [1][2]
            </li>
            <li>
              Turning off outdoor lights at night, or putting them on a motion sensor, keeps
              moths from being drawn off course and worn out. Warm-colored bulbs draw fewer
              insects than bright white ones. [3]
            </li>
            <li>
              Leaving fallen leaves in place over winter protects the cocoons, which spend the
              cold months in the leaf litter. Raking and bagging the leaves throws them out with
              it. [2]
            </li>
            <li>
              Skipping pesticides on trees and gardens spares both the caterpillars and the
              adults. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('black-walnut')}>
            <span className="neighbor-name">Black Walnut</span>
            <span className="neighbor-note">One of the main native trees Luna Moth caterpillars eat. A single mature walnut supports many of them.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Another giant silk moth in the same family. Same week-long, non-feeding adult life and the same vulnerability to outdoor lights.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">The largest moth in North America, in the same family. Uses cherry and other trees, so a single yard can support both species.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('fireflies')}>
            <span className="neighbor-name">Fireflies</span>
            <span className="neighbor-note">Also overwinter in leaf litter and are hurt by outdoor lighting at night. The same yard choices help both.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Actias-luna" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Luna Moth (Actias luna)</a></li>
            <li><a href="https://animaldiversity.org/accounts/Actias_luna/" target="_blank" rel="noopener noreferrer">Animal Diversity Web — Actias luna</a></li>
            <li><a href="https://www.britannica.com/animal/luna-moth" target="_blank" rel="noopener noreferrer">Encyclopaedia Britannica — Luna moth</a></li>
            <li><a href="https://mdc.mo.gov/discover-nature/field-guide/luna-moth" target="_blank" rel="noopener noreferrer">Missouri Department of Conservation — Luna Moth</a></li>
            <li><a href="https://www.fllt.org/goddess-of-the-moon-the-life-history-of-the-luna-moth/" target="_blank" rel="noopener noreferrer">Finger Lakes Land Trust — Luna Moth life history</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
