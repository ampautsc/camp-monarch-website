import type { Page } from '../App'

interface VirginiaCreeperProps {
  onNavigate: (page: Page) => void
}

export default function VirginiaCreeper({ onNavigate }: VirginiaCreeperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Virginia_Creeper_%28Parthenocissus_quinquefolia%29_8073.jpg/1280px-Virginia_Creeper_%28Parthenocissus_quinquefolia%29_8073.jpg"
          alt="Virginia creeper foliage — each leaf made of five leaflets radiating from a single point on a red-tinged climbing stem"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Chris Light&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Virginia_Creeper_(Parthenocissus_quinquefolia)_8073.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Vines</div>
        <h1>Virginia Creeper</h1>
        <p className="hero__lead">
          Virginia creeper (<em>Parthenocissus quinquefolia</em>) carries five leaflets from each
          stem point — not three, like poison ivy. That count is the whole identification: five means
          Virginia creeper. It climbs by tendrils tipped with adhesive discs that grip brick or wood
          without boring in or twining, hosts several native sphinx moths in summer, and ripens
          blue-black berries in October that more than 35 bird species depend on. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            In June and July, the Virginia creeper sphinx moth lays eggs on the undersides of the
            leaves; the caterpillar that hatches is bright green and hornless, unlike most sphinx
            larvae. The day-flying eight-spotted forester — black wings with white spots, easily
            mistaken for a small swallowtail — uses the same vine, as does Abbott's sphinx. A single
            creeper up a fence post can carry larvae of two or three moth species at once: caterpillar
            biomass that vireos, flycatchers, and warblers carry straight to their nestlings. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Virginia_creeper_with_fruit_on_a_grey_wall.jpg/1280px-Virginia_creeper_with_fruit_on_a_grey_wall.jpg"
            alt="Clusters of blue-black Virginia creeper berries on red stems against a grey wall, leaves turning autumn orange"
            width={1280}
            height={869}
            loading="lazy"
          />
          <figcaption>
            The berries hold calcium-oxalate crystals that burn a mammal's mouth but don't bother
            birds, which lack the receptors those crystals trigger — a cedar waxwing can eat 40 in an
            afternoon, and the clusters persist into winter for flickers and robins.
            <span className="photo-credit"> Photo: Balise42&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Virginia_creeper_with_fruit_on_a_grey_wall.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The vine's tendrils end in discs that bond to brick, stone, and wood on contact without
            penetrating the surface — so it doesn't crack mortar or strip paint the way twining
            wisteria and Asian bittersweet do as their stems thicken. In October the leaves turn
            deep scarlet while the berries are still hanging, the five-leaflet pattern still readable
            in the red. And it grows across the entire light gradient, from full sun to deep shade —
            one of the few natives that carries real wildlife value up a fence in a shaded yard. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Virginia creeper isn't at risk, but it's routinely yanked off fences by people who mistake
            it for poison ivy — taking a moth host and a 35-species berry source with it. And a vine
            left to sprawl flat on the ground never climbs to the height where its berry clusters are
            within reach of migrating birds.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Count the leaflets before pulling any vine at a fence line or woodland edge — five is
              Virginia creeper, three means stop and look before touching. [2]
            </li>
            <li>
              If it's already established on a wall or tree, leave it; to remove it, cut the base and
              let the sections dry and detach rather than ripping weathered mortar off with it. [2]
            </li>
            <li>
              Plant one at a fence post, stump, or tree base — it thrives in dry shade and poor soil
              where ornamentals won't grow. [2]
            </li>
            <li>
              Give it something vertical to climb; only a vine that reaches height produces the berry
              clusters migrating birds can actually find. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Returns to a productive vine each October and can strip the whole berry crop in a day or two, tracking reliable fruit sources across years.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">Works the frozen berry clusters in late fall and into January, when other food in a residential yard has run out.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('yellow-rumped-warbler')}>
            <span className="neighbor-name">Yellow-rumped Warbler</span>
            <span className="neighbor-note">One of the few warblers that eats fruit — it takes Virginia creeper berries during its September and October migration, often in mixed flocks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">Uses Virginia creeper as one of its host plants, laying eggs on the leaves in late May and June alongside the vine's resident sphinx moths.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Parthenocissus_quinquefolia" target="_blank" rel="noopener noreferrer">Wikipedia — Parthenocissus quinquefolia (Virginia Creeper)</a></li>
            <li><a href="https://www.allaboutbirds.org/guide/Cedar_Waxwing/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Cedar Waxwing</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
