import type { Page } from '../App'

interface SeedBallsProps {
  onNavigate: (page: Page) => void
}

export default function SeedBalls({ onNavigate }: SeedBallsProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Making seed balls</h1>
        <p className="hero__lead">
          A seed ball packs seed into a marble of clay and compost. The clay shell shields the seed
          from birds, ants, and wind until enough rain falls to break it open, and the compost gives
          the seedling a first meal. Seed balls make it easy to plant a larger or rougher area by
          scattering, with no digging at all.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="mix-heading">
          <h2 id="mix-heading">The mix</h2>
          <p>
            The standard recipe is about five parts powdered clay to three parts compost to one part
            seed, with water added slowly. Air-dry clay or natural red clay both work. Use seed
            suited to the spot and the season, and stratify it first if the species needs a cold
            period.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Make and sow seed balls</h2>
          <ol className="step-list">
            <li>Mix five parts clay and three parts compost in a bowl, then stir in one part seed.</li>
            <li>Add water a little at a time until the mix holds together like dough, not soup.</li>
            <li>Roll the mix into balls about an inch across.</li>
            <li>Dry them out of direct sun for a day or two until hard, then scatter them onto cleared ground in fall or spring and let the rain do the planting.</li>
          </ol>
        </div>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            Seed balls turn planting into something a group, or a child, can do in an afternoon, over
            ground too large or rough to dig. They are a low-cost way to spread milkweed and native
            wildflowers across the kind of open, sunny edges that monarchs and native bees use most.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://xerces.org/pollinator-conservation/pollinator-friendly-plant-lists" target="_blank" rel="noopener noreferrer">Xerces Society — Pollinator-Friendly Native Plants</a></li>
            <li><a href="https://www.prairiemoon.com/blog/" target="_blank" rel="noopener noreferrer">Prairie Moon Nursery — Native plant growing resources</a></li>
          </ol>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <button className="link-button" onClick={() => onNavigate('growing-guide')}>← All growing guides</button>
        </div>
      </div>
    </>
  )
}
