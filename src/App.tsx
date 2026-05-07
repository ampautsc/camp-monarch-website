import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhyMonarchs from './pages/WhyMonarchs'
import PlantMilkweed from './pages/PlantMilkweed'
import TheMigration from './pages/TheMigration'
import TakeAction from './pages/TakeAction'

export type Page = 'home' | 'why-monarchs' | 'plant-milkweed' | 'the-migration' | 'take-action'

function App() {
  const [page, setPage] = useState<Page>('home')

  const renderPage = () => {
    switch (page) {
      case 'why-monarchs':   return <WhyMonarchs onNavigate={setPage} />
      case 'plant-milkweed': return <PlantMilkweed onNavigate={setPage} />
      case 'the-migration':  return <TheMigration onNavigate={setPage} />
      case 'take-action':    return <TakeAction onNavigate={setPage} />
      default:               return <Home onNavigate={setPage} />
    }
  }

  return (
    <>
      <Nav current={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} />
    </>
  )
}

export default App
