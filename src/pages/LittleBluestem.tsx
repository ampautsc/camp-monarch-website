import type { Page } from '../App'

interface LittleBluestemProps {
  onNavigate: (page: Page) => void
}

export default function LittleBluestem({ onNavigate }: LittleBluestemProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Schizachyrium_scoparium_16zz.jpg/1280px-Schizachyrium_scoparium_16zz.jpg"
          alt="Little Bluestem bunchgrass clump with narrow arching blades growing in a garden setting"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: David J. Stang&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Schizachyrium_scoparium_16zz.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Little Bluestem</h1>
        <p className="hero__lead">
          Little Bluestem (<em>Schizachyrium scoparium</em>) is a native bunchgrass that grows 2
          to 4 feet tall from a single non-spreading crown, in full sun and dry to rocky soil
          across the central and eastern United States. Starting in late August its blades turn
          from blue-green to copper-red, reaching full color by October and holding it through
          January or February. Two grass-skipper butterflies — Leonard's Skipper and Cobweb
          Skipper — lay their eggs on its blades and overwinter their larvae in its crown. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            In late April, a female Cobweb Skipper moves through a stand of Little Bluestem
            inspecting blades and lays a single egg on one. In late August, a female Leonard's
            Skipper does the same. Both larvae feed briefly, then descend to the crown of the
            clump and build a silk shelter — the structure each depends on to survive the
            following winter. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Little_Bluestem_P7280448.JPG/1280px-Little_Bluestem_P7280448.JPG"
            alt="Little Bluestem grass blades in close detail, showing the narrow, fine-textured leaf structure"
            width={1280}
            height={1707}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            The narrow leaf blade — about 3 millimeters wide — is what a female Cobweb or
            Leonard's Skipper inspects when searching for a place to lay a single egg.
            <span className="photo-credit"> Photo: Chris Light&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Little_Bluestem_P7280448.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The color change begins at the blade tips in late August and reaches the whole clump
            by October — a drying-down process, not unlike non-native shrubs grown for fall
            color, except the pigment holds because the dried tissue is no longer metabolically
            active to break it down. The fluffy white seed heads that follow are made of silky
            hairs attached to each seed, and Dark-eyed Juncos and American Tree Sparrows pull
            seeds from them through November and December — the same standing clump that
            sheltered two species of overwintering caterpillar all season. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Little Bluestem is common and easy to establish, but a fall cutback — the tidy,
            standard end-of-season yard chore — removes the copper-red color, the bird food, and
            both skippers' overwintering shelter in one pass. None of that loss is visible from
            the yard; the clump just looks shorter.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant in full sun, in dry to rocky, well-drained soil — Little Bluestem performs
              better in lean conditions than in heavy, fertile, or shaded ground. [2]
            </li>
            <li>
              Leave the clump standing until late April or early May. Both skippers' larvae
              overwinter at the crown, and the dried blades and seed heads feed birds all
              winter. [2]
            </li>
            <li>
              Plant three or more clumps within 10 feet of each other, so a patrolling female has
              more than one target to find and return to. [2]
            </li>
            <li>
              Add Canada Goldenrod or a native aster nearby — Leonard's Skipper adults need
              nectar in the same border where they lay their eggs in late summer. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
            <span className="neighbor-name">Leonard's Skipper</span>
            <span className="neighbor-note">Lays eggs on Little Bluestem blades in late August; the larva overwinters at the crown and the adult emerges the following year on the same clump.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
            <span className="neighbor-name">Cobweb Skipper</span>
            <span className="neighbor-note">The first grass skipper of spring; its larva overwinters in the same crown where a Leonard's Skipper egg was laid the previous fall.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
            <span className="neighbor-name">Prairie Dropseed</span>
            <span className="neighbor-note">A fellow native bunchgrass hosting the same two skippers — finer-textured and slightly shorter, with the same dry-soil, full-sun needs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">Blooms in late August at the same time Leonard's Skipper females are laying eggs on the adjacent Little Bluestem blades.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Schizachyrium_scoparium" target="_blank" rel="noopener noreferrer">Wikipedia — Schizachyrium scoparium (Little Bluestem)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Hesperia-metea" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Cobweb Skipper</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
