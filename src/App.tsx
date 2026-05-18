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
import NorthernFlicker from './pages/NorthernFlicker'
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
import GreatSpangledFritillary from './pages/GreatSpangledFritillary'
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
import CarolinaWren from './pages/CarolinaWren'
import GrayCatbird from './pages/GrayCatbird'
import MourningDove from './pages/MourningDove'
import SongSparrow from './pages/SongSparrow'
import YellowRumpedWarbler from './pages/YellowRumpedWarbler'
import WildTurkey from './pages/WildTurkey'
import EasternPhoebe from './pages/EasternPhoebe'
import YellowWarbler from './pages/YellowWarbler'
import RubyCrownedKinglet from './pages/RubyCrownedKinglet'
import ScarletTanager from './pages/ScarletTanager'
import WhipPoorWill from './pages/WhipPoorWill'
import Ovenbird from './pages/Ovenbird'
import CanadaGoldenrod from './pages/CanadaGoldenrod'
import PurpleConeflower from './pages/PurpleConeflower'
import JoePyeWeed from './pages/JoePyeWeed'
import CommonMilkweed from './pages/CommonMilkweed'
import NewEnglandAster from './pages/NewEnglandAster'
import SwampMilkweed from './pages/SwampMilkweed'
import WildBergamot from './pages/WildBergamot'
import NewJerseyTea from './pages/NewJerseyTea'
import WildColumbine from './pages/WildColumbine'
import BlackEyedSusan from './pages/BlackEyedSusan'
import SeasonalCalendar from './pages/SeasonalCalendar'
import SpeciesGallery from './pages/SpeciesGallery'
import HabitatTransformation from './pages/HabitatTransformation'
import HOAGuide from './pages/HOAGuide'
import HabitatHero from './pages/HabitatHero'
import HabitatScore from './pages/HabitatScore'
import SpringChecklist from './pages/SpringChecklist'
import PesticideGuide from './pages/PesticideGuide'
import WaterForWildlife from './pages/WaterForWildlife'
import LeaveTheLeaves from './pages/LeaveTheLeaves'
import HabitatLayers from './pages/HabitatLayers'
import InvasivePlants from './pages/InvasivePlants'
import BrownCreeper from './pages/BrownCreeper'
import HermitThrush from './pages/HermitThrush'
import EasternWoodPewee from './pages/EasternWoodPewee'

import { ALL_PAGE_SLUGS, type PageSlug } from './config/sitePages'
export type Page = PageSlug

