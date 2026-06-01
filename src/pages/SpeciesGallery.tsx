import type { Page } from '../App'

// Photo data — Wikimedia Commons (CC BY-SA / CC BY / Public Domain) and iNaturalist open-data.
// Verified 2026-05-18. Attribution listed at bottom of page.
const PHOTO_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="100%" height="100%" fill="%23e8f5e9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="%234caf50">🌿</text></svg>'

type Status = 'common' | 'declining' | 'endangered'

interface Species {
  id: string
  name: string
  scientificName: string
  emoji: string
  shortDesc: string
  status: Status
  photo: string
  photoCredit: string
  page: Page | null
  habitatTags: string[]
}

const SPECIES: Species[] = [
  {
    id: 'monarch',
    name: 'Monarch Butterfly',
    scientificName: 'Danaus plexippus',
    emoji: '🦋',
    shortDesc: 'Lays eggs only on milkweed — a plant eliminated from roughly 165 million acres of American farmland since 1996. The eastern population has dropped from 900 million in the 1990s to about 60 million today.',
    status: 'endangered',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg',
    photoCredit: 'Kenneth Dwain Harrelson / CC BY-SA 3.0',
    page: 'why-monarchs',
    habitatTags: ['milkweed', 'open-meadow', 'garden'],
  },
  {
    id: 'firefly',
    name: 'Firefly',
    scientificName: 'Photinus pyralis',
    emoji: '✨',
    shortDesc: 'Larvae spend up to two years hunting prey in leaf litter and loose soil before their single summer of flight. Autumn raking removes the habitat where most firefly populations overwinter.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Photuris_lucicrescens.jpg',
    photoCredit: 'Opoterser / CC BY-SA 3.0',
    page: 'fireflies',
    habitatTags: ['leaf-litter', 'tall-grass', 'edge'],
  },
  {
    id: 'box-turtle',
    name: 'Eastern Box Turtle',
    scientificName: 'Terrapene carolina',
    emoji: '🐢',
    shortDesc: 'Has a home range smaller than most suburban yards and navigates it from memory — the same log, the same berry patch, decade after decade. A single road crossing between two parts of its territory carries a measured mortality rate high enough to suppress local populations.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_%28cropped%29.jpg',
    photoCredit: 'tgosliner / iNaturalist, CC BY-NC 4.0',
    page: 'box-turtles',
    habitatTags: ['woodland', 'edge', 'leaf-litter'],
  },
  {
    id: 'native-bees',
    name: 'Native Bees',
    scientificName: '4,000+ species',
    emoji: '🐝',
    shortDesc: "Most of North America's 4,000+ native bee species are solitary ground nesters — females excavating individual tunnels in bare or sparsely vegetated soil. Continuous lawn coverage has eliminated most of their nesting habitat from the suburban landscape.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg',
    photoCredit: 'Iifar / CC BY-SA 3.0',
    page: 'native-bees',
    habitatTags: ['meadow', 'garden', 'bare-soil'],
  },
  {
    id: 'american-bumble-bee',
    name: 'American Bumble Bee',
    scientificName: 'Bombus pensylvanicus',
    emoji: '🐝',
    shortDesc: 'Once abundant across the eastern US, now absent from large portions of its range where it was documented as recently as the 1990s. A single queen founds each new colony in spring, overwintering alone underground after the entire colony dies each fall.',
    status: 'endangered',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg',
    photoCredit: 'USGS Bee Inventory and Monitoring Lab / CC BY 2.0',
    page: 'american-bumble-bee',
    habitatTags: ['meadow', 'garden', 'open-land'],
  },
  {
    id: 'spring-peeper',
    name: 'Northern Spring Peeper',
    scientificName: 'Pseudacris crucifer',
    emoji: '🐸',
    shortDesc: 'Weighs less than a gram. A group of 10 or 15 Spring Peepers calling from a vernal pool 50 yards away can be audible inside a house over traffic noise. Each individual call costs energy proportional to the frog\'s full body weight.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/H_crucifer_USGS.jpg',
    photoCredit: 'USGS / Public Domain',
    page: 'spring-peeper',
    habitatTags: ['wetland', 'vernal-pool', 'woodland-edge'],
  },
  {
    id: 'gray-treefrog',
    name: 'Eastern Gray Treefrog',
    scientificName: 'Hyla versicolor',
    emoji: '🐸',
    shortDesc: 'Can change its skin color from gray to green or brown over the course of minutes, matching the surface it rests on. A treefrog resting on gray bark in morning may shift to pale green by afternoon when it moves to a leaf.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Hyla_versicolor.jpg',
    photoCredit: 'Brian Gratwicke / CC BY 2.0',
    page: 'gray-tree-frogs',
    habitatTags: ['woodland-edge', 'garden', 'wetland-edge'],
  },
  {
    id: 'wood-frog',
    name: 'Wood Frog',
    scientificName: 'Lithobates sylvaticus',
    emoji: '🐸',
    shortDesc: 'Freezes solid in winter — heart stops, breathing stops, blood stops flowing — and thaws alive in spring. A frozen Wood Frog is indistinguishable from a dead one by every visible measure.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Rana_sylvatica.jpg',
    photoCredit: 'brian.gratwicke / CC BY 2.0',
    page: 'wood-frog',
    habitatTags: ['woodland', 'leaf-litter', 'vernal-pool'],
  },
  {
    id: 'american-toad',
    name: 'American Toad',
    scientificName: 'Anaxyrus americanus',
    emoji: '🐸',
    shortDesc: 'Eats up to 1,000 insects per day during active season. The parotoid glands behind its eyes secrete bufadienolides — compounds that cause cardiac arrhythmia in predators that mouth or swallow the toad.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Anaxyrus_americanus_PGC.jpg',
    photoCredit: 'PA Game Commission / Public Domain',
    page: 'toad',
    habitatTags: ['garden', 'woodland-edge', 'open-ground'],
  },
  {
    id: 'garter-snake',
    name: 'Eastern Garter Snake',
    scientificName: 'Thamnophis sirtalis',
    emoji: '🐍',
    shortDesc: 'Tolerates cold better than any other North American snake — active on days when air temperatures stay below 50°F, and among the last reptiles to hibernate in autumn. Females give birth to live young rather than eggs.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Thamnophis_sirtalis_sirtalis_Wooster.jpg',
    photoCredit: 'Ragesoss / CC BY-SA 3.0',
    page: 'garter-snake',
    habitatTags: ['garden', 'meadow', 'woodland-edge'],
  },
  {
    id: 'eastern-chipmunk',
    name: 'Eastern Chipmunk',
    scientificName: 'Tamias striatus',
    emoji: '🐿️',
    shortDesc: 'Stores up to 8,000 individual seeds in a single burrow, often arranged by species in separate chambers. Acorns buried and not retrieved account for a measurable share of oak regeneration in suburban forests.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tamias_striatus2.jpg',
    photoCredit: 'Gilles Gonthier / CC BY 2.0',
    page: 'eastern-chipmunk',
    habitatTags: ['woodland-edge', 'garden', 'edge'],
  },
  {
    id: 'eastern-gray-squirrel',
    name: 'Eastern Gray Squirrel',
    scientificName: 'Sciurus carolinensis',
    emoji: '🐿️',
    shortDesc: 'Buries roughly 10,000 acorns per fall in individual caches scattered across a half-mile radius, located by smell through snow and frozen soil the following winter. The oak seedlings growing along suburban fence rows arrived there in squirrel caches that were never retrieved.',
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/176023576/large.jpeg',
    photoCredit: 'Mila C. / CC BY via iNaturalist',
    page: 'eastern-gray-squirrel',
    habitatTags: ['woodland-edge', 'garden', 'suburban'],
  },
  {
    id: 'eastern-cottontail',
    name: 'Eastern Cottontail',
    scientificName: 'Sylvilagus floridanus',
    emoji: '🐇',
    shortDesc: 'Raises its young in a grass-and-fur-lined scrape 10 centimeters wide in unmowed ground — the mother nurses twice per night for 3 minutes each visit, then leaves. Kits leave the nest at 4 weeks. Lawn mowing during May–August accounts for most suburban nest losses.',
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/91229197/large.jpg',
    photoCredit: 'Bill Keim / CC BY via iNaturalist',
    page: 'eastern-cottontail',
    habitatTags: ['woodland-edge', 'garden', 'suburban'],
  },
  {
    id: 'virginia-opossum',
    name: 'Virginia Opossum',
    scientificName: 'Didelphis virginiana',
    emoji: '🦔',
    shortDesc: "North America's only marsupial. Eats ticks at a rate measured in laboratory studies at roughly 5,500 per week — questing ticks that attach to the opossum are groomed off and consumed before they can feed.",
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Didelphis_virginiana_with_young.jpg',
    photoCredit: 'Virginia State Parks staff / CC BY 2.0',
    page: 'virginia-opossum',
    habitatTags: ['woodland-edge', 'garden', 'suburban'],
  },
  {
    id: 'striped-skunk',
    name: 'Striped Skunk',
    scientificName: 'Mephitis mephitis',
    emoji: '🦨',
    shortDesc: 'Drills conical extraction holes in lawns to reach Japanese beetle grubs 2–5 inches underground — each hole marks a larva removed from the root zone where it was killing grass. The same grub a lawn-chemical treatment targets, extracted for free overnight.',
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/186427674/large.jpeg',
    photoCredit: 'Ali Campbell / CC BY via iNaturalist',
    page: 'striped-skunk',
    habitatTags: ['woodland-edge', 'garden', 'suburban'],
  },
  {
    id: 'red-fox',
    name: 'Red Fox',
    scientificName: 'Vulpes vulpes',
    emoji: '🦊',
    shortDesc: 'Returns to the same den site year after year — the kits emerging in May are doing their first social learning outside the burrow. A single adult removes dozens of mice and voles from suburban yards each week, following the same cache-and-retrieve strategy it uses to survive a hard winter.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Vulpes_vulpes_-_British_Wildlife_Centre-8.jpg',
    photoCredit: 'Charles J. Sharp / CC BY-SA via Wikimedia Commons',
    page: 'red-fox',
    habitatTags: ['woodland-edge', 'suburban', 'garden'],
  },
  {
    id: 'little-brown-bat',
    name: 'Little Brown Bat',
    scientificName: 'Myotis lucifugus',
    emoji: '🦇',
    shortDesc: 'Can eat its own body weight in insects on a single summer night. White-nose syndrome, a fungal disease introduced from Europe, has killed more than 6 million North American bats since 2006.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Little_brown_bat_28522.jpg',
    photoCredit: 'Ann Froschauer / USFWS / Public Domain',
    page: 'little-brown-bat',
    habitatTags: ['woodland-edge', 'wetland-edge', 'suburban'],
  },
  {
    id: 'downy-woodpecker',
    name: 'Downy Woodpecker',
    scientificName: 'Dryobates pubescens',
    emoji: '🐦',
    shortDesc: 'The smallest woodpecker in North America. Its bill is proportionally short — too short to reach the wood-boring beetle larvae that larger woodpeckers excavate. Instead it specializes in the larvae of stem-boring beetles and gall insects that larger species cannot access.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Downy_Woodpecker.jpg/500px-Downy_Woodpecker.jpg',
    photoCredit: 'Wolfgang Wander / CC BY-SA 3.0',
    page: 'downy-woodpecker',
    habitatTags: ['woodland', 'edge', 'garden'],
  },
  {
    id: 'northern-flicker',
    name: 'Northern Flicker',
    scientificName: 'Colaptes auratus',
    emoji: '🐦',
    shortDesc: 'Forages almost entirely on the ground for ants, unlike other woodpeckers that work tree bark. Its tongue is barbed and coated in sticky saliva that captures ants in underground galleries. A single foraging bird extracts thousands of ants per session.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Northern_Flicker_%28Red-shafted%29.jpg',
    photoCredit: 'Elaine R. Wilson / CC BY-SA 2.5',
    page: 'northern-flicker',
    habitatTags: ['open-woodland', 'edge', 'lawn'],
  },
  {
    id: 'hackberry',
    name: 'Hackberry',
    scientificName: 'Celtis occidentalis',
    emoji: '🌳',
    shortDesc: 'Bark develops irregular corky ridges — thick warty projections unlike any other common eastern tree. More than 80 native caterpillar species feed on its leaves, including the Hackberry Emperor, the Tawny Emperor, and the American Snout, none of which can complete their life cycle on any other plant.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Hackberry_bark_%28Celtis_occidentalis%29.jpg',
    photoCredit: 'Adam Shaw / CC BY-SA 3.0',
    page: 'hackberry',
    habitatTags: ['woodland-edge', 'suburban', 'garden'],
  },
  {
    id: 'hackberry-emperor',
    name: 'Hackberry Emperor',
    scientificName: 'Asterocampa celtis',
    emoji: '🦋',
    shortDesc: 'Adults drink sodium from human sweat and never visit flowers. The caterpillar feeds exclusively on hackberry leaves June through September, then overwinters in the leaf litter at the base of that same tree. Rake those leaves in fall and this butterfly cannot complete its life cycle.',
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/43334140/large.jpeg',
    photoCredit: 'Carolyn Gritzmaker / CC BY-NC via iNaturalist',
    page: 'hackberry-emperor',
    habitatTags: ['woodland-edge', 'suburban', 'garden'],
  },
  {
    id: 'american-snout',
    name: 'American Snout',
    scientificName: 'Libytheana carinenta',
    emoji: '🦋',
    shortDesc: 'Carries elongated palps that project forward past the head for roughly half the wingspan — no other eastern butterfly has this structure. When it folds its wings on a stem, the palps mimic a dead leaf petiole. Hackberry is the only caterpillar host.',
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/340891791/large.jpeg',
    photoCredit: 'John Flannery / CC BY via iNaturalist',
    page: 'american-snout',
    habitatTags: ['woodland-edge', 'suburban', 'garden'],
  },
  {
    id: 'tawny-emperor',
    name: 'Tawny Emperor',
    scientificName: 'Asterocampa clyton',
    emoji: '🦋',
    shortDesc: 'Uses hackberry as its only host plant, sharing it with the Hackberry Emperor. The single visible difference: Hackberry Emperors carry white spots near the forewing tip; Tawny Emperors carry none. Females stack eggs in a compact cylinder of 100 to 500 on a single hackberry leaf.',
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/187806544/large.jpeg',
    photoCredit: 'Ainsley / CC BY via iNaturalist',
    page: 'tawny-emperor',
    habitatTags: ['woodland-edge', 'suburban', 'garden'],
  },
  {
    id: 'eastern-bluebird',
    name: 'Eastern Bluebird',
    scientificName: 'Sialia sialis',
    emoji: '🐦',
    shortDesc: 'Hunts insects by watching from a low perch and dropping to the ground — requires open lawn or short vegetation to see prey. European starlings, introduced to New York in 1890, occupy natural tree cavities before bluebirds can nest in them. A mounted nest box with a 1.5-inch entrance hole is too small for a starling.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg',
    photoCredit: 'Sandysphotos2009 / CC BY 2.0',
    page: 'eastern-bluebird',
    habitatTags: ['open-woodland', 'lawn', 'edge'],
  },
  {
    id: 'black-capped-chickadee',
    name: 'Black-Capped Chickadee',
    scientificName: 'Poecile atricapillus',
    emoji: '🐦',
    shortDesc: 'To raise one brood, a nesting pair needs between 6,000 and 9,000 caterpillars. Those caterpillars come almost entirely from native trees and shrubs — non-native ornamental plantings support between 1 and 14 caterpillar species compared to 300 or more on a native oak.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg',
    photoCredit: 'Mdf / CC BY-SA 3.0',
    page: 'black-capped-chickadee',
    habitatTags: ['woodland', 'woodland-edge', 'garden'],
  },
  {
    id: 'northern-cardinal',
    name: 'Northern Cardinal',
    scientificName: 'Cardinalis cardinalis',
    emoji: '🐦',
    shortDesc: 'The male brings food to the female on the nest, passing it beak to beak through incubation and early chick-rearing. Nestlings receive protein almost exclusively from soft insects and caterpillars for their first 10 days — not the seeds adults eat year-round.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Male_northern_cardinal_in_Central_Park_%2852612%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'northern-cardinal',
    habitatTags: ['woodland-edge', 'garden', 'suburban'],
  },
  {
    id: 'american-robin',
    name: 'American Robin',
    scientificName: 'Turdus migratorius',
    emoji: '🐦',
    shortDesc: 'Hunts earthworms with a stop-start run, tilting its head 90 degrees to detect prey by sound or vibration. Raises two to three broods per summer; chicks receive protein almost exclusively from earthworms and caterpillars during their 13-day nestling phase.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/American_robin_%2871307%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'american-robin',
    habitatTags: ['lawn', 'garden', 'woodland-edge'],
  },
  {
    id: 'american-kestrel',
    name: 'American Kestrel',
    scientificName: 'Falco sparverius',
    emoji: '🐦',
    shortDesc: "North America's smallest falcon — about the size of a robin — can detect ultraviolet light and uses it to track vole urine trails invisible to human eyes. The population has fallen 47 percent since 1966, correlated with loss of open grassland and reduction in large insects.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Falco-sparverius-001.jpg/960px-Falco-sparverius-001.jpg',
    photoCredit: 'Simon Pierre Barrette / CC BY-SA 3.0',
    page: 'american-kestrel',
    habitatTags: ['open-woodland', 'edge', 'lawn'],
  },
  {
    id: 'eastern-screech-owl',
    name: 'Eastern Screech-Owl',
    scientificName: 'Megascops asio',
    emoji: '🦉',
    shortDesc: 'Smaller than a coffee mug. Camouflage precise enough to disappear against bark in daylight. One is probably roosting in your neighborhood right now — most people who share a yard with one have never seen it.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Screech_Owl.jpg',
    photoCredit: 'Wolfgang Wander / CC BY-SA 3.0',
    page: 'eastern-screech-owl',
    habitatTags: ['woodland', 'woodland-edge', 'suburban'],
  },
  {
    id: 'chimney-swift',
    name: 'Chimney Swift',
    scientificName: 'Chaetura pelagica',
    emoji: '🐦',
    shortDesc: 'Lives almost entirely in the air — bathes, drinks, and gathers nesting material on the wing. Its feet grip vertical surfaces only to roost or tend a nest; they cannot support the bird on a horizontal perch. Each bird consumes roughly 1,000 insects per day. The population has fallen 65 percent since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Chaetura_pelagica%2C_by_Lake_Erie%2C_Cleveland%2C_Ohio%2C_USA_339593191.jpg',
    photoCredit: 'Adam Jackson / CC0 via iNaturalist',
    page: 'chimney-swift',
    habitatTags: ['open-woodland', 'edge', 'suburban'],
  },
  {
    id: 'eastern-towhee',
    name: 'Eastern Towhee',
    scientificName: 'Pipilo erythrophthalmus',
    emoji: '🐦',
    shortDesc: 'Forages by jumping forward and kicking backward with both feet simultaneously — a double-scratch that launches leaf litter to expose invertebrates and seeds underneath. Nests and forages exclusively in dense shrubby undergrowth; mowing and shrub removal eliminate its habitat directly.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pipilo_erythrophthalmus_CT2.jpg/960px-Pipilo_erythrophthalmus_CT2.jpg',
    photoCredit: 'DickDaniels / CC BY-SA 3.0',
    page: 'eastern-towhee',
    habitatTags: ['woodland-edge', 'edge', 'leaf-litter'],
  },
  {
    id: 'wood-thrush',
    name: 'Wood Thrush',
    scientificName: 'Hylocichla mustelina',
    emoji: '🐦',
    shortDesc: 'Produces two notes simultaneously from separate chambers in its syrinx — the female evaluates repertoire size to gauge male survival history and territory quality. A breeding pair requires 6,000 to 9,000 caterpillars over the nesting season; Norway maple and Bradford pear host fewer than 10 caterpillar species combined, while a native oak hosts more than 500. Down 62 percent since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Wood_thrush_%28Hylocichla_mustelina%29_Peten.jpg',
    photoCredit: 'Charles J. Sharp / CC BY-SA 4.0',
    page: 'wood-thrush',
    habitatTags: ['woodland', 'woodland-edge', 'leaf-litter'],
  },
  {
    id: 'eastern-meadowlark',
    name: 'Eastern Meadowlark',
    scientificName: 'Sturnella magna',
    emoji: '🐦',
    shortDesc: 'The male knows 50 to 100 distinct song types and delivers them at rates exceeding 200 songs per hour at dawn during peak breeding season — singing from fence posts with the yellow breast flashing while the streaked back disappears into dry grass. The population has fallen 75 percent since 1966, driven by loss of the 25-to-30-acre grassland blocks the species needs to breed.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sturnella_magna1.jpg/960px-Sturnella_magna1.jpg',
    photoCredit: 'USFWS / Public Domain',
    page: 'eastern-meadowlark',
    habitatTags: ['meadow', 'open-land', 'edge'],
  }
]

