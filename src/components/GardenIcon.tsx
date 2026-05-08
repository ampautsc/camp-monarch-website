import { useState } from 'react';
import './GardenIcon.css';

interface GardenIconProps {
  isInGarden: boolean;
  onAddToGarden: () => void;
  onRemoveFromGarden: () => void;
}

function GardenIcon({ isInGarden, onAddToGarden, onRemoveFromGarden }: GardenIconProps) {
  const [celebrating, setCelebrating] = useState(false);

  const handleClick = () => {
    if (isInGarden) {
      onRemoveFromGarden();
    } else {
      setCelebrating(true);
      onAddToGarden();
      setTimeout(() => setCelebrating(false), 1000);
    }
  };

  return (
    <div className="garden-icon-container">
      <button
        className={`garden-icon-button ${isInGarden ? 'in-garden' : ''} ${celebrating ? 'celebrating' : ''}`}
        onClick={handleClick}
        aria-label={isInGarden ? 'Remove from garden' : 'Add to garden'}
        title={isInGarden ? 'Remove this plant from your garden' : 'Add this plant to your garden'}
      >
        <img
          src={isInGarden 
            ? '/images/Camp%20Monarch_LOGO%20icon%20for%20Garden.png'
            : '/images/Camp%20Monarch_LOGO%20B1_gray_square.png'
          }
          alt="Garden icon"
        />
      </button>
    </div>
  );
}

export default GardenIcon;
