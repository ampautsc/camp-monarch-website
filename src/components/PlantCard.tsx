import { Plant } from '../types/Plant';
import './PlantCard.css';

interface PlantCardProps {
  plant: Plant;
  onClick?: () => void;
}

function PlantCard({ plant, onClick }: PlantCardProps) {
  const isMonarchHost = plant.relationships.hostPlantTo.some(s =>
    s.toLowerCase().includes('monarch') || s.toLowerCase().includes('danaus plexippus')
  );

  return (
    <div
      className="plant-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {plant.thumbnailUrl || plant.imageUrl ? (
        <div className="plant-image">
          <img src={plant.thumbnailUrl || plant.imageUrl} alt={plant.commonName} loading="lazy" />
          {isMonarchHost && (
            <div className="monarch-badge" title="Monarch host plant">🦋</div>
          )}
        </div>
      ) : (
        <div className="plant-image plant-image-placeholder">
          <span className="placeholder-icon">🌿</span>
          {isMonarchHost && (
            <div className="monarch-badge" title="Monarch host plant">🦋</div>
          )}
        </div>
      )}
      <div className="plant-info">
        <h3 className="plant-name">{plant.commonName}</h3>
        <p className="plant-scientific">{plant.scientificName}</p>
        <div className="plant-tags">
          {plant.requirements.sun && (
            <span className="plant-tag">
              {plant.requirements.sun === 'full-sun' ? '☀️' :
               plant.requirements.sun === 'partial-sun' ? '⛅' :
               plant.requirements.sun === 'partial-shade' ? '🌤️' : '☁️'}
            </span>
          )}
          {plant.characteristics.bloomTime.length > 0 && (
            <span className="plant-tag">📅 {plant.characteristics.bloomTime[0]}</span>
          )}
          {plant.relationships.hostPlantTo.length > 0 && (
            <span className="plant-tag wildlife-tag">🐛 {plant.relationships.hostPlantTo.length} species</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
