import { useMemo } from 'react'
import type { Page } from '../App'

interface HabitatHeroHubProps {
  onNavigate: (page: Page) => void
}

// The calm, immersive side of the door — same world as the homepage, now it's
// your workshop. No crisis here; just the next step. A launchpad a habitat hero
// comes back to, organized by what they need.

type Lane = { page: Page; img: string; title: string; note: string }

const LANES: Lane[] = [
  { page: 'growing-guide', img: '/hub-start.jpg', title: 'Start your first patch', note: 'Eight steps from a patch of lawn to living habitat.' },
  { page: 'choose-a-plant', img: '/hub-find.jpg', title: 'Find your plants', note: 'For your sun, your soil, and the wildlife you want to help.' },
  { page: 'species-gallery', img: '/hub-neighbors.jpg', title: 'Meet your neighbors', note: 'The monarchs, bees, and birds your habitat brings back.' },
  { page: 'native-plant-near-me', img: '/hub-buy.jpg', title: 'Where to buy', note: 'Trusted native-plant nurseries and seed sources.' },
  { page: 'seasonal-calendar', img: '/hub-season.jpg', title: 'Season by season', note: 'How to tend your habitat all year.' },
]

const GO_FURTHER: { page: Page; label: string }[] = [
  { page: 'log-a-sighting', label: 'Log a sighting' },
  { page: 'habitat-score', label: 'Score your yard' },
  { page: 'raise-a-monarch', label: 'Raise a monarch' },
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
          {LANES.map(lane => (
            <button
              key={lane.page}
              className="hub-card"
              style={{ backgroundImage: `url(${lane.img})` }}
              onClick={() => onNavigate(lane.page)}
            >
              <span className="hub-card__scrim" aria-hidden="true" />
              <span className="hub-card__body">
                <span className="hub-card__title">{lane.title}</span>
                <span className="hub-card__note">{lane.note}</span>
              </span>
            </button>
          ))}
        </div>

        <p className="hub-gofurther">
          Go further:{' '}
          {GO_FURTHER.map((g, i) => (
            <span key={g.page}>
              <button className="hub-textlink" onClick={() => onNavigate(g.page)}>{g.label}</button>
              {i < GO_FURTHER.length - 1 ? '  ·  ' : ''}
            </span>
          ))}
        </p>

        <p className="hub-credits">
          Photos: caterpillar by Derek Ramsey (CC BY-SA 2.5); others USFWS &amp; NPS (public domain) and Pexels.
        </p>
      </div>
    </div>
  )
}
