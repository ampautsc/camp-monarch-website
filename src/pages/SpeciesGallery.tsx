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
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg',
    alt: "Monarch butterfly with wings spread, showing orange and black pattern",
    attr: "Kenneth Dwain Harrelson / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'tiger-swallowtail',
    name: "Tiger Swallowtail",
    tagline: "Up to 5.5-inch wingspan. Depends on native host trees from egg to adult.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pristine_Eastern_Tiger_Swallowtail.jpg/960px-Pristine_Eastern_Tiger_Swallowtail.jpg',
    alt: "Tiger swallowtail butterfly on flower, showing yellow and black tiger-striped wings",
    attr: "Wikimedia Commons / Public Domain",
  },
  {
    page: 'fireflies',
    name: "Fireflies",
    tagline: "A chemical language written in light. Disappearing from lawns across the continent.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Photuris_lucicrescens.jpg/960px-Photuris_lucicrescens.jpg',
    alt: "Firefly in flight against dark background, showing bioluminescent glow",
    attr: "Terry Priest / CC BY-SA 2.0 / Wikimedia Commons",
  },
  {
    page: 'native-bees',
    name: "Native Bees",
    tagline: "4,000 species. Most nest in the ground. Wildly more effective than honeybees on native plants.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg/960px-Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg',
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
    alt: "Gray tree frog clinging to a branch, showing mottled gray camouflage pattern",
    attr: "Ltshears / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'spring-peeper',
    name: "Spring Peeper",
    tagline: "A thumbnail-sized frog that announces spring. Requires both forest and wetland habitat within its range.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pseudacris_crucifer_spring_peeper.jpg/960px-Pseudacris_crucifer_spring_peeper.jpg',
    alt: "Spring peeper frog clinging to a plant stem showing brown X pattern on back",
    attr: "Evan Swanson / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'garter-snake',
    name: "Garter Snake",
    tagline: "The most widespread snake in North America. Eats slugs, snails, and invasive earthworms.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thamnophis_sirtalis_sirtalis_Wooster.jpg/960px-Thamnophis_sirtalis_sirtalis_Wooster.jpg',
    alt: "Eastern garter snake on leaf litter showing three yellow stripes on dark body",
    attr: "Tom Spinker / CC BY-NC-ND 2.0 / Wikimedia Commons",
  },
  {
    page: 'toad',
    name: "American Toad",
    tagline: "Eats up to 1,000 insects per night. Needs leaf litter, loose soil, and a shallow water source.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Anaxyrus_americanus_PJC1.jpg/960px-Anaxyrus_americanus_PJC1.jpg',
    alt: "American toad on leaf litter showing warty brown skin with white underside",
    attr: "Patrick Coin / CC BY-SA 2.5 / Wikimedia Commons",
  },
  {
    page: 'eastern-chipmunk',
    name: "Eastern Chipmunk",
    tagline: "Acorn retrieval engineer. A single chipmunk buries thousands of seeds per autumn.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tamias_striatus2.jpg/960px-Tamias_striatus2.jpg',
    alt: "Eastern chipmunk with cheek pouches full of seeds, showing bold white and black facial stripes",
    attr: "Gilles Gonthier / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'little-brown-bat',
    name: "Little Brown Bat",
    tagline: "1,200 insects per hour. 6.7 million dead from white-nose syndrome. On the brink.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Little_brown_bat_%28Myotis_lucifugus%29.jpg/960px-Little_brown_bat_%28Myotis_lucifugus%29.jpg',
    alt: "Little brown bat in flight, showing brown fur and wing membrane against dark background",
    attr: "National Park Service / Public Domain / Wikimedia Commons",
  },
  {
    page: 'virginia-opossum',
    name: "Virginia Opossum",
    tagline: "North America's only marsupial. Eats 90% of the ticks in any territory it walks through.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Virginia_Opossum_Didelphis_virginiana.jpg/960px-Virginia_Opossum_Didelphis_virginiana.jpg',
    alt: "Virginia opossum on a branch showing white face and gray fur",
    attr: "Cody Pope / CC BY-SA 2.5 / Wikimedia Commons",
  },
  {
    page: 'green-darner',
    name: "Green Darner",
    tagline: "One of the few migratory dragonflies. Eats mosquitoes, gnats, and small flies in midair.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Anax_junius_male.jpg/960px-Anax_junius_male.jpg',
    alt: "Male green darner dragonfly perched on vegetation showing brilliant green thorax and blue abdomen",
    attr: "Pixeltoo / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'downy-woodpecker',
    name: "Downy Woodpecker",
    tagline: "The most common woodpecker in North America. Excavates nest cavities that 30+ other species depend on.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Downy-woodpecker.jpg/960px-Downy-woodpecker.jpg',
    alt: "Downy woodpecker clinging to suet feeder showing black and white pattern and red crown patch",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'baltimore-oriole',
    name: "Baltimore Oriole",
    tagline: "Brilliant orange and black. Declined 33% since 1970. Needs tall native trees for its woven hanging nest.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Icterus_galbula_-Hammonasset_Beach_State_Park%2C_Madison%2C_Connecticut%2C_USA_-male-8.jpg/960px-Icterus_galbula_-Hammonasset_Beach_State_Park%2C_Madison%2C_Connecticut%2C_USA_-male-8.jpg',
    alt: "Male Baltimore oriole in orange and black plumage perched in leafy tree",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'northern-cardinal',
    name: "Northern Cardinal",
    tagline: "The most recognized backyard bird in North America. Needs dense native shrubs for nesting cover.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Northern_Cardinal_Male-27527-2.jpg/960px-Northern_Cardinal_Male-27527-2.jpg',
    alt: "Male northern cardinal in brilliant red plumage perched in winter tree",
    attr: "VJAnderson / CC BY-SA 4.0 / Wikimedia Commons",
  },
  {
    page: 'eastern-bluebird',
    name: "Eastern Bluebird",
    tagline: "Recovered from near-extinction through nest boxes. Still needs open native meadow to hunt insects.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Eastern_Bluebird_(Sialia_sialis)_male.jpg/960px-Eastern_Bluebird_(Sialia_sialis)_male.jpg',
    alt: "Male eastern bluebird perched on a branch showing brilliant blue back and rusty orange breast",
    attr: "Sandysphotos2009 / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'black-capped-chickadee',
    name: "Black-capped Chickadee",
    tagline: "Eats 6,000–9,000 caterpillars per nest. Requires native trees that grow the caterpillars it needs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Black-Capped-Chickadee.jpg/960px-Black-Capped-Chickadee.jpg',
    alt: "Black-capped chickadee clinging to a branch showing black cap and bib, white cheeks",
    attr: "Cephas / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'ruby-throated-hummingbird',
    name: "Ruby-throated Hummingbird",
    tagline: "1,500 wing beats per minute. Crosses the Gulf of Mexico nonstop. Needs tubular native flowers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ruby-Throated_Hummingbird.jpg/960px-Ruby-Throated_Hummingbird.jpg',
    alt: "Ruby-throated hummingbird in flight near red flower showing iridescent green back and ruby throat",
    attr: "Dick Daniels / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'american-goldfinch',
    name: "American Goldfinch",
    tagline: "100% plant-based diet. Nests later than any other songbird to align with native seed heads.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/American_Goldfinch_-_male.jpg/960px-American_Goldfinch_-_male.jpg',
    alt: "Male American goldfinch in bright yellow summer plumage perched on plant stem",
    attr: "Kevin Cole / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'american-robin',
    name: "American Robin",
    tagline: "Eats 14 feet of earthworms per day. The lawn bird most harmed by insecticides.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/960px-Turdus-migratorius-002.jpg',
    alt: "American robin on a lawn showing orange-red breast and gray-black back",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'indigo-bunting',
    name: "Indigo Bunting",
    tagline: "Electric blue against green. Navigates by stars. Needs native shrubby edges to nest.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/IndigoBuntingCottage.jpg/960px-IndigoBuntingCottage.jpg',
    alt: "Male indigo bunting perched on branch in brilliant all-blue breeding plumage",
    attr: "Ken Thomas / Public Domain / Wikimedia Commons",
  },
  {
    page: 'dark-eyed-junco',
    name: "Dark-eyed Junco",
    tagline: "'Snowbirds' that winter in our yards. Eat weed seeds that would germinate in spring.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dark-eyed_Junco_Junco_hyemalis.jpg/960px-Dark-eyed_Junco_Junco_hyemalis.jpg',
    alt: "Dark-eyed junco on snowy branch showing dark gray hood and white outer tail feathers",
    attr: "Cephas / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'common-nighthawk',
    name: "Common Nighthawk",
    tagline: "Eats thousands of insects per night in a single graceful aerial display. Down 57% since 1966.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Common_Nighthawk_portrait.jpg/960px-Common_Nighthawk_portrait.jpg',
    alt: "Common nighthawk in cryptic bark-patterned plumage, resting lengthwise along a tree branch",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'polyphemus-moth',
    name: "Polyphemus Moth",
    tagline: "A 6-inch wingspan built from one oak tree. Lives its adult life without eating a single meal.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Polyphemus_Moth_Antheraea_polyphemus_Vertical_2800px.jpg/960px-Polyphemus_Moth_Antheraea_polyphemus_Vertical_2800px.jpg',
    alt: "Polyphemus moth resting with wings spread showing four large eyespots",
    attr: "Kenneth Dwain Harrelson / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'luna-moth',
    name: "Luna Moth",
    tagline: "Pale green wings with tail streamers that jam bat sonar. Only a native tree can raise one.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Actias_luna_1.jpg/960px-Actias_luna_1.jpg',
    alt: "Luna moth with pale green wings and long sweeping tail streamers resting on bark",
    attr: "Dolovis / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'cecropia-moth',
    name: "Cecropia Moth",
    tagline: "North America's largest native moth — 7-inch wingspan. Its greatest threat arrived in 1906 from Europe.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Hyalophora_cecropia.jpg/960px-Hyalophora_cecropia.jpg',
    alt: "Cecropia moth with wings spread showing red, white, and brown banded pattern and feathery antennae",
    attr: "Didbygraham / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'wood-thrush',
    name: "Wood Thrush",
    tagline: "Two voices at once. 62% BBS decline. The bird whose song told you summer had arrived.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/WoodThrush23.jpg/960px-WoodThrush23.jpg',
    alt: "Wood thrush perched on a branch showing spotted brown breast and rusty brown head",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'eastern-screech-owl',
    name: "Eastern Screech Owl",
    tagline: "The owl in your backyard right now. 38% decline. 96% test positive for rodenticide.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Megascops_asio_-_Eastern_Screech_Owl_XL.jpg/960px-Megascops_asio_-_Eastern_Screech_Owl_XL.jpg',
    alt: "Eastern screech owl perched in tree cavity showing camouflage bark-patterned plumage and yellow eyes",
    attr: "Ómar Runólfsson / CC BY 2.0 / Wikimedia Commons",
  },
  {
    page: 'chimney-swift',
    name: "Chimney Swift",
    tagline: "Lives entirely on the wing. Eats 1,000 insects per day. Down 65% since 1966.",
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
  {
    page: 'eastern-meadowlark',
    name: "Eastern Meadowlark",
    tagline: "The voice of the American suburb — 75% gone since 1966. Grassland loss silenced it neighborhood by neighborhood.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Eastern_meadowlark_%28Sturnella_magna_mexicana%29_Orange_Walk.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    alt: "Eastern meadowlark perched on a fence post showing brilliant yellow breast with bold black V-collar",
    attr: "USFWS / Public Domain / Wikimedia Commons",
  },
  {
    page: 'american-kestrel',
    name: "American Kestrel",
    tagline: "North America's smallest falcon. Down 47% since 1966. Can be helped directly with a nest box and open grassland.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Falco-sparverius-001.jpg/960px-Falco-sparverius-001.jpg',
    alt: "Male American kestrel perched on a branch showing slate-blue wings, russet back and tail, and two bold black facial mustache marks",
    attr: "Simon Pierre Barrette / CC BY-SA 3.0 / Wikimedia Commons",
  },
  {
    page: 'brown-thrasher',
    name: "Brown Thrasher",
    tagline: "More than 2,000 song types — the largest confirmed repertoire of any North American bird. Georgia's state bird. Partners in Flight Watch List.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Toxostoma_rufum_CT2.jpg/960px-Toxostoma_rufum_CT2.jpg',
    alt: "Brown Thrasher perched in shrub showing rusty red-brown upperparts, streaked white breast, long tail, and distinctive bright yellow eye",
    attr: "DickDaniels / CC BY-SA 3.0 / Wikimedia Commons",
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
        {SPECIES.map(species => {
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
