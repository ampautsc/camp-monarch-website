import type { Page } from '../App'

interface PlantsByPurposeProps {
  onNavigate: (page: Page) => void
}

export default function PlantsByPurpose({ onNavigate }: PlantsByPurposeProps) {
  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Browse By Purpose</h1>
        <p className="page-subtitle">
          Choose plants based on what you are trying to accomplish in your yard.
        </p>
      </header>

      <section className="content-section">
        <h2>Common Goals</h2>
        <ul>
          <li><strong>Raise monarch caterpillars:</strong> prioritize milkweed species</li>
          <li><strong>Feed migrating adults:</strong> maximize late-season nectar blooms</li>
          <li><strong>Support birds:</strong> combine seed-bearing flowers and shelter plants</li>
          <li><strong>Reduce mowing:</strong> establish native meadows and perennial clusters</li>
          <li><strong>Improve soil:</strong> include deep-rooted natives and legumes</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Next Steps</h2>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => onNavigate('plants-starter-plants')}>
            See Starter Plants
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('plants-bloom-calendar')}>
            Open Bloom Calendar
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('plants-finder')}>
            Open Plant Finder
          </button>
        </div>
      </section>
    </div>
  )
}
