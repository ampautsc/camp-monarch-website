import type { Page } from '../App'

interface NewJerseyTeaProps {
  onNavigate: (page: Page) => void
}

export default function NewJerseyTea({ onNavigate }: NewJerseyTeaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/CeanothusAm1.jpg/1280px-CeanothusAm1.jpg"
          alt="New Jersey Tea shrub with clusters of small white flowers on arching stems"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={857}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Douglas Goldman&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:CeanothusAm1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>New Jersey Tea</h1>
        <p className="hero__lead">
          New Jersey Tea (<em>Ceanothus americanus</em>) is a native shrub that blooms May
          through June, its small white flowers carried in dense clusters on arching stems two
          to four feet tall. It is the only <em>Ceanothus</em> species native to eastern North
          America — and the Mottled Duskywing skipper needs <em>Ceanothus</em> leaves to
          complete its larval stage. Without this one shrub in the landscape, the butterfly has
          nowhere in the East to reproduce. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A female Mottled Duskywing lays her eggs on New Jersey Tea leaves and on no other
            plant in the eastern half of the country. The caterpillars feed through several
            instars, then pupate in the leaf litter at the base of the shrub and overwinter
            there. Adults emerge in late April and May, among the first skippers flying each
            spring, before most native wildflowers have opened. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CeanothusAm8.jpg/1280px-CeanothusAm8.jpg"
            alt="Close view of New Jersey Tea's small white flower clusters"
            width={1280}
            height={1912}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Bumblebee queens and small halictid bees work these clusters through May and June —
            one of the few nectar sources open that early in the season.
            <span className="photo-credit"> Photo: Douglas Goldman&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:CeanothusAm8.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Flowers open from late May through June, filling the gap between spring-blooming
            shrubs and the wildflowers of midsummer — common milkweed doesn't open until
            mid-June. Underground, root nodules fix nitrogen from the air into the soil all
            season, enriching the ground around the plant without any fertilizer. By late
            summer the small seed capsules dry and split, and American Goldfinches strip them
            through August and September. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            New Jersey Tea once grew across the early-successional shrublands and open woodland
            edges that covered much of the eastern interior. As that habitat matured into
            closed-canopy forest or was converted to mowed lawn, the plant disappeared from
            most of its former range — and the Mottled Duskywing, which depends on it
            completely, now appears on species-of-concern lists in several states.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant in full sun with well-drained soil — it tolerates clay, sand, or rocky
              ground once established. [2]
            </li>
            <li>
              Choose the planting spot carefully and leave it there; the deep taproot makes
              mature plants very difficult to move. [2]
            </li>
            <li>
              Cut stems back to about 12 inches in late winter to encourage denser growth and
              heavier bloom the following spring. [2]
            </li>
            <li>
              Skip insecticide near the shrub from April through summer, when Mottled Duskywing
              caterpillars may be feeding on the leaves. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">Opens in mid-June, just after New Jersey Tea finishes, carrying the early-summer nectar sequence forward.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Bumblebee queens and small halictid bees rely on the May and June flower clusters as an early-season nectar source.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Adults moving north in late May need nectar before common milkweed opens; New Jersey Tea is blooming during that exact gap.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Strips seeds from the dried summer seed capsules in August and September.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Ceanothus_americanus" target="_blank" rel="noopener noreferrer">Wikipedia — Ceanothus americanus (New Jersey Tea)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Erynnis-martialis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Mottled Duskywing</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
