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
import MonarchLife from './pages/MonarchLife'
import RaiseAMonarch from './pages/RaiseAMonarch'
import CommonMilkweed from './pages/CommonMilkweed'
import SwampMilkweed from './pages/SwampMilkweed'
import SpeciesGallery from './pages/SpeciesGallery'
import BlackCappedChickadee from './pages/BlackCappedChickadee'
import Fireflies from './pages/Fireflies'
import AmericanToad from './pages/AmericanToad'
import BoxTurtles from './pages/BoxTurtles'
import LittleBrownBat from './pages/LittleBrownBat'
import GarterSnake from './pages/GarterSnake'
import AmericanKestrel from './pages/AmericanKestrel'
import EasternBluebird from './pages/EasternBluebird'
import WoodThrush from './pages/WoodThrush'
import EasternScreechOwl from './pages/EasternScreechOwl'
import CecropiaMoth from './pages/CecropiaMoth'
import LunaMoth from './pages/LunaMoth'
import PolyphemusMoth from './pages/PolyphemusMoth'
import NativeBees from './pages/NativeBees'
import GreenDarner from './pages/GreenDarner'
import TigerSwallowtail from './pages/TigerSwallowtail'
import BlackSwallowtail from './pages/BlackSwallowtail'
import Ovenbird from './pages/Ovenbird'
import ScarletTanager from './pages/ScarletTanager'
import WhipPoorWill from './pages/WhipPoorWill'
import SongSparrow from './pages/SongSparrow'
import EasternMeadowlark from './pages/EasternMeadowlark'
import NorthernCardinal from './pages/NorthernCardinal'
import IndigoBunting from './pages/IndigoBunting'
import BaltimoreOriole from './pages/BaltimoreOriole'
import HermitThrush from './pages/HermitThrush'
import RubyThroatedHummingbird from './pages/RubyThroatedHummingbird'
import DarkEyedJunco from './pages/DarkEyedJunco'
import AmericanGoldfinch from './pages/AmericanGoldfinch'
import ChimneySwift from './pages/ChimneySwift'
import PurpleMartin from './pages/PurpleMartin'
import CommonNighthawk from './pages/CommonNighthawk'
import NorthernFlicker from './pages/NorthernFlicker'
import DownyWoodpecker from './pages/DownyWoodpecker'
import YellowWarbler from './pages/YellowWarbler'
import BrownThrasher from './pages/BrownThrasher'
import GrayCatbird from './pages/GrayCatbird'
import NorthernMockingbird from './pages/NorthernMockingbird'
import CarolinaWren from './pages/CarolinaWren'
import AmericanRobin from './pages/AmericanRobin'
import EasternTowhee from './pages/EasternTowhee'
import EasternPhoebe from './pages/EasternPhoebe'
import EasternWoodPewee from './pages/EasternWoodPewee'
import YellowRumpedWarbler from './pages/YellowRumpedWarbler'
import RubyCrownedKinglet from './pages/RubyCrownedKinglet'
import BrownCreeper from './pages/BrownCreeper'
import AmericanTreeSparrow from './pages/AmericanTreeSparrow'
import CedarWaxwing from './pages/CedarWaxwing'
import MourningDove from './pages/MourningDove'
import RedTailedHawk from './pages/RedTailedHawk'
import VirginiaOpossum from './pages/VirginiaOpossum'
import WildTurkey from './pages/WildTurkey'
import EasternChipmunk from './pages/EasternChipmunk'
import GrayTreeFrogs from './pages/GrayTreeFrogs'
import SpringPeeper from './pages/SpringPeeper'
import WoodFrog from './pages/WoodFrog'
import AmericanBumbleBee from './pages/AmericanBumbleBee'
import HummingbirdClearwingMoth from './pages/HummingbirdClearwingMoth'
import GreatSpangledFritillary from './pages/GreatSpangledFritillary'
import PearlCrescent from './pages/PearlCrescent'
import GiantSwallowtail from './pages/GiantSwallowtail'
import RedAdmiral from './pages/RedAdmiral'
import PaintedLady from './pages/PaintedLady'
import MourningCloak from './pages/MourningCloak'
import Viceroy from './pages/Viceroy'
import QuestionMark from './pages/QuestionMark'
import EasternComma from './pages/EasternComma'
import BaltimoreCheckerspot from './pages/BaltimoreCheckerspot'
import CloudlessSulphur from './pages/CloudlessSulphur'
import AmericanLady from './pages/AmericanLady'
import CommonBuckeye from './pages/CommonBuckeye'
import SilveryCheckerspot from './pages/SilveryCheckerspot'
import CabbageWhite from './pages/CabbageWhite'
import WestVirginiaWhite from './pages/WestVirginiaWhite'
import SpringAzure from './pages/SpringAzure'
import CheckeredWhite from './pages/CheckeredWhite'
import OlympiaMarble from './pages/OlympiaMarble'
import OrangeSulphur from './pages/OrangeSulphur'
import CloudedSulphur from './pages/CloudedSulphur'
import WildSenna from './pages/WildSenna'
import EasternTailedBlue from './pages/EasternTailedBlue'
import GrayHairstreak from './pages/GrayHairstreak'
import SleepyOrange from './pages/SleepyOrange'
import LittleYellow from './pages/LittleYellow'
import ZebraSwallowtail from './pages/ZebraSwallowtail'
import CoralHairstreak from './pages/CoralHairstreak'
import WildBlueIndigo from './pages/WildBlueIndigo'
import MarylandSenna from './pages/MarylandSenna'
import WildIndigoDuskywing from './pages/WildIndigoDuskywing'
import FrostedElfin from './pages/FrostedElfin'
import WildLupine from './pages/WildLupine'
import KarnerBlue from './pages/KarnerBlue'
import JuvenalsDuskywing from './pages/JuvenalsDuskywing'
import BlackEyedSusan from './pages/BlackEyedSusan'
import PurpleConeflower from './pages/PurpleConeflower'
import NewEnglandAster from './pages/NewEnglandAster'
import CanadaGoldenrod from './pages/CanadaGoldenrod'
import JoePyeWeed from './pages/JoePyeWeed'
import Ironweed from './pages/Ironweed'
import WildBergamot from './pages/WildBergamot'
import VirginiaBluebell from './pages/VirginiaBluebell'
import WildColumbine from './pages/WildColumbine'
import NewJerseyTea from './pages/NewJerseyTea'
import ArrowwoodViburnum from './pages/ArrowwoodViburnum'
import Buttonbush from './pages/Buttonbush'
import WinterberryHolly from './pages/WinterberryHolly'
import PartridgePea from './pages/PartridgePea'
import GoldenAlexanders from './pages/GoldenAlexanders'
import PrairieDropseed from './pages/PrairieDropseed'
import LeonardsSkipper from './pages/LeonardsSkipper'
import CobwebSkipper from './pages/CobwebSkipper'
import LittleBluestem from './pages/LittleBluestem'
import SpicebushSwallowtail from './pages/SpicebushSwallowtail'
import WhiteOak from './pages/WhiteOak'
import BlackCherry from './pages/BlackCherry'
import Serviceberry from './pages/Serviceberry'
import Pawpaw from './pages/Pawpaw'
import Spicebush from './pages/Spicebush'
import Elderberry from './pages/Elderberry'
import VirginiaCreeper from './pages/VirginiaCreeper'
import ButterflyWeed from './pages/ButterflyWeed'
import KarnerBlue2 from './pages/KarnerBlue'
import FrostedElfin2 from './pages/FrostedElfin'
import WildLupine2 from './pages/WildLupine'
import WildIndigoDuskywing2 from './pages/WildIndigoDuskywing'
import MarylandSenna2 from './pages/MarylandSenna'
import CoralHairstreak2 from './pages/CoralHairstreak'
import ZebraSwallowtail2 from './pages/ZebraSwallowtail'
import LittleYellow2 from './pages/LittleYellow'
import SleepyOrange2 from './pages/SleepyOrange'
import GrayHairstreak2 from './pages/GrayHairstreak'
import EasternTailedBlue2 from './pages/EasternTailedBlue'

