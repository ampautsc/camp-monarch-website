import type { Page } from '../App'

interface CommonMilkweedProps {
  onNavigate: (page: Page) => void
}

export default function CommonMilkweed({ onNavigate }: CommonMilkweedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Asclepias_syriaca%2C_2021-07-04%2C_Bethel_Park%2C_01.jpg/1280px-Asclepias_syriaca%2C_2021-07-04%2C_Bethel_Park%2C_01.jpg"
          alt="Common milkweed in bloom — a rounded cluster of pink-lavender flowers above broad opposite leaves, with a bee visiting"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cbaile19&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Asclepias_syriaca,_2021-07-04,_Bethel_Park,_01.jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Common Milkweed</h1>
        <p className="hero__lead">
          Common milkweed (<em>Asclepias syriaca</em>) is the one plant monarch caterpillars eat and
          nothing else — and it grew at every Midwestern farm-field edge until herbicide-tolerant
          crops made clean-field spraying possible. An estimated 850 million milkweed stems
          disappeared between 1999 and 2010, and the eastern monarch population fell from roughly
          900 million to about 60 million over the same span. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A female monarch in midsummer flies low across vegetation, touching her abdomen to leaf
            after leaf — testing for milkweed's exact chemical signature. When she finds it, she
            lays a single pale-green egg the size of a pinhead on the leaf's underside, then moves
            on. She'll lay 300 to 500 eggs over her life, almost never two on the same plant. The
            caterpillar that hatches eats the milkweed's latex along with the leaf, sequestering its
            cardiac glycosides into its own body until it is toxic to birds. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Monarch_Caterpillar_Eating_%2819913325912%29.jpg/1280px-Monarch_Caterpillar_Eating_%2819913325912%29.jpg"
            alt="A boldly banded monarch caterpillar feeding on the edge of a milkweed leaf, a milkweed flower visible nearby"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The bold yellow, white, and black banding isn't camouflage — it advertises the
            bird-toxic glycosides the caterpillar has stored from the leaf. A single plant can carry
            40 caterpillars to maturity and re-leaf within two to three weeks.
            <span className="photo-credit"> Photo: USFWS&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Monarch_Caterpillar_Eating_(19913325912).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Pink-lavender flower clusters open from late June through August, throwing a heavy
            vanilla-and-honey scent strongest at midday — a single plant in bloom can carry eight
            native bee species at once, including the federally endangered rusty patched bumble bee.
            By September the flowers give way to warty green pods that split to release hundreds of
            seeds on silk parachutes; American goldfinches pull that silk for nest lining from
            August onward. The plant emerges late in spring — mid-May to June, well after most
            perennials — and spreads by underground rhizome once established. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            As a species, common milkweed isn't rare — but it was eliminated from the farmland where
            most of it once grew, and it does not return on its own. Getting it back takes deliberate
            planting. The catch in a yard: it emerges so late, and looks so much like a weed, that
            it's easily mowed or pulled before anyone recognizes it.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant at least three plugs together in full sun, somewhere spread is welcome — a back
              fence, a corner, a dedicated patch; females seek out clusters over lone plants. [2]
            </li>
            <li>
              Leave the flowers and pods intact through September — late blooms feed migrating
              adults and the pod silk lines goldfinch nests. [2]
            </li>
            <li>
              Cut stems to about 6 inches in late October or November, after caterpillar season
              ends and seeds have dispersed. [2]
            </li>
            <li>
              Mark the patch with a stake before winter — milkweed emerges weeks after everything
              else, when bare ground is easy to mow or dig. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Lays its eggs only on milkweed; the caterpillar eats milkweed and nothing else, making this plant the limit on whether monarchs can breed in a place.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('butterfly-weed')}>
            <span className="neighbor-name">Butterfly Weed</span>
            <span className="neighbor-note">A drought-tolerant orange milkweed that hosts the same monarch caterpillars while preferring dry, sunny spots common milkweed avoids.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Pulls the silky fibers from milkweed pods to line its late-summer nests, the same weeks the seeds are dispersing on the wind.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Eight or more species can work a single milkweed cluster at once, drawn by the heavy midday scent — including the endangered rusty patched bumble bee.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Asclepias_syriaca" target="_blank" rel="noopener noreferrer">Wikipedia — Asclepias syriaca (Common Milkweed)</a></li>
            <li><a href="https://www.xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarchs (conservation and milkweed)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
