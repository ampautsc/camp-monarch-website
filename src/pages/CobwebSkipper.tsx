import type { Page } from '../App'

interface CobwebSkipperProps {
  onNavigate: (page: Page) => void
}

export default function CobwebSkipper({ onNavigate }: CobwebSkipperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Hesperia_metea_Bruce.jpg/1280px-Hesperia_metea_Bruce.jpg"
          alt="Cobweb Skipper specimen with wings spread, showing orange-brown upperwings with scattered pale spots and dark borders"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={830}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Skye McDavid&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hesperia_metea_Bruce.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cobweb Skipper</h1>
        <p className="hero__lead">
          The Cobweb Skipper (<em>Hesperia metea</em>) is the first grass skipper to fly each
          spring, emerging in late April while goldenrod is still a rosette and milkweed is
          still underground. Its pale hindwing underside carries an irregular white network
          rather than the clean spot-arc of other orange skippers — the "cobweb" that names it.
          The adult lives only about two weeks. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A male stakes out the tallest stem tip in a stand of native bunchgrass and holds it
            — perching, watching, and darting after anything that moves through his airspace,
            whether a rival male, another butterfly, or a passing bird. He returns to the same
            stem within seconds each time. The forewing shows scattered pale spots against
            orange-brown with darker borders, giving the species a checkered, contrasting look
            in flight. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hesperia_metea_63203982.jpg/1280px-Hesperia_metea_63203982.jpg"
            alt="Cobweb Skipper perched on vegetation with wings folded, showing the pale hindwing underside with an irregular white cobweb-like network"
            width={1280}
            height={755}
            loading="lazy"
          />
          <figcaption>
            Wings folded, the field mark is unmistakable: a loose, washed network of white lines
            across the hindwing, not the neat curved arc of spots found on other spring skippers.
            <span className="photo-credit"> Photo: jrcagle&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Hesperia_metea_63203982.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            A female lays single eggs on the blades of native bunchgrass — Little Bluestem and
            Prairie Dropseed are both documented hosts. The larva feeds briefly, then descends
            to the crown of the clump and spins a silk shelter, entering a diapause that lasts
            through summer, fall, and winter. It resumes feeding for a few weeks the following
            spring and pupates in April — more than ten months after the egg was laid, in the
            same grass crown the whole time. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Cobweb Skipper is secure wherever native bunchgrass survives, but its margin for
            error is thin. The larva spends ten of its twelve months hidden at the base of one
            grass clump, and a mower or string trimmer run through that clump before mid-April
            removes the pupating larva along with the dead winter growth — at exactly the moment
            it is closest to becoming an adult.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant Little Bluestem or Prairie Dropseed in full sun, in dry to average soil —
              both are documented host grasses that establish from plugs in two to three
              seasons. [2]
            </li>
            <li>
              Leave grass clumps standing until after mid-April. The larva overwinters and
              pupates at the crown, and cutting before then removes it directly. [2]
            </li>
            <li>
              Plant an early-blooming native flower, such as Golden Alexanders or spring cress,
              within the same patch — the only nectar available during the adult's two-week
              flight window. [2]
            </li>
            <li>
              Group three or more grass clumps within a 10-foot radius, giving a patrolling male
              and egg-laying females more than one stem to use. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
            <span className="neighbor-name">Little Bluestem</span>
            <span className="neighbor-note">A documented host grass; the larva overwinters in a silk shelter at the crown, below the same blades that turn copper-red each fall.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
            <span className="neighbor-name">Prairie Dropseed</span>
            <span className="neighbor-note">The other documented host grass; its arching seed panicle tip becomes a male's spring perch, the same role it plays for Leonard's Skipper in fall.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
            <span className="neighbor-name">Leonard's Skipper</span>
            <span className="neighbor-note">Its fall counterpart — the same bunchgrass clump that shelters a Cobweb Skipper larva through winter hosts a Leonard's Skipper egg the following September.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('golden-alexanders')}>
            <span className="neighbor-name">Golden Alexanders</span>
            <span className="neighbor-note">Blooms in the same two-week window the adult Cobweb Skipper is flying, supplying nectar within a male's patrol range.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Hesperia-metea" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Cobweb Skipper</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hesperia_metea" target="_blank" rel="noopener noreferrer">Wikipedia — Hesperia metea (Cobweb Skipper)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
