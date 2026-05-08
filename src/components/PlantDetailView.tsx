import { useState } from 'react';
import { Plant } from '../types/Plant';
import { getButterflyThumbnail } from '../data/butterflyThumbnails';
import './PlantDetailView.css';

interface PlantDetailViewProps {
  plant: Plant;
  onClose: () => void;
}

function PlantDetailView({ plant, onClose }: PlantDetailViewProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const getSunIcon = (sun: string) => {
    const icons: Record<string, string> = {
      'full-sun': '☀️',
      'partial-sun': '⛅',
      'partial-shade': '🌤️',
      'full-shade': '☁️',
    };
    return icons[sun] || '☀️';
  };

  const getSunLabel = (sun: string) => {
    const labels: Record<string, string> = {
      'full-sun': 'Full Sun',
      'partial-sun': 'Partial Sun',
      'partial-shade': 'Partial Shade',
      'full-shade': 'Full Shade',
    };
    return labels[sun] || sun;
  };

  const getMoistureIcon = (moisture: string) => {
    const icons: Record<string, string> = {
      'dry': '🏜️',
      'medium': '💧',
      'moist': '💦',
      'wet': '🌊',
    };
    return icons[moisture] || '💧';
  };

  const getMoistureLabel = (moisture: string) => {
    const labels: Record<string, string> = {
      'dry': 'Dry',
      'medium': 'Medium',
      'moist': 'Moist',
      'wet': 'Wet',
    };
    return labels[moisture] || moisture;
  };

  const handleButterflyClick = (butterflyId: string | undefined) => {
    if (!butterflyId) return;
    const thumbnail = getButterflyThumbnail(butterflyId);
    if (!thumbnail || !thumbnail.taxonId) return;
    const url = `https://www.inaturalist.org/taxa/${thumbnail.taxonId}-${thumbnail.id}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="plant-detail-overlay" onClick={onClose}>
      <div className="plant-detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Header / Title Area */}
        <div className="detail-header">
          <div className="detail-title-area">
            <h1 className="detail-common-name">{plant.commonName}</h1>
            <p className="detail-scientific-name">{plant.scientificName}</p>
          </div>
          {plant.imageUrl ? (
            <div className="detail-hero-image">
              <img src={plant.imageUrl} alt={plant.commonName} />
            </div>
          ) : (
            <div className="detail-hero-placeholder">
              <span className="placeholder-icon">🌸</span>
            </div>
          )}
        </div>

        <div className="detail-content">
          {/* Description */}
          <section className="detail-section description-compact">
            <p className="plant-description-compact">{plant.description}</p>
          </section>

          {/* Dashboard Grid */}
          <div className="dashboard-grid">

            {/* Growing Conditions */}
            <section className="dashboard-card conditions-card">
              <h3 className="card-title">Growing Conditions</h3>
              <div className="conditions-compact">
                <div className="condition-row">
                  <span className="condition-icon">{getSunIcon(plant.requirements.sun)}</span>
                  <span className="condition-value">{getSunLabel(plant.requirements.sun)}</span>
                </div>
                <div className="condition-row">
                  <span className="condition-icon">{getMoistureIcon(plant.requirements.moisture)}</span>
                  <span className="condition-value">{getMoistureLabel(plant.requirements.moisture)}</span>
                </div>
                <div className="condition-row">
                  <span className="condition-icon">🌍</span>
                  <span className="condition-value">{plant.requirements.soil}</span>
                </div>
                {plant.characteristics.hardinessZones.length > 0 && (
                  <div className="condition-row">
                    <span className="condition-icon">🌡️</span>
                    <span className="condition-value">Zones {plant.characteristics.hardinessZones.join(', ')}</span>
                  </div>
                )}
                {plant.characteristics.bloomColor.length > 0 && (
                  <div className="condition-row">
                    <span className="condition-icon">🌸</span>
                    <span className="condition-value">{plant.characteristics.bloomColor.join(', ')}</span>
                  </div>
                )}
                {plant.characteristics.bloomTime.length > 0 && (
                  <div className="condition-row">
                    <span className="condition-icon">📅</span>
                    <span className="condition-value">{plant.characteristics.bloomTime.join(', ')}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Host Plant Species */}
            {plant.relationships.hostPlantTo.length > 0 && (
              <section className="dashboard-card host-card">
                <h3 className="card-title">🐛 Host Plant For</h3>
                <div className="host-species-compact">
                  {(() => {
                    const speciesMap = new Map<string, { speciesName: string; commonName: string; thumbnail: ReturnType<typeof getButterflyThumbnail> }>();
                    plant.relationships.hostPlantTo.forEach(species => {
                      const thumbnail = getButterflyThumbnail(species);
                      const commonName = thumbnail?.commonName || species;
                      if (!speciesMap.has(commonName)) {
                        speciesMap.set(commonName, { speciesName: species, commonName, thumbnail });
                      }
                    });
                    return Array.from(speciesMap.values()).map(({ speciesName, commonName, thumbnail }) => (
                      <button
                        key={commonName}
                        className="host-icon-button"
                        onClick={() => handleButterflyClick(speciesName)}
                        aria-label={`View ${commonName} on iNaturalist`}
                        title={commonName}
                      >
                        {thumbnail?.thumbnailUrl && (
                          <img
                            src={thumbnail.thumbnailUrl}
                            alt={commonName}
                            className="host-icon-img"
                          />
                        )}
                        <span className="host-common-name">{commonName}</span>
                      </button>
                    ));
                  })()}
                </div>
              </section>
            )}

            {/* Wildlife Support */}
            {(plant.relationships.foodFor.length > 0 || plant.relationships.shelterFor.length > 0) && (
              <section className="dashboard-card support-card">
                <h3 className="card-title">Wildlife Support</h3>
                <div className="support-compact">
                  {plant.relationships.foodFor.length > 0 && (
                    <div className="support-item">
                      <span className="support-icon">🦋</span>
                      <span className="support-text">{plant.relationships.foodFor.slice(0, 3).join(', ')}</span>
                    </div>
                  )}
                  {plant.relationships.shelterFor.length > 0 && (
                    <div className="support-item">
                      <span className="support-icon">🏠</span>
                      <span className="support-text">{plant.relationships.shelterFor.slice(0, 2).join(', ')}</span>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Quick Links */}
            <section className="dashboard-card links-card">
              <h3 className="card-title">Learn More</h3>
              <div className="quick-links">
                {plant.usdaPlantId && (
                  <a
                    href={`https://plants.usda.gov/home/plantProfile?symbol=${plant.usdaPlantId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link-button usda-link"
                  >
                    <span className="link-icon">🗺️</span>
                    <span className="link-text">USDA Native Range Map</span>
                  </a>
                )}
                <a
                  href={`https://www.wildflower.org/plants/result.php?id_plant=${encodeURIComponent(plant.scientificName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-link-button"
                >
                  <span className="link-icon">🌿</span>
                  <span className="link-text">Wildflower Center</span>
                </a>
              </div>
            </section>
          </div>

          {/* Expandable Sections */}
          <div className="expandable-sections">
            {/* Planting Instructions */}
            <div className="expandable-section">
              <button
                className={`section-header ${expandedSections.has('planting') ? 'expanded' : ''}`}
                onClick={() => toggleSection('planting')}
              >
                <span className="section-header-text">
                  <span className="section-icon">🌱</span>
                  Planting Instructions
                </span>
                <span className="expand-icon">{expandedSections.has('planting') ? '−' : '+'}</span>
              </button>
              {expandedSections.has('planting') && (
                <div className="section-content">
                  <ol className="instruction-list">
                    <li>Choose a location that meets the sunlight and soil requirements listed above.</li>
                    <li>Prepare the soil by removing weeds and loosening to a depth of 6–8 inches.</li>
                    <li>Dig a hole twice as wide as the root ball and just as deep.</li>
                    <li>Place the plant in the hole, ensuring the top of the root ball is level with the ground.</li>
                    <li>Fill the hole with soil and gently firm around the base.</li>
                    <li>Water thoroughly after planting and keep soil {getMoistureLabel(plant.requirements.moisture).toLowerCase()} during establishment.</li>
                    <li>Apply 2–3 inches of mulch around the plant, keeping it away from the stem.</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Helpful Links */}
            <div className="expandable-section">
              <button
                className={`section-header ${expandedSections.has('links') ? 'expanded' : ''}`}
                onClick={() => toggleSection('links')}
              >
                <span className="section-header-text">
                  <span className="section-icon">🔗</span>
                  Helpful Links
                </span>
                <span className="expand-icon">{expandedSections.has('links') ? '−' : '+'}</span>
              </button>
              {expandedSections.has('links') && (
                <div className="section-content">
                  <ul className="links-list">
                    {plant.usdaPlantId && (
                      <li>
                        <a href={`https://plants.usda.gov/home/plantProfile?symbol=${plant.usdaPlantId}`} target="_blank" rel="noopener noreferrer">
                          USDA Plant Database
                        </a>
                      </li>
                    )}
                    <li>
                      <a href={`https://www.wildflower.org/plants/result.php?id_plant=${encodeURIComponent(plant.scientificName)}`} target="_blank" rel="noopener noreferrer">
                        Lady Bird Johnson Wildflower Center
                      </a>
                    </li>
                    <li>
                      <a href={`https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderSearch.aspx?searchterm=${encodeURIComponent(plant.scientificName)}`} target="_blank" rel="noopener noreferrer">
                        Missouri Botanical Garden
                      </a>
                    </li>
                    <li>
                      <a href={`https://www.audubon.org/native-plants/search?zipcode=&search=${encodeURIComponent(plant.commonName)}`} target="_blank" rel="noopener noreferrer">
                        Audubon Native Plants Database
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Where to Source */}
            <div className="expandable-section">
              <button
                className={`section-header ${expandedSections.has('buy') ? 'expanded' : ''}`}
                onClick={() => toggleSection('buy')}
              >
                <span className="section-header-text">
                  <span className="section-icon">🛒</span>
                  Where to Source This Plant
                </span>
                <span className="expand-icon">{expandedSections.has('buy') ? '−' : '+'}</span>
              </button>
              {expandedSections.has('buy') && (
                <div className="section-content">
                  <ul className="links-list">
                    <li>
                      <a href="https://www.prairiemoon.com/" target="_blank" rel="noopener noreferrer">
                        Prairie Moon Nursery — native seeds &amp; plants
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monarchwatch.org/milkweed/market/" target="_blank" rel="noopener noreferrer">
                        Monarch Watch Milkweed Market
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nwf.org/NativePlantFinder/" target="_blank" rel="noopener noreferrer">
                        NWF Native Plant Finder — find local nurseries
                      </a>
                    </li>
                    <li>
                      <a href={`https://www.google.com/search?q=buy+${encodeURIComponent(plant.commonName)}+native+plant+near+me`} target="_blank" rel="noopener noreferrer">
                        Search for local nurseries selling {plant.commonName}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantDetailView;
