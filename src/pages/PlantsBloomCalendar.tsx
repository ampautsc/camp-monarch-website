import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'
import type { Page } from '../App'

interface PlantsBloomCalendarProps {
  onNavigate: (page: Page) => void
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
        'No mowing or herbicides. Let the milkweed grow. Provide mid-summer bloomers: wild bergamot, coneflowers.',
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
      yourAction: "Don't cut back dead plants. Insects overwinter in hollow stems. Leave them standing.",
    },
  ]

  const profilePlants: Array<{
    name: string
    latinName: string
    bloomWindow: string
    observation: string
    page: Page
  }> = [
    {
      name: 'New Jersey Tea',
      latinName: 'Ceanothus americanus',
      bloomWindow: 'May–June',
      observation:
        'New Jersey Tea blooms before common milkweed — in May and June, when Mottled Duskywing skippers emerge and need nectar and a plant on which to lay their eggs. The larvae eat New Jersey Tea foliage and no other plant in the eastern US.',
      page: 'new-jersey-tea',
    },
    {
      name: 'Common Milkweed',
      latinName: 'Asclepias syriaca',
      bloomWindow: 'June–July',
      observation:
        'A monarch caterpillar hatches onto a milkweed leaf and eats nothing else for the two weeks it takes to reach chrysalis weight. No other plant in North America will substitute.',
      page: 'common-milkweed',
    },
    {
      name: 'Wild Bergamot',
      latinName: 'Monarda fistulosa',
      bloomWindow: 'Late June–August',
      observation:
        'Anthophora montana provisions each nest cell with wild bergamot pollen and nothing else. If no Monarda is blooming within her foraging range during her July–August nesting window, those cells remain empty — she waits, and then the season ends.',
      page: 'wild-bergamot',
    },
    {
      name: 'Swamp Milkweed',
      latinName: 'Asclepias incarnata',
      bloomWindow: 'July–August',
      observation:
        'Swamp milkweed tolerates flooded roots in spring and gradual drying through summer — the conditions that kill Common Milkweed. A fifth-instar monarch caterpillar consumes roughly two full leaves per day; a patch of five to ten plants in a rain garden or low corner can support a full brood through pupation.',
      page: 'swamp-milkweed',
    },
    {
      name: 'Purple Coneflower',
      latinName: 'Echinacea purpurea',
      bloomWindow: 'July–August',
      observation:
        'Purple coneflower opens in July when most spring wildflowers are finished and summer butterflies are actively foraging — monarchs, swallowtails, and fritillaries can feed on the same flower head in the same afternoon.',
      page: 'purple-coneflower',
    },
    {
      name: 'Joe Pye Weed',
      latinName: 'Eutrochium purpureum',
      bloomWindow: 'August–September',
      observation:
        'Joe Pye Weed can grow to seven feet in a single season and opens its flower heads in August, covering the window between summer bloomers and fall goldenrod when monarch adults are building fat reserves for migration.',
      page: 'joe-pye-weed',
    },
    {
      name: 'Canada Goldenrod',
      latinName: 'Solidago canadensis',
      bloomWindow: 'Late August–October',
      observation:
        'Goldenrod peaks in September, covering the same weeks when monarchs moving south accumulate abdominal fat for the 2,500-mile flight to a mountain forest in Michoacán, Mexico.',
      page: 'canada-goldenrod',
    },
    {
      name: 'New England Aster',
      latinName: 'Symphyotrichum novae-angliae',
      bloomWindow: 'Late August–hard frost',
      observation:
        'New England aster can still produce open flowers through October and into November in mild autumns — after goldenrod has gone to seed and nearly everything else has closed for the year.',
      page: 'new-england-aster',
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
        <h2>Eight natives, May to frost</h2>
        <p>
          These eight native plants open in sequence from May through late October, covering every
          week that monarchs are present — as caterpillars, as breeding adults, and as migrants
          fueling for Mexico — and providing larval host plants for specialist insects that depend
          on each one.
        </p>
        {profilePlants.map((plant) => (
          <div key={plant.page} className="callout callout--green" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <strong>
                {plant.name}{' '}
                <em style={{ fontWeight: 'normal', color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  {plant.latinName}
                </em>
              </strong>
              <span style={{ fontSize: '0.875rem', color: 'var(--monarch-orange)', fontWeight: 600 }}>
                {plant.bloomWindow}
              </span>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>{plant.observation}</p>
            <button className="link-button" onClick={() => onNavigate(plant.page)}>
              View {plant.name} profile →
            </button>
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
