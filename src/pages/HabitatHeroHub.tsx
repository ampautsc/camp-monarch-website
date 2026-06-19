import { useMemo } from 'react'
import type { Page } from '../App'

interface HabitatHeroHubProps {
  onNavigate: (page: Page) => void
}

// The calm, immersive side of the door. A hero builds three things: a Monarch
// Nursery, a Monarch Way Station, and keeps it Poison-Free. Everything else
// supports those moves and lives in the small row beneath.

type Move = { page: Page; img: string; title: string; note: string }

const BIG_THREE: Move[] = [
  {
    page: 'plant-milkweed',
    img: '/hub-start.jpg',
    title: 'Plant a Monarch Nursery',
    note: 'Milkweed is the only plant monarchs are born on. Trade a patch of lawn for a milkweed bed and you raise the next generation.',
  },
  {
    page: 'waystation-guide',
    img: '/hub-neighbors.jpg',
    title: 'Build a Monarch Way Station',
    note: 'Native flowers, a little water, and some cover give traveling monarchs a place to rest and refuel.',
  },
  {
    page: 'pesticide-guide',
    img: '/hub-find.jpg',
    title: 'Keep it Poison-Free',
    note: 'Skip the bug and weed sprays, so the caterpillars and bees you bring back survive.',
  },
]

const HELPERS: { page: Page; label: string }[] = [
  { page: 'choose-a-plant', label: 'Find plants for your yard' },
  { page: 'native-plant-near-me', label: 'Where to buy' },
  { page: 'species-gallery', label: 'Meet your neighbors' },
  { page: 'seasonal-calendar', label: 'Seasonal calendar' },
  { page: 'habitat-score', label: 'Score your yard' },
  { page: 'log-a-sighting', label: 'Log a sighting' },
]

// "Right now, this month" — the instant next step for a returning hero.
function rightNow(month: number): string {
  if (month >= 2 && month <= 3) return 'Leave last year’s milkweed and stems standing, and start or order native seed before the breeding season begins.'
  if (month === 4) return 'Let the milkweed stand, and check the undersides of the leaves for pinhead-size eggs.'
  if (month >= 5 && month <= 7) return 'Check your milkweed for eggs and caterpillars, and skip the insecticide near your nectar plants.'
  if (month >= 8 && month <= 10) return 'Keep late nectar — goldenrod and asters — blooming, and hold off on cutting things back.'
  return 'Plan the spring planting, and cold-stratify native seed so it’s ready to sow.'
}

export default function HabitatHeroHub({ onNavigate }: HabitatHeroHubProps) {
  const action = useMemo(() => rightNow(new Date().getMonth()), [])
  return (
    <div className="hub">
      <header
        className="hub-hero"
        role="img"
        aria-label="A monarch butterfly on native wildflowers"
        style={{ backgroundImage: 'url(/monarch-hero-poster.jpg)' }}
      >
        <div className="hub-hero__scrim" aria-hidden="true" />
        <h1 className="hub-hero__title">Welcome to the team!</h1>
      </header>

      <div className="hub-body">
        <div className="hub-rightnow">
          <p className="hub-rightnow__label">Right now, this month</p>
          <p className="hub-rightnow__text">{action}</p>
          <button className="hub-textlink" onClick={() => onNavigate('seasonal-calendar')}>
            See the full seasonal calendar →
          </button>
        </div>

        <div className="hub-cards">
          {BIG_THREE.map(move => (
            <button
              key={move.page}
              className="hub-card"
              style={{ backgroundImage: `url(${move.img})` }}
              onClick={() => onNavigate(move.page)}
            >
              <span className="hub-card__scrim" aria-hidden="true" />
              <span className="hub-card__body">
                <span className="hub-card__title">{move.title}</span>
                <span className="hub-card__note">{move.note}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="hub-helpers">
          <p className="hub-helpers__label">When you need them</p>
          <div className="hub-helpers__links">
            {HELPERS.map(h => (
              <button key={h.page} className="hub-textlink" onClick={() => onNavigate(h.page)}>
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <p className="hub-credits">
          Photos: caterpillar by Derek Ramsey (CC BY-SA 2.5); others USFWS (public domain) and Pexels.
        </p>
      </div>
    </div>
  )
}
