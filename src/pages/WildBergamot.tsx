import type { Page } from '../App'

interface WildBergamotProps {
  onNavigate: (page: Page) => void
}

export default function WildBergamot({ onNavigate }: WildBergamotProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Monarda_fistulosa_-_Wild_Bergamot_%28Flower%29.jpg/1280px-Monarda_fistulosa_-_Wild_Bergamot_%28Flower%29.jpg"
          alt="Wild Bergamot flower head with tubular lavender florets clustered atop a square stem"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Jasper Shide&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Monarda_fistulosa_-_Wild_Bergamot_(Flower).jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Wild Bergamot</h1>
        <p className="hero__lead">
          Wild Bergamot (<em>Monarda fistulosa</em>) is a native perennial wildflower that blooms
          across most of the eastern and central United States from late June through August,
          standing 1 to 3 feet tall with lavender, tubular-floret flower heads on square stems. A
          specialist mining bee, <em>Anthophora montana</em>, packs her nest cells with bergamot
          pollen and no other — if no bergamot is blooming within her range during her brief
          nesting window, she cannot complete a brood. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A female <em>Anthophora montana</em> digs a nesting burrow into loose, well-drained
            soil, branches it into brood cells, and packs each one with a ball of bergamot
            pollen before laying a single egg and sealing the cell. The larva eats that pollen
            ball and nothing else, then pupates inside through winter. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Monarda_fistulosa1.jpg/1280px-Monarda_fistulosa1.jpg"
            alt="Close view of a Wild Bergamot flower head showing the long tubular florets"
            width={1280}
            height={1912}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Each floret is about an inch long — within reach of long-tongued specialists like
            the hummingbird clearwing moth, but too deep for many short-tongued generalist bees.
            <span className="photo-credit"> Photo: DouglasGoldman&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Monarda_fistulosa1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Bergamot opens in late June and keeps producing new flowers through August rather
            than blooming all at once. Hummingbird Clearwing Moths work the flower heads
            throughout that window, hovering in front of each cluster the way a hummingbird
            does. Monarchs breeding through the Midwest and Northeast nectar on it through June
            and July. By the time bergamot finishes in August, goldenrod and New England Aster
            are opening to continue the nectar season into October. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Wild Bergamot is widespread, drought-tolerant, and easy to establish — the plant
            itself faces no particular threat. The narrower risk is timing: a yard with no
            bergamot blooming in July leaves <em>Anthophora montana</em> with nowhere to
            provision a brood, even if she has a perfectly good place nearby to dig her nest.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant in full sun with well-drained soil — at least six hours of direct sun keeps
              bloom heavy and the window long enough to matter. [2]
            </li>
            <li>
              Leave a small patch of bare or sandy soil within 30 feet for ground-nesting bees
              like <em>Anthophora montana</em> to dig burrows. [2]
            </li>
            <li>
              Leave the hollow square stems standing through winter — small native bees
              overwinter as adults inside them — and cut back only in early spring. [2]
            </li>
            <li>
              Skip insecticide on and near bergamot from June through August, when the widest
              range of specialist and generalist pollinators is visiting. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Anthophora montana is a bergamot pollen specialist among them — her nest cells contain nothing else.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hummingbird-clearwing-moth')}>
            <span className="neighbor-name">Hummingbird Clearwing Moth</span>
            <span className="neighbor-note">Hovers at bergamot's tubular florets through July and August, reaching nectar many shorter-tongued bees cannot.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Breeding adults nectar on bergamot through June and July while laying eggs on nearby milkweed.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">Blooms alongside bergamot in June and July; together they carry the nectar season through the heart of summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Monarda_fistulosa" target="_blank" rel="noopener noreferrer">Wikipedia — Monarda fistulosa (Wild Bergamot)</a></li>
            <li><a href="https://xerces.org/bees" target="_blank" rel="noopener noreferrer">Xerces Society — Protecting Native Bees</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
