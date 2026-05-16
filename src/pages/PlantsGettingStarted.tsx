import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

interface PlantsGettingStartedProps {
  onNavigate: (page: any) => void
}

export default function PlantsGettingStarted({ onNavigate }: PlantsGettingStartedProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants-getting-started')
  }, [])

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Start Here</h1>
        <p className="page-subtitle">Understanding what plants have to do with monarchs.</p>
      </header>

      <section className="content-section">
        <h2>Why Plants Matter</h2>
        <p>
          A monarch's life depends on plants. The caterpillar eats milkweed leaves for 3–5 weeks.
          The butterfly drinks nectar from flowers on its way south. The whole journey—from Mexico
          to Canada and back—runs on plant fuel.
        </p>
        <p>
          If milkweed is gone, caterpillars have nothing to eat. If flowers are gone, butterflies
          arrive at Mexico starving. So planting the right plants isn't optional. It's essential.
        </p>
      </section>

      <section className="content-section">
        <h2>One Plant Can Change a Yard</h2>
        <p>
          You don't need to transform your whole yard. Start with one native plant. Watch what
          happens. Insects arrive. Birds follow. The soil improves. Then add another. It
          compounds.
        </p>
        <p>
          One milkweed plant can raise 20–30 monarch caterpillars in a season. One native flower
          patch feeds dozens of insects. Small actions create visible change.
        </p>
      </section>

      <section className="content-section">
        <h2>The Learning Path</h2>
        <p>Here's what you need to know:</p>
        <ol>
          <li>
            <strong>Host Plants 101:</strong> Why milkweed is the only food monarch caterpillars
            will eat.
          </li>
          <li>
            <strong>Bloom Calendar:</strong> Monarchs migrate on a strict schedule. Your plants
            need to match.
          </li>
          <li>
            <strong>Plant Communities:</strong> Plants that grow together create richer habitat
            than isolated plants.
          </li>
          <li>
            <strong>Common Mistakes:</strong> What trips people up, and how to avoid it.
          </li>
        </ol>
      </section>

      <section className="next-section">
        <h2>Ready?</h2>
        <p>Go to the next section to learn about host plants. Or browse the plant library to see
          what grows in your area.</p>
        <div className="button-group">
          <button onClick={() => onNavigate('plants-host-plants')} className="btn btn-primary">
            Host Plants 101
          </button>
          <button onClick={() => onNavigate('plants-library')} className="btn btn-secondary">
            Browse Plants
          </button>
        </div>
      </section>
    </div>
  )
}
