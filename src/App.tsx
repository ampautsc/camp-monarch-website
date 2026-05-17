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
import Plants from './pages/Plants'
import PlantsGettingStarted from './pages/PlantsGettingStarted'
import PlantsHostPlants from './pages/PlantsHostPlants'
import PlantsBloomCalendar from './pages/PlantsBloomCalendar'
import PlantCommunities from './pages/PlantCommunities'
import PlantCommonMistakes from './pages/PlantCommonMistakes'
import PlantsLibrary from './pages/PlantsLibrary'
import PlantsFinder from './pages/PlantsFinder'
import PlantsByFamily from './pages/PlantsByFamily'
import PlantsByPurpose from './pages/PlantsByPurpose'
import PlantsByConditions from './pages/PlantsByConditions'
import PlantsMilkweeds from './pages/PlantsMilkweeds'
import PlantsStarterPlants from './pages/PlantsStarterPlants'
import PlantsSpeciesIndex from './pages/PlantsSpeciesIndex'
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
import LittleBrownBat from './pages/LittleBrownBat'
import WoodThrush from './pages/WoodThrush'
import EasternScreechOwl from './pages/EasternScreechOwl'
import PolyphemusMoth from './pages/PolyphemusMoth'
import LunaMoth from './pages/LunaMoth'
import CommonNighthawk from './pages/CommonNighthawk'
import CecropiaMoth from './pages/CecropiaMoth'
import VirginiaOpossum from './pages/VirginiaOpossum'
import AmericanBumbleBee from './pages/AmericanBumbleBee'
import ChimneySwift from './pages/ChimneySwift'
import PurpleMartin from './pages/PurpleMartin'
import RedTailedHawk from './pages/RedTailedHawk'
import EasternMeadowlark from './pages/EasternMeadowlark'
import AmericanKestrel from './pages/AmericanKestrel'
import BrownThrasher from './pages/BrownThrasher'
import EasternTowhee from './pages/EasternTowhee'
import SeasonalCalendar from './pages/SeasonalCalendar'
import SpeciesGallery from './pages/SpeciesGallery'
import HabitatTransformation from './pages/HabitatTransformation'
import HOAGuide from './pages/HOAGuide'
import HabitatScore from './pages/HabitatScore'
import SpringChecklist from './pages/SpringChecklist'
import PesticideGuide from './pages/PesticideGuide'
import WaterForWildlife from './pages/WaterForWildlife'
import LeaveTheLeaves from './pages/LeaveTheLeaves'
import InvasivePlants from './pages/InvasivePlants'
import { trackEvent } from './lib/analytics'
import { ALL_PAGE_SLUGS, type PageSlug } from './config/sitePages'

export type Page = PageSlug

const VALID_PAGES = new Set<Page>(ALL_PAGE_SLUGS)

