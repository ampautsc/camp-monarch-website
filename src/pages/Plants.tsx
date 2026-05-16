import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'
import type { Page } from '../App'

interface PlantsProps {
  onNavigate: (page: Page) => void
}

export default function Plants({ onNavigate }: PlantsProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants')
  }, [])

  const modules: Array<{ id: Page; title: string; description: string }> = [
    {
      id: 'plants-finder',
      title: 'Plant Finder',
      description: 'Search and filter 350+ native plants by sun, moisture, soil, bloom, and wildlife support.',
    },
    {
      id: 'plants-by-family',
      title: 'By Family',
      description: 'Browse plant families such as milkweeds, asters, mints, and grasses.',
    },
    {
      id: 'plants-by-purpose',
      title: 'By Purpose',
      description: 'Pick plants by goals: monarch habitat, pollinators, birds, soil health, or low-maintenance yards.',
    },
    {
      id: 'plants-by-conditions',
      title: 'By Conditions',
      description: 'Start with your yard conditions to choose plants that will actually thrive.',
    },
    {
      id: 'plants-milkweeds',
      title: 'Milkweeds',
      description: 'The essential host plants monarch caterpillars need to survive.',
    },
    {
      id: 'plants-bloom-calendar',
      title: 'Bloom Calendar',
      description: 'Timing matters. Monarchs need food when they migrate through.',
    },
    {
      id: 'plants-starter-plants',
      title: 'Starter Plants',
      description: 'A practical top list to start habitat fast without overwhelm.',
    },
    {
      id: 'plants-species-index',
      title: 'Full Species Index',
      description: 'A searchable A–Z index of every plant in the Camp Monarch database.',
    },
  ]

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Plants & Wildflowers</h1>
        <p className="page-subtitle">
          The right plants change everything. They feed caterpillars, support insects, and bring
          nature into view from your window.
        </p>
      </header>

      <section className="learning-path">
        <h2>Browse Plants</h2>
        <div className="module-grid">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => onNavigate(module.id)}
              className="module-card"
            >
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="plant-library-teaser">
        <h2>Not Sure Where To Start?</h2>
        <p>
          Start with Plant Finder, then narrow by family, purpose, or site conditions.
        </p>
        <button onClick={() => onNavigate('plants-finder')} className="btn btn-primary">
          Open Plant Finder
        </button>
      </section>

      <section className="plants-faq">
        <h2>Quick Questions</h2>
        <details>
          <summary>Do I have to plant native species?</summary>
          <p>
            Native plants work better for the insects that live here. They've evolved together.
            Non-native plants often don't feed the right caterpillars or bloom at the right time.
            Start with native. You'll see more life.
          </p>
        </details>
        <details>
          <summary>Can I use plants from a garden center?</summary>
          <p>
            Yes, if they're native to your region. Many garden centers now label native plants. If
            you're not sure, ask. Or use the plant library here — it shows exactly what grows in
            your area.
          </p>
        </details>
        <details>
          <summary>When should I plant?</summary>
          <p>
            Spring and fall are best. Most native plants are dormant in winter, so fall planting
            gives them time to establish roots before winter. Spring planting works too.
          </p>
        </details>
      </section>
    </div>
  )
}
