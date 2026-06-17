import type { Page } from '../App'

interface SoilPreparationProps {
  onNavigate: (page: Page) => void
}

export default function SoilPreparation({ onNavigate }: SoilPreparationProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Preparing the soil</h1>
        <p className="hero__lead">
          Native plants evolved in the soil they grow in, and most of them want it lean. The common
          mistake is treating a native bed like a vegetable garden, loading it with fertilizer and
          rich compost. That feeds weeds and makes native plants grow tall and floppy. The better
          approach is to match the plant to the soil already there and disturb it as little as
          possible.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="know-heading">
          <h2 id="know-heading">Work with the soil you have</h2>
          <p>
            Dig a small hole and look: sandy soil drains fast, clay holds water and stays heavy,
            loam sits in between. Rather than change it, choose plants suited to it. Dry, sandy
            spots suit butterfly milkweed and little bluestem. Heavy, wet clay suits swamp milkweed,
            Joe Pye weed, and ironweed. Most native wildflowers do best in average to poor soil.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Prepare a bed</h2>
          <ol className="step-list">
            <li>Clear the existing grass and weeds, pulling out roots and runners by hand or with a fork.</li>
            <li>Loosen compacted ground with a fork to about a spade's depth, but avoid deep tilling, which brings buried weed seeds to the surface.</li>
            <li>Skip the fertilizer. If the soil is badly depleted, mix in a thin layer of compost; otherwise leave it lean.</li>
            <li>Rake the surface level and water it, then let it sit a week or two so any disturbed weed seeds sprout and can be removed before planting.</li>
          </ol>
        </div>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            Lean soil and minimal digging favor the deep-rooted native plants that hold soil, soak
            up rainwater, and feed pollinators, while giving aggressive weeds less of an edge. Less
            tilling also protects the ground-nesting bees and soil life that most of a yard's
            pollinators depend on.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.wildflower.org/learn" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — How-To and Learn</a></li>
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
