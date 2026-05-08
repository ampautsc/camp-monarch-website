import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'
import { Plant, PlantFilters } from '../types/Plant'
import { MockPlantApi } from '../api/MockPlantApi'
import FiltersPanel from '../components/FiltersPanel'
import PlantCard from '../components/PlantCard'
import PlantDetailView from '../components/PlantDetailView'
import './ChooseAPlant.css'

interface ChooseAPlantProps {
  onNavigate: (page: Page) => void
}

const plantApi = new MockPlantApi()

export default function ChooseAPlant({ onNavigate }: ChooseAPlantProps) {
  const { t } = useTranslation()
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<PlantFilters>({})
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)
  const [filterOptions, setFilterOptions] = useState({
    bloomColors: [] as string[],
    bloomTimes: [] as string[],
    hostPlantTo: [] as string[],
    foodFor: [] as string[],
    shelterFor: [] as string[],
  })
  const resultsContainerRef = useRef<HTMLDivElement>(null)

  // Load filter options once on mount
  useEffect(() => {
    plantApi.getFilterOptions().then(setFilterOptions)
  }, [])

  // Filter plants whenever filters change
  useEffect(() => {
    setLoading(true)
    plantApi.searchPlants(filters).then(results => {
      setPlants(results)
      setLoading(false)
    })
  }, [filters])

  // Scroll results to top when results change
  useEffect(() => {
    if (resultsContainerRef.current) {
      resultsContainerRef.current.scrollTop = 0
    }
  }, [plants])

  const handleSearchChange = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }))
  }

  const handleFiltersChange = (newFilters: PlantFilters) => {
    setFilters(newFilters)
  }

  const handleClearFilters = () => {
    setFilters({})
  }

  const handlePlantClick = (plant: Plant) => {
    trackEvent('plant_detail_view', 'choose-a-plant', plant.id)
    setSelectedPlant(plant)
  }

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__eyebrow">Plant Finder</div>
        <h1>Find the right native plant for your yard.</h1>
        <p className="hero__lead">
          Over 350 native plants — filter by location, sun, moisture, bloom time, and which wildlife species each plant supports.
          Click any plant to see growing conditions, host species, and where to source it.
        </p>
      </section>

      {/* Plant Finder Tool */}
      <div className="plant-finder-shell">
        <FiltersPanel
          filters={filters}
          filterOptions={filterOptions}
          onFiltersChange={handleFiltersChange}
          onClearFilters={handleClearFilters}
          isVisible={true}
          searchQuery={filters.searchQuery || ''}
          onSearchChange={handleSearchChange}
        />

        <div className="plant-finder-results" ref={resultsContainerRef}>
          <div className="results-header">
            {loading
              ? t('search.searching')
              : t('search.results', { count: plants.length })}
          </div>

          {loading ? (
            <div className="loading">{t('plant.loading')}</div>
          ) : plants.length === 0 ? (
            <div className="empty-state">
              <h3>{t('search.noResults')}</h3>
              <p>{t('search.noResultsHint')}</p>
            </div>
          ) : (
            <div className="plant-finder-grid">
              {plants.map(plant => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onClick={() => handlePlantClick(plant)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sourcing Section */}
      <div className="page">
        <section aria-labelledby="source-heading" className="sourcing-section">
          <h2 id="source-heading">Where to source native plants</h2>
          <p className="sourcing-intro">
            Found a plant you want? These national tools help you find it locally — including neonicotinoid-free sources.
          </p>

          <div className="sourcing-grid">
            <a
              href="https://www.nwf.org/NativePlantFinder/"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcing-card"
              onClick={() => trackEvent('external_link', 'choose-a-plant', 'nwf-native-plant-finder')}
            >
              <span className="sourcing-icon">🔍</span>
              <div>
                <strong>NWF Native Plant Finder</strong>
                <p>Enter your ZIP code. Returns native plants most valuable to wildlife in your county — with nursery supplier links built in.</p>
              </div>
            </a>

            <a
              href="https://xerces.org/milkweed"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcing-card"
              onClick={() => trackEvent('external_link', 'choose-a-plant', 'xerces-milkweed')}
            >
              <span className="sourcing-icon">🌱</span>
              <div>
                <strong>Xerces Milkweed Supplier Directory</strong>
                <p>Updated each spring. Lists milkweed suppliers by state with species notes — plugs, seeds, or both.</p>
              </div>
            </a>

            <a
              href="https://shop.monarchwatch.org/milkweed/"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcing-card"
              onClick={() => trackEvent('external_link', 'choose-a-plant', 'monarch-watch-milkweed')}
            >
              <span className="sourcing-icon">📦</span>
              <div>
                <strong>Monarch Watch — Milkweed Market</strong>
                <p>Ships native milkweed plugs directly, with regional species recommendations. Best option when no local nursery carries native milkweed.</p>
              </div>
            </a>

            <a
              href="https://www.wildflower.org/plants/"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcing-card"
              onClick={() => trackEvent('external_link', 'choose-a-plant', 'wildflower-center')}
            >
              <span className="sourcing-icon">🌺</span>
              <div>
                <strong>Lady Bird Johnson Wildflower Center</strong>
                <p>Search by state, sun, water needs, and bloom time. Includes a nursery finder for where to buy each species near you.</p>
              </div>
            </a>

            <a
              href="https://www.audubon.org/native-plants"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcing-card"
              onClick={() => trackEvent('external_link', 'choose-a-plant', 'audubon-native-plants')}
            >
              <span className="sourcing-icon">🐦</span>
              <div>
                <strong>Audubon Native Plant Database</strong>
                <p>Enter your ZIP. Returns native plants beneficial for birds in your area — useful for habitat that supports multiple species beyond Monarchs.</p>
              </div>
            </a>

            <a
              href="https://www.prairiemoon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcing-card"
              onClick={() => trackEvent('external_link', 'choose-a-plant', 'prairie-moon')}
            >
              <span className="sourcing-icon">🌾</span>
              <div>
                <strong>Prairie Moon Nursery</strong>
                <p>One of the most trusted native plant suppliers in the Midwest. Large selection of prairie species; ships nationwide.</p>
              </div>
            </a>
          </div>

          <div className="sourcing-cta">
            <button
              className="btn btn--secondary"
              onClick={() => { trackEvent('cta_click', 'choose-a-plant', 'regional-programs'); onNavigate('native-plant-near-me') }}
            >
              Regional programs and local nurseries by state →
            </button>
          </div>
        </section>

        <section aria-labelledby="avoid-heading" className="avoid-section">
          <h2 id="avoid-heading">What to avoid at garden centers</h2>
          <ul className="avoid-list">
            <li>
              <strong>Tropical Milkweed (<em>Asclepias curassavica</em>).</strong> Big-box stores stock it under "Butterfly Mix" — it disrupts Monarch migration timing. Ask specifically for native species and check the scientific name on the tag.
            </li>
            <li>
              <strong>Plants labeled "milkweed" without a species name.</strong> Native milkweed has a Latin name (<em>Asclepias tuberosa</em>, <em>A. syriaca</em>, etc.). No species name means likely tropical.
            </li>
            <li>
              <strong>Neonicotinoid-treated plants.</strong> Ask before buying. Treated milkweed and nectar plants harm the Monarchs and pollinators you are trying to help.
            </li>
            <li>
              <strong>Pre-mixed wildflower seed packets from hardware stores.</strong> These typically include non-native and potentially invasive species mixed with the native ones.
            </li>
          </ul>
        </section>
      </div>

      {/* Plant Detail Overlay */}
      {selectedPlant && (
        <PlantDetailView
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
    </>
  )
}

