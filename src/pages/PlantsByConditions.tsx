import type { Page } from '../App'

interface PlantsByConditionsProps {
  onNavigate: (page: Page) => void
}

export default function PlantsByConditions({ onNavigate }: PlantsByConditionsProps) {
  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Browse By Conditions</h1>
        <p className="page-subtitle">
          Match plants to your yard conditions first. This is the fastest way to succeed.
        </p>
      </header>

      <section className="content-section">
        <h2>Condition Buckets</h2>
        <ul>
          <li><strong>Sun:</strong> full sun, partial sun, shade</li>
          <li><strong>Moisture:</strong> dry, medium, moist, wet</li>
          <li><strong>Soil:</strong> clay, loam, sand, rocky</li>
          <li><strong>Bloom window:</strong> spring, summer, late summer/fall</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Why This Works</h2>
        <p>
          Plants that match your site establish faster, survive drought better, and support more
          wildlife over time.
        </p>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => onNavigate('plants-finder')}>
            Filter Plants By Conditions
          </button>
        </div>
      </section>
    </div>
  )
}
