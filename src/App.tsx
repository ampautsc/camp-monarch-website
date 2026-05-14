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
import RaiseAMonarch from './pages/RaiseAMonarch'
import TheFirstYear from './pages/TheFirstYear'
import FAQ from './pages/FAQ'
import LogASighting from './pages/LogASighting'
import WaystationGuide from './pages/WaystationGuide'
import Fireflies from './pages/Fireflies'
import BoxTurtles from './pages/BoxTurtles'
import NativeBees from './pages/NativeBees'
import TalkingPoints from './pages/TalkingPoints'
import GrayTreeFrogs from './pages/GrayTreeFrogs'
import DownyWoodpecker from './pages/DownyWoodpecker'
import BaltimoreOriole from './pages/BaltimoreOriole'
import NorthernCardinal from './pages/NorthernCardinal'
import EasternBluebird from './pages/EasternBluebird'
import BlackCappedChickadee from './pages/BlackCappedChickadee'
import RubyThroatedHummingbird from './pages/RubyThroatedHummingbird'
import AmericanGoldfinch from './pages/AmericanGoldfinch'
import AmericanRobin from './pages/AmericanRobin'
import IndigoBunting from './pages/IndigoBunting'
import TigerSwallowtail from './pages/TigerSwallowtail'
import GreenDarner from './pages/GreenDarner'
import GarterSnake from './pages/GarterSnake'
import DarkEyedJunco from './pages/DarkEyedJunco'
import EasternChipmunk from './pages/EasternChipmunk'
import SpringPeeper from './pages/SpringPeeper'
import AmericanToad from './pages/AmericanToad'
import SpeciesGallery from './pages/SpeciesGallery'
import HabitatTransformation from './pages/HabitatTransformation'
import HOAGuide from './pages/HOAGuide'
import HabitatScore from './pages/HabitatScore'
import SpringChecklist from './pages/SpringChecklist'
import { trackEvent } from './lib/analytics'

export type Page = 'home' | 'why-monarchs' | 'plant-milkweed' | 'the-migration' | 'take-action' | 'choose-a-plant' | 'native-plant-near-me' | 'monarch-life' | 'raise-a-monarch' | 'the-first-year' | 'faq' | 'log-a-sighting' | 'waystation-guide' | 'fireflies' | 'box-turtles' | 'native-bees' | 'talking-points' | 'gray-tree-frogs' | 'downy-woodpecker' | 'baltimore-oriole' | 'northern-cardinal' | 'eastern-bluebird' | 'black-capped-chickadee' | 'ruby-throated-hummingbird'
  | 'american-goldfinch'
  | 'american-robin'
  | 'indigo-bunting'
  | 'tiger-swallowtail'
  | 'green-darner'
  | 'garter-snake'
  | 'dark-eyed-junco'
  | 'eastern-chipmunk'
  | 'spring-peeper'
  | 'toad'
  | 'species-gallery'
  | 'habitat-transformation'
  | 'hoa-guide'
  | 'habitat-score'
  | 'spring-checklist'

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
      case 'raise-a-monarch':     return <RaiseAMonarch onNavigate={setPage} />
      case 'the-first-year':      return <TheFirstYear onNavigate={setPage} />
      case 'faq':                  return <FAQ onNavigate={setPage} />
      case 'log-a-sighting':      return <LogASighting onNavigate={setPage} />
      case 'waystation-guide':    return <WaystationGuide onNavigate={setPage} />
      case 'fireflies':           return <Fireflies onNavigate={setPage} />
      case 'box-turtles':         return <BoxTurtles onNavigate={setPage} />
      case 'native-bees':         return <NativeBees onNavigate={setPage} />
      case 'talking-points':      return <TalkingPoints onNavigate={setPage} />
      case 'gray-tree-frogs':     return <GrayTreeFrogs onNavigate={setPage} />
      case 'downy-woodpecker':    return <DownyWoodpecker onNavigate={setPage} />
      case 'baltimore-oriole':    return <BaltimoreOriole onNavigate={setPage} />
      case 'northern-cardinal':   return <NorthernCardinal onNavigate={setPage} />
      case 'eastern-bluebird':    return <EasternBluebird onNavigate={setPage} />
      case 'black-capped-chickadee': return <BlackCappedChickadee onNavigate={setPage} />
      case 'ruby-throated-hummingbird': return <RubyThroatedHummingbird onNavigate={setPage} />
      case 'american-goldfinch': return <AmericanGoldfinch onNavigate={setPage} />
      case 'american-robin': return <AmericanRobin onNavigate={setPage} />
      case 'indigo-bunting': return <IndigoBunting onNavigate={setPage} />
      case 'tiger-swallowtail': return <TigerSwallowtail onNavigate={setPage} />
      case 'green-darner': return <GreenDarner onNavigate={setPage} />
      case 'garter-snake': return <GarterSnake onNavigate={setPage} />
      case 'dark-eyed-junco': return <DarkEyedJunco onNavigate={setPage} />
      case 'eastern-chipmunk': return <EasternChipmunk onNavigate={setPage} />
      case 'spring-peeper': return <SpringPeeper onNavigate={setPage} />
      case 'toad': return <AmericanToad onNavigate={setPage} />
      case 'species-gallery': return <SpeciesGallery onNavigate={setPage} />
      case 'habitat-transformation': return <HabitatTransformation onNavigate={setPage} />
      case 'hoa-guide': return <HOAGuide onNavigate={setPage} />
      case 'habitat-score':        return <HabitatScore onNavigate={setPage} />
      case 'spring-checklist':    return <SpringChecklist onNavigate={setPage} />
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
