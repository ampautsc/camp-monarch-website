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
import Fireflies from './pages/Fireflies'
import BoxTurtle from './pages/BoxTurtle'
import Monarch from './pages/Monarch'
import Pesticides from './pages/Pesticides'
import WaterSources from './pages/WaterSources'
import LeaveTheLeaves from './pages/LeaveTheLeaves'
import BumbleBee from './pages/BumbleBee'
import Privacy from './pages/Privacy'
import LightPollution from './pages/LightPollution'
import NativePlants from './pages/NativePlants'
import AmericanLadyButterfly from './pages/AmericanLadyButterfly'
import EasternBoxElder from './pages/EasternBoxElder'
import MourningCloak from './pages/MourningCloak'
import RedAdmiral from './pages/RedAdmiral'
import OrangeSulphur from './pages/OrangeSulphur'
import CloudedSulphur from './pages/CloudedSulphur'
import CabbageWhite from './pages/CabbageWhite'
import EasternTigerSwallowtail from './pages/EasternTigerSwallowtail'
import SpicebushSwallowtail from './pages/SpicebushSwallowtail'
import BlackSwallowtail from './pages/BlackSwallowtail'
import PearlCrescent from './pages/PearlCrescent'
import GreatSpangledFritillary from './pages/GreatSpangledFritillary'
import ViceroyButterfly from './pages/ViceroyButterfly'
import QuestionMark from './pages/QuestionMark'
import EasternComma from './pages/EasternComma'
import HackberryEmperor from './pages/HackberryEmperor'
import PaintedLady from './pages/PaintedLady'
import RedSpottedPurple from './pages/RedSpottedPurple'
import CommonWoodNymph from './pages/CommonWoodNymph'
import LittleWood from './pages/LittleWood'
import CommonBuckeye from './pages/CommonBuckeye'
import SilverSpottedSkipper from './pages/SilverSpottedSkipper'
import SachemSkipper from './pages/SachemSkipper'
import ZabulonSkipper from './pages/ZabulonSkipper'
import PeckSkipper from './pages/PeckSkipper'
import CommonCheckeredSkipper from './pages/CommonCheckeredSkipper'
import TawnyEdgedSkipper from './pages/TawnyEdgedSkipper'
import EuropeanSkipper from './pages/EuropeanSkipper'
import DunSkipper from './pages/DunSkipper'
import DionSkipper from './pages/DionSkipper'
import DelawareSkipper from './pages/DelawareSkipper'
import BroadWingedSkipper from './pages/BroadWingedSkipper'
import LittleGlassywing from './pages/LittleGlassywing'
import NorthernBrokenDash from './pages/NorthernBrokenDash'
import HobomokSkipper from './pages/HobomokSkipper'
import PersiusDuskywing from './pages/PersiusDuskywing'
import JuvenasDuskywing from './pages/JuvenasDuskywing'
import WildIndigo from './pages/WildIndigo'
import HoracesDuskywing from './pages/HoracesDuskywing'
import ZarudosDuskywing from './pages/ZarudosDuskywing'
import FrostedElfin from './pages/FrostedElfin'
import HenryElfin from './pages/HenryElfin'
import BrownElfin from './pages/BrownElfin'
import EasternPineElfin from './pages/EasternPineElfin'
import AbiotiqueElfin from './pages/AbiotiqueElfin'
import JuniperHairstreak from './pages/JuniperHairstreak'
import OakHairstreak from './pages/OakHairstreak'
import BlindingHairstreak from './pages/BlindingHairstreak'
import StriatedHairstreak from './pages/StriatedHairstreak'
import AcadianHairstreak from './pages/AcadianHairstreak'
import EdwardsHairstreak from './pages/EdwardsHairstreak'
import BandedHairstreak from './pages/BandedHairstreak'
import HickoryHairstreak from './pages/HickoryHairstreak'
import CoralHairstreak from './pages/CoralHairstreak'
import OliveHairstreak from './pages/OliveHairstreak'
import RedBandedHairstreak from './pages/RedBandedHairstreak'
import WesternPineElfin from './pages/WesternPineElfin'
import CerauniusHairstreak from './pages/CerauniusHairstreak'
import SatyrComma from './pages/SatyrComma'
import GiantSwallowtail from './pages/GiantSwallowtail'
import PipevineSwallotail from './pages/PipevineSwallotail'
import ZebraSwallotail from './pages/ZebraSwallotail'
import SunshineSulphur from './pages/SunshineSulphur'
import LittleYellow from './pages/LittleYellow'
import MexicanYellow from './pages/MexicanYellow'
import SlateySkyblue from './pages/SlateySkyblue'
import EasternTailedBlue from './pages/EasternTailedBlue'
import GrayHairstreak from './pages/GrayHairstreak'
import SummerAzure from './pages/SummerAzure'
import SpringAzure from './pages/SpringAzure'
import CherryGallAzure from './pages/CherryGallAzure'
import AppalachianAzure from './pages/AppalachianAzure'
import SilveryBlue from './pages/SilveryBlue'
import DottyMaria from './pages/DottyMaria'
import AtlasBlue from './pages/AtlasBlue'
import MelissaBlue from './pages/MelissaBlue'
import MarinBlue from './pages/MarinBlue'
import PygmyBlue from './pages/PygmyBlue'
import SquareSpotsBlue from './pages/SquareSpotsBlue'
import OpalBlue from './pages/OpalBlue'
import CerauniusBlue from './pages/CerauniusBlue'
import EasternPigmyBlue from './pages/EasternPigmyBlue'
import GreatBlueHeron from './pages/GreatBlueHeron'
import BaltimoreOriole from './pages/BaltimoreOriole'
import RubyThroatedHummingbird from './pages/RubyThroatedHummingbird'
import AmericanGoldfinch from './pages/AmericanGoldfinch'
import EasternBluebird from './pages/EasternBluebird'
import BarnSwallow from './pages/BarnSwallow'
import ChimneySWift from './pages/ChimneySWift'
import PurpleMartin from './pages/PurpleMartin'
import WillowFlycatcher from './pages/WillowFlycatcher'
import GrayFlycatcher from './pages/GrayFlycatcher'
import HammondFlycatcher from './pages/HammondFlycatcher'
import YellowBilledCuckoo from './pages/YellowBilledCuckoo'
import BlackBilledCuckoo from './pages/BlackBilledCuckoo'
import WoodThrush from './pages/WoodThrush'
import IndianaBat from './pages/IndianaBat'
import TricoloredBat from './pages/TricoloredBat'
import NorthernLongEaredBat from './pages/NorthernLongEaredBat'
import LittleBrownBat from './pages/LittleBrownBat'
import EasternSmallFootedBat from './pages/EasternSmallFootedBat'
import BigBrownBat from './pages/BigBrownBat'
import EasternRedBat from './pages/EasternRedBat'
import HoaryBat from './pages/HoaryBat'
import SilverHairedBat from './pages/SilverHairedBat'
import TriColoredBatII from './pages/TriColoredBatII'
import EveningStar from './pages/EveningStar'
import SemipalmatedSandpiper from './pages/SemipalmatedSandpiper'
import CommonNighthawk from './pages/CommonNighthawk'
import Bobolink from './pages/Bobolink'
import GoldenWingedWarbler from './pages/GoldenWingedWarbler'
import CeruleanWarbler from './pages/CeruleanWarbler'
import PrairieWarbler from './pages/PrairieWarbler'
import BluegrassWarbler from './pages/BluegrassWarbler'
import KentuckyWarbler from './pages/KentuckyWarbler'
import WormEatingWarbler from './pages/WormEatingWarbler'
import LouisianaThrush from './pages/LouisianaThrush'
import NorthernBobwhite from './pages/NorthernBobwhite'
import FieldSparrow from './pages/FieldSparrow'
import DickcisselBird from './pages/DickcisselBird'
import EasternMeadowlark from './pages/EasternMeadowlark'
import GrasslandSparrow from './pages/GrasslandSparrow'
import HensloSparrow from './pages/HensloSparrow'
import AmericanKestrel from './pages/AmericanKestrel'
import LoggerheadShrike from './pages/LoggerheadShrike'
import EasternKingbird from './pages/EasternKingbird'
import WillowFlyAndAlder from './pages/WillowFlyAndAlder'
import AmericanWoodcock from './pages/AmericanWoodcock'
import ShortearedOwl from './pages/ShortearedOwl'
import WoodlandJumper from './pages/WoodlandJumper'

