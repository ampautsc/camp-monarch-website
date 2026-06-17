import type { Page } from '../App'

interface GrowingGuideProps {
  onNavigate: (page: Page) => void
}

const STEPS: { page: Page; title: string; note: string }[] = [
  { page: 'turf-removal', title: '1. Remove the turf', note: 'Clear a patch of lawn without chemicals — smother it, solarize it, or cut the sod.' },
  { page: 'garden-borders', title: '2. Edge the bed', note: 'Define the planting with a border so it reads as intentional and the lawn stays out.' },
  { page: 'soil-preparation', title: '3. Prepare the soil', note: 'Most native plants want lean soil. Loosen it, pull weed roots, and skip the fertilizer.' },
  { page: 'cold-stratification', title: '4. Cold-stratify the seed', note: 'Many native seeds need a cold, moist spell before they will sprout.' },
  { page: 'start-seeds-indoors', title: '5. Start seeds indoors', note: 'Get a head start under lights, then harden the seedlings off before planting out.' },
  { page: 'direct-sow-seeds', title: '6. Direct-sow outdoors', note: 'Sow straight into the bed in fall or spring and let the weather do the work.' },
  { page: 'seed-balls', title: '7. Make seed balls', note: 'Roll seed into clay and compost to scatter over a larger area.' },
  { page: 'mulch', title: '8. Mulch', note: 'Hold moisture, slow weeds, and leave overwintering cover for insects.' },
]

export default function GrowingGuide({ onNavigate }: GrowingGuideProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>How to grow a habitat</h1>
        <p className="hero__lead">
          Knowing which plants help is one thing. Getting them into the ground is another. These
          eight steps cover the practical work of turning a patch of lawn into native habitat, from
          clearing the grass to starting the seed to mulching the bed. Each one stands on its own,
          and together they run start to finish.
        </p>
      </section>

      <div className="page">
        <div className="neighbor-grid">
          {STEPS.map(s => (
            <button key={s.page} className="neighbor-card" onClick={() => onNavigate(s.page)}>
              <span className="neighbor-name">{s.title}</span>
              <span className="neighbor-note">{s.note}</span>
            </button>
          ))}
        </div>

        <section aria-labelledby="start-heading">
          <h2 id="start-heading">Where to start</h2>
          <p>
            A first bed does not need to be large. A patch ten feet by ten feet, cleared of lawn
            and planted with milkweed and a few native wildflowers, gives a monarch somewhere to
            stop and a handful of native bees somewhere to feed. The steps above scale from that
            first bed up to a whole yard.
          </p>
        </section>
      </div>
    </>
  )
}