import { ALL_PAGE_SLUGS, type PageSlug } from './config/sitePages'

export type Page = PageSlug

function App() {
  const [page, setPage] = useState<Page>('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function navigateTo(newPage: Page) {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function renderPage() {
    switch (page) {
      case 'home':                 return <Home onNavigate={navigateTo} />
      case 'why-monarchs':         return <WhyMonarchs onNavigate={navigateTo} />
      case 'plant-milkweed':       return <PlantMilkweed onNavigate={navigateTo} />
      case 'the-migration':        return <TheMigration onNavigate={navigateTo} />
      case 'take-action':          return <TakeAction onNavigate={navigateTo} />
      case 'choose-a-plant':       return <ChooseAPlant onNavigate={navigateTo} />
      case 'monarch-life':         return <MonarchLife onNavigate={navigateTo} />
      case 'raise-a-monarch':      return <RaiseAMonarch onNavigate={navigateTo} />
      case 'common-milkweed':      return <CommonMilkweed onNavigate={navigateTo} />
      case 'swamp-milkweed':       return <SwampMilkweed onNavigate={navigateTo} />
      case 'species-gallery':      return <SpeciesGallery onNavigate={navigateTo} />
      case 'black-capped-chickadee': return <BlackCappedChickadee onNavigate={navigateTo} />
      case 'fireflies':            return <Fireflies onNavigate={navigateTo} />
      case 'toad':                 return <AmericanToad onNavigate={navigateTo} />
      case 'box-turtles':          return <BoxTurtles onNavigate={navigateTo} />
      case 'little-brown-bat':     return <LittleBrownBat onNavigate={navigateTo} />
      case 'garter-snake':         return <GarterSnake onNavigate={navigateTo} />
      case 'american-kestrel':     return <AmericanKestrel onNavigate={navigateTo} />
      case 'eastern-bluebird':     return <EasternBluebird onNavigate={navigateTo} />
      case 'wood-thrush':          return <WoodThrush onNavigate={navigateTo} />
      case 'eastern-screech-owl':  return <EasternScreechOwl onNavigate={navigateTo} />
      case 'cecropia-moth':        return <CecropiaMoth onNavigate={navigateTo} />
      case 'luna-moth':            return <LunaMoth onNavigate={navigateTo} />
      case 'polyphemus-moth':      return <PolyphemusMoth onNavigate={navigateTo} />
      case 'native-bees':          return <NativeBees onNavigate={navigateTo} />
      case 'green-darner':         return <GreenDarner onNavigate={navigateTo} />
      case 'tiger-swallowtail':    return <TigerSwallowtail onNavigate={navigateTo} />
      case 'black-swallowtail':    return <BlackSwallowtail onNavigate={navigateTo} />
      case 'ovenbird':             return <Ovenbird onNavigate={navigateTo} />
      case 'scarlet-tanager':      return <ScarletTanager onNavigate={navigateTo} />
      case 'whip-poor-will':       return <WhipPoorWill onNavigate={navigateTo} />
      case 'song-sparrow':         return <SongSparrow onNavigate={navigateTo} />
      case 'eastern-meadowlark':   return <EasternMeadowlark onNavigate={navigateTo} />
      case 'northern-cardinal':    return <NorthernCardinal onNavigate={navigateTo} />
      case 'indigo-bunting':       return <IndigoBunting onNavigate={navigateTo} />
      case 'baltimore-oriole':     return <BaltimoreOriole onNavigate={navigateTo} />
      case 'hermit-thrush':        return <HermitThrush onNavigate={navigateTo} />
      case 'ruby-throated-hummingbird': return <RubyThroatedHummingbird onNavigate={navigateTo} />
      case 'dark-eyed-junco':      return <DarkEyedJunco onNavigate={navigateTo} />
      case 'american-goldfinch':   return <AmericanGoldfinch onNavigate={navigateTo} />
      case 'chimney-swift':        return <ChimneySwift onNavigate={navigateTo} />
      case 'purple-martin':        return <PurpleMartin onNavigate={navigateTo} />
      case 'common-nighthawk':     return <CommonNighthawk onNavigate={navigateTo} />
      case 'northern-flicker':     return <NorthernFlicker onNavigate={navigateTo} />
      case 'downy-woodpecker':     return <DownyWoodpecker onNavigate={navigateTo} />
      case 'yellow-warbler':       return <YellowWarbler onNavigate={navigateTo} />
      case 'brown-thrasher':       return <BrownThrasher onNavigate={navigateTo} />
      case 'gray-catbird':         return <GrayCatbird onNavigate={navigateTo} />
      case 'northern-mockingbird': return <NorthernMockingbird onNavigate={navigateTo} />
      case 'carolina-wren':        return <CarolinaWren onNavigate={navigateTo} />
      case 'american-robin':       return <AmericanRobin onNavigate={navigateTo} />
      case 'eastern-towhee':       return <EasternTowhee onNavigate={navigateTo} />
      case 'eastern-phoebe':       return <EasternPhoebe onNavigate={navigateTo} />
      case 'eastern-wood-pewee':   return <EasternWoodPewee onNavigate={navigateTo} />
      case 'yellow-rumped-warbler': return <YellowRumpedWarbler onNavigate={navigateTo} />
      case 'ruby-crowned-kinglet': return <RubyCrownedKinglet onNavigate={navigateTo} />
      case 'brown-creeper':        return <BrownCreeper onNavigate={navigateTo} />
      case 'american-tree-sparrow': return <AmericanTreeSparrow onNavigate={navigateTo} />
      case 'cedar-waxwing':        return <CedarWaxwing onNavigate={navigateTo} />
      case 'mourning-dove':        return <MourningDove onNavigate={navigateTo} />
      case 'red-tailed-hawk':      return <RedTailedHawk onNavigate={navigateTo} />
      case 'virginia-opossum':     return <VirginiaOpossum onNavigate={navigateTo} />
      case 'wild-turkey':          return <WildTurkey onNavigate={navigateTo} />
      case 'eastern-chipmunk':     return <EasternChipmunk onNavigate={navigateTo} />
      case 'gray-tree-frogs':      return <GrayTreeFrogs onNavigate={navigateTo} />
      case 'spring-peeper':        return <SpringPeeper onNavigate={navigateTo} />
      case 'wood-frog':            return <WoodFrog onNavigate={navigateTo} />
      case 'american-bumble-bee':  return <AmericanBumbleBee onNavigate={navigateTo} />
      case 'hummingbird-clearwing-moth': return <HummingbirdClearwingMoth onNavigate={navigateTo} />
      case 'great-spangled-fritillary': return <GreatSpangledFritillary onNavigate={navigateTo} />
      case 'pearl-crescent':       return <PearlCrescent onNavigate={navigateTo} />
      case 'giant-swallowtail':    return <GiantSwallowtail onNavigate={navigateTo} />
      case 'red-admiral':          return <RedAdmiral onNavigate={navigateTo} />
      case 'painted-lady':         return <PaintedLady onNavigate={navigateTo} />
      case 'mourning-cloak':       return <MourningCloak onNavigate={navigateTo} />
      case 'viceroy':              return <Viceroy onNavigate={navigateTo} />
      case 'question-mark':        return <QuestionMark onNavigate={navigateTo} />
      case 'eastern-comma':        return <EasternComma onNavigate={navigateTo} />
      case 'baltimore-checkerspot': return <BaltimoreCheckerspot onNavigate={navigateTo} />
      case 'clouded-sulphur':      return <CloudedSulphur onNavigate={navigateTo} />
      case 'clouded-sulphur':      return <CloudedSulphur onNavigate={navigateTo} />
      case 'american-lady':        return <AmericanLady onNavigate={navigateTo} />
      case 'common-buckeye':       return <CommonBuckeye onNavigate={navigateTo} />
      case 'silvery-checkerspot':  return <SilveryCheckerspot onNavigate={navigateTo} />
      case 'cabbage-white':        return <CabbageWhite onNavigate={navigateTo} />
      case 'west-virginia-white':  return <WestVirginiaWhite onNavigate={navigateTo} />
      case 'spring-azure':         return <SpringAzure onNavigate={navigateTo} />
      case 'checkered-white':      return <CheckeredWhite onNavigate={navigateTo} />
      case 'olympia-marble':       return <OlympiaMarble onNavigate={navigateTo} />
      case 'orange-sulphur':       return <OrangeSulphur onNavigate={navigateTo} />
      case 'clouded-sulphur':      return <CloudedSulphur onNavigate={navigateTo} />
      case 'wild-senna':           return <WildSenna onNavigate={navigateTo} />
      case 'eastern-tailed-blue':  return <EasternTailedBlue onNavigate={navigateTo} />
      case 'gray-hairstreak':      return <GrayHairstreak onNavigate={navigateTo} />
      case 'sleepy-orange':        return <SleepyOrange onNavigate={navigateTo} />
      case 'little-yellow':        return <LittleYellow onNavigate={navigateTo} />
      case 'zebra-swallowtail':    return <ZebraSwallowtail onNavigate={navigateTo} />
      case 'coral-hairstreak':     return <CoralHairstreak onNavigate={navigateTo} />
      case 'wild-blue-indigo':     return <WildBlueIndigo onNavigate={navigateTo} />
      case 'maryland-senna':       return <MarylandSenna onNavigate={navigateTo} />
      case 'wild-indigo-duskywing': return <WildIndigoDuskywing onNavigate={navigateTo} />
      case 'frosted-elfin':        return <FrostedElfin onNavigate={navigateTo} />
      case 'wild-lupine':           return <WildLupine onNavigate={navigateTo} />
      case 'karner-blue':           return <KarnerBlue onNavigate={navigateTo} />
      case 'juvenals-duskywing':    return <JuvenalsDuskywing onNavigate={navigateTo} />
      case 'black-eyed-susan':     return <BlackEyedSusan onNavigate={navigateTo} />
      case 'purple-coneflower':    return <PurpleConeflower onNavigate={navigateTo} />
      case 'new-england-aster':    return <NewEnglandAster onNavigate={navigateTo} />
      case 'canada-goldenrod':     return <CanadaGoldenrod onNavigate={navigateTo} />
      case 'joe-pye-weed':         return <JoePyeWeed onNavigate={navigateTo} />
      case 'ironweed':             return <Ironweed onNavigate={navigateTo} />
      case 'wild-bergamot':        return <WildBergamot onNavigate={navigateTo} />
      case 'virginia-bluebell':    return <VirginiaBluebell onNavigate={navigateTo} />
      case 'wild-columbine':       return <WildColumbine onNavigate={navigateTo} />
      case 'new-jersey-tea':       return <NewJerseyTea onNavigate={navigateTo} />
      case 'arrowwood-viburnum':   return <ArrowwoodViburnum onNavigate={navigateTo} />
      case 'buttonbush':           return <Buttonbush onNavigate={navigateTo} />
      case 'winterberry-holly':    return <WinterberryHolly onNavigate={navigateTo} />
      case 'partridge-pea':        return <PartridgePea onNavigate={navigateTo} />
      case 'golden-alexanders':    return <GoldenAlexanders onNavigate={navigateTo} />
      case 'prairie-dropseed':     return <PrairieDropseed onNavigate={navigateTo} />
      case 'leonards-skipper':     return <LeonardsSkipper onNavigate={navigateTo} />
      case 'cobweb-skipper':       return <CobwebSkipper onNavigate={navigateTo} />
      case 'little-bluestem':      return <LittleBluestem onNavigate={navigateTo} />
      case 'spicebush-swallowtail': return <SpicebushSwallowtail onNavigate={navigateTo} />
      case 'white-oak':            return <WhiteOak onNavigate={navigateTo} />
      case 'black-cherry':         return <BlackCherry onNavigate={navigateTo} />
      case 'serviceberry':         return <Serviceberry onNavigate={navigateTo} />
      case 'pawpaw':               return <Pawpaw onNavigate={navigateTo} />
      case 'spicebush':            return <Spicebush onNavigate={navigateTo} />
      case 'elderberry':           return <Elderberry onNavigate={navigateTo} />
      case 'virginia-creeper':     return <VirginiaCreeper onNavigate={navigateTo} />
      case 'butterfly-weed':       return <ButterflyWeed onNavigate={navigateTo} />
      case 'habitat-hero':         return <HabitatHero onNavigate={navigateTo} />
      case 'habitat-transformation': return <HabitatTransformation onNavigate={navigateTo} />
      case 'habitat-layers':       return <HabitatLayers onNavigate={navigateTo} />
      case 'habitat-score':        return <HabitatScore onNavigate={navigateTo} />
      case 'log-a-sighting':       return <LogASighting onNavigate={navigateTo} />
      case 'leave-the-leaves':     return <LeaveTheLeaves onNavigate={navigateTo} />
      case 'pesticide-guide':      return <PesticideGuide onNavigate={navigateTo} />
      case 'water-for-wildlife':   return <WaterForWildlife onNavigate={navigateTo} />
      case 'hoa-guide':            return <HOAGuide onNavigate={navigateTo} />
      case 'waystation-guide':     return <WaystationGuide onNavigate={navigateTo} />
      case 'invasive-plants':      return <InvasivePlants onNavigate={navigateTo} />
      case 'talking-points':       return <TalkingPoints onNavigate={navigateTo} />
      case 'take-action':          return <TakeAction onNavigate={navigateTo} />
      case 'faq':                  return <FAQ onNavigate={navigateTo} />
      case 'native-plant-near-me': return <NativePlantNearMe onNavigate={navigateTo} />
      case 'seasonal-calendar':    return <SeasonalCalendar onNavigate={navigateTo} />
      case 'spring-checklist':     return <SpringChecklist onNavigate={navigateTo} />
      case 'plants':               return <Plants onNavigate={navigateTo} />
      case 'plants-library':       return <PlantsLibrary onNavigate={navigateTo} />
      case 'plants-getting-started': return <PlantsGettingStarted onNavigate={navigateTo} />
      case 'plants-milkweeds':     return <PlantsMilkweeds onNavigate={navigateTo} />
      case 'plants-host-plants':   return <PlantsHostPlants onNavigate={navigateTo} />
      case 'plants-starter-plants': return <PlantsStarterPlants onNavigate={navigateTo} />
      case 'plants-species-index': return <PlantsSpeciesIndex onNavigate={navigateTo} />
      case 'plants-finder':        return <PlantsFinder onNavigate={navigateTo} />
      case 'plants-by-conditions': return <PlantsByConditions onNavigate={navigateTo} />
      case 'plants-by-purpose':    return <PlantsByPurpose onNavigate={navigateTo} />
      case 'plants-by-family':     return <PlantsByFamily onNavigate={navigateTo} />
      case 'plants-bloom-calendar': return <PlantsBloomCalendar onNavigate={navigateTo} />
      case 'plants-common-mistakes': return <PlantCommonMistakes onNavigate={navigateTo} />
      case 'plants-communities':   return <PlantCommunities onNavigate={navigateTo} />
      case 'the-first-year':       return <TheFirstYear onNavigate={navigateTo} />
      case 'plant-common-mistakes': return <PlantCommonMistakes onNavigate={navigateTo} />
      case 'plant-communities':    return <PlantCommunities onNavigate={navigateTo} />
      default: return <Home onNavigate={navigateTo} />
    }
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Nav current={page} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <FeedbackWidget currentPage={page} />
      <Footer onNavigate={navigateTo} />
    </I18nextProvider>
  )
}

export default App
