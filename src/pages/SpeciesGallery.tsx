import type { Page } from '../App'

// Photo data — Wikimedia Commons (CC BY-SA) and iNaturalist open-data (CC BY-NC).
// Verified 2026-05-13. Attribution listed at bottom of page.
// vis-001, vis-002, vis-003, vis-004: real subject photography, card-top strip format.
const PHOTO_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="100%" height="100%" fill="%23e8ede4"/><text x="50%" y="50%" font-family="sans-serif" font-size="18" fill="%23666" text-anchor="middle" dy=".3em">Photo unavailable</text></svg>'

type Category = 'All' | 'Insects' | 'Birds' | 'Reptiles & Amphibians' | 'Mammals' | 'Plants'

interface Species {
  page: Page
  name: string
  tagline: string
  photo: string
  retryPhoto?: string
  alt: string
  attr: string
  category: Category
}

interface SpeciesGalleryProps {
  onNavigate: (page: Page) => void
}

const SPECIES: Species[] = [
  {
    page: 'monarch',
    name: "Monarch Butterfly",
    tagline: "2,000-mile migration powered entirely by milkweed and memory. 90% population decline since 1990. One yard at a time.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monarch_In_May.jpg/960px-Monarch_In_May.jpg',
    alt: "Monarch butterfly feeding on orange milkweed flowers in a sunny garden, wings spread to show the vivid orange-and-black stained-glass pattern",
    attr: "Kenneth Dwain Harrelson / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'fireflies',
    name: "Firefly",
    tagline: "A single female on your lawn can produce dozens of larvae — each one eating the slugs and snails you hate. Mow less, light less, let them flash.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Firefly_in_pieridae.jpg/960px-Firefly_in_pieridae.jpg',
    alt: "A firefly perched on a green leaf in daylight, its soft body and wing covers visible before the night display begins",
    attr: "Priyanka Iyer / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'luna-moth',
    name: "Luna Moth",
    tagline: "No mouth. No stomach. Seven days to find a mate, lay eggs, and die. Every light left on at night is a clock they can't afford.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Actias_luna_5440.jpg/960px-Actias_luna_5440.jpg',
    alt: "Luna moth resting on bark, lime-green wings fully spread, delicate tails trailing below — one of North America's most striking silk moths",
    attr: "Liam Wolff / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'american-bumble-bee',
    name: "Bumble Bee",
    tagline: "One in four North American bumble bee species is in serious decline. They need flower blooms from April to October — not a two-week azalea and done.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bumblebee_05.JPG/960px-Bumblebee_05.JPG',
    alt: "Bumble bee foraging on a purple coneflower, pollen basket on hind leg already packed — the fuzzy body and slow methodical movement distinguish it from wasps",
    attr: "Alvesgaspar / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'tiger-swallowtail',
    name: "Eastern Tiger Swallowtail",
    tagline: "Caterpillars need wild cherry, tulip poplar, or ash — not ornamental cherries sprayed every spring. The adult you see nectaring is only half the story.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Papilio_glaucus_on_Silene_virginica.jpg/960px-Papilio_glaucus_on_Silene_virginica.jpg',
    alt: "Eastern Tiger Swallowtail nectaring on fire pink, large yellow wings with black tiger stripes and blue hindwing patches fully visible",
    attr: "Derek Ramsey / CC BY-SA 2.5 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'red-banded-hairstreak',
    name: "Red-banded Hairstreak",
    tagline: "Lays eggs not on plants but on fallen leaves — specifically the leaf litter beneath sumac, oaks, and wax myrtle. Your leaf blower is erasing a nursery.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Calycopis_cecrops.jpg/960px-Calycopis_cecrops.jpg',
    alt: "Red-banded Hairstreak butterfly resting with wings closed, showing the bold red-orange band crossing the gray underwing and the delicate hairlike tails",
    attr: "Patrick Coin / CC BY-SA 2.5 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'spicebush-swallowtail',
    name: "Spicebush Swallowtail",
    tagline: "Caterpillars fold a spicebush leaf around themselves and live inside — a tent stitched from silk. Remove the spicebush and the swallowtail disappears.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Spicebush_Swallowtail_Butterfly_on_Lantana.jpg/960px-Spicebush_Swallowtail_Butterfly_on_Lantana.jpg',
    alt: "Spicebush Swallowtail nectaring on lantana, black wings showing iridescent blue-green sheen and orange spots along the hindwing margin",
    attr: "Bob Peterson / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'hackberry-emperor',
    name: "Hackberry Emperor",
    tagline: "Eats no nectar. Drinks from mud puddles, rotting fruit, and tree sap. Larvae eat only hackberry leaves — and hackberry is native to nearly every US county.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hackberry_Emperor_%28Asterocampa_celtis%29.jpg/960px-Hackberry_Emperor_%28Asterocampa_celtis%29.jpg',
    alt: "Hackberry Emperor butterfly perched on a leaf with wings open, brown-orange wings with white spots and eyespots visible — often lands on people seeking salts",
    attr: "Steven Kersting / CC BY 4.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'twelve-spotted-skimmer',
    name: "Twelve-spotted Skimmer",
    tagline: "Each dragonfly eats hundreds of mosquitoes per day. Larvae spend two years underwater doing the same. A small backyard pond funds the whole operation.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Libellula_pulchella.jpg/960px-Libellula_pulchella.jpg',
    alt: "Twelve-spotted Skimmer dragonfly perched horizontally on a twig, twelve dark wing spots and white spots between them visible against the sky",
    attr: "Bruce Marlin / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'wild-bergamot',
    name: "Wild Bergamot",
    tagline: "Blooms July through September when most garden plants have quit. Bumble bees, hawk moths, and hummingbirds all depend on that second-half schedule.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Monarda_fistulosa_2.jpg/960px-Monarda_fistulosa_2.jpg',
    alt: "Wild bergamot in full bloom, lavender flower head with tubular florets radiating outward — native prairie mint blooming in midsummer sun",
    attr: "Superior National Forest / CC BY 2.0 / Wikimedia Commons",
    category: 'Plants',
  },
  {
    page: 'eastern-red-cedar',
    name: "Eastern Red Cedar",
    tagline: "Produces berries every winter when almost nothing else does. Cedar waxwings, yellow-rumped warblers, and mockingbirds all run on this fruit in February.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Juniperus_virginiana_Ottawa.jpg/960px-Juniperus_virginiana_Ottawa.jpg',
    alt: "Eastern Red Cedar with blue-gray berries clustered among scale-like foliage — the waxy berry coating gives cedar waxwings their yellow wingtip flash",
    attr: "D. Gordon E. Robertson / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Plants',
  },
  {
    page: 'box-turtles',
    name: "Eastern Box Turtle",
    tagline: "Needs forest, meadow, and wetland edges — all within one acre. A turtle born in your yard may still be living there 100 years from now.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Terrapene_carolina_carolina_-_Eastern_Box_Turtle%2C_male.jpg/960px-Terrapene_carolina_carolina_-_Eastern_Box_Turtle%2C_male.jpg',
    alt: "Eastern Box Turtle on the forest floor, orange and yellow patterned shell, red eye of a male visible — pausing mid-crossing on a warm spring afternoon",
    attr: "Peter Paplanus / CC BY 2.0 / Wikimedia Commons",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'toad',
    name: "American Toad",
    tagline: "A single toad eats up to 1,000 insects and slugs per night. They need loose soil to overwinter, which means no compacted lawns, no landscape fabric.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/American_Toad_crop.jpg/960px-American_Toad_crop.jpg',
    alt: "American Toad sitting in leaf litter, warty brown skin matching the forest floor — the prominent parotoid glands behind the eyes distinguish it from tree frogs",
    attr: "Brian Gratwicke / CC BY 2.0 / Wikimedia Commons",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'five-lined-skink',
    name: "Five-lined Skink",
    tagline: "The most widespread lizard in eastern North America. Needs basking rocks, rotting logs, and loose leaf litter — the three things most tidy yards remove.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Five-lined_skink_%28Plestiodon_fasciatus%29_male.jpg/960px-Five-lined_skink_%28Plestiodon_fasciatus%29_male.jpg',
    alt: "Five-lined Skink in breeding colors — orange-red head of a mature male, faint blue tail remnant, glossy scales catching the sun on a warm flat rock",
    attr: "Peter Paplanus / CC BY 2.0 / Wikimedia Commons",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'spring-peeper',
    name: "Northern Spring Peeper",
    tagline: "Fingernail-sized. Deafening chorus that travels a mile on a still night. Needs intact wet woodland within walking distance of where it hatches.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pseudacris_crucifer_Cope_edit.jpg/960px-Pseudacris_crucifer_Cope_edit.jpg',
    alt: "Northern Spring Peeper clinging to a thin branch, translucent skin and X-shaped marking on its back visible — tiny enough to sit on a fingernail",
    attr: "John J. Mosesso / CC BY 3.0 / Wikimedia Commons",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'gray-tree-frogs',
    name: "Eastern Gray Treefrog",
    tagline: "Changes color from green to gray to brown in minutes, matching bark or lichen. Needs both a pond to breed and mature trees to hunt — one without the other doesn't work.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hyla_versicolor2.jpg/960px-Hyla_versicolor2.jpg',
    alt: "Eastern Gray Treefrog clinging to rough bark, skin mottled gray-green to match lichen, toe pads splayed — perfectly still against a tree trunk",
    attr: "Brian Gratwicke / CC BY 2.0 / Wikimedia Commons",
    category: 'Reptiles & Amphibians',
  },
  {
    page: 'little-brown-bat',
    name: "Little Brown Bat",
    tagline: "One bat eats 1,000 mosquitoes per hour. White-nose syndrome has killed millions since 2006. A bat box on the right wall can house a colony of 200.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Little_brown_bat_Jan_Isley_NCWRC.jpg/960px-Little_brown_bat_Jan_Isley_NCWRC.jpg',
    alt: "Little brown bat held gently for examination, showing the thin wing membrane and small furry face — the species most likely to roost in a backyard bat box",
    attr: "NC Wildlife Resources Commission / CC BY-SA 2.5 / Wikimedia Commons",
    category: 'Mammals',
  },
  {
    page: 'virginia-opossum',
    name: "Virginia Opossum",
    tagline: "Eats up to 4,000 ticks per week during grooming — and is nearly immune to rabies. North America's only marsupial doesn't ask for much: fruit, water, and a brush pile.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Baby_Opossum.jpg/960px-Baby_Opossum.jpg',
    alt: "Virginia Opossum peeking out from dense foliage, pointed snout and dark eyes visible — the white face and naked ears are distinctive in any light",
    attr: "Cody Pope / CC BY-SA 2.5 / Wikimedia Commons",
    category: 'Mammals',
  },
  {
    page: 'woodland-vole',
    name: "Woodland Vole",
    tagline: "Tunnels through the top 4 inches of soil, aerating roots and moving fungi. Hawks, foxes, and owls all depend on them. Without prey, the predators go elsewhere.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Microtus_pinetorum.jpg/960px-Microtus_pinetorum.jpg',
    alt: "Woodland Vole in leaf litter, compact chestnut-brown body, tiny ears barely visible, blunt snout adapted for pushing through the soil — smaller and rounder than a meadow vole",
    attr: "USGS / Public Domain / Wikimedia Commons",
    category: 'Mammals',
  },
  {
    page: 'ruby-throated-hummingbird',
    name: "Ruby-throated Hummingbird",
    tagline: "The only hummingbird that breeds in eastern North America. Needs native tubular flowers from May through September — hummingbird feeders alone won't cut it.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ruby-throated_hummingbird_in_flight%2C_transitioning_from_hovering_to_perching_%28cropped%29.jpg/582px-Ruby-throated_hummingbird_in_flight%2C_transitioning_from_hovering_to_perching_%28cropped%29.jpg',
    alt: "Ruby-throated Hummingbird in mid-flight, iridescent green back and the flash of red at the throat visible — wings moving at 50 beats per second",
    attr: "USFWS / Public Domain",
    category: 'Birds',
  },
  {
    page: 'wood-thrush',
    name: "Wood Thrush",
    tagline: "Needs 25 acres of intact forest to successfully raise a brood. A 61% population decline since 1966. The flute-like ee-oh-lay is disappearing from eastern forests.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Hylocichla_mustelina.jpg/960px-Hylocichla_mustelina.jpg',
    alt: "Wood Thrush perched in dappled forest light, rich rufous head and nape fading to olive-brown on the back, bold round spots covering the white breast",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'chimney-swift',
    name: "Chimney Swift",
    tagline: "Spends its entire life in the air except when nesting. Eats 1,000 flying insects per day. Loses a nest site every time an old chimney is capped or demolished.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chimney_Swift_flock.jpg/960px-Chimney_Swift_flock.jpg',
    alt: "Flock of Chimney Swifts in flight against a pale sky, cigar-shaped bodies and rapid wingbeats visible — they look like flying cigars with no apparent tail",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'eastern-bluebird',
    name: "Eastern Bluebird",
    tagline: "Nearly went extinct in the 20th century. Nest boxes brought them back. They still need open lawns with bare soil patches — and no pesticides killing the insects they hunt.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Eastern_Bluebird-27527-2.jpg/960px-Eastern_Bluebird-27527-2.jpg',
    alt: "Male Eastern Bluebird perched on a fence post, vivid blue back and wings, rusty-orange breast catching the morning light",
    attr: "Steve Maslowski / USFWS / Public Domain",
    category: 'Birds',
  },
  {
    page: 'bank-swallow',
    name: "Bank Swallow",
    tagline: "Digs nest tunnels up to three feet deep in vertical sand banks — the same banks that erosion control and bank stabilization projects eliminate. North America's smallest swallow.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Bank_swallow_at_Basha_Kill_WMA_%28cropped%29.jpg/960px-Bank_swallow_at_Basha_Kill_WMA_%28cropped%29.jpg',
    alt: "Bank Swallow perched at the entrance of its nest burrow, brown back and distinctive brown chest band visible — showing the compact, purposeful posture of a bird mid-nesting",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'purple-martin',
    name: "Purple Martin",
    tagline: "Entirely dependent on human-supplied housing east of the Rockies. Scouts arrive in February — put the housing up before they do, or they'll move on.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Purple_martin_pair_-_natures_pics.jpg/960px-Purple_martin_pair_-_natures_pics.jpg',
    alt: "Purple Martin pair perched together, deep iridescent purple-blue male alongside the gray-bellied female — both glossy-feathered cavity nesters that have traded hollow trees for martin houses",
    attr: "Ken Thomas / Public Domain / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'cerulean-warbler',
    name: "Cerulean Warbler",
    tagline: "Lives in the canopy of mature deciduous forest — 60-foot oaks minimum. 70% population decline since 1966. You can't restore this species with shrubs.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Setophaga_cerulea_-_Cerulean_Warbler_%28male%29.jpg/960px-Setophaga_cerulea_-_Cerulean_Warbler_%28male%29.jpg',
    alt: "Male Cerulean Warbler perched in leafy canopy, sky-blue back and crown, white underparts with a thin dark necklace band across the chest",
    attr: "Ómar Runólfsson / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'whip-poor-will',
    name: "Whip-poor-will",
    tagline: "Nests directly on the ground in open woodland — no nest, just a patch of dead leaves. Light pollution disrupts their nighttime hunting and throws off breeding timing.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Antrostomus_vociferus_-_Eastern_Whip-poor-will_%28cropped%29.jpg/960px-Antrostomus_vociferus_-_Eastern_Whip-poor-will_%28cropped%29.jpg',
    alt: "Eastern Whip-poor-will roosting on a horizontal branch, bark-patterned brown and gray plumage making it nearly invisible — the wide gape and large dark eye are the only clear features",
    attr: "Dominic Sherony / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'ovenbird',
    name: "Ovenbird",
    tagline: "Walks the forest floor like a tiny professor — orange crown stripe, spotted breast, louder-than-expected teacher teacher teacher call. Needs unbroken interior forest. Edge is not enough.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Seiurus_aurocapilla_-USA-8.jpg/960px-Seiurus_aurocapilla_-USA-8.jpg',
    alt: "Ovenbird standing on a mossy log, olive-brown back, heavily streaked breast, and orange crown stripe with black borders — resembling a miniature thrush in forest light",
    attr: "Ómar Runólfsson / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'red-eyed-vireo',
    name: "Red-eyed Vireo",
    tagline: "Sings up to 20,000 phrases per day — the most persistent singer in the eastern forest. Needs large deciduous trees to hang its cup nest from a branch fork.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Red-eyed_Vireo.jpg/960px-Red-eyed_Vireo.jpg',
    alt: "Red-eyed Vireo perched in leaf canopy, gray crown with white eyebrow stripe and the namesake ruby-red eye visible in the dappled light",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'veery',
    name: "Veery",
    tagline: "Migrates at night using stars and Earth's magnetic field — and sings a descending spiral call that sounds like it was recorded inside a drain pipe. Needs moist forest with dense shrub cover.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Catharus_fuscescens_-_Veery_%28cropped%29.jpg/960px-Catharus_fuscescens_-_Veery_%28cropped%29.jpg',
    alt: "Veery perched on a branch in dappled light, warm tawny-brown back, lightly spotted breast — the most subtly marked of the spotted thrushes and one of the hardest to see",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'acadian-flycatcher',
    name: "Acadian Flycatcher",
    tagline: "Nests in the understory of mature forest, always over a stream or ravine. Requires intact canopy above and running water below — the two things development removes first.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Empidonax_virescens_-_Acadian_flycatcher_%28cropped%29.jpg/960px-Empidonax_virescens_-_Acadian_flycatcher_%28cropped%29.jpg',
    alt: "Acadian Flycatcher perched on a thin branch in forest understory, olive-green back, two white wing bars, pale eye ring — understated plumage typical of Empidonax flycatchers",
    attr: "Ómar Runólfsson / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'american-redstart',
    name: "American Redstart",
    tagline: "Flashes orange-and-black wings like a living strobe to flush insects from foliage — then catches them mid-air. Needs both mature forest for breeding and dense shrubs for migrating.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Setophaga_ruticilla_-_American_Redstart_%28male%29_%28cropped%29.jpg/960px-Setophaga_ruticilla_-_American_Redstart_%28male%29_%28cropped%29.jpg',
    alt: "Male American Redstart in full breeding plumage, bold black and orange pattern on wings and tail, white belly — one of the most visually striking warblers in eastern North America",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
  {
    page: 'scarlet-tanager',
    name: "Scarlet Tanager",
    tagline: "The male's red-and-black plumage is the most vivid in the eastern forest — and he spends most of his life hidden in the oak canopy 40 feet overhead. Needs large, unbroken forest tracts.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Scarlet_tanager.jpg/960px-scarlet_tanager.jpg',
    alt: "Male Scarlet Tanager perched on a branch, flame-red body and jet-black wings in full breeding color — the contrast is startling even through binoculars at 40 feet",
    attr: "Dan Pancamo / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'hairy-woodpecker',
    name: "Hairy Woodpecker",
    tagline: "Excavates cavities used by 30+ other species after it's done with them. Needs dead wood — the one thing a 'clean' yard systematically removes.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hairy_Woodpecker_%28Picoides_villosus%29%2C_Canadian_Museum_of_Nature_grounds.jpg/960px-Hairy_Woodpecker_%28Picoides_villosus%29%2C_Canadian_Museum_of_Nature_grounds.jpg',
    alt: "Hairy Woodpecker clinging to a dead snag, black-and-white plumage and long chisel bill visible — actively excavating bark to reach beetle larvae beneath",
    attr: "D. Gordon E. Robertson / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'eastern-towhee',
    name: "Eastern Towhee",
    tagline: "Scratches through leaf litter with both feet simultaneously — a two-footed backwards kick that no other common bird does. Needs dense shrubby edges and deep leaf litter to survive.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pipilo_erythrophthalmus.jpg/960px-Pipilo_erythrophthalmus.jpg',
    alt: "Male Eastern Towhee perched on a shrub branch, black hood and back, rufous flanks, white belly, red eye catching the light — a large sparrow built for ground foraging",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'indigo-bunting',
    name: "Indigo Bunting",
    tagline: "The male is not actually blue — the feathers have no blue pigment. It's all light diffraction. Navigates migration by the stars. Nests in shrubby edge habitat that is disappearing.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Indigo_bunting_-_natures_pics_%28edited%29.jpg/960px-Indigo_bunting_-_natures_pics_%28edited%29.jpg',
    alt: "Male Indigo Bunting perched on a stem, saturated blue plumage shimmering in direct sunlight — the iridescence shifts toward black in shade",
    attr: "Ken Thomas / CC0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'brown-creeper',
    name: "Brown Creeper",
    tagline: "Spirals up every trunk from base to canopy, never descending. 40% population decline since 1966. Needs loose bark flaps to nest.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Certhia_americana_CT2.jpg/960px-Certhia_americana_CT2.jpg',
    alt: "Brown Creeper pressed flat against a tree trunk, decurved bill inserted into a bark crevice — camouflage so complete the bird is nearly invisible until it moves",
    attr: "i_got_the_fever / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'hermit-thrush',
    name: "Hermit Thrush",
    tagline: "The only spotted thrush that overwinters in the eastern US — stays because it can shift from insects to native berries when the insect supply collapses.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hermit_Thrush_0777vv_%28cloudy%29.jpg/960px-Hermit_Thrush_0777vv_%28cloudy%29.jpg',
    alt: "Hermit Thrush perched on a branch, spotted breast visible, rufous tail raised in the slow upward pump that distinguishes it from every other spotted thrush",
    attr: "Dan Pancamo / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'eastern-wood-pewee',
    name: "Eastern Wood-Pewee",
    tagline: "Catches flying insects in mid-air from a dead branch at 30 feet, returning to the same perch within inches. Breeding Bird Survey: 37% fewer than 1966.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg/960px-Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg',
    alt: "Eastern Wood-Pewee perched on a bare dead branch against open sky — small olive-gray flycatcher with two pale wing bars, upright posture, and slightly peaked crown",
    attr: "Wikimedia Commons / CC BY-SA 3.0",
    category: 'Birds',
  },
]

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const filtered = activeCategory === 'All' ? SPECIES : SPECIES.filter(s => s.category === activeCategory)

  return (
    <div className="page">
      <section className="page-hero">
        <h1>Indicator Species</h1>
        <p>
          These are the species Camp Monarch tracks as indicators of backyard habitat health. Each one
          tells you something specific about what your yard is — or isn't — providing.
        </p>
      </section>

      <div className="filter-bar">
        {(['All', 'Insects', 'Birds', 'Reptiles & Amphibians', 'Mammals', 'Plants'] as Category[]).map(cat => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="species-grid">
        {filtered.map(s => (
          <div key={s.page} className="species-card" onClick={() => onNavigate(s.page)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onNavigate(s.page)}>
            <div className="card-img-wrap">
              <img
                src={s.photo}
                alt={s.alt}
                className="card-img"
                loading="lazy"
                onError={e => {
                  const img = e.currentTarget
                  if (s.retryPhoto && img.src !== s.retryPhoto) {
                    img.src = s.retryPhoto
                  } else {
                    img.src = PHOTO_FALLBACK
                  }
                }}
              />
            </div>
            <div className="card-body">
              <h2 className="card-name">{s.name}</h2>
              <p className="card-tagline">{s.tagline}</p>
              <button className="card-cta" onClick={e => { e.stopPropagation(); onNavigate(s.page) }}>
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="attribution-block">
        <h2>Photo Credits</h2>
        <p>
          Photos sourced from Wikimedia Commons and iNaturalist under Creative Commons licenses. All
          photos are used in accordance with their respective licenses. Specific attribution for each
          species is listed on its individual species page.
        </p>
        <p>
          <strong>License note:</strong> CC BY-SA photos require share-alike distribution. Camp Monarch
          displays these images unmodified. All rights remain with the original photographers.
        </p>
      </section>
    </div>
  )
}