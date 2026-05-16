import type { Page } from '../App'
import PlantsHostPlants from './PlantsHostPlants'

interface PlantsMilkweedsProps {
  onNavigate: (page: Page) => void
}

export default function PlantsMilkweeds({ onNavigate }: PlantsMilkweedsProps) {
  return <PlantsHostPlants onNavigate={onNavigate} />
}
