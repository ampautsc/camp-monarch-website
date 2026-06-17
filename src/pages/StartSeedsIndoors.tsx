import type { Page } from '../App'

interface StartSeedsIndoorsProps {
  onNavigate: (page: Page) => void
}

export default function StartSeedsIndoors({ onNavigate }: StartSeedsIndoorsProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Starting seeds indoors</h1>
        <p className="hero__lead">
          Starting seed indoors gives plants a head start on the season and more control than sowing
          straight into the ground. It works well for native species once any required cold period
          is done. The seedlings go out after the last frost, already a few weeks along, which helps
          them compete with weeds in their first summer.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="timing-heading">
          <h2 id="timing-heading">Timing</h2>
          <p>
            Count back six to eight weeks from the average last frost date and sow then. Species that
            need cold stratification should finish that period first, so factor those weeks in. The
            seed packet or supplier lists both the stratification need and the sowing depth.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Start seeds under cover</h2>
          <ol className="step-list">
            <li>Fill clean trays or pots with a light seed-starting mix and moisten it.</li>
            <li>Sow at the depth the species needs. Many native seeds need light to germinate, so press those onto the surface rather than burying them.</li>
            <li>Keep the mix damp and warm, and give the seedlings strong light once they sprout, from a sunny window or a grow light a few inches above them.</li>
            <li>Before planting out, harden the seedlings off: set them outside for a few hours a day for a week, increasing the time, so they adjust to sun and wind.</li>
          </ol>
        </div>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            A stronger start means more plants survive their first year, and more surviving plants
            means more host leaves and nectar sooner. Raising your own from seed also costs a
            fraction of buying potted plants, which makes a larger planting affordable.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.prairiemoon.com/blog/" target="_blank" rel="noopener noreferrer">Prairie Moon Nursery — Starting native seeds</a></li>
            <li><a href="https://www.wildflower.org/learn" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — How-To and Learn</a></li>
          </ol>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <button className="link-button" onClick={() => onNavigate('growing-guide')}>← All growing guides</button>
        </div>
      </div>
    </>
  )
}
