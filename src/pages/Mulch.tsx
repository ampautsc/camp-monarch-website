import type { Page } from '../App'

interface MulchProps {
  onNavigate: (page: Page) => void
}

export default function Mulch({ onNavigate }: MulchProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Mulching</h1>
        <p className="hero__lead">
          A layer of mulch holds moisture in the soil, slows weeds, and steadies the temperature
          around young roots while a bed fills in. For a habitat garden the choice of mulch matters:
          shredded leaves and other natural material break down into the soil and double as
          overwintering cover for insects, which dyed wood mulch and gravel do not.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="how-heading">
          <h2 id="how-heading">What to use, and how much</h2>
          <p>
            Shredded leaves, leaf mold, and undyed wood chips all work. Two to three inches is
            enough to suppress weeds while still letting rain through. As the bed matures and the
            plants knit together, they shade the ground themselves and need less mulch over time.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Mulch a bed</h2>
          <ol className="step-list">
            <li>Weed the bed first, then water the soil so the mulch traps moisture in.</li>
            <li>Spread two to three inches of mulch evenly across the open ground between plants.</li>
            <li>Keep mulch a couple of inches back from plant stems and crowns so they do not stay wet and rot.</li>
            <li>Top it up once a year as it breaks down, rather than piling on a thick new layer.</li>
          </ol>
        </div>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            Leaf litter and natural mulch are habitat, not just ground cover. Many moths and
            butterflies, including several giant silkmoths, overwinter as pupae in the litter under
            plants, and bumble bee queens and ground beetles shelter there through winter. Leaving
            that layer in place from fall through spring keeps next year's insects alive in the bed.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://xerces.org/leave-the-leaves" target="_blank" rel="noopener noreferrer">Xerces Society — Leave the Leaves</a></li>
            <li><a href="https://www.fs.usda.gov/wildflowers/pollinators/gardening.shtml" target="_blank" rel="noopener noreferrer">USDA Forest Service — Gardening for Pollinators</a></li>
          </ol>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <button className="link-button" onClick={() => onNavigate('growing-guide')}>← All growing guides</button>
        </div>
      </div>
    </>
  )
}
