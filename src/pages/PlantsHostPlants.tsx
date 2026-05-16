import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

interface PlantsHostPlantsProps {
  onNavigate: (page: any) => void
}

export default function PlantsHostPlants({ onNavigate }: PlantsHostPlantsProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants-host-plants')
  }, [])

  const milkweedTypes = [
    {
      name: 'Common Milkweed',
      scientific: 'Asclepias syriaca',
      region: 'Eastern & Midwest US',
      height: '2–4 feet',
      note: 'Spreads vigorously. Great for large spaces.',
    },
    {
      name: 'Showy Milkweed',
      scientific: 'Asclepias speciosa',
      region: 'Western US',
      height: '1–3 feet',
      note: 'Drought-tolerant. Beautiful pink clusters.',
    },
    {
      name: 'Butterfly Weed',
      scientific: 'Asclepias tuberosa',
      region: 'Eastern & Central US',
      height: '1–2 feet',
      note: 'Bright orange flowers. Well-behaved, doesn\'t spread.',
    },
    {
      name: 'Swamp Milkweed',
      scientific: 'Asclepias incarnata',
      region: 'Throughout US',
      height: '2–4 feet',
      note: 'Tolerates wet areas. Pink flower clusters.',
    },
  ]

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Host Plants 101</h1>
        <p className="page-subtitle">
          Monarch caterpillars eat one thing and one thing only: milkweed.
        </p>
      </header>

      <section className="content-section">
        <h2>Why Milkweed?</h2>
        <p>
          Monarch caterpillars are picky eaters. Over 5,000 generations, they've evolved to eat
          only milkweed. They can't taste the difference between species—they'll eat any milkweed.
          But they won't eat anything else. Not lettuce. Not regular flowers. Only milkweed.
        </p>
        <p>
          The milkweed plant is toxic to most insects. This protects the caterpillar. It eats the
          toxin, stores it in its body, and uses it as armor against predators. A bird that eats a
          monarch once won't try again. The bright orange wings say: "I taste bad."
        </p>
      </section>

      <section className="content-section">
        <h2>What Counts as Milkweed?</h2>
        <p>
          True milkweeds belong to the genus <em>Asclepias</em>. If the plant doesn't say
          "Asclepias" on the tag, it's not milkweed. Some plants have "milkweed" in their common
          name but aren't the real thing. Don't be fooled.
        </p>
        <p>
          There are dozens of species. Grow the ones native to your region. They'll thrive in your
          soil and bloom when monarchs need them.
        </p>
      </section>

      <section className="content-section">
        <h2>Regional Milkweed Species</h2>
        <div className="plant-list">
          {milkweedTypes.map((plant) => (
            <div key={plant.scientific} className="plant-item">
              <h3>{plant.name}</h3>
              <p className="scientific-name">{plant.scientific}</p>
              <p><strong>Region:</strong> {plant.region}</p>
              <p><strong>Height:</strong> {plant.height}</p>
              <p><strong>Note:</strong> {plant.note}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '2rem' }}>
          <strong>Not sure which grows in your area?</strong> Use the plant library to see all
          native milkweeds for your region.
        </p>
      </section>

      <section className="content-section">
        <h2>How to Plant Milkweed</h2>
        <ol>
          <li>Buy seedlings or seeds from a native plant nursery.</li>
          <li>Plant in full sun (at least 6 hours).</li>
          <li>Space plants 2–3 feet apart so they have room to grow.</li>
          <li>Water until established (3–4 weeks), then water less.</li>
          <li>
            Don't use pesticides or herbicides. Milkweed is tough. Let it grow wild. That's the
            point.
          </li>
        </ol>
      </section>

      <section className="content-section">
        <h2>Common Question: Will It Take Over?</h2>
        <p>
          Some milkweed spreads aggressively (like common milkweed). Some stays put (like butterfly
          weed). Check the plant library for information about each species. If you want a
          well-behaved plant, choose butterfly weed or swamp milkweed. If you have space, common
          milkweed feeds dozens of caterpillars and looks beautiful.
        </p>
      </section>

      <section className="next-section">
        <h2>Next</h2>
        <p>
          Now that you know what to plant, learn about bloom timing. Monarchs migrate on a
          schedule. Your plants need to match.
        </p>
        <div className="button-group">
          <button
            onClick={() => onNavigate('plants-bloom-calendar')}
            className="btn btn-primary"
          >
            Bloom Calendar
          </button>
          <button onClick={() => onNavigate('plants-library')} className="btn btn-secondary">
            Browse Milkweed
          </button>
        </div>
      </section>
    </div>
  )
}
