import type { Page } from '../App'

interface PlantsByFamilyProps {
  onNavigate: (page: Page) => void
}

export default function PlantsByFamily({ onNavigate }: PlantsByFamilyProps) {
  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Browse By Family</h1>
        <p className="page-subtitle">
          Start with plant families so you can explore in meaningful groups, not a giant list.
        </p>
      </header>

      <section className="content-section">
        <h2>Featured Families</h2>
        <ul>
          <li><strong>Apocynaceae:</strong> Milkweeds (critical for monarch caterpillars)</li>
          <li><strong>Asteraceae:</strong> Asters, goldenrods, coneflowers (late-season nectar)</li>
          <li><strong>Lamiaceae:</strong> Mints and mountain mints (pollinator magnets)</li>
          <li><strong>Fabaceae:</strong> Legumes that improve soil and feed insects</li>
          <li><strong>Poaceae:</strong> Native grasses that support shelter and nesting</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Recommended Path</h2>
        <p>
          If you are planting for monarchs, start with milkweeds, then add late-season asters and
          goldenrods for migration fuel.
        </p>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => onNavigate('plants-milkweeds')}>
            Explore Milkweeds
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('plants-finder')}>
            Open Plant Finder
          </button>
        </div>
      </section>
    </div>
  )
}
