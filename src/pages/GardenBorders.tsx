import type { Page } from '../App'

interface GardenBordersProps {
  onNavigate: (page: Page) => void
}

export default function GardenBorders({ onNavigate }: GardenBordersProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Edging the bed</h1>
        <p className="hero__lead">
          A clear border does two jobs. It keeps lawn grass and its runners from creeping into the
          planting, and it signals that the bed is intentional rather than neglected. That second
          job matters more than it sounds: a crisp edge is what tells neighbors, and sometimes an
          HOA, that a native planting is a garden and not a weed patch.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading">Ways to edge a bed</h2>
          <p>
            A cut trench edge costs nothing: slice a clean vertical line between bed and lawn with a
            spade and keep it crisp. Logs and timber give a soft, natural border and, cut from a
            tree already coming down, cost nothing and outlast dimensional lumber. Stone and steel
            edging last longest and hold a sharp line. Any of them works; the point is a defined
            boundary.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Set a border</h2>
          <ol className="step-list">
            <li>Lay a hose or rope to mark the bed's outline, favoring long curves over tight corners so mowing along it is easy.</li>
            <li>Cut a clean trench edge along the line, or set logs, stone, or steel edging into a shallow trench so it sits firm.</li>
            <li>For log or timber borders, choose rot-resistant wood and lay the largest pieces where the bed meets the most-used path.</li>
            <li>Keep a mowed or mulched strip just outside the border so the planting always reads as kept.</li>
          </ol>
        </div>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            A native bed faces less resistance from neighbors and rules when it looks deliberate. A
            defined edge, a mowed strip around it, and a sign or two are the visible cues that buy a
            wilder planting room to grow. Log borders add a small bonus: as the wood decays it
            shelters beetles, salamanders, and the fungi that feed the soil.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.wildflower.org/learn" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — How-To and Learn</a></li>
            <li><a href="https://xerces.org/pollinator-conservation/pollinator-friendly-plant-lists" target="_blank" rel="noopener noreferrer">Xerces Society — Pollinator-Friendly Native Plants</a></li>
          </ol>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <button className="link-button" onClick={() => onNavigate('growing-guide')}>← All growing guides</button>
        </div>
      </div>
    </>
  )
}