interface SpeciesGalleryProps {
  onNavigate: (page: Page) => void
}

const HABITAT_TAGS = [
  { id: 'all', label: 'All Habitats' },
  { id: 'meadow', label: 'Meadow & Prairie' },
  { id: 'woodland', label: 'Woodland' },
  { id: 'woodland-edge', label: 'Woodland Edge' },
  { id: 'wetland', label: 'Wetland' },
  { id: 'garden', label: 'Garden' },
  { id: 'edge', label: 'Edge Habitat' },
  { id: 'leaf-litter', label: 'Leaf Litter' },
  { id: 'open-land', label: 'Open Land' },
]

const STATUS_LABELS: Record<Status, string> = {
  common: 'Common',
  declining: 'Declining',
  endangered: 'Endangered',
}

const STATUS_COLORS: Record<Status, string> = {
  common: '#2e7d32',
  declining: '#f57c00',
  endangered: '#c62828',
}

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
  return (
    <div className="page">
      <section className="hero" style={{ paddingBottom: '1rem' }}>
        <div className="hero__eyebrow">All Species</div>
        <h1>The Species Gallery</h1>
        <p className="hero__lead">
          Every species on this site — butterflies, birds, frogs, mammals, and plants — with a
          short description of what makes each one worth noticing. Click any card to read the
          full profile.
        </p>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2rem' }}>
        {SPECIES.filter(s => s.page !== null).map((species) => (
          <div
            key={species.id}
            className="species-card"
            onClick={() => species.page && onNavigate(species.page)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && species.page) {
                onNavigate(species.page)
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="species-card__image-wrap">
              <img
                src={species.photo}
                alt={species.name}
                className="species-card__image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = PHOTO_FALLBACK
                }}
              />
            </div>
            <div className="species-card__body">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h3 className="species-card__name">{species.emoji} {species.name}</h3>
                <span
                  className="species-card__status"
                  style={{ color: STATUS_COLORS[species.status] }}
                >
                  {STATUS_LABELS[species.status]}
                </span>
              </div>
              <p className="species-card__sci-name">{species.scientificName}</p>
              <p className="species-card__desc">{species.shortDesc}</p>
              <div className="species-card__tags">
                {species.habitatTags.map(tag => (
                  <span key={tag} className="species-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '3rem' }} aria-labelledby="photo-credits-heading">
        <h2 id="photo-credits-heading">Photo Credits</h2>
        <p>
          All photographs are sourced from Wikimedia Commons or iNaturalist under Creative Commons
          licenses (CC BY 2.0, CC BY-SA 3.0, CC BY-SA 4.0, or CC BY-NC 4.0). No modifications were made.
        </p>
      </section>
    </div>
  )
}
