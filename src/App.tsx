import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FeedbackWidget from './components/FeedbackWidget'
import Home from './pages/Home'
import WhyMonarchs from './pages/WhyMonarchs'
import PlantMilkweed from './pages/PlantMilkweed'
import TheMigration from './pages/TheMigration'
import TakeAction from './pages/TakeAction'
import ChooseAPlant from './pages/ChooseAPlant'
import NativePlantNearMe from './pages/NativePlantNearMe'

export type Page = 'home' | 'why-monarchs' | 'plant-milkweed' | 'the-migration' | 'take-action' | 'choose-a-plant' | 'native-plant-near-me'

function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'why-monarchs':        return <WhyMonarchs onNavigate={setPage} />
      case 'plant-milkweed':      return <PlantMilkweed onNavigate={setPage} />
      case 'the-migration':       return <TheMigration onNavigate={setPage} />
      case 'take-action':         return <TakeAction onNavigate={setPage} />
      case 'choose-a-plant':      return <ChooseAPlant onNavigate={setPage} />
      case 'native-plant-near-me': return <NativePlantNearMe onNavigate={setPage} />
      default:                    return <Home onNavigate={setPage} />
    }
  }

  return (
    <>
      <Nav current={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} />
      <FeedbackWidget page={page} />
    </>
  )
}

export default App
