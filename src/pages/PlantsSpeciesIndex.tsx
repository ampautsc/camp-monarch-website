import { useEffect, useMemo, useState } from 'react'
import type { Page } from '../App'
import { PlantDataLoader } from '../api/PlantDataLoader'
import type { Plant } from '../types/Plant'

interface PlantsSpeciesIndexProps {
  onNavigate: (page: Page) => void
}

export default function PlantsSpeciesIndex({ onNavigate }: PlantsSpeciesIndexProps) {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    let mounted = true
    PlantDataLoader.getAllPlants()
      .then((allPlants) => {
        if (!mounted) return
        const sorted = [...allPlants].sort((a, b) => a.commonName.localeCompare(b.commonName))
        setPlants(sorted)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    if (!query.trim()) return plants
    const q = query.trim().toLowerCase()
    return plants.filter((plant) => {
      return (
        plant.commonName.toLowerCase().includes(q) ||
        plant.scientificName.toLowerCase().includes(q)
      )
    })
  }, [plants, query])

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Full Species Index</h1>
        <p className="page-subtitle">
          Browse every plant in the Camp Monarch database in one searchable index.
        </p>
      </header>

      <section className="content-section">
        <label htmlFor="species-search"><strong>Search by common or scientific name</strong></label>
        <input
          id="species-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search plants..."
          style={{ marginTop: '0.5rem', width: '100%', maxWidth: '32rem', padding: '0.6rem 0.8rem' }}
        />
        <p style={{ marginTop: '0.75rem' }}>
          {loading ? 'Loading plant index...' : `${filtered.length} plants shown`}
        </p>
      </section>

      <section className="content-section">
        {loading ? (
          <p>Loading species list...</p>
        ) : (
          <ul>
            {filtered.slice(0, 200).map((plant) => (
              <li key={plant.id}>
                <strong>{plant.commonName}</strong> <em>({plant.scientificName})</em>
              </li>
            ))}
          </ul>
        )}

        {!loading && filtered.length > 200 && (
          <p>
            Showing first 200 results. Use search to narrow the list, or open Plant Finder for full
            filtering.
          </p>
        )}

        <div className="button-group">
          <button className="btn btn-primary" onClick={() => onNavigate('plants-finder')}>
            Open Plant Finder
          </button>
        </div>
      </section>
    </div>
  )
}
