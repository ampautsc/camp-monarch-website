import type { Page } from '../App'

// Photo data — Wikimedia Commons (CC BY-SA) and iNaturalist open-data (CC BY-NC).
// Verified 2026-05-13. Attribution listed at bottom of page.
// vis-001, vis-002, vis-003, vis-004: real subject photography, card-top strip format.
const PHOTO_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="100%" height="100%" fill="%23d4e9d0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="%23555">🦋</text></svg>'

function buildRetryPhotoUrl(photo: string): string | null {
  try {
    const url = new URL(photo)
    if (url.hostname !== 'upload.wikimedia.org') return null

    const fileName = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() ?? '').replace(/^\d+px-/, '')
    if (!fileName) return null

    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=960`
  } catch {
    return null
  }
}

function buildUnavailablePhotoFallback(label: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
      <rect width="960" height="540" fill="#d4e9d0" />
      <rect x="28" y="28" width="904" height="484" rx="24" fill="#f7ede0" stroke="#2d5a27" stroke-width="6" />
      <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-size="46" font-family="Georgia, serif" fill="#1a2e1a">${label}</text>
      <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-size="26" font-family="Arial, sans-serif" fill="#4a4a4a">Photo temporarily unavailable</text>
    </svg>`
  )}`
}

type Category = 'All' | 'Birds' | 'Butterflies & Moths' | 'Insects' | 'Reptiles & Amphibians' | 'Mammals'

const CATEGORIES: Category[] = [
  'All',
  'Birds',
  'Butterflies & Moths',
  'Insects',
  'Reptiles & Amphibians',
  'Mammals',
]

interface Species {
  page: string
  name: string
  tagline: string
  photo: string
  alt: string
  attr: string
  category: Category
}

interface SpeciesGalleryProps {
  onNavigate: (page: Page) => void
}

const SPECIES: Species[] = [
  {
    page: 'monarch-life',
    name: "Monarch Butterfly",
    tagline: "3,000-mile migrator. Milkweed specialist. 80% population decline since the 1990s.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg',
    alt: "Monarch butterfly with wings spread, showing orange and black pattern",
    attr: "Kenneth Dwain Harrelson / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Butterflies & Moths',
  },
  {
    page: 'tiger-swallowtail',
    name: "Tiger Swallowtail",
    tagline: "Up to 5.5-inch wingspan. Depends on native host trees from egg to adult.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pristine_Eastern_Tiger_Swallowtail.jpg/960px-Pristine_Eastern_Tiger_Swallowtail.jpg',
    alt: "Tiger swallowtail butterfly on flower, showing yellow and black tiger-striped wings",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Butterflies & Moths',
  },
  {
    page: 'great-spangled-fritillary',
    name: "Great Spangled Fritillary",
    tagline: "Lays eggs near violets, not on them. The larva overwinters in leaf litter before taking its first bite in spring.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg/960px-Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg',
    alt: "Great Spangled Fritillary butterfly showing tawny orange wings with black markings",
    attr: "MONGO / Public domain / Wikimedia Commons",
    category: 'Butterflies & Moths',
  },
  {
    page: 'fireflies',
    name: "Fireflies",
    tagline: "A chemical language written in light. Disappearing from lawns across the continent.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Photuris_lucicrescens.jpg/960px-Photuris_lucicrescens.jpg',
    alt: "Firefly in flight against dark background, showing bioluminescent glow",
    attr: "Terry Priest / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'native-bees',
    name: "Native Bees",
    tagline: "4,000 species. Most nest in the ground. Wildly more effective than honeybees on native plants.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg/960px-Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg',
    alt: "Native bee in flight near flower",
    attr: "Muhammad Mahdi Karim / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'american-bumble-bee',
    name: "American Bumble Bee",
    tagline: "Federally threatened since 2025. 89% population decline. A colony that starts from one queen.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg',
    alt: "American bumble bee foraging on rough blazingstar, a native prairie wildflower",
    attr: "Angella Moorehouse / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'box-turtles',
    name: "Box Turtle",
    tagline: "Home range under 2 acres. Lives 50+ years. Cannot escape roads — or lawn mowers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Box_turtle_(Terrapene_carolina_carolina)_in_Prospect_Park_(61573).jpg/960px-Box_turtle_(Terrapene_carolina_carolina)_in_Prospect_Park_(61573).jpg',
    alt: "Eastern box turtle on forest floor showing orange and brown patterned shell",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'gray-tree-frogs',
    name: "Gray Tree Frog",
    tagline: "Antifreeze in its cells. A living barometer of your yard's insect health.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/GrayTreefrog.jpg/960px-GrayTreefrog.jpg',
    alt: "Gray tree frog clinging to bark, showing cryptic gray-green mottled pattern",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'garter-snake',
    name: "Garter Snake",
    tagline: "Eats slugs, voles, and frogs. Completely harmless. Vanishing from tidy yards.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Thamnophis_sirtalis_sirtalis_Philadelphia.jpg/960px-Thamnophis_sirtalis_sirtalis_Philadelphia.jpg',
    alt: "Eastern garter snake in grass showing longitudinal yellow stripes on dark body",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'eastern-chipmunk',
    name: "Eastern Chipmunk",
    tagline: "Buries 8,000 seeds a year. A forest regenerator that lives in your flower bed.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Eastern_Chipmunk.jpg/960px-Eastern_Chipmunk.jpg',
    alt: "Eastern chipmunk with cheek pouches full of seeds, sitting on a log",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Mammals',
  },
  {
    page: 'spring-peeper',
    name: "Spring Peeper",
    tagline: "Thumbnail-sized. Deafening chorus. The first voice of spring in eastern wetlands.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Spring_Peeper_Frog.jpg/960px-Spring_Peeper_Frog.jpg',
    alt: "Spring peeper frog clinging to stem, showing X mark on back and translucent toes",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'toad',
    name: "American Toad",
    tagline: "Eats 1,000 insects a night. Lays 8,000 eggs. A night-shift pest controller.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Anaxyrus_americanus_PCSutton.jpg/960px-Anaxyrus_americanus_PCSutton.jpg',
    alt: "American toad on leaf litter showing warty brown skin and golden eye",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'little-brown-bat',
    name: "Little Brown Bat",
    tagline: "Eats 1,200 insects an hour. White-nose syndrome has killed 6.7 million. A bat house costs $25.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Little_brown_bat_N._American.jpg/960px-Little_brown_bat_N._American.jpg',
    alt: "Little brown bat in flight showing wing membrane and echolocation mouth open",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Mammals',
  },
  {
    page: 'virginia-opossum',
    name: "Virginia Opossum",
    tagline: "Eats 5,000 ticks a season. Immune to most snake venoms. North America's only marsupial.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Opossum_2.jpg/960px-Opossum_2.jpg',
    alt: "Virginia opossum on branch showing white face, pink nose, and prehensile tail",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Mammals',
  },
  {
    page: 'green-darner',
    name: "Green Darner",
    tagline: "3-inch wingspan. Migrates 900 miles. Eats 300 mosquitoes a day.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Anax_junius_-_mating_pair.jpg/960px-Anax_junius_-_mating_pair.jpg',
    alt: "Green darner dragonfly showing vivid green thorax, blue abdomen, and large compound eyes",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Insects',
  },
  {
    page: 'downy-woodpecker',
    name: "Downy Woodpecker",
    tagline: "Excavates nest cavities used by 35 other species. Eats 1,000 bark beetle larvae a day.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Downy_Woodpecker.jpg/960px-Downy_Woodpecker.jpg',
    alt: "Male Downy Woodpecker on tree bark showing black and white plumage and red spot",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Birds',
  },
  {
    page: 'baltimore-oriole',
    name: "Baltimore Oriole",
    tagline: "Weaves a 4-inch hanging nest. Needs elm and cottonwood. 24% BBS decline since 1966.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Baltimore_Oriole_%28male%29%2C_CP%2C_NJ_-_May_09_-_4.jpg/960px-Baltimore_Oriole_%28male%29%2C_CP%2C_NJ_-_May_09_-_4.jpg',
    alt: "Male Baltimore oriole showing brilliant orange and black plumage on branch",
    attr: "Wikimedia Commons / CC BY-SA 2.0",
    category: 'Birds',
  },
  {
    page: 'northern-cardinal',
    name: "Northern Cardinal",
    tagline: "Year-round resident. Seed disperser. The female sings too — unusual among songbirds.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cardinal_male.jpg/960px-Cardinal_male.jpg',
    alt: "Male Northern Cardinal in brilliant red plumage on snowy branch",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'eastern-bluebird',
    name: "Eastern Bluebird",
    tagline: "Cavity nester. Nearly wiped out by starlings. Brought back by nest box programs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Eastern_Bluebird_-_Great_Smoky_Mountains_NP_-_TN_%2826162716603%29.jpg/960px-Eastern_Bluebird_-_Great_Smoky_Mountains_NP_-_TN_%2826162716603%29.jpg',
    alt: "Male Eastern Bluebird showing vivid blue back and rusty orange breast",
    attr: "NPS Photo / Wikimedia Commons / Public Domain",
    category: 'Birds',
  },
  {
    page: 'black-capped-chickadee',
    name: "Black-capped Chickadee",
    tagline: "Hides 80,000 seeds a year. Remembers every one. Survives −40°F on caterpillar fat.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Poecile-atricapilla-001.jpg/960px-Poecile-atricapilla-001.jpg',
    alt: "Black-capped chickadee on branch showing black cap and bib, white cheeks",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'ruby-throated-hummingbird',
    name: "Ruby-throated Hummingbird",
    tagline: "500 wingbeats per minute. Crosses the Gulf of Mexico in 20 hours. Needs native flowers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ruby-throated-Hummingbird.jpg/960px-Ruby-throated-Hummingbird.jpg',
    alt: "Male ruby-throated hummingbird hovering at flower showing iridescent red throat",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Birds',
  },
  {
    page: 'american-goldfinch',
    name: "American Goldfinch",
    tagline: "Delays nesting until August to match thistle and coneflower seed peaks. A specialist.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/American_Goldfinch_-_Male_-_Breeding_Plumage_%2814344605249%29.jpg/960px-American_Goldfinch_-_Male_-_Breeding_Plumage_%2814344605249%29.jpg',
    alt: "Male American Goldfinch in bright yellow breeding plumage on branch",
    attr: "Wikimedia Commons / CC BY 2.0",
    category: 'Birds',
  },
  {
    page: 'american-robin',
    name: "American Robin",
    tagline: "Detects earthworms by vibration. Eats 14 feet of worms a day. A lawn-quality indicator.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/960px-Turdus-migratorius-002.jpg',
    alt: "American robin on grass showing orange-red breast and alert posture",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'indigo-bunting',
    name: "Indigo Bunting",
    tagline: "Navigates by starlight. Intense blue is structural color, not pigment. Needs dense shrub edges.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Indigo_Bunting_by_Dan_Pancamo_1.jpg/960px-Indigo_Bunting_by_Dan_Pancamo_1.jpg',
    alt: "Male Indigo Bunting in brilliant iridescent blue plumage perched on branch",
    attr: "Dan Pancamo / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'dark-eyed-junco',
    name: "Dark-eyed Junco",
    tagline: "Nests on the ground. Eats weed seeds all winter. A winter-yard essential.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dark-eyed_Junco_-_Junco_hyemalis_%2816746558599%29.jpg/960px-Dark-eyed_Junco_-_Junco_hyemalis_%2816746558599%29.jpg',
    alt: "Dark-eyed junco showing slate-gray plumage and pink bill on snowy ground",
    attr: "Wikimedia Commons / CC BY 2.0",
    category: 'Birds',
  },
  {
    page: 'polyphemus-moth',
    name: "Polyphemus Moth",
    tagline: "6-inch wingspan. Eyespots that mimic an owl. Cannot eat as an adult. One native oak can raise thousands.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Antheraea_polyphemus_Cramer.jpg/960px-Antheraea_polyphemus_Cramer.jpg',
    alt: "Polyphemus moth with wings open showing large eyespots on hindwings",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Butterflies & Moths',
  },
  {
    page: 'luna-moth',
    name: "Luna Moth",
    tagline: "Tail feathers that spin in bat sonar. Adults live 7 days. Disappearing from light-polluted suburbs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Actias_luna_resting.jpg/960px-Actias_luna_resting.jpg',
    alt: "Luna moth on tree bark showing pale green wings with long curving tail extensions",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Butterflies & Moths',
  },
  {
    page: 'cecropia-moth',
    name: "Cecropia Moth",
    tagline: "North America's largest native moth. 7-inch wingspan. A parasitoid fly introduced in 1906 decimated populations.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cecropia_Moth_Hyalophora_cecropia.jpg/960px-Cecropia_Moth_Hyalophora_cecropia.jpg',
    alt: "Cecropia moth on bark showing distinctive red-banded abdomen and eyespot wing pattern",
    attr: "Wikimedia Commons / Public Domain",
    category: 'Butterflies & Moths',
  },
  {
    page: 'wood-thrush',
    name: "Wood Thrush",
    tagline: "Two-voiced song. 62% BBS decline. Needs forest interior with 5 acres minimum of connected canopy.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hylocichla_mustelina.jpg/960px-Hylocichla_mustelina.jpg',
    alt: "Wood thrush on forest floor showing spotted breast and rusty-brown head",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'eastern-screech-owl',
    name: "Eastern Screech Owl",
    tagline: "38% decline. 96% of sampled birds contaminated with rodenticides. A nest box brings them back.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eastern_Screech_Owl_%28red_morph%29.jpg/960px-Eastern_Screech_Owl_%28red_morph%29.jpg',
    alt: "Eastern screech owl in red morph perched in tree cavity showing camouflage plumage and ear tufts",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'common-nighthawk',
    name: "Common Nighthawk",
    tagline: "Eats 2,000 flying insects a night. Nests on flat gravel rooftops. 61% population decline.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Common_Nighthawk_resting.jpg/960px-Common_Nighthawk_resting.jpg',
    alt: "Common nighthawk resting on branch showing cryptic bark-patterned plumage and white wing bar",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'chimney-swift',
    name: "Chimney Swift",
    tagline: "Eats 12,000 flying insects a day. Nests only in vertical shafts. 65% BBS decline.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chaetura_pelagica.jpg/960px-Chaetura_pelagica.jpg',
    alt: "Chimney swift in flight showing swept-back wings, short tail, and cigar-shaped body",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'purple-martin',
    name: "Purple Martin",
    tagline: "Entirely dependent on human-provided housing in the eastern US. Colony collapses if houses go up late.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Progne_subis_subis_AD_M.jpg/960px-Progne_subis_subis_AD_M.jpg',
    alt: "Male purple martin in iridescent blue-purple plumage in flight",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'red-tailed-hawk',
    name: "Red-tailed Hawk",
    tagline: "Vision 8x sharper than human. Rodenticide poisoning kills 75% of sampled urban birds. A keystone predator.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Red-tailed_Hawk_in_flight-2007.jpg/960px-Red-tailed_Hawk_in_flight-2007.jpg',
    alt: "Red-tailed hawk in flight showing distinctive rusty red tail and broad wingspan",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'eastern-meadowlark',
    name: "Eastern Meadowlark",
    tagline: "75% BBS decline since 1966. A grassland singer that needs a 10-acre meadow to nest.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sturnella_magna_-Florida%2C_USA-8.jpg/960px-Sturnella_magna_-Florida%2C_USA-8.jpg',
    alt: "Eastern meadowlark standing in grass showing bright yellow breast with black V-shaped bib",
    attr: "Wikimedia Commons / CC BY-SA 2.0",
    category: 'Birds',
  },
  {
    page: 'american-kestrel',
    name: "American Kestrel",
    tagline: "North America's smallest falcon. 47% BBS decline. Sees UV light to track vole urine trails.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/American_kestrel_%28Falco_sparverius%29.jpg/960px-American_kestrel_%28Falco_sparverius%29.jpg',
    alt: "Male American kestrel perched on a branch showing slate-blue wings, russet back and tail, and two bold black facial mustache marks",
    attr: "Simon Pierre Barrette / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'brown-thrasher',
    name: "Brown Thrasher",
    tagline: "More than 2,000 song types — the largest confirmed repertoire of any North American bird. Georgia's state bird. Partners in Flight Watch List.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Toxostoma_rufum_CT2.jpg/960px-Toxostoma_rufum_CT2.jpg',
    alt: "Brown Thrasher perched in shrub showing rusty red-brown upperparts, streaked white breast, long tail, and distinctive bright yellow eye",
    attr: "DickDaniels / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'eastern-towhee',
    name: "Eastern Towhee",
    tagline: "\"Drink your tea!\" A leaf-litter double-scratcher of dense shrubby thickets. Long-term BBS decline across the eastern US.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pipilo_erythrophthalmus_CT2.jpg/960px-Pipilo_erythrophthalmus_CT2.jpg',
    alt: "Male Eastern Towhee showing jet-black hood and back, vivid rufous flanks, white belly, and striking red eye",
    attr: "DickDaniels / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'carolina-wren',
    name: "Carolina Wren",
    tagline: "Weighs 20 grams and never leaves. A non-migratory year-round resident whose survival through winter depends directly on brush piles and intact leaf litter.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg/960px-Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg',
    alt: "Carolina Wren perched showing rich cinnamon-brown upperparts, bold white eyebrow stripe, and the characteristically upright cocked tail",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'gray-catbird',
    name: "Gray Catbird",
    tagline: "Sings each phrase once — a non-repeating stream of mimicry from inside the thicket. Nests at 3–6 feet in dense shrubs; spring pruning in April removes the branch forks the female needs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gray_catbird_%2885315%29.jpg/960px-Gray_catbird_%2885315%29.jpg',
    alt: "Adult gray catbird perched showing slate-gray plumage, black cap, long tail, and rust-colored undertail coverts",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
]

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const filtered = activeCategory === 'All' ? SPECIES : SPECIES.filter(s => s.category === activeCategory)

  return (
    <div className="page">
      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>All Species — Photo Gallery</h1>
        <p className="hero__lead">
          Every species below lives or passes through suburban and rural yards in eastern North America.
          Each one is responding to what you do with your land.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1.5rem 0 0.5rem' }}>
        {CATEGORIES.map(cat => {
          const count = cat === 'All' ? SPECIES.length : SPECIES.filter(s => s.category === cat).length
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: isActive ? 'var(--monarch-green)' : 'white',
                color: isActive ? 'white' : 'var(--text-primary)',
                border: `1px solid ${isActive ? 'var(--monarch-green)' : 'var(--border)'}`,
                borderRadius: '20px',
                padding: '0.35rem 1rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                fontWeight: isActive ? 'bold' : 'normal',
                transition: 'background 0.15s, color 0.15s, border-color 0.15s',
              }}
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>

      <div className="species-grid">
        {filtered.map(species => {
          const retryPhotoUrl = buildRetryPhotoUrl(species.photo)
          const photoFallback = buildUnavailablePhotoFallback(species.name)

          return (
            <button
              key={species.page}
              className="species-card"
              onClick={() => onNavigate(species.page)}
              aria-label={`View ${species.name} page`}
            >
              <div className="species-card__photo-wrap">
                <img
                  src={species.photo}
                  alt={species.alt}
                  className="species-card__photo"
                  loading="lazy"
                  onError={e => {
                    const image = e.currentTarget
                    if (retryPhotoUrl && image.currentSrc !== retryPhotoUrl && image.src !== retryPhotoUrl) {
                      image.src = retryPhotoUrl
                      return
                    }
                    image.src = photoFallback
                  }}
                />
              </div>
              <div className="species-card__body">
                <div className="species-card__name">{species.name}</div>
                <div className="species-card__tagline">{species.tagline}</div>
                <div className="species-card__attr">{species.attr}</div>
              </div>
            </button>
          )
        })}
      </div>

      <section aria-labelledby="attribution-heading" style={{ marginTop: '3rem' }}>
        <h2 id="attribution-heading" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Photo attribution</h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          All photos are sourced from Wikimedia Commons under Creative Commons or public domain licenses,
          or from iNaturalist under CC BY-NC. Individual attributions are listed on each species card.
          Species range and behavior data from USGS Breeding Bird Survey, NatureServe, IUCN Red List,
          and Xerces Society publications.
        </p>
      </section>
    </div>
  )
}