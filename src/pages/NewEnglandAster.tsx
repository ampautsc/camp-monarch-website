import type { Page } from '../App'

interface NewEnglandAsterProps {
  onNavigate: (page: Page) => void
}

export default function NewEnglandAster({ onNavigate }: NewEnglandAsterProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aster_novae-angliae_-_Raublattaster.jpg/1280px-Aster_novae-angliae_-_Raublattaster.jpg"
          alt="New England Aster in bloom with dense clusters of purple ray florets around yellow centers"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Haeferl&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Aster_novae-angliae_-_Raublattaster.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>New England Aster</h1>
        <p className="hero__lead">
          New England Aster (<em>Symphyotrichum novae-angliae</em>) blooms later than almost
          anything else in the garden — from late August through mid-October, sometimes past
          the first frost. By the time it opens, goldenrod is fading and most summer wildflowers
          are finished. A migrating monarch burning fat reserves built since July relies on
          flowers like this one still producing nectar this late in the season. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A monarch arriving in Mexico with 25% body fat survives the winter at roughly twice
            the rate of one arriving at 15% — and every flower it nectars on during the 2,000-mile
            flight south affects that number. Canada Goldenrod covers the September fuel-loading
            window; New England Aster extends it into October, often the last dense nectar
            source migrating monarchs pass through before the Gulf Coast. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Monarch_Butterfly_on_New_England_Aster_by_Rick_L_Hansen_%284515058100%29.jpg"
            alt="A Monarch butterfly nectaring on New England Aster flowers"
            width={1024}
            height={683}
            loading="lazy"
          />
          <figcaption>
            A monarch fueling up on aster nectar during fall migration — every stop like this
            one improves its odds of surviving the winter in Mexico.
            <span className="photo-credit"> Photo: Rick L Hansen / USFWS&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_on_New_England_Aster_by_Rick_L_Hansen_(4515058100).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Each stem carries dozens of flower heads at once, their centers shifting from yellow
            to orange-red as they're pollinated, so a single plant in October shows new flowers,
            spent ones, and dry seed heads simultaneously. Pearl Crescent caterpillars feed on
            the leaves from spring through the final generation, which overwinters partly grown
            in the leaf litter at the plant's base. After bloom, goldfinches strip the drying
            seed heads, and the hollow dead stems become winter chambers for small native bees. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            New England Aster is common and easy to grow, but it sets its flower buds in late
            summer — so a routine August tidy-up that cuts tall perennials back to 12 inches
            removes the entire fall bloom before it ever opens, with no time left to recover
            before frost.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Skip the August cutback on this plant — let it grow tall and set buds undisturbed
              through September and October. [2]
            </li>
            <li>
              Plant a seed-grown straight species rather than a compact cultivar where habitat
              value matters most; it spreads further and offers more flowers per plant. [2]
            </li>
            <li>
              Choose full sun for the densest bloom and the longest nectar window into fall. [2]
            </li>
            <li>
              Leave the dead stalks standing through February for overwintering bees and
              seed-eating birds, then cut back in late winter before new growth starts. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Adults nectar on New England Aster during fall migration, building the fat reserves that determine winter survival in Mexico.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('pearl-crescent')}>
            <span className="neighbor-name">Pearl Crescent</span>
            <span className="neighbor-note">Lays eggs on aster leaves exclusively; the final-generation caterpillar overwinters in leaf litter and becomes the first butterfly of April.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">Blooms the weeks before aster opens; together they cover the monarch migration's fuel-loading window from August through October.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Dozens of species nectar on the late-season flowers; stem-nesting bees overwinter inside the dried hollow stalks.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Symphyotrichum_novae-angliae" target="_blank" rel="noopener noreferrer">Wikipedia — Symphyotrichum novae-angliae (New England Aster)</a></li>
            <li><a href="https://monarchjointventure.org/monarch-biology" target="_blank" rel="noopener noreferrer">Monarch Joint Venture — Monarch Biology</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
