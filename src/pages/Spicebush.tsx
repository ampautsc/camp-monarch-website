import type { Page } from '../App'

interface SpicebushProps {
  onNavigate: (page: Page) => void
}

export default function Spicebush({ onNavigate }: SpicebushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2023-03-30_13_24_41_Common_spicebush_blooming_in_the_forest_within_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-thumbnail.jpg"
          alt="Spicebush in late March bloom — small yellow flower clusters coating bare gray branches in a leafless forest understory"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Famartin&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:2023-03-30_13_24_41_Common_spicebush_blooming_in_the_forest_within_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township,_Mercer_County,_New_Jersey.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Shrubs</div>
        <h1>Spicebush</h1>
        <p className="hero__lead">
          Spicebush (<em>Lindera benzoin</em>) blooms in late March on bare gray stems — a low haze
          of tiny yellow flowers in the still-brown understory, among the very first native nectar
          the overwintered queen bumblebees find. The same shade-loving shrub carries Spicebush
          Swallowtail caterpillars in July and ripens high-fat red berries for migrating thrushes in
          September: one plant doing three distinct jobs across three seasons. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A queen bumblebee that spent the winter underground emerges on the first warm days of
            March, often before the ground has fully thawed, and needs nectar and pollen immediately
            to fuel the start of a new colony. Spicebush, red maple, and silver maple are among the
            only native plants open that early. In a yard without them, that queen forages on whatever
            ornamentals happen to be blooming — or dies before founding a colony at all. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2023-09-17_13_17_24_Common_spicebush_fruit_ripening_within_the_forest_in_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-thumbnail.jpg"
            alt="Clusters of bright red spicebush berries ripening among green leaves in a September forest understory"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Spicebush is dioecious — only female plants fruit, and only with a male nearby. The
            September berries run over 35% fat by dry weight, more than twice most native fruits,
            which is why migrating thrushes strip them so fast.
            <span className="photo-credit"> Photo: Famartin&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:2023-09-17_13_17_24_Common_spicebush_fruit_ripening_within_the_forest_in_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township,_Mercer_County,_New_Jersey.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Spicebush Swallowtails lay eggs on the leaves in late May and June. Early caterpillars
            mimic a fresh bird dropping; after the third molt they turn green, grow large false
            eyespots, and live inside leaves they roll and seal with silk — resting by day, feeding by
            night, everting an orange osmeterium when threatened. The last generation overwinters as a
            chrysalis on a twig and emerges right as the shrub blooms. Crush a leaf and it smells of
            allspice — the same aromatic oils that make spicebush more deer-resistant than most native
            shrubs. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Spicebush persists better than most natives where deer are heavy, thanks to its aromatic
            oils, but it loses ground two other ways: invasive honeysuckle, Japanese barberry, and
            burning bush crowd it out of shaded edges, and a lone shrub planted without a male nearby
            sets little or no fruit at all.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant it in part or full shade under existing trees, where sun-loving natives won't
              establish — fall planting gives the roots a head start. [2]
            </li>
            <li>
              Plant at least one male and one female (or three-plus from the same nursery batch) so
              the female can set its September berry crop. [2]
            </li>
            <li>
              In July, scan the branches for leaves rolled into silk-sealed tubes — that's a Spicebush
              Swallowtail caterpillar shelter, and the chewed foliage does the shrub no lasting harm. [2]
            </li>
            <li>
              Don't spray Btk or insecticides on spicebush or any nearby sassafras — both are
              caterpillar hosts, and the rolled-leaf shelters hide larvae inside. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
            <span className="neighbor-name">Spicebush Swallowtail</span>
            <span className="neighbor-note">Lays eggs on the leaves in early summer; the green, false-eyed caterpillar lives in a silk-rolled leaf tube before overwintering as a chrysalis on a twig.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A declining forest breeder that uses the high-fat September berries as pre-migration fuel — where deer have erased spicebush, the refueling stop disappears too.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">The late-March bloom is one of the first nectar sources for queen bumblebees emerging from winter to found a colony.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('sassafras')}>
            <span className="neighbor-name">Sassafras</span>
            <span className="neighbor-note">The other Spicebush Swallowtail host — planted near spicebush, the two together double the host foliage available to the same caterpillars.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Lindera_benzoin" target="_blank" rel="noopener noreferrer">Wikipedia — Lindera benzoin (Spicebush)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-troilus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Spicebush Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
