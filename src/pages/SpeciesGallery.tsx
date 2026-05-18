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
    page: 'firefly',
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
    attr: "Camerafiend / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'bumble-bee',
    name: "Bumble Bee",
    tagline: "Vibrates flowers at 400 Hz to release pollen no other bee can reach. One-quarter of North American species are in serious decline.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bombus_pensylvanicus_on_Helenium_autumnale_-_crop.jpg/960px-Bombus_pensylvanicus_on_Helenium_autumnale_-_crop.jpg',
    alt: "Bumble bee clinging to a yellow coneflower mid-buzz, thorax dusted with pollen — the vibration that releases what honey bees cannot collect",
    attr: "Judy Gallagher / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'eastern-tiger-swallowtail',
    name: "Eastern Tiger Swallowtail",
    tagline: "The largest butterfly in the East. Females produce a blue-and-black morph that mimics the toxic Pipevine Swallowtail for protection.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Eastern_Tiger_Swallowtail_%28Papilio_glaucus%29_-_male_%28cropped%29.jpg/960px-Eastern_Tiger_Swallowtail_%28Papilio_glaucus%29_-_male_%28cropped%29.jpg',
    alt: "Eastern Tiger Swallowtail perched on a flower, wings open, showing the bold yellow and black tiger stripes and blue hind-wing patches",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'spicebush-swallowtail',
    name: "Spicebush Swallowtail",
    tagline: "Its caterpillar rolls a spicebush leaf into a sleeping bag and stares out with fake owl eyes. Sophisticated deception built on one native plant.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Spicebush_swallowtail_1.jpg/960px-Spicebush_swallowtail_1.jpg',
    alt: "Spicebush Swallowtail nectaring on a purple flower, deep black wings with iridescent teal-blue scaling on the hindwings",
    attr: "Judy Gallagher / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'pearl-crescent',
    name: "Pearl Crescent",
    tagline: "A pocket-sized pollinator that goes where swallowtails won't — into wild edges and weedy gaps where the real habitat work happens.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pearl_Crescent_%28Phyciodes_tharos%29.jpg/960px-Pearl_Crescent_%28Phyciodes_tharos%29.jpg',
    alt: "Pearl Crescent butterfly on a white flower, orange-and-black wings showing the small pearlescent crescent on the hindwing margin",
    attr: "John Flannery / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'american-lady',
    name: "American Lady",
    tagline: "Looks like a Painted Lady but carries two large eyespots no other species has. Its caterpillar spins silk tents inside pearly everlasting leaves.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Vanessa_virginiensis_-_Roaming_Shores%2C_Ohio%2C_USA_-_8aaaa.jpg/960px-Vanessa_virginiensis_-_Roaming_Shores%2C_Ohio%2C_USA_-_8aaaa.jpg',
    alt: "American Lady butterfly with wings spread flat, orange-and-black forewing pattern visible, resting on a leaf in dappled sunlight",
    attr: "John Tann / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'zebra-swallowtail',
    name: "Zebra Swallowtail",
    tagline: "Tied to one tree. No pawpaw patch — no Zebra Swallowtail. That single dependency makes it a living argument for native fruit trees.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Zebra_Swallowtail_%28Eurytides_marcellus%29.jpg/960px-Zebra_Swallowtail_%28Eurytides_marcellus%29.jpg',
    alt: "Zebra Swallowtail with wings spread, bold black-and-white stripes running the length of elongated wings, red spot at base of hindwing",
    attr: "John Flannery / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'baltimore-checkerspot',
    name: "Baltimore Checkerspot",
    tagline: "Maryland's state insect. Its caterpillar overwinters inside the frozen leaf litter — one reason autumn cleanup is a population event.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Baltimore_Checkerspot_butterfly_%28Euphydryas_phaeton%29.jpg/960px-Baltimore_Checkerspot_butterfly_%28Euphydryas_phaeton%29.jpg',
    alt: "Baltimore Checkerspot with wings spread on a leaf, bold orange, white, and black checkered pattern visible across all four wings",
    attr: "Gilles Gonthier / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'giant-swallowtail',
    name: "Giant Swallowtail",
    tagline: "North America's largest butterfly. Its caterpillar looks exactly like fresh bird droppings — an evolutionary con job that works for weeks.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Giant_swallowtail_%28Papilio_cresphontes%29_underside.jpg/960px-Giant_swallowtail_%28Papilio_cresphontes%29_underside.jpg',
    alt: "Giant Swallowtail resting on a flat surface, wings spread to show the intricate yellow-band pattern on dark brown upperwings",
    attr: "Judy Gallagher / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'black-swallowtail',
    name: "Black Swallowtail",
    tagline: "Female mimics the Pipevine Swallowtail so closely that predators avoid her. Her caterpillar's defensive osmeterium smells like rotten citrus.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Papilio_polyxenes_asterius.jpg/960px-Papilio_polyxenes_asterius.jpg',
    alt: "Black Swallowtail on a flower, wings spread, iridescent blue-green scaling on lower wings, distinctive yellow spots along wing margins",
    attr: "Nino Barbieri / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'hummingbird-clearwing',
    name: "Hummingbird Clearwing Moth",
    tagline: "Hovers like a hummingbird, visits the same flowers, and fools most people. It's a moth — active in broad daylight, no disguise required.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hemaris_thysbe.jpg/960px-Hemaris_thysbe.jpg',
    alt: "Hummingbird Clearwing moth hovering at a pink flower, transparent wings a blur, olive-green and burgundy body catching the light",
    attr: "Bob Gutowski / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'io-moth',
    name: "Io Moth",
    tagline: "Flashes two enormous eyespots when threatened — a split-second predator-confusion tactic evolved over millions of years. Caterpillar stings.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Automeris_io_male.jpg/960px-Automeris_io_male.jpg',
    alt: "Male Io Moth with forewings raised to reveal the large black-and-white eyespots on yellow hindwings — a startle display frozen in the photo",
    attr: "Didier Descouens / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'promethea-moth',
    name: "Promethea Moth",
    tagline: "Males fly at dusk in a tight window — exactly 30 to 90 minutes after sunset. Remove the host trees and that window closes permanently.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Callosamia_promethea_male.jpg/960px-Callosamia_promethea_male.jpg',
    alt: "Male Promethea Moth resting with wings spread, dark brown-maroon coloring with pale borders and a prominent eyespot on each hindwing",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'tulip-tree-silkmoth',
    name: "Tulip Tree Silkmoth",
    tagline: "One of the largest moths in North America, feeding only on tulip poplar, sweetbay, and wild cherry — trees that belong in every eastern yard.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Callosamia_angulifera.jpg/960px-Callosamia_angulifera.jpg',
    alt: "Tulip Tree Silkmoth resting on bark, large wings patterned in rich chestnut brown with contrasting pale margins and small eyespots",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'cecropia-moth',
    name: "Cecropia Moth",
    tagline: "North America's largest native moth. Lives only two weeks as an adult, eating nothing, flying only to mate. Needs mature deciduous trees to survive.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hyalophora_cecropia_on_Sugar_Maple.jpg/960px-Hyalophora_cecropia_on_Sugar_Maple.jpg',
    alt: "Cecropia Moth resting on bark, wings spread wide to show the dramatic red-and-white banded body, cream-bordered wings, and crescent-shaped white spots",
    attr: "Swerve / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'polyphemus-moth',
    name: "Polyphemus Moth",
    tagline: "Named for the one-eyed giant: each hindwing carries a large translucent eyespot that confuses predators. Found wherever oaks still grow.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Polyphemus_Moth_with_wings_spread.jpg/960px-Polyphemus_Moth_with_wings_spread.jpg',
    alt: "Polyphemus Moth resting with wings fully spread, the large translucent eyespots on its hindwings clearly visible against the tan-and-brown wing pattern",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
    category: 'Insects',
  },
  {
    page: 'chickadee',
    name: "Black-capped Chickadee",
    tagline: "A single brood needs up to 9,000 caterpillars. No native trees means no caterpillars means no chickadees — the math is that direct.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Poecile-atricapilla-001.jpg/960px-Poecile-atricapilla-001.jpg',
    alt: "Black-capped Chickadee perched on a thin branch in winter light, black cap and bib contrasting with white cheeks, soft gray back feathers ruffled against the cold",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'wood-thrush',
    name: "Wood Thrush",
    tagline: "Sings two notes at once using a forked syrinx. Needs 100+ acres of forest to nest successfully. Down 62% since 1966.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wood_Thrush_%28Hylocichla_mustelina%29.jpg/960px-Wood_Thrush_%28Hylocichla_mustelina%29.jpg',
    alt: "Wood Thrush perched on a mossy log, its warm cinnamon-brown back and boldly spotted white breast visible, beak slightly open mid-song",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'ruby-throated-hummingbird',
    name: "Ruby-throated Hummingbird",
    tagline: "The only hummingbird that breeds east of the Mississippi. Burns 10 calories per day — the equivalent of a human burning 155,000.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ruby_Throated_Hummingbird_%28Archilochus_colubris%29.jpg/960px-Ruby_Throated_Hummingbird_%28Archilochus_colubris%29.jpg',
    alt: "Male Ruby-throated Hummingbird hovering at a red tubular flower, iridescent green back and the distinctive ruby-red throat gorget glowing in sunlight",
    attr: "Dick Daniels / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'american-goldfinch',
    name: "American Goldfinch",
    tagline: "Waits until July to nest — timed exactly to peak coneflower and thistle seed production. Remove the seed heads and you remove the nursery.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Spinus_tristis_-_Michigan.jpg/960px-Spinus_tristis_-_Michigan.jpg',
    alt: "Male American Goldfinch perched on a swaying stem, brilliant lemon-yellow plumage with jet-black wings and cap — the peak of summer breeding colors",
    attr: "Cephas / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'eastern-bluebird',
    name: "Eastern Bluebird",
    tagline: "Nest-box programs pulled it back from near-extinction. Still dependent on humans for cavities that vanished with old-growth trees.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Eastern_Bluebird-27527-2.jpg/960px-Eastern_Bluebird-27527-2.jpg',
    alt: "Male Eastern Bluebird perched on a wooden post, vivid sky-blue back and wings contrasting with the warm rusty-orange breast",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'american-robin',
    name: "American Robin",
    tagline: "So familiar it disappears. But it needs earthworms, native fruit trees, and open turf — three things suburban yards are steadily eliminating.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Turdus_migratorius_-_3.jpg/960px-Turdus_migratorius_-_3.jpg',
    alt: "American Robin standing on a lawn in early morning light, classic orange breast and dark gray back, head tilted to listen for earthworms",
    attr: "Joe Schneid / CC BY 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'dark-eyed-junco',
    name: "Dark-eyed Junco",
    tagline: "Flashes white tail feathers as an alarm signal. Nests on the ground — which means any untrimmed, leaf-covered patch could be a nursery.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dark-eyed_Junco_slaty.jpg/960px-Dark-eyed_Junco_slaty.jpg',
    alt: "Dark-eyed Junco perched on a snowy branch, slate-gray hood contrasting with white belly and the tell-tale white outer tail feathers",
    attr: "Ken Thomas / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'downy-woodpecker',
    name: "Downy Woodpecker",
    tagline: "America's smallest woodpecker. Drills beetle larvae from dead wood all winter — the exact foraging habitat eliminated by tidy yard cleanup.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Downy_Woodpecker.jpg/960px-Downy_Woodpecker.jpg',
    alt: "Male Downy Woodpecker clinging to a suet feeder, bold black-and-white plumage and a small red patch on the nape of the head",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'baltimore-oriole',
    name: "Baltimore Oriole",
    tagline: "Weaves a hanging pouch nest in 6 days — one of the most complex bird nests built anywhere. Caterpillar demand peaks during that sprint.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Icterus_galbula_-_male.jpg/960px-Icterus_galbula_-_male.jpg',
    alt: "Male Baltimore Oriole perched on a branch, vivid flame-orange body contrasting with jet-black head and wings, a flash of orange against summer leaves",
    attr: "Mdf / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'cedar-waxwing',
    name: "Cedar Waxwing",
    tagline: "Shares berries beak-to-beak along a branch when the flock has more than it needs. Eats primarily fruit — native trees are its grocery store.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cedar_Waxwing_-_Bombycilla_cedrorum.jpg/960px-Cedar_Waxwing_-_Bombycilla_cedrorum.jpg',
    alt: "Cedar Waxwing perched on a branch, sleek crested head, silky gray-brown plumage with yellow tail-tip band and distinctive red wax-like wing spots",
    attr: "Cephas / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'scarlet-tanager',
    name: "Scarlet Tanager",
    tagline: "Lives in the forest canopy almost invisibly despite being flame-red. Needs large, connected forest blocks — fragments aren't enough.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/ScarletTanagerJKB.jpg/960px-ScarletTanagerJKB.jpg',
    alt: "Male Scarlet Tanager perched on a branch, startling red body and jet-black wings — one of North America's most vivid songbirds",
    attr: "Factumquintus / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'song-sparrow',
    name: "Song Sparrow",
    tagline: "Has more regional dialects than any other North American bird — over 20 distinct song forms. Thrives in brushy edges most people mistake for weeds.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Song_Sparrow%2C_Prospect_Park_%285885%29.jpg/960px-Song_Sparrow%2C_Prospect_Park_%285885%29.jpg',
    alt: "Song Sparrow perched on a stem, streaked brown back and heavily streaked breast with a central spot, bill open mid-song",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'house-wren',
    name: "House Wren",
    tagline: "Packs a nest box with 400 sticks before adding the soft interior cup. Will evict competing species — including birds twice its size.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/House_Wren_2.jpg/960px-House_Wren_2.jpg',
    alt: "House Wren perched on a branch, small brown bird with finely barred wings and an upright cocked tail, the posture of a bird that owns the yard",
    attr: "Ken Thomas / Public Domain / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'northern-flicker',
    name: "Northern Flicker",
    tagline: "Spends more time on the ground than any other woodpecker — eating ants. 40% decline since 1966 tracks directly with the loss of ant-rich habitat.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Northern_Flicker_%28Red-shafted%29.jpg/960px-Northern_Flicker_%28Red-shafted%29.jpg',
    alt: "Northern Flicker on a tree trunk showing the spotted breast, barred back, and the crescent-shaped black bib that marks this ground-feeding woodpecker",
    attr: "Elaine R. Wilson / CC BY-SA 2.5 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'american-kestrel',
    name: "American Kestrel",
    tagline: "North America's smallest falcon. Sees in ultraviolet — it follows vole urine trails invisible to every other predator. Down 50% since 1966.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/American_kestrel_%28Falco_sparverius%29_male.jpg/960px-American_kestrel_%28Falco_sparverius%29_male.jpg',
    alt: "Male American Kestrel perched on a wire, vivid rufous back and tail contrasting with blue-gray wings, the bold facial markings of a miniature falcon",
    attr: "Frank Schulenburg / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'carolina-wren',
    name: "Carolina Wren",
    tagline: "Stays year-round and pairs for life. Sings so loud it triggers car alarms. Needs dense brush piles to survive hard winters.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Carolina_Wren_at_Unexpected_Wildlife_Refuge_photo_by_Bet_Zimmermann.jpg/960px-Carolina_Wren_at_Unexpected_Wildlife_Refuge_photo_by_Bet_Zimmermann.jpg',
    alt: "Carolina Wren perched on a log, rich rusty-brown upperparts with a bold white eye stripe, tail held cocked upright",
    attr: "Bet Zimmermann / Public Domain / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'tufted-titmouse',
    name: "Tufted Titmouse",
    tagline: "Caches individual seeds in separate hiding spots and remembers each location. Lines its nest cup with fur pulled from living mammals.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Titmouse.jpg/960px-Titmouse.jpg',
    alt: "Tufted Titmouse clinging to a branch, soft gray back and white undersides, the distinctive gray crest erect, large dark eye looking directly at the camera",
    attr: "PookieFugglestein / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'white-breasted-nuthatch',
    name: "White-breasted Nuthatch",
    tagline: "Descends trees headfirst — the only bird that does. Spot-checks bark crevices woodpeckers just passed. Two birds, same tree, zero competition.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/White-breasted_Nuthatch.jpg/960px-White-breasted_Nuthatch.jpg',
    alt: "White-breasted Nuthatch on a branch in characteristic headfirst posture, blue-gray back, white face and underparts, long upturned bill",
    attr: "Wolfgang Wander / CC BY-SA 3.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'indigo-bunting',
    name: "Indigo Bunting",
    tagline: "Navigates by the stars — literally memorizes the night sky as a fledgling. Every male sings a unique song learned from neighbors, not parents.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Indigo_Bunting_by_Dan_Pancamo.jpg/960px-Indigo_Bunting_by_Dan_Pancamo.jpg',
    alt: "Male Indigo Bunting perched on a stem, entire plumage a saturated electric blue that shifts shade with every angle of light",
    attr: "Dan Pancamo / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'red-eyed-vireo',
    name: "Red-eyed Vireo",
    tagline: "Sings up to 22,000 times in a single day — the most persistent singer in North American forests. Invisible in the canopy, unmistakable by ear.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Red-eyed_Vireo%2C_Prospect_Park_%285815%29.jpg/960px-Red-eyed_Vireo%2C_Prospect_Park_%285815%29.jpg',
    alt: "Red-eyed Vireo perched among green leaves, olive-green back, white eyebrow stripe, and the distinctive red iris visible at close range",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'great-crested-flycatcher',
    name: "Great Crested Flycatcher",
    tagline: "Weaves shed snakeskin into its nest — possibly to deter predators. The only eastern flycatcher that nests in tree cavities.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Great_Crested_Flycatcher_%28Myiarchus_crinitus%29_%285614%29.jpg/960px-Great_Crested_Flycatcher_%28Myiarchus_crinitus%29_%285614%29.jpg',
    alt: "Great Crested Flycatcher perched on a branch, olive-green back, bright yellow belly, rufous tail, and the namesake shaggy crest slightly raised",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'eastern-towhee',
    name: "Eastern Towhee",
    tagline: "Scratch-feeds with a two-footed jump that flips leaf litter backward. Needs dense, low shrubs that most homeowners prune away.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pipilo_erythrophthalmus_-_Autumn_2009.jpg/960px-Pipilo_erythrophthalmus_-_Autumn_2009.jpg',
    alt: "Male Eastern Towhee perched on a branch, jet-black hood and back, white belly, rufous sides, and red eye visible in profile",
    attr: "Cephas / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'ovenbird',
    name: "Ovenbird",
    tagline: "Nests in a domed leaf structure on the forest floor that looks exactly like a Dutch oven. One of the first birds to vanish when forests fragment.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ovenbird_%28Seiurus_aurocapilla%29_%285565%29.jpg/960px-Ovenbird_%28Seiurus_aurocapilla%29_%285565%29.jpg',
    alt: "Ovenbird walking on the forest floor, olive-brown back, heavily streaked white breast, and the orange crown stripe that identifies it among wood-warblers",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'yellow-warbler',
    name: "Yellow Warbler",
    tagline: "When Brown-headed Cowbirds parasitize its nest, Yellow Warblers simply build a new floor over the cowbird egg — sometimes stacking six layers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Yellow_Warbler_%28Setophaga_petechia%29_%285718%29.jpg/960px-Yellow_Warbler_%28Setophaga_petechia%29_%285718%29.jpg',
    alt: "Male Yellow Warbler perched on a branch, entirely bright yellow plumage with fine reddish-brown streaking on the breast visible at close range",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'common-yellowthroat',
    name: "Common Yellowthroat",
    tagline: "The male's black mask makes him one of the most recognizable warblers. Nests in cattail marshes and wet meadow edges — habitat disappearing faster than most.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Geothlypis_trichas_-_Common_Yellowthroat_%28male%29.jpg/960px-Geothlypis_trichas_-_Common_Yellowthroat_%28male%29.jpg',
    alt: "Male Common Yellowthroat perched on a reed stem, bright yellow throat and breast below the bold black mask, olive-green upperparts",
    attr: "Ómar Runólfsson / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'american-redstart',
    name: "American Redstart",
    tagline: "Fans its tail to flash orange patches and startle insects out of hiding. One of the most active leaf-gleaners in the eastern canopy.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Setophaga_ruticilla_%28male%29.jpg/960px-Setophaga_ruticilla_%28male%29.jpg',
    alt: "Male American Redstart perched mid-branch, jet-black plumage with vivid orange patches on wings and tail, the signature flash visible even at rest",
    attr: "Andy Reago & Chrissy McClarren / CC BY 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'veery',
    name: "Veery",
    tagline: "Its descending spiral call echoes through bottomland forests at dusk. Predicts hurricane intensity with enough accuracy that meteorologists now study its migration patterns.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Veery_%28Catharus_fuscescens%29.jpg/960px-Veery_%28Catharus_fuscescens%29.jpg',
    alt: "Veery perched on a mossy branch in filtered forest light, warm cinnamon-brown back and faintly spotted breast identifying it among the spotted thrushes",
    attr: "Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons",
    category: 'Birds',
  },
  {
    page: 'swainsons-thrush',
    name: "Swainson's Thrush",
    tagline: "Sings an upward-spiraling flute phrase unlike any other thrush. Migrates nocturnally using stars and magnetic fields in concert.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Catharus_ustulatus.jpg/960px-Catharus_ustulatus.jpg',
    alt: "Swainson's Thrush perched on a branch, olive-brown back, buff eye ring, and spotted breast typical of the Catharus thrush group",
    attr: "Cephas / CC BY-SA 4.0 / Wikimedia Commons",
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
    tagline: "The only spotted thrush that overwinters in the US. Stays by switching from insects to native berries — winterberry holly and viburnum — when the ground freezes.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Catharus_guttatus_-_2.jpg/960px-Catharus_guttatus_-_2.jpg',
    alt: "Hermit Thrush perched on a branch showing its distinctive spotted breast and rufous tail",
    attr: "Manjith Kainickara / CC BY-SA 2.0 / Wikimedia Commons",
    category: 'Birds',
  },
]

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const filtered = activeCategory === 'All' ? SPECIES : SPECIES.filter(s => s.category === activeCategory)

  return (
    <div className="page">
      <section className="hero">
        <h1 className="hero__headline">Species gallery</h1>
        <p className="hero__sub">Every species here has a direct relationship with your yard. Click any card to learn what it needs and what you can plant.</p>
      </section>

      <div role="group" aria-label="Filter by category" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {(['All', 'Insects', 'Birds', 'Reptiles & Amphibians', 'Mammals', 'Plants'] as Category[]).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            style={{
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              border: '1px solid var(--accent)',
              background: activeCategory === cat ? 'var(--accent)' : 'transparent',
              color: activeCategory === cat ? '#fff' : 'var(--accent)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: activeCategory === cat ? 600 : 400,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="species-grid">
        {filtered.map(species => {
          const photoFallback = species.retryPhoto ?? PHOTO_FALLBACK
          const retryPhotoUrl = species.retryPhoto
          return (
            <button
              key={species.page}
              className="species-card"
              onClick={() => onNavigate(species.page)}
              aria-label={`Learn about ${species.name}`}
            >
              <div className="species-card__img-wrap">
                <img
                  src={species.photo}
                  alt={species.alt}
                  loading="lazy"
                  onError={(e) => {
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
