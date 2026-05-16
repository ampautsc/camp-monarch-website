import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

interface PlantsProps {
  onNavigate: (page: any) => void
}

export default function Plants({ onNavigate }: PlantsProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants')
  }, [])

  const modules = [
    {
      id: 'plants-getting-started',
      title: 'Start Here',
      description: 'What plants have to do with monarchs, and where to begin.',
    },
    {
      id: 'plants-host-plants',
      title: 'Host Plants 101',
      description: 'Milkweed is what monarch caterpillars eat. Nothing else works.',
    },
    {
      id: 'plants-bloom-calendar',
      title: 'Bloom Calendar',
      description: 'Timing matters. Monarchs need food when they migrate through.',
    },
    {
      id: 'plants-communities',
      title: 'Plant Communities',
      description: 'Plants that grow together support more wildlife than plants alone.',
    },
    {
      id: 'plants-common-mistakes',
      title: 'Common Mistakes',
      description: 'What people get wrong when planting for monarchs, and how to avoid it.',
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
        <h2>Learn</h2>
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
        <h2>Browse All Plants</h2>
        <p>
          Find native plants for your yard. Filter by sun, moisture, soil type, bloom time, and
          what wildlife they support.
        </p>
        <button onClick={() => onNavigate('plants-library')} className="btn btn-primary">
          Open Plant Library
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
