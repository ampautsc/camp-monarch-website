import type { Page } from '../App'

interface EasternCommaProps {
  onNavigate: (page: Page) => void
}

export default function EasternComma({ onNavigate }: EasternCommaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Polygonia_comma_Kaldari_01.jpg/1280px-Polygonia_comma_Kaldari_01.jpg"
          alt="An Eastern Comma butterfly with wings open showing its orange upperwing with black spots and the deeply scalloped, irregular wing margin"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Kaldari&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Polygonia_comma_Kaldari_01.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Comma</h1>
        <p className="hero__lead">
          The Eastern Comma is an anglewing butterfly with a ragged, jagged wing outline
          that makes a resting adult look exactly like a torn, curled dead leaf. On the
          underside of the hindwing is a small silver comma-shaped mark that gives
          the species its name. Wingspan is 1.75 to 2.5 inches. Like the closely related
          Question Mark and Mourning Cloak, it overwinters as an adult and is one of
          the first butterflies seen in spring — sometimes flying on warm February days
          while snow is still on the ground. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Commas feed primarily on tree sap, fermenting fruit, and dung —
            not nectar. They find sap at woodpecker holes and bark wounds, and are
            frequently seen at fallen overripe fruit in late summer and fall. Males
            establish territories on sunlit patches of forest path or clearing edge,
            perching with wings open on the ground or low vegetation and challenging
            anything that enters. The underside of the wings is a mottled dead-leaf
            pattern — brown, gray, and buff — making resting adults invisible on
            bark or leaf litter. The ragged wing outline removes the telltale butterfly
            silhouette entirely. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eastern_Comma_-_Polygonia_comma%2C_Leesylvania_State_Park%2C_Woodbridge%2C_Virginia.jpg/1280px-Eastern_Comma_-_Polygonia_comma%2C_Leesylvania_State_Park%2C_Woodbridge%2C_Virginia.jpg"
            alt="An Eastern Comma butterfly resting on a leaf with wings partially open, showing the warm orange and black upperwing pattern and deeply jagged wing margins"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The deeply scalloped, irregular wing margin is the Eastern Comma&apos;s primary
            defense at rest — closed wings resemble a dead leaf so convincingly that
            birds often pass within inches without detecting them. The silver comma
            mark on the hindwing underside is visible only when the wings are fully
            closed.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_Comma_-_Polygonia_comma,_Leesylvania_State_Park,_Woodbridge,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Commas overwinter as adults tucked under bark or in wood piles.
            They emerge in late winter — sometimes as early as late February — to breed
            on nettles, hops, and elms. Two generations per year follow: a summer
            generation producing darker-hindwinged summer-form adults, and a fall
            generation producing the winter-form adults with brighter orange hindwings
            that overwinter. The winter form is what people most often notice — the
            bright early-spring individual that appears impossibly early in the year,
            long before most people expect butterflies. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Comma is common across eastern North America wherever woodland
            edges, stream banks, and disturbed areas with nettles and hops occur. [1]
            It is not of conservation concern. Its preference for sap and fermenting
            fruit over nectar makes it broadly independent of wildflower habitat.
            The most significant local threats are loss of old trees providing sap
            sources and overwintering shelter, and removal of native nettles from
            disturbed areas. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow a patch of stinging nettles to grow in a moist, shaded corner.
              Nettles are the primary host plant for Eastern Comma, Question Mark,
              and Red Admiral caterpillars. Even a small patch supports multiple
              anglewing species simultaneously. [2]
            </li>
            <li>
              Leave old trees with sap wounds and loose bark standing. Eastern Commas
              overwinter under bark and feed at sap flows — both require old, somewhat
              damaged trees that are often removed as &quot;hazard trees.&quot; If a tree must
              be removed, leave the standing trunk or a large section of log in place.
              [2]
            </li>
            <li>
              Put out overripe fruit in late summer. Eastern Commas and other anglewings
              feed intensively on fermenting fruit in August and September as they build
              energy reserves for overwintering. A plate of cut overripe bananas, peaches,
              or apples near a woodland edge can draw multiple individuals. [2]
            </li>
            <li>
              Leave a wood pile or brush pile undisturbed through winter. Eastern
              Commas shelter under bark and in wood piles for the winter, sometimes
              from October through February. A wood pile that is not moved or burned
              until April preserves overwintering adults. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('question-mark')}>
            <span className="neighbor-name">Question Mark</span>
            <span className="neighbor-note">The close relative with a silver question mark (instead of a comma) on the hindwing underside; both species overwinter as adults and use the same host plants and food sources.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('mourning-cloak')}>
            <span className="neighbor-name">Mourning Cloak</span>
            <span className="neighbor-note">The third of the three anglewing overwintering butterflies that emerge together in early spring; all three use tree sap as their primary adult food source.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-admiral')}>
            <span className="neighbor-name">Red Admiral</span>
            <span className="neighbor-note">Shares stinging nettles as a caterpillar host plant and fermenting fruit as an adult food source — both are commonly seen together near nettle patches and fallen fruit in fall.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-frog')}>
            <span className="neighbor-name">Wood Frog</span>
            <span className="neighbor-note">Emerges from hibernation at the same time Eastern Commas appear in spring — both are woodland-edge species active as early as the first warm days of February or March.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Polygonia_comma/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Comma</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Polygonia-comma" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Eastern Comma</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
