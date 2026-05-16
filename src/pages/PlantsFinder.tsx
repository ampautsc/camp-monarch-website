import type { Page } from '../App'
import ChooseAPlant from './ChooseAPlant'

interface PlantsFinderProps {
  onNavigate: (page: Page) => void
}

export default function PlantsFinder({ onNavigate }: PlantsFinderProps) {
  return <ChooseAPlant onNavigate={onNavigate} />
}
