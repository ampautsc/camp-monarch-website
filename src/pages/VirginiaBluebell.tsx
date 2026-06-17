import type { Page } from '../App'

interface VirginiaBluebellProps {
  onNavigate: (page: Page) => void
}

export default function VirginiaBluebell({ onNavigate }: VirginiaBluebellProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Mertensia_virginica_colony%2C_2022-04-29%2C_Trillium_Trail%2C_01.jpg/1280px-Mertensia_virginica_colony%2C_2022-04-29%2C_Trillium_Trail%2C_01.jpg"
          alt="A woodland colony of Virginia Bluebell with nodding blue flowers and pink buds"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cbaile19&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Mertensia_virginica_colony,_2022-04-29,_Trillium_Trail,_01.jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Virginia Bluebell</h1>
        <p className="hero__lead">
          Virginia Bluebell (<em>Mertensia virginica</em>) is a spring ephemeral that completes
          its entire visible life in 8 to 10 weeks each spring, then stores the season's energy
          in an underground rhizome and goes dormant until the following March. Its nodding
          flower clusters open pink in bud and shift to blue as they mature — a pH change inside
          each petal's cells — so a single cluster at peak bloom shows both colors at once. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A bumblebee queen foraging in April can tell the two colors apart and acts on it:
            open blue flowers have accumulated nectar at the base of the tube, while pink buds
            have not, so she bypasses the buds and works the open flowers. Ruby-throated
            Hummingbirds arrive in the Midwest in mid-April, the same weeks Virginia Bluebell
            peaks — for a newly arrived bird, it may be the only native flower in a woodland
            garden with a tube short enough to reach. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mertensia_virginica_%28pale_blue%29%2C_2023-04-22%2C_Trillium_Trail%2C_01.jpg/1280px-Mertensia_virginica_%28pale_blue%29%2C_2023-04-22%2C_Trillium_Trail%2C_01.jpg"
            alt="Close view of open blue Virginia Bluebell flowers"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Once a flower opens fully blue, it has nectar ready at the base of the tube — the
            cue a foraging bumblebee queen reads at a glance.
            <span className="photo-credit"> Photo: Cbaile19&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Mertensia_virginica_(pale_blue),_2023-04-22,_Trillium_Trail,_01.jpg" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Virginia Bluebell pushes up in March, before deciduous trees have leafed out and
            while the forest floor still gets most of its sunlight. Spring Azure butterflies fly
            their first generation in these same weeks and nectar at its flowers before almost
            anything else has bloomed. Once seeds form in May, the plant pulls its leaves'
            energy back into the rhizome — visible as yellowing — and by June it has disappeared
            above ground entirely, alive and waiting below the soil until the following March. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Virginia Bluebell is secure in its native woodland and floodplain range, but in
            gardens it has one common point of failure: a homeowner who sees the May yellowing,
            assumes the plant is dying, and digs it up. That removes the rhizome, and the plant
            does not come back the following spring.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant rhizomes in fall, 1 to 2 inches deep, in a spot with spring sun before trees
              leaf out and shade through summer. [2]
            </li>
            <li>
              Mark the spot clearly before it goes dormant — a stake, a ring of stones, or a note
              on a garden map all work. [2]
            </li>
            <li>
              Never dig or rototill the area once the leaves yellow in May; the plant is alive
              below ground, not dying. [2]
            </li>
            <li>
              Avoid planting summer annuals over a dormant patch, which risks disturbing the
              rhizome before it sends up new growth next March. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Arrives in mid-April just as Virginia Bluebell peaks, often the first reachable native nectar source of the season.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-columbine')}>
            <span className="neighbor-name">Wild Columbine</span>
            <span className="neighbor-note">Opens two to four weeks after Virginia Bluebell, carrying the early-spring nectar sequence forward.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('golden-alexanders')}>
            <span className="neighbor-name">Golden Alexanders</span>
            <span className="neighbor-note">Co-blooms through April and May in sunnier spots, serving Black Swallowtail larvae and a specialist mining bee.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Bumblebee queens emerging in late March work the open blue flowers and bypass the still-closed pink buds.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Mertensia_virginica" target="_blank" rel="noopener noreferrer">Wikipedia — Mertensia virginica (Virginia Bluebell)</a></li>
            <li><a href="https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Ruby-throated Hummingbird</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
