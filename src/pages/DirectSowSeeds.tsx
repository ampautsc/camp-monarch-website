import type { Page } from '../App'

interface DirectSowSeedsProps {
  onNavigate: (page: Page) => void
}

export default function DirectSowSeeds({ onNavigate }: DirectSowSeedsProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Direct-sowing outdoors</h1>
        <p className="hero__lead">
          The simplest way to grow native plants is to sow the seed straight into the ground and let
          the weather handle the rest. Sown in late fall, the seed sits through winter, gets the
          cold-moist period most native species need, and sprouts on its own in spring. No trays, no
          refrigerator, no transplanting.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="when-heading">
          <h2 id="when-heading">When to sow</h2>
          <p>
            Late fall, after a hard frost, is the natural window: winter does the stratifying.
            Spring sowing works for species that do not need a cold period, or for seed already
            stratified in the fridge. Fall sowing trades control for ease, and it matches what
            happens in the wild.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Direct-sow a bed</h2>
          <ol className="step-list">
            <li>Clear the area of weeds and rake the soil so the surface is loose and bare.</li>
            <li>Mix fine seed with a handful of sand so it spreads evenly, then scatter it across the bed.</li>
            <li>Press the seed firmly into the soil with a board or by walking on it. Most native seed needs contact with the soil and some needs light, so do not bury it.</li>
            <li>For spring sowing, keep the bed damp until seedlings appear. Fall sowing relies on winter and spring rain.</li>
          </ol>
        </div>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            Direct-sowing is how a small packet of seed becomes a full bed at almost no cost, which
            makes it realistic to plant at the scale wildlife needs. It also suits the seed of
            prairie grasses and many wildflowers that resent having their roots disturbed by
            transplanting.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.prairiemoon.com/blog/" target="_blank" rel="noopener noreferrer">Prairie Moon Nursery — Direct sowing native seed</a></li>
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