export default function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    const slug = window.location.pathname.replace(/^\//, '') || 'home'
    if ((ALL_PAGE_SLUGS as readonly string[]).includes(slug)) {
      setPage(slug as Page)
    }
  }, [])

  function navigateTo(newPage: Page) {
    setPage(newPage)
    window.history.pushState({}, '', `/${newPage === 'home' ? '' : newPage}`)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    function onPop() {
      const slug = window.location.pathname.replace(/^\//, '') || 'home'
      if ((ALL_PAGE_SLUGS as readonly string[]).includes(slug)) {
        setPage(slug as Page)
      }
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function renderPage() {
    switch (page) {
      case 'home':            return <Home onNavigate={navigateTo} />
      case 'why-monarchs':   return <WhyMonarchs onNavigate={navigateTo} />
      case 'plant-milkweed': return <PlantMilkweed onNavigate={navigateTo} />
      case 'the-migration':  return <TheMigration onNavigate={navigateTo} />
      case 'take-action':    return <TakeAction onNavigate={navigateTo} />
      case 'choose-a-plant': return <ChooseAPlant onNavigate={navigateTo} />
      case 'native-plant-near-me': return <NativePlantNearMe onNavigate={navigateTo} />
      case 'monarch-life':   return <MonarchLife onNavigate={navigateTo} />
      case 'raise-a-monarch': return <RaiseAMonarch onNavigate={navigateTo} />
      case 'the-first-year': return <TheFirstYear onNavigate={navigateTo} />
      case 'faq':            return <FAQ onNavigate={navigateTo} />
      case 'log-a-sighting': return <LogASighting onNavigate={navigateTo} />
      case 'waystation-guide': return <WaystationGuide onNavigate={navigateTo} />
      case 'fireflies':      return <Fireflies onNavigate={navigateTo} />
      case 'box-turtles':    return <BoxTurtles onNavigate={navigateTo} />
      case 'native-bees':    return <NativeBees onNavigate={navigateTo} />
      case 'talking-points': return <TalkingPoints onNavigate={navigateTo} />
      case 'gray-tree-frogs': return <GrayTreeFrogs onNavigate={navigateTo} />
      case 'downy-woodpecker': return <DownyWoodpecker onNavigate={navigateTo} />
      case 'northern-flicker': return <NorthernFlicker onNavigate={navigateTo} />
      case 'baltimore-oriole': return <BaltimoreOriole onNavigate={navigateTo} />
      case 'northern-cardinal': return <NorthernCardinal onNavigate={navigateTo} />
      case 'eastern-bluebird': return <EasternBluebird onNavigate={navigateTo} />
      case 'plants':          return <Plants onNavigate={navigateTo} />
      case 'plants-finder':   return <PlantsFinder onNavigate={navigateTo} />
      case 'plants-by-family':    return <PlantsByFamily onNavigate={navigateTo} />
      case 'plants-by-purpose':   return <PlantsByPurpose onNavigate={navigateTo} />
      case 'plants-by-conditions': return <PlantsByConditions onNavigate={navigateTo} />
      case 'plants-milkweeds':   return <PlantsMilkweeds onNavigate={navigateTo} />
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
      case 'great-spangled-fritillary': return <GreatSpangledFritillary onNavigate={navigateTo} />
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
      case 'carolina-wren':  return <CarolinaWren onNavigate={navigateTo} />
      case 'gray-catbird':   return <GrayCatbird onNavigate={navigateTo} />
      case 'mourning-dove':  return <MourningDove onNavigate={navigateTo} />
      case 'song-sparrow':   return <SongSparrow onNavigate={navigateTo} />
      case 'wild-turkey':    return <WildTurkey onNavigate={navigateTo} />
      case 'eastern-phoebe': return <EasternPhoebe onNavigate={navigateTo} />
      case 'yellow-warbler': return <YellowWarbler onNavigate={navigateTo} />
      case 'ruby-crowned-kinglet': return <RubyCrownedKinglet onNavigate={navigateTo} />
      case 'yellow-rumped-warbler': return <YellowRumpedWarbler onNavigate={navigateTo} />
      case 'scarlet-tanager': return <ScarletTanager onNavigate={navigateTo} />
      case 'whip-poor-will': return <WhipPoorWill onNavigate={navigateTo} />
      case 'ovenbird':       return <Ovenbird onNavigate={navigateTo} />
      case 'canada-goldenrod': return <CanadaGoldenrod onNavigate={navigateTo} />
      case 'purple-coneflower': return <PurpleConeflower onNavigate={navigateTo} />
      case 'joe-pye-weed':    return <JoePyeWeed onNavigate={navigateTo} />
      case 'common-milkweed': return <CommonMilkweed onNavigate={navigateTo} />
      case 'new-england-aster': return <NewEnglandAster onNavigate={navigateTo} />
      case 'swamp-milkweed':  return <SwampMilkweed onNavigate={navigateTo} />
      case 'wild-bergamot':    return <WildBergamot onNavigate={navigateTo} />
      case 'new-jersey-tea':   return <NewJerseyTea onNavigate={navigateTo} />
      case 'wild-columbine':   return <WildColumbine onNavigate={navigateTo} />
      case 'black-eyed-susan': return <BlackEyedSusan onNavigate={navigateTo} />
      case 'seasonal-calendar': return <SeasonalCalendar onNavigate={navigateTo} />
      case 'species-gallery': return <SpeciesGallery onNavigate={navigateTo} />
      case 'habitat-transformation': return <HabitatTransformation onNavigate={navigateTo} />
      case 'hoa-guide': return <HOAGuide onNavigate={navigateTo} />
      case 'habitat-hero':         return <HabitatHero onNavigate={navigateTo} />
      case 'habitat-score':        return <HabitatScore onNavigate={navigateTo} />
      case 'spring-checklist':    return <SpringChecklist onNavigate={navigateTo} />
      case 'pesticide-guide':     return <PesticideGuide onNavigate={navigateTo} />
      case 'water-for-wildlife':  return <WaterForWildlife onNavigate={navigateTo} />
      case 'leave-the-leaves':    return <LeaveTheLeaves onNavigate={navigateTo} />
      case 'habitat-layers':      return <HabitatLayers onNavigate={navigateTo} />
      case 'invasive-plants':    return <InvasivePlants onNavigate={navigateTo} />
      case 'brown-creeper':      return <BrownCreeper onNavigate={navigateTo} />
      case 'hermit-thrush':      return <HermitThrush onNavigate={navigateTo} />
      case 'eastern-wood-pewee': return <EasternWoodPewee onNavigate={navigateTo} />
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
