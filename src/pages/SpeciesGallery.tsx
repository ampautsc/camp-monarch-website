import type { Page } from '../App'

// Photo data — Wikimedia Commons (CC BY-SA) and iNaturalist open-data (CC BY-NC).
// Verified 2026-05-13. Attribution listed at bottom of page.
// vis-001, vis-002, vis-003, vis-004: real subject photography, card-top strip format.
const PHOTO_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="100%" height="100%" fill="%23d4e9d0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="%23555">🦋</text></svg>'

interface Species {
  page: string
  name: string
  tagline: string
  photo: string
  alt: string
  attr: string
}

interface SpeciesGalleryProps {
  onNavigate: (page: string) => void
}

const SPECIES: Species[] = [
  {
    page: 'monarch-life',
    name: "Monarch Butterfly",
    tagline: "3,000-mile migrator. Milkweed specialist. 80% population decline since the 1990s.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg',
    alt: "Monarch butterfly with wings spread, showing orange and black pattern",
    attr: "Kenneth Dwain Harrelson / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'tiger-swallowtail',
    name: "Tiger Swallowtail",
    tagline: "Up to 5.5-inch wingspan. Depends on native host trees from egg to adult.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eastern_tiger_swallowtail_Papilio_glaucus.jpg/960px-Eastern_tiger_swallowtail_Papilio_glaucus.jpg',
    alt: "Tiger swallowtail butterfly on flower, showing yellow and black tiger-striped wings",
    attr: "Wikimedia Commons / Public Domain",
  },
  {
    page: 'fireflies',
    name: "Fireflies",
    tagline: "A chemical language written in light. Disappearing from lawns across the continent.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Photinus_pyralis_Firefly_3.jpg/960px-Photinus_pyralis_Firefly_3.jpg',
    alt: "Firefly in flight against dark background, showing bioluminescent glow",
    attr: "Terry Priest / CC BY-SA 2.0 / Wikimedia Commons",
  },
  {
    page: 'native-bees',
    name: "Native Bees",
    tagline: "4,000 species. Most nest in the ground. Wildly more effective than honeybees on native plants.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Apis_mellifera_flying_2.jpg/960px-Apis_mellifera_flying_2.jpg',
    alt: "Native bee in flight near flower",
    attr: "Muhammad Mahdi Karim / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'american-bumble-bee',
    name: "American Bumble Bee",
    tagline: "Federally threatened since 2025. 89% population decline. A colony that starts from one queen.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg',
    alt: "American bumble bee foraging on rough blazingstar, a native prairie wildflower",
    attr: "Angella Moorehouse / CC BY-SA 4.0 / Wikimedia Commons",
  },
  {
    page: 'box-turtles',
    name: "Box Turtle",
    tagline: "Home range under 2 acres. Lives 50+ years. Cannot escape roads — or lawn mowers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Box_turtle_(Terrapene_carolina_carolina)_in_Prospect_Park_(61573).jpg/960px-Box_turtle_(Terrapene_carolina_carolina)_in_Prospect_Park_(61573).jpg',
    alt: "Eastern box turtle on forest floor showing orange and brown patterned shell",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
  },
  {
    page: 'gray-tree-frogs',
    name: "Gray Tree Frog",
    tagline: "Antifreeze in its cells. A living barometer of your yard's insect health.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/GrayTreefrog.jpg/960px-GrayTreefrog.jpg',
    alt: "Gray tree frog clinging to branch showing camouflaged gray-green skin",
    attr: "Ltshears / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'downy-woodpecker',
    name: "Downy Woodpecker",
    tagline: "Drills bark for wood-boring larvae. Your best ally against ash borer.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Downy_Woodpecker.jpg/960px-Downy_Woodpecker.jpg',
    alt: "Downy woodpecker on tree bark showing black and white patterned plumage",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'baltimore-oriole',
    name: "Baltimore Oriole",
    tagline: "Weaves a 4-inch hanging nest. Eats gypsy moth caterpillars others won't touch.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Icterus_galbula_-Chautauqua_County%2C_New_York%2C_USA-male-8_%281%29.jpg/960px-Icterus_galbula_-Chautauqua_County%2C_New_York%2C_USA-male-8_%281%29.jpg',
    alt: "Male Baltimore oriole showing bright orange and black plumage",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'northern-cardinal',
    name: "Northern Cardinal",
    tagline: "Non-migratory, year-round resident. The male's color comes entirely from diet.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cardinal_male_-_overview.jpg/960px-Cardinal_male_-_overview.jpg',
    alt: "Male northern cardinal showing vivid red plumage with black mask",
    attr: "TJ Gehling / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'eastern-bluebird',
    name: "Eastern Bluebird",
    tagline: "Cavity nester nearly wiped out by invasive starlings. Nest boxes brought it back.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sialia_sialis_-_male.jpg/960px-Sialia_sialis_-_male.jpg',
    alt: "Male eastern bluebird perched on wooden post showing vivid blue back and orange breast",
    attr: "Galawebdesign / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'black-capped-chickadee',
    name: "Black-capped Chickadee",
    tagline: "Eats 6,000–9,000 caterpillars to raise one clutch. Native trees are the engine.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Black-capped_Chickadee_by_Steve_Maslowski.jpg/960px-Black-capped_Chickadee_by_Steve_Maslowski.jpg',
    alt: "Black-capped chickadee perched on branch showing black cap and white cheeks",
    attr: "Steve Maslowski / USFWS / Public Domain",
  },
  {
    page: 'ruby-throated-hummingbird',
    name: "Ruby-throated Hummingbird",
    tagline: "500-mile non-stop Gulf crossing. Weighs 3 grams. Needs native tubular flowers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ruby-throated_hummingbird_by_J._W._Slade_%26_E._S._Gaffney_from_NPS.jpg/960px-Ruby-throated_hummingbird_by_J._W._Slade_%26_E._S._Gaffney_from_NPS.jpg',
    alt: "Ruby-throated hummingbird hovering near flower showing iridescent green back",
    attr: "J.W. Slade & E.S. Gaffney / NPS / Public Domain",
  },
  {
    page: 'american-goldfinch',
    name: "American Goldfinch",
    tagline: "Delayed nesting waits for thistle and coneflower. Seed specialist year-round.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/American_Goldfinch-27527-2.jpg/960px-American_Goldfinch-27527-2.jpg',
    alt: "Male American goldfinch in breeding plumage showing bright yellow body and black wings",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'american-robin',
    name: "American Robin",
    tagline: "Detects earthworms by both sight and sound. Pesticide-vulnerable and omnipresent.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Turdus-migratorius-002.jpg/960px-Turdus-migratorius-002.jpg',
    alt: "American robin on lawn showing orange-red breast and dark back",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'indigo-bunting',
    name: "Indigo Bunting",
    tagline: "Navigates by the stars. Nests in shrubby edges. One of the bluest birds alive.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Indigo_bunting.jpg/960px-Indigo_bunting.jpg',
    alt: "Male indigo bunting showing brilliant iridescent blue plumage",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'green-darner',
    name: "Green Darner",
    tagline: "Migrates thousands of miles like a monarch. Predator of mosquitoes, gnats, and moths.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Anax_junius_male_up.jpg/960px-Anax_junius_male_up.jpg',
    alt: "Male green darner dragonfly showing green thorax and blue abdomen",
    attr: "Seney Natural History Association / CC BY-SA 2.0 / Wikimedia Commons",
  },
  {
    page: 'garter-snake',
    name: "Garter Snake",
    tagline: "Eats 100+ slugs per season. Harmless, common, and disappearing from managed yards.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Common_garter_snake.jpg/960px-Common_garter_snake.jpg',
    alt: "Common garter snake on ground showing striped pattern in green and yellow",
    attr: "Ltshears / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'dark-eyed-junco',
    name: "Dark-eyed Junco",
    tagline: "Seeds in winter, insects in summer. Nests on the ground — leave the edges alone.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dark-eyed_Junco_0.jpg/960px-Dark-eyed_Junco_0.jpg',
    alt: "Dark-eyed junco showing slate-gray hood and white outer tail feathers",
    attr: "Cephas / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'eastern-chipmunk',
    name: "Eastern Chipmunk",
    tagline: "Forest seed-disperser and burrow engineer. A key link in food webs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg/960px-Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg',
    alt: "Eastern chipmunk with cheeks stuffed full of seeds",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'spring-peeper',
    name: "Spring Peeper",
    tagline: "Thumbnail-sized frog that announces spring. Breeds only in clean, fishless pools.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Spring_peeper_psurvey.jpg/960px-Spring_peeper_psurvey.jpg',
    alt: "Spring peeper frog perched on vegetation showing small size and X marking on back",
    attr: "USFWS / Public Domain",
  },
  {
    page: 'toad',
    name: "American Toad",
    tagline: "Eats 1,000 insects per night. Suburban gardens are prime toad territory.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Anaxyrus_americanus_PJC1.jpg/960px-Anaxyrus_americanus_PJC1.jpg',
    alt: "American toad on forest floor showing bumpy brown skin",
    attr: "PJ Campillo / Public Domain",
  },
  {
    page: 'little-brown-bat',
    name: "Little Brown Bat",
    tagline: "Eats 1,200 insects per hour. White-nose syndrome has killed 6.7 million of them.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Little_brown_bat_mm.jpg/960px-Little_brown_bat_mm.jpg',
    alt: "Little brown bat roosting, showing brown fur and folded wings",
    attr: "Ann Froschauer / USFWS / Public Domain",
  },
  {
    page: 'virginia-opossum',
    name: "Virginia Opossum",
    tagline: "Eats up to 5,000 ticks per season. Immune to rabies. North America's only marsupial.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Opossum_2.jpg',
    alt: "Virginia opossum facing the camera, white face and alert dark eyes",
    attr: "Cody Pope / CC BY-SA 2.5 / Wikimedia Commons",
  },
  {
    page: 'wood-thrush',
    name: "Wood Thrush",
    tagline: "Two voices, one throat. Down 62% since 1966. Still foraging in your leaf litter.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hylocichla_mustelina_-_Wood_thrush.jpg/960px-Hylocichla_mustelina_-_Wood_thrush.jpg',
    alt: "Wood Thrush on forest floor showing spotted white breast and rusty-brown back",
    attr: "U.S. Fish & Wildlife Service / Wikimedia Commons / Public Domain",
  },
  {
    page: 'eastern-screech-owl',
    name: "Eastern Screech Owl",
    tagline: "Master of suburban camouflage. Down 38% since 1970. Killed by rodenticide in 96% of cases.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Eastern_Screech_Owl_in_hole.jpg/960px-Eastern_Screech_Owl_in_hole.jpg',
    alt: "Eastern screech owl peering from tree cavity showing cryptic bark-patterned plumage",
    attr: "Googie man / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'polyphemus-moth',
    name: "Polyphemus Moth",
    tagline: "6-inch wingspan. Named for the Cyclops. Cannot eat as an adult — lives only to mate.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Antheraea_polyphemus_Cramer_1776.jpg/960px-Antheraea_polyphemus_Cramer_1776.jpg',
    alt: "Polyphemus moth with wings spread showing large eyespots and russet-brown coloring",
    attr: "Wikimedia Commons / Public Domain",
  },
  {
    page: 'luna-moth',
    name: "Luna Moth",
    tagline: "Pale green wings. Long tails that jam bat sonar. Hatches, mates, and dies in one week.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Actias_luna_Penn_State_Univ.jpg/960px-Actias_luna_Penn_State_Univ.jpg',
    alt: "Luna moth resting on bark showing pale green wings with long flowing tails",
    attr: "Photo by Greg Hume / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'cecropia-moth',
    name: "Cecropia Moth",
    tagline: "North America's largest native moth — 7-inch wingspan. A caterpillar of the canopy.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hyalophora_cecropia.jpg/960px-Hyalophora_cecropia.jpg',
    alt: "Cecropia moth with wings spread showing dramatic red, white, and brown wing pattern",
    attr: "Didbygraham / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'common-nighthawk',
    name: "Common Nighthawk",
    tagline: "Drinks on the wing. Eats 500 mosquitoes per hour. Nests on flat gravel roofs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Common_nighthawk_-_Caprimulgus_carolinensis.jpg/960px-Common_nighthawk_-_Caprimulgus_carolinensis.jpg',
    alt: "Common nighthawk perched on branch showing cryptic brown and white patterned plumage",
    attr: "US Fish and Wildlife Service / Public Domain",
  },
  {
    page: 'chimney-swift',
    name: "Chimney Swift",
    tagline: "Eats 1,000 insects per day — entirely in the air. Down 65% since 1966. Lives in your chimney.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Chaetura_pelagica%2C_by_Lake_Erie%2C_Cleveland%2C_Ohio%2C_USA_339593191.jpg',
    alt: "Chimney swift in flight over Lake Erie showing cigar-shaped body and long swept-back wings",
    attr: "Adam Jackson / CC0 / iNaturalist via Wikimedia Commons",
  },
  {
    page: 'purple-martin',
    name: "Purple Martin",
    tagline: "North America's largest swallow. Down 40% since 1966. Entirely dependent on human-provided housing in eastern North America.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Purple_Martin_%28Progne_subis%29_%287885320572%29.jpg/960px-Purple_Martin_%28Progne_subis%29_%287885320572%29.jpg',
    alt: "Male purple martin perched on a gourd rack showing entirely iridescent blue-black plumage",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'red-tailed-hawk',
    name: "Red-tailed Hawk",
    tagline: "North America's most common hawk. Over 90% test positive for rodenticide — from bait stations in suburban yards.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Red-tailed_Hawk_ad.jpg/960px-Red-tailed_Hawk_ad.jpg',
    alt: "Adult red-tailed hawk perched, showing the brick-red tail that names the species",
    attr: "USFWS / Public Domain / Wikimedia Commons",
  },
]

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
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

      <div className="species-grid">
        {SPECIES.map(species => (
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
                onError={e => { (e.target as HTMLImageElement).src = PHOTO_FALLBACK }}
              />
            </div>
            <div className="species-card__body">
              <div className="species-card__name">{species.name}</div>
              <div className="species-card__tagline">{species.tagline}</div>
              <div className="species-card__attr">{species.attr}</div>
            </div>
          </button>
        ))}
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
