import { useMemo } from 'react'
import type { Page } from '../App'

interface HabitatHeroHubProps {
  onNavigate: (page: Page) => void
}

// The calm, encouraging side of the door — no crisis here, just the next step.
// A launchpad a habitat hero comes back to, organized by what they need.

type Lane = { page: Page; title: string; note: string }

const LANES: Lane[] = [
  { page: 'growing-guide', title: 'Start your first patch', note: 'Eight steps from a patch of lawn to living habitat. Begin here.' },
  { page: 'choose-a-plant', title: 'Find your plants', note: 'Filter by your sun, soil, and the wildlife you want to help.' },
  { page: 'species-gallery', title: 'Meet your neighbors', note: 'The monarchs, bees, and birds your habitat brings back — and what each one needs.' },
  { page: 'native-plant-near-me', title: 'Where to buy', note: 'Trusted native-plant nurseries and seed sources, near you and online.' },
  { page: 'seasonal-calendar', title: 'Season by season', note: 'How to tend your habitat through the whole year.' },
]

const GO_FURTHER: Lane[] = [
  { page: 'log-a-sighting', title: 'Log a sighting', note: '' },
  { page: 'habitat-score', title: 'Score your yard', note: '' },
  { page: 'raise-a-monarch', title: 'Raise a monarch', note: '' },
]

// "Right now, this month" — the instant next step for a returning hero.
function rightNow(month: number): { header: string; action: string } {
  if (month >= 2 && month <= 3) return { header: 'Right now: spring is waking up', action: 'Leave last year’s milkweed and stems standing, and start or order native seed before the breeding season begins.' }
  if (month === 4) return { header: 'Right now: monarchs are arriving to breed', action: 'Let the milkweed stand, and check the undersides of the leaves for pinhead-size eggs.' }
  if (month >= 5 && month <= 7) return { header: 'Right now: caterpillars are on the milkweed', action: 'Check your milkweed for eggs and caterpillars, and skip the insecticide near your nectar plants.' }
  if (month >= 8 && month <= 10) return { header: 'Right now: the fall migration is underway', action: 'Keep late nectar — goldenrod and asters — blooming, and hold off on cutting things back.' }
  return { header: 'Right now: monarchs are overwintering in Mexico', action: 'Plan the spring planting, and cold-stratify native seed so it’s ready to sow.' }
}

export default function HabitatHeroHub({ onNavigate }: HabitatHeroHubProps) {
  const rn = useMemo(() => rightNow(new Date().getMonth()), [])
  return (
    <>
      <section className="hero">
        <h1>Welcome to the team!</h1>
      </section>

      <div className="page">
        <div className="right-now-panel">
          <p className="right-now-panel__header">{rn.header}</p>
          <p style={{ marginBottom: '0.75rem' }}>{rn.action}</p>
          <button className="hub-textlink" onClick={() => onNavigate('seasonal-calendar')}>
            See the full seasonal calendar →
          </button>
        </div>

        <div className="neighbor-grid">
          {LANES.map(lane => (
            <button key={lane.page} className="neighbor-card" onClick={() => onNavigate(lane.page)}>
              <span className="neighbor-name">{lane.title}</span>
              <span className="neighbor-note">{lane.note}</span>
            </button>
          ))}
        </div>

        <section aria-labelledby="go-further-heading">
          <h2 id="go-further-heading">Go further</h2>
          <p>
            {GO_FURTHER.map((g, i) => (
              <span key={g.page}>
                <button className="hub-textlink" onClick={() => onNavigate(g.page)}>{g.title}</button>
                {i < GO_FURTHER.length - 1 ? '  ·  ' : ''}
              </span>
            ))}
          </p>
        </section>
      </div>
    </>
  )
}