function pageFromPath(path: string): Page {
  const slug = path.replace(/^\//, '').replace(/\/$/, '')
  if (!slug || slug === 'index.html') return 'home'
  return VALID_PAGES.has(slug as Page) ? (slug as Page) : 'home'
}

function App() {
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname))

  const navigateTo = (p: Page) => {
    const path = p === 'home' ? '/' : `/${p}`
    window.history.pushState(null, '', path)
    setPage(p)
  }

  useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    trackEvent('page_view', page)
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'why-monarchs':        return <WhyMonarchs onNavigate={navigateTo} />
      case 'plant-milkweed':      return <PlantMilkweed onNavigate={navigateTo} />
      case 'the-migration':       return <TheMigration onNavigate={navigateTo} />
      case 'take-action':         return <TakeAction onNavigate={navigateTo} />
      case 'choose-a-plant':      return <ChooseAPlant onNavigate={navigateTo} />
      case 'native-plant-near-me': return <NativePlantNearMe onNavigate={navigateTo} />
      case 'monarch-life':        return <MonarchLife onNavigate={navigateTo} />
      case 'raise-a-monarch':     return <RaiseAMonarch onNavigate={navigateTo} />
      case 'the-first-year':      return <TheFirstYear onNavigate={navigateTo} />
      case 'faq':                  return <FAQ onNavigate={navigateTo} />
      case 'log-a-sighting':      return <LogASighting onNavigate={navigateTo} />
      case 'waystation-guide':    return <WaystationGuide onNavigate={navigateTo} />
      case 'fireflies':           return <Fireflies onNavigate={navigateTo} />
      case 'box-turtles':         return <BoxTurtles onNavigate={navigateTo} />
      case 'native-bees':         return <NativeBees onNavigate={navigateTo} />
      case 'talking-points':      return <TalkingPoints onNavigate={navigateTo} />
      case 'gray-tree-frogs':     return <GrayTreeFrogs onNavigate={navigateTo} />
      case 'downy-woodpecker':    return <DownyWoodpecker onNavigate={navigateTo} />
      case 'baltimore-oriole':    return <BaltimoreOriole onNavigate={navigateTo} />
      case 'northern-cardinal':   return <NorthernCardinal onNavigate={navigateTo} />
      case 'eastern-bluebird':    return <EasternBluebird onNavigate={navigateTo} />
      case 'plants':              return <Plants onNavigate={navigateTo} />
      case 'plants-finder':       return <PlantsFinder onNavigate={navigateTo} />
      case 'plants-by-family':    return <PlantsByFamily onNavigate={navigateTo} />
      case 'plants-by-purpose':   return <PlantsByPurpose onNavigate={navigateTo} />
      case 'plants-by-conditions': return <PlantsByConditions onNavigate={navigateTo} />
      case 'plants-milkweeds':    return <PlantsMilkweeds onNavigate={navigateTo} />
      case 'plants-starter-plants': return <PlantsStarterPlants onNavigate={navigateTo} />
      case 'plants-species-index': return <PlantsSpeciesIndex onNavigate={navigateTo} />
      case 'plants-getting-started': return <PlantsGettingStarted onNavigate={navigateTo} />
      case 'plants-host-plants':  return <PlantsHostPlants onNavigate={navigateTo} />
      case 'plants-bloom-calendar': return <PlantsBloomCalendar onNavigate={navigateTo} />
      case 'plants-communities':  return <PlantCommunities onNavigate={navigateTo} />
      case 'plants-common-mistakes': return <PlantCommonMistakes onNavigate={navigateTo} />
      case 'plants-library':      return <PlantsLibrary onNavigate={navigateTo} />
      case 'black-capped-chickadee': return <BlackCappedChickadee onNavigate={navigateTo} />
      case 'ruby-throated-hummingbird': return <RubyThroatedHummingbird onNavigate={navigateTo} />
      case 'american-goldfinch': return <AmericanGoldfinch onNavigate={navigateTo} />
      case 'american-robin': return <AmericanRobin onNavigate={navigateTo} />
      case 'indigo-bunting': return <IndigoBunting onNavigate={navigateTo} />
      case 'tiger-swallowtail': return <TigerSwallowtail onNavigate={navigateTo} />
      case 'green-darner': return <GreenDarner onNavigate={navigateTo} />
      case 'garter-snake': return <GarterSnake onNavigate={navigateTo} />
      case 'dark-eyed-junco': return <DarkEyedJunco onNavigate={navigateTo} />
      case 'eastern-chipmunk': return <EasternChipmunk onNavigate={navigateTo} />
      case 'spring-peeper': return <SpringPeeper onNavigate={navigateTo} />
      case 'toad': return <AmericanToad onNavigate={navigateTo} />
      case 'little-brown-bat': return <LittleBrownBat onNavigate={navigateTo} />
      case 'wood-thrush': return <WoodThrush onNavigate={navigateTo} />
      case 'eastern-screech-owl': return <EasternScreechOwl onNavigate={navigateTo} />
      case 'polyphemus-moth': return <PolyphemusMoth onNavigate={navigateTo} />
      case 'luna-moth': return <LunaMoth onNavigate={navigateTo} />
      case 'common-nighthawk': return <CommonNighthawk onNavigate={navigateTo} />
      case 'cecropia-moth': return <CecropiaMoth onNavigate={navigateTo} />
      case 'virginia-opossum': return <VirginiaOpossum onNavigate={navigateTo} />
      case 'american-bumble-bee': return <AmericanBumbleBee onNavigate={navigateTo} />
      case 'chimney-swift': return <ChimneySwift onNavigate={navigateTo} />
      case 'purple-martin': return <PurpleMartin onNavigate={navigateTo} />
      case 'red-tailed-hawk': return <RedTailedHawk onNavigate={navigateTo} />
      case 'eastern-meadowlark': return <EasternMeadowlark onNavigate={navigateTo} />
      case 'american-kestrel': return <AmericanKestrel onNavigate={navigateTo} />
      case 'brown-thrasher': return <BrownThrasher onNavigate={navigateTo} />
      case 'eastern-towhee': return <EasternTowhee onNavigate={navigateTo} />
      case 'seasonal-calendar': return <SeasonalCalendar onNavigate={navigateTo} />
      case 'species-gallery': return <SpeciesGallery onNavigate={navigateTo} />
      case 'habitat-transformation': return <HabitatTransformation onNavigate={navigateTo} />
      case 'hoa-guide': return <HOAGuide onNavigate={navigateTo} />
      case 'habitat-score':        return <HabitatScore onNavigate={navigateTo} />
      case 'spring-checklist':    return <SpringChecklist onNavigate={navigateTo} />
      case 'pesticide-guide':     return <PesticideGuide onNavigate={navigateTo} />
      case 'water-for-wildlife':  return <WaterForWildlife onNavigate={navigateTo} />
      case 'leave-the-leaves':    return <LeaveTheLeaves onNavigate={navigateTo} />
      case 'invasive-plants':    return <InvasivePlants onNavigate={navigateTo} />
      default:                    return <Home onNavigate={navigateTo} />
    }
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Nav current={page} onNavigate={navigateTo} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigateTo} />
      <FeedbackWidget page={page} />
    </I18nextProvider>
  )
}

export default App
