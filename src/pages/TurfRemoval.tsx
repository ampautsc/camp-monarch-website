import type { Page } from '../App'

interface TurfRemovalProps {
  onNavigate: (page: Page) => void
}

export default function TurfRemoval({ onNavigate }: TurfRemovalProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Removing turf grass</h1>
        <p className="hero__lead">
          A lawn feeds almost nothing. Clearing a patch of it is the first step in making room for
          native plants, and it can be done without herbicide. Three methods cover most yards:
          smothering, solarizing, and cutting the sod. The right one depends on how long you can
          wait and how much digging you want to do.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="smother-heading">
          <h2 id="smother-heading">Smothering (least effort, slowest)</h2>
          <p>
            Smothering blocks light until the grass dies and breaks down in place. It takes a season
            but needs almost no digging and adds organic matter as it goes.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Smother a bed</h2>
          <ol className="step-list">
            <li>Mow the grass low and water the area so the ground is damp.</li>
            <li>Lay overlapping cardboard or thick layers of newspaper across the whole patch, with no gaps for grass to find light.</li>
            <li>Cover the cardboard with three to four inches of wood chips, shredded leaves, or compost.</li>
            <li>Wait two to three months. The grass dies, and the cardboard softens enough to plant straight through.</li>
          </ol>
        </div>

        <section aria-labelledby="other-heading">
          <h2 id="other-heading">Solarizing and sod-cutting (faster)</h2>
          <p>
            To solarize, water the area, then stretch clear plastic tightly over it and bury the
            edges. Through the hottest weeks of summer the trapped heat kills grass and many weed
            seeds in four to six weeks. To clear a bed the same day, cut the sod instead: slice it
            into strips with a flat spade or a rented sod cutter, lift it, and compost the strips
            grass-side down.
          </p>
        </section>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading">Why it matters</h2>
          <p>
            Turf grass is a near-monoculture that supports very few insects, which means very little
            food for the birds and other animals that depend on them. Every square foot returned to
            native plants adds host plants for caterpillars and nectar for pollinators. Skipping
            herbicide keeps that ground safe for the soil life, frogs, and insects that move in.
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