type Page =
  | 'home'
  | 'why-monarchs'
  | 'plant-milkweed'
  | 'the-migration'
  | 'fireflies'
  | 'box-turtle'
  | 'monarch'
  | 'pesticides'
  | 'water-sources'
  | 'leave-the-leaves'
  | 'bumble-bee'
  | 'privacy'
  | 'light-pollution'
  | 'native-plants'
  | 'american-lady-butterfly'
  | 'eastern-box-elder'
  | 'mourning-cloak'
  | 'red-admiral'
  | 'orange-sulphur'
  | 'clouded-sulphur'
  | 'cabbage-white'
  | 'eastern-tiger-swallowtail'
  | 'spicebush-swallowtail'
  | 'black-swallowtail'
  | 'pearl-crescent'
  | 'great-spangled-fritillary'
  | 'viceroy-butterfly'
  | 'question-mark'
  | 'eastern-comma'
  | 'hackberry-emperor'
  | 'painted-lady'
  | 'red-spotted-purple'
  | 'common-wood-nymph'
  | 'little-wood'
  | 'common-buckeye'
  | 'silver-spotted-skipper'
  | 'sachem-skipper'
  | 'zabulon-skipper'
  | 'peck-skipper'
  | 'common-checkered-skipper'
  | 'tawny-edged-skipper'
  | 'european-skipper'
  | 'dun-skipper'
  | 'dion-skipper'
  | 'delaware-skipper'
  | 'broad-winged-skipper'
  | 'little-glassywing'
  | 'northern-broken-dash'
  | 'hobomok-skipper'
  | 'persius-duskywing'
  | 'juvenas-duskywing'
  | 'wild-indigo'
  | 'horaces-duskywing'
  | 'zarudos-duskywing'
  | 'frosted-elfin'
  | 'henry-elfin'
  | 'brown-elfin'
  | 'eastern-pine-elfin'
  | 'abiotique-elfin'
  | 'juniper-hairstreak'
  | 'oak-hairstreak'
  | 'blinding-hairstreak'
  | 'striated-hairstreak'
  | 'acadian-hairstreak'
  | 'edwards-hairstreak'
  | 'banded-hairstreak'
  | 'hickory-hairstreak'
  | 'coral-hairstreak'
  | 'olive-hairstreak'
  | 'red-banded-hairstreak'
  | 'western-pine-elfin'
  | 'ceraunius-hairstreak'
  | 'satyr-comma'
  | 'giant-swallowtail'
  | 'pipevine-swallotail'
  | 'zebra-swallotail'
  | 'sunshine-sulphur'
  | 'little-yellow'
  | 'mexican-yellow'
  | 'slatey-skyblue'
  | 'eastern-tailed-blue'
  | 'gray-hairstreak'
  | 'summer-azure'
  | 'spring-azure'
  | 'cherry-gall-azure'
  | 'appalachian-azure'
  | 'silvery-blue'
  | 'dotty-maria'
  | 'atlas-blue'
  | 'melissa-blue'
  | 'marin-blue'
  | 'pygmy-blue'
  | 'square-spots-blue'
  | 'opal-blue'
  | 'ceraunius-blue'
  | 'eastern-pigmy-blue'
  | 'great-blue-heron'
  | 'baltimore-oriole'
  | 'ruby-throated-hummingbird'
  | 'american-goldfinch'
  | 'eastern-bluebird'
  | 'barn-swallow'
  | 'chimney-swift'
  | 'purple-martin'
  | 'willow-flycatcher'
  | 'gray-flycatcher'
  | 'hammond-flycatcher'
  | 'yellow-billed-cuckoo'
  | 'black-billed-cuckoo'
  | 'wood-thrush'
  | 'indiana-bat'
  | 'tricolored-bat'
  | 'northern-long-eared-bat'
  | 'little-brown-bat'
  | 'eastern-small-footed-bat'
  | 'big-brown-bat'
  | 'eastern-red-bat'
  | 'hoary-bat'
  | 'silver-haired-bat'
  | 'tri-colored-bat-ii'
  | 'evening-star'
  | 'semipalmated-sandpiper'
  | 'common-nighthawk'
  | 'bobolink'
  | 'golden-winged-warbler'
  | 'cerulean-warbler'
  | 'prairie-warbler'
  | 'bluegrass-warbler'
  | 'kentucky-warbler'
  | 'worm-eating-warbler'
  | 'louisiana-thrush'
  | 'northern-bobwhite'
  | 'field-sparrow'
  | 'dickcissel-bird'
  | 'eastern-meadowlark'
  | 'grassland-sparrow'
  | 'henslo-sparrow'
  | 'american-kestrel'
  | 'loggerhead-shrike'
  | 'eastern-kingbird'
  | 'willow-fly-and-alder'
  | 'american-woodcock'
  | 'short-eared-owl'
  | 'woodland-jumper'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigateTo = (page: string) => {
    setCurrentPage(page as Page)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '') || 'home'
      setCurrentPage(path as Page)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />
      case 'why-monarchs': return <WhyMonarchs onNavigate={navigateTo} />
      case 'plant-milkweed': return <PlantMilkweed onNavigate={navigateTo} />
      case 'the-migration': return <TheMigration onNavigate={navigateTo} />
      case 'fireflies': return <Fireflies onNavigate={navigateTo} />
      case 'box-turtle': return <BoxTurtle onNavigate={navigateTo} />
      case 'monarch': return <Monarch onNavigate={navigateTo} />
      case 'pesticides': return <Pesticides onNavigate={navigateTo} />
      case 'water-sources': return <WaterSources onNavigate={navigateTo} />
      case 'leave-the-leaves': return <LeaveTheLeaves onNavigate={navigateTo} />
      case 'bumble-bee': return <BumbleBee onNavigate={navigateTo} />
      case 'privacy': return <Privacy onNavigate={navigateTo} />
      case 'light-pollution': return <LightPollution onNavigate={navigateTo} />
      case 'native-plants': return <NativePlants onNavigate={navigateTo} />
      case 'american-lady-butterfly': return <AmericanLadyButterfly onNavigate={navigateTo} />
      case 'eastern-box-elder': return <EasternBoxElder onNavigate={navigateTo} />
      case 'mourning-cloak': return <MourningCloak onNavigate={navigateTo} />
      case 'red-admiral': return <RedAdmiral onNavigate={navigateTo} />
      case 'orange-sulphur': return <OrangeSulphur onNavigate={navigateTo} />
      case 'clouded-sulphur': return <CloudedSulphur onNavigate={navigateTo} />
      case 'cabbage-white': return <CabbageWhite onNavigate={navigateTo} />
      case 'eastern-tiger-swallowtail': return <EasternTigerSwallowtail onNavigate={navigateTo} />
      case 'spicebush-swallowtail': return <SpicebushSwallowtail onNavigate={navigateTo} />
      case 'black-swallowtail': return <BlackSwallowtail onNavigate={navigateTo} />
      case 'pearl-crescent': return <PearlCrescent onNavigate={navigateTo} />
      case 'great-spangled-fritillary': return <GreatSpangledFritillary onNavigate={navigateTo} />
      case 'viceroy-butterfly': return <ViceroyButterfly onNavigate={navigateTo} />
      case 'question-mark': return <QuestionMark onNavigate={navigateTo} />
      case 'eastern-comma': return <EasternComma onNavigate={navigateTo} />
      case 'hackberry-emperor': return <HackberryEmperor onNavigate={navigateTo} />
      case 'painted-lady': return <PaintedLady onNavigate={navigateTo} />
      case 'red-spotted-purple': return <RedSpottedPurple onNavigate={navigateTo} />
      case 'common-wood-nymph': return <CommonWoodNymph onNavigate={navigateTo} />
      case 'little-wood': return <LittleWood onNavigate={navigateTo} />
      case 'common-buckeye': return <CommonBuckeye onNavigate={navigateTo} />
      case 'silver-spotted-skipper': return <SilverSpottedSkipper onNavigate={navigateTo} />
      case 'sachem-skipper': return <SachemSkipper onNavigate={navigateTo} />
      case 'zabulon-skipper': return <ZabulonSkipper onNavigate={navigateTo} />
      case 'peck-skipper': return <PeckSkipper onNavigate={navigateTo} />
      case 'common-checkered-skipper': return <CommonCheckeredSkipper onNavigate={navigateTo} />
      case 'tawny-edged-skipper': return <TawnyEdgedSkipper onNavigate={navigateTo} />
      case 'european-skipper': return <EuropeanSkipper onNavigate={navigateTo} />
      case 'dun-skipper': return <DunSkipper onNavigate={navigateTo} />
      case 'dion-skipper': return <DionSkipper onNavigate={navigateTo} />
      case 'delaware-skipper': return <DelawareSkipper onNavigate={navigateTo} />
      case 'broad-winged-skipper': return <BroadWingedSkipper onNavigate={navigateTo} />
      case 'little-glassywing': return <LittleGlassywing onNavigate={navigateTo} />
      case 'northern-broken-dash': return <NorthernBrokenDash onNavigate={navigateTo} />
      case 'hobomok-skipper': return <HobomokSkipper onNavigate={navigateTo} />
      case 'persius-duskywing': return <PersiusDuskywing onNavigate={navigateTo} />
      case 'juvenas-duskywing': return <JuvenasDuskywing onNavigate={navigateTo} />
      case 'wild-indigo': return <WildIndigo onNavigate={navigateTo} />
      case 'horaces-duskywing': return <HoracesDuskywing onNavigate={navigateTo} />
      case 'zarudos-duskywing': return <ZarudosDuskywing onNavigate={navigateTo} />
      case 'frosted-elfin': return <FrostedElfin onNavigate={navigateTo} />
      case 'henry-elfin': return <HenryElfin onNavigate={navigateTo} />
      case 'brown-elfin': return <BrownElfin onNavigate={navigateTo} />
      case 'eastern-pine-elfin': return <EasternPineElfin onNavigate={navigateTo} />
      case 'abiotique-elfin': return <AbiotiqueElfin onNavigate={navigateTo} />
      case 'juniper-hairstreak': return <JuniperHairstreak onNavigate={navigateTo} />
      case 'oak-hairstreak': return <OakHairstreak onNavigate={navigateTo} />
      case 'blinding-hairstreak': return <BlindingHairstreak onNavigate={navigateTo} />
      case 'striated-hairstreak': return <StriatedHairstreak onNavigate={navigateTo} />
      case 'acadian-hairstreak': return <AcadianHairstreak onNavigate={navigateTo} />
      case 'edwards-hairstreak': return <EdwardsHairstreak onNavigate={navigateTo} />
      case 'banded-hairstreak': return <BandedHairstreak onNavigate={navigateTo} />
      case 'hickory-hairstreak': return <HickoryHairstreak onNavigate={navigateTo} />
      case 'coral-hairstreak': return <CoralHairstreak onNavigate={navigateTo} />
      case 'olive-hairstreak': return <OliveHairstreak onNavigate={navigateTo} />
      case 'red-banded-hairstreak': return <RedBandedHairstreak onNavigate={navigateTo} />
      case 'western-pine-elfin': return <WesternPineElfin onNavigate={navigateTo} />
      case 'ceraunius-hairstreak': return <CerauniusHairstreak onNavigate={navigateTo} />
      case 'satyr-comma': return <SatyrComma onNavigate={navigateTo} />
      case 'giant-swallowtail': return <GiantSwallowtail onNavigate={navigateTo} />
      case 'pipevine-swallotail': return <PipevineSwallotail onNavigate={navigateTo} />
      case 'zebra-swallotail': return <ZebraSwallotail onNavigate={navigateTo} />
      case 'sunshine-sulphur': return <SunshineSulphur onNavigate={navigateTo} />
      case 'little-yellow': return <LittleYellow onNavigate={navigateTo} />
      case 'mexican-yellow': return <MexicanYellow onNavigate={navigateTo} />
      case 'slatey-skyblue': return <SlateySkyblue onNavigate={navigateTo} />
      case 'eastern-tailed-blue': return <EasternTailedBlue onNavigate={navigateTo} />
      case 'gray-hairstreak': return <GrayHairstreak onNavigate={navigateTo} />
      case 'summer-azure': return <SummerAzure onNavigate={navigateTo} />
      case 'spring-azure': return <SpringAzure onNavigate={navigateTo} />
      case 'cherry-gall-azure': return <CherryGallAzure onNavigate={navigateTo} />
      case 'appalachian-azure': return <AppalachianAzure onNavigate={navigateTo} />
      case 'silvery-blue': return <SilveryBlue onNavigate={navigateTo} />
      case 'dotty-maria': return <DottyMaria onNavigate={navigateTo} />
      case 'atlas-blue': return <AtlasBlue onNavigate={navigateTo} />
      case 'melissa-blue': return <MelissaBlue onNavigate={navigateTo} />
      case 'marin-blue': return <MarinBlue onNavigate={navigateTo} />
      case 'pygmy-blue': return <PygmyBlue onNavigate={navigateTo} />
      case 'square-spots-blue': return <SquareSpotsBlue onNavigate={navigateTo} />
      case 'opal-blue': return <OpalBlue onNavigate={navigateTo} />
      case 'ceraunius-blue': return <CerauniusBlue onNavigate={navigateTo} />
      case 'eastern-pigmy-blue': return <EasternPigmyBlue onNavigate={navigateTo} />
      case 'great-blue-heron': return <GreatBlueHeron onNavigate={navigateTo} />
      case 'baltimore-oriole': return <BaltimoreOriole onNavigate={navigateTo} />
      case 'ruby-throated-hummingbird': return <RubyThroatedHummingbird onNavigate={navigateTo} />
      case 'american-goldfinch': return <AmericanGoldfinch onNavigate={navigateTo} />
      case 'eastern-bluebird': return <EasternBluebird onNavigate={navigateTo} />
      case 'barn-swallow': return <BarnSwallow onNavigate={navigateTo} />
      case 'chimney-swift': return <ChimneySWift onNavigate={navigateTo} />
      case 'purple-martin': return <PurpleMartin onNavigate={navigateTo} />
      case 'willow-flycatcher': return <WillowFlycatcher onNavigate={navigateTo} />
      case 'gray-flycatcher': return <GrayFlycatcher onNavigate={navigateTo} />
      case 'hammond-flycatcher': return <HammondFlycatcher onNavigate={navigateTo} />
      case 'yellow-billed-cuckoo': return <YellowBilledCuckoo onNavigate={navigateTo} />
      case 'black-billed-cuckoo': return <BlackBilledCuckoo onNavigate={navigateTo} />
      case 'wood-thrush': return <WoodThrush onNavigate={navigateTo} />
      case 'indiana-bat': return <IndianaBat onNavigate={navigateTo} />
      case 'tricolored-bat': return <TricoloredBat onNavigate={navigateTo} />
      case 'northern-long-eared-bat': return <NorthernLongEaredBat onNavigate={navigateTo} />
      case 'little-brown-bat': return <LittleBrownBat onNavigate={navigateTo} />
      case 'eastern-small-footed-bat': return <EasternSmallFootedBat onNavigate={navigateTo} />
      case 'big-brown-bat': return <BigBrownBat onNavigate={navigateTo} />
      case 'eastern-red-bat': return <EasternRedBat onNavigate={navigateTo} />
      case 'hoary-bat': return <HoaryBat onNavigate={navigateTo} />
      case 'silver-haired-bat': return <SilverHairedBat onNavigate={navigateTo} />
      case 'tri-colored-bat-ii': return <TriColoredBatII onNavigate={navigateTo} />
      case 'evening-star': return <EveningStar onNavigate={navigateTo} />
      case 'semipalmated-sandpiper': return <SemipalmatedSandpiper onNavigate={navigateTo} />
      case 'common-nighthawk': return <CommonNighthawk onNavigate={navigateTo} />
      case 'bobolink': return <Bobolink onNavigate={navigateTo} />
      case 'golden-winged-warbler': return <GoldenWingedWarbler onNavigate={navigateTo} />
      case 'cerulean-warbler': return <CeruleanWarbler onNavigate={navigateTo} />
      case 'prairie-warbler': return <PrairieWarbler onNavigate={navigateTo} />
      case 'bluegrass-warbler': return <BluegrassWarbler onNavigate={navigateTo} />
      case 'kentucky-warbler': return <KentuckyWarbler onNavigate={navigateTo} />
      case 'worm-eating-warbler': return <WormEatingWarbler onNavigate={navigateTo} />
      case 'louisiana-thrush': return <LouisianaThrush onNavigate={navigateTo} />
      case 'northern-bobwhite': return <NorthernBobwhite onNavigate={navigateTo} />
      case 'field-sparrow': return <FieldSparrow onNavigate={navigateTo} />
      case 'dickcissel-bird': return <DickcisselBird onNavigate={navigateTo} />
      case 'eastern-meadowlark': return <EasternMeadowlark onNavigate={navigateTo} />
      case 'grassland-sparrow': return <GrasslandSparrow onNavigate={navigateTo} />
      case 'henslo-sparrow': return <HensloSparrow onNavigate={navigateTo} />
      case 'american-kestrel': return <AmericanKestrel onNavigate={navigateTo} />
      case 'loggerhead-shrike': return <LoggerheadShrike onNavigate={navigateTo} />
      case 'eastern-kingbird': return <EasternKingbird onNavigate={navigateTo} />
      case 'willow-fly-and-alder': return <WillowFlyAndAlder onNavigate={navigateTo} />
      case 'american-woodcock': return <AmericanWoodcock onNavigate={navigateTo} />
      case 'short-eared-owl': return <ShortearedOwl onNavigate={navigateTo} />
      case 'woodland-jumper': return <WoodlandJumper onNavigate={navigateTo} />
      default: return <Home onNavigate={navigateTo} />
    }
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-white">
        <Nav onNavigate={navigateTo} currentPage={currentPage} />
        {renderPage()}
        <Footer onNavigate={navigateTo} />
        <FeedbackWidget />
      </div>
    </I18nextProvider>
  )
}

export default App
