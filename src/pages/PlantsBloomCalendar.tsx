import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

interface PlantsBloomCalendarProps {
  onNavigate: (page: any) => void
}

export default function PlantsBloomCalendar({ onNavigate }: PlantsBloomCalendarProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants-bloom-calendar')
  }, [])

  const timeline = [
    {
      season: 'Early Spring (March–April)',
      monarchActivity: 'Spring migration north from Mexico',
      plantNeeds: 'Milkweed begins to leaf out. Early nectar sources.',
      yourAction: 'Plant native shrubs that bloom early. Primrose, phlox, serviceberry.',
    },
    {
      season: 'Late Spring (May–June)',
      monarchActivity: 'Lay eggs on milkweed in southern/central US',
      plantNeeds: 'Milkweed must be tall enough for caterpillars. Peak bloom of spring flowers.',
      yourAction:
        'Milkweed should be 6+ inches tall. Provide diverse nectar sources while monarchs travel.',
    },
    {
      season: 'Summer (July–August)',
      monarchActivity: 'Multiple generations raise caterpillars. Final generation builds fat reserves.',
      plantNeeds:
        'Abundant milkweed for caterpillars. High-energy nectar for adults preparing for migration.',
      yourAction:
        'No mowing or herbicides. Let the milkweed grow. Provide mid-summer bloomers: bee balm, coneflowers, zinnias.',
    },
    {
      season: 'Early Fall (September–October)',
      monarchActivity: 'Fall migration south. Long flight on limited resources.',
      plantNeeds: 'Peak nectar availability. Every flower counts.',
      yourAction:
        'Plant late bloomers: asters, goldenrod, sedum, salvia. These are migration fuel.',
    },
    {
      season: 'Late Fall (November)',
      monarchActivity: 'Final monarchs reach Mexico. Prepare for winter.',
      plantNeeds: 'Season winding down.',
      yourAction: 'Don\'t cut back dead plants. Insects overwinter in hollow stems. Leave them standing.',
    },
  ]

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Bloom Calendar</h1>
        <p className="page-subtitle">
          Monarchs migrate on a strict timeline. Your plants need to match.
        </p>
      </header>

      <section className="content-section">
        <h2>The Challenge: Timing</h2>
        <p>
          Monarchs follow the sun and the milkweed. In spring, they move north. In summer, they
          breed. In fall, they move south. They're not flexible. They can't wait for flowers to
          bloom later. They pass through your yard on specific weeks.
        </p>
        <p>
          If your flowers bloom early, the spring migrants have already passed. If they bloom late,
          the fall migrants have already left. Bloom time is everything.
        </p>
      </section>

      <section className="content-section">
        <h2>The Bloom Timeline</h2>
        {timeline.map((period, idx) => (
          <div key={idx} className="timeline-item">
            <h3>{period.season}</h3>
            <p>
              <strong>Monarchs:</strong> {period.monarchActivity}
            </p>
            <p>
              <strong>Plants:</strong> {period.plantNeeds}
            </p>
            <p>
              <strong>Your Action:</strong> {period.yourAction}
            </p>
          </div>
        ))}
      </section>

      <section className="content-section">
        <h2>Practical Tips</h2>
        <ul>
          <li>
            <strong>Plant a mix of bloom times.</strong> Don't plant all early bloomers. Spread
            them across spring, summer, and fall.
          </li>
          <li>
            <strong>Use the plant library.</strong> Filter by bloom month to see what's available
            for each season in your region.
          </li>
          <li>
            <strong>Group by bloom time.</strong> Plant species that bloom together. They'll create
            visual impact and feed monarchs in waves.
          </li>
          <li>
            <strong>Ask at the nursery.</strong> When you buy a plant, ask: "When does this bloom?"
            Write it down. Plan around it.
          </li>
        </ul>
      </section>

      <section className="next-section">
        <h2>Next</h2>
        <p>
          Now learn how plants work together. A diverse plant community supports more insects than a
          single species.
        </p>
        <div className="button-group">
          <button
            onClick={() => onNavigate('plants-communities')}
            className="btn btn-primary"
          >
            Plant Communities
          </button>
          <button onClick={() => onNavigate('plants-library')} className="btn btn-secondary">
            Browse by Bloom Time
          </button>
        </div>
      </section>
    </div>
  )
}
