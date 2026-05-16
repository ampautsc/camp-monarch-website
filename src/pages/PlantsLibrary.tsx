import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'
import ChooseAPlant from './ChooseAPlant'

interface PlantsLibraryProps {
  onNavigate: (page: any) => void
}

export default function PlantsLibrary({ onNavigate }: PlantsLibraryProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants-library')
  }, [])

  return (
    <ChooseAPlant onNavigate={onNavigate} />
  )
}
