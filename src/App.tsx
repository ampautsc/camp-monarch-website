import { useState, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
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
import MonarchLife from './pages/MonarchLife'
import FAQ from './pages/FAQ'
import { trackEvent } from './lib/analytics'

export type Page = 'home' | 'why-monarchs' | 'plant-milkweed' | 'the-migration' | 'take-action' | 'choose-a-plant' | 'native-plant-near-me' | 'monarch-life' | 'faq'

function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    trackEvent('page_view', page)
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'why-monarchs':        return <WhyMonarchs onNavigate={setPage} />
      case 'plant-milkweed':      return <PlantMilkweed onNavigate={setPage} />
      case 'the-migration':       return <TheMigration onNavigate={setPage} />
      case 'take-action':         return <TakeAction onNavigate={setPage} />
      case 'choose-a-plant':      return <ChooseAPlant onNavigate={setPage} />
      case 'native-plant-near-me': return <NativePlantNearMe onNavigate={setPage} />
      case 'monarch-life':        return <MonarchLife onNavigate={setPage} />
      case 'faq':                  return <FAQ onNavigate={setPage} />
      default:                    return <Home onNavigate={setPage} />
    }
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Nav current={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} />
      <FeedbackWidget page={page} />
    </I18nextProvider>
  )
}

export default App
