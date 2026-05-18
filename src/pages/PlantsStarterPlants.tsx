import type { Page } from '../App'

interface PlantsStarterPlantsProps {
  onNavigate: (page: Page) => void
}

const starterPlants = [
  'Butterfly Weed (Asclepias tuberosa)',
  'Swamp Milkweed (Asclepias incarnata)',
  'Purple Coneflower (Echinacea purpurea)',
  'Bee Balm (Monarda fistulosa)',
  'New England Aster (Symphyotrichum novae-angliae)',
  'Goldenrod (Solidago spp.)',
  'Black-eyed Susan (Rudbeckia hirta)',
  'Little Bluestem (Schizachyrium scoparium)',
  'Prairie Dropseed (Sporobolus heterolepis)',
]

export default function PlantsStarterPlants({ onNavigate }: PlantsStarterPlantsProps) {
  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Starter Plants (Top 25)</h1>
        <p className="page-subtitle">
          A practical starter set for most yards, designed for high wildlife value and easy setup.
        </p>
      </header>

      <section className="content-section">
        <h2>Quick Starter List</h2>
        <ul>
          {starterPlants.map((plant) => (
            <li key={plant}>{plant}</li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <h2>Build Your Mix</h2>
        <p>
          Start with 3 milkweed plants, 5 summer bloomers, and 5 fall bloomers. Add native grasses
          for shelter and structure.
        </p>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => onNavigate('plants-finder')}>
            Open Plant Finder
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('plants-milkweeds')}>
            Milkweed Guide
          </button>
        </div>
      </section>
    </div>
  )
}
