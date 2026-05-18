import { useState } from 'react'
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
    shortDesc: 'Can freeze solid in winter — ice crystals forming between its cells while its organs stop — and resume normal function in spring. Breeds in temporary pools and backyard water features, then climbs into the tree canopy where it spends the warm months invisible.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Gray_tree_frog_in_arboreal_forest_habitat%2C_MA.jpg',
    photoCredit: 'Todd Pierson / CC BY-NC-SA 2.0',
    page: 'gray-tree-frogs',
    habitatTags: ['woodland', 'garden', 'near-water'],
  },
  {
    id: 'american-toad',
    name: 'American Toad',
    scientificName: 'Anaxyrus americanus',
    emoji: '🐸',
    shortDesc: 'Eats up to 1,000 insects per night. Each toad establishes a feeding territory — a specific patch of yard it patrols at dusk — and returns to the same area every night throughout the breeding season.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Bufo_americanus_PJC1.jpg',
    photoCredit: 'Patrick Coin / CC BY-SA 2.5',
    page: 'toad',
    habitatTags: ['garden', 'woodland-edge', 'near-water'],
  },
  {
    id: 'garter-snake',
    name: 'Common Garter Snake',
    scientificName: 'Thamnophis sirtalis',
    emoji: '🐍',
    shortDesc: 'Gives birth to live young — up to 85 per litter. Detects prey through combined heat and chemical sensing. Eats slugs, earthworms, and toads in the same yards where homeowners apply slug bait that accumulates in the snake\'s tissue.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Thamnophis_sirtalis_sirtalis_Wooster.jpg',
    photoCredit: 'LA Dawson / CC BY-SA 2.5',
    page: 'garter-snake',
    habitatTags: ['garden', 'edge', 'near-water'],
  },
  {
    id: 'eastern-chipmunk',
    name: 'Eastern Chipmunk',
    scientificName: 'Tamias striatus',
    emoji: '🐿️',
    shortDesc: "Caches up to 8,000 seeds in a single season inside a burrow system that can extend 30 feet with multiple chambers. Seeds the chipmunk forgets or does not retrieve become the next season's understory.",
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg/960px-Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'eastern-chipmunk',
    habitatTags: ['woodland', 'edge', 'garden'],
  },
  {
    id: 'virginia-opossum',
    name: 'Virginia Opossum',
    scientificName: 'Didelphis virginiana',
    emoji: '🦔',
    shortDesc: "North America's only marsupial — young are born after a 13-day gestation the size of a honeybee and crawl to a pouch to develop for two more months. Studies found a single opossum consumes roughly 5,000 ticks over a season while grooming itself.",
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Opossum_2.jpg/960px-Opossum_2.jpg',
    photoCredit: 'Specialjake / CC BY-SA 3.0',
    page: 'virginia-opossum',
    habitatTags: ['woodland', 'edge', 'garden'],
  },
  {
    id: 'little-brown-bat',
    name: 'Little Brown Bat',
    scientificName: 'Myotis lucifugus',
    emoji: '🦇',
    shortDesc: 'Can consume up to 1,200 mosquitoes per hour while echolocating at frequencies the human ear cannot detect. White-nose syndrome — a fungal disease — has eliminated more than 90% of individuals in some North American populations since 2006.',
    status: 'endangered',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Little_Brown_Myotis_%28cropped%29.JPG',
    photoCredit: 'Ann Froschauer / USFWS, Public Domain',
    page: 'little-brown-bat',
    habitatTags: ['woodland', 'near-water', 'garden'],
  },
  {
    id: 'green-darner',
    name: 'Common Green Darner',
    scientificName: 'Anax junius',
    emoji: '🪲',
    shortDesc: 'Migrates south each fall — one of the few dragonflies in North America to do so. Nymphs spend one to two years as aquatic predators in ponds and slow streams before emerging as adults that travel hundreds of miles.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Anax_junius.JPG',
    photoCredit: 'G. Barr / CC BY 2.0',
    page: 'green-darner',
    habitatTags: ['pond', 'wetland', 'garden-water'],
  },
  {
    id: 'tiger-swallowtail',
    name: 'Eastern Tiger Swallowtail',
    scientificName: 'Papilio glaucus',
    emoji: '🦋',
    shortDesc: 'Caterpillars mimic bird droppings in early instars, then shift to a smooth green body with large false eye spots — two distinct anti-predator strategies, deployed in sequence, as the caterpillar grows.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pristine_Eastern_Tiger_Swallowtail.jpg/960px-Pristine_Eastern_Tiger_Swallowtail.jpg',
    photoCredit: 'Kenneth Dwain Harrelson / CC BY-SA 3.0',
    page: 'tiger-swallowtail',
    habitatTags: ['woodland', 'garden', 'edge'],
  },
  {
    id: 'black-swallowtail',
    name: 'Black Swallowtail',
    scientificName: 'Papilio polyxenes',
    emoji: '🦋',
    shortDesc: "The caterpillar keeps a Y-shaped organ folded behind its head that deploys in under a second when touched, releasing volatile terpenes toward whatever grabbed it — and in its first two instars, before that organ is fully effective, it simply looks like a bird dropping on a leaf stem.",
    status: 'common',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/227455959/large.jpeg',
    photoCredit: 'audrey612 / iNaturalist obs. 133528675, CC0',
    page: 'black-swallowtail',
    habitatTags: ['garden', 'meadow', 'edge'],
  },
  {
    id: 'great-spangled-fritillary',
    name: 'Great Spangled Fritillary',
    scientificName: 'Speyeria cybele',
    emoji: '🦋',
    shortDesc: 'Lays eggs near violets in late summer — not on the violets themselves, but on bare ground beside them. The larvae hatch, go dormant immediately for winter, and do not eat until the following spring when the violets emerge.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg/960px-Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg',
    photoCredit: 'Judy Gallagher / CC BY 2.0',
    page: 'great-spangled-fritillary',
    habitatTags: ['meadow', 'edge', 'woodland'],
  },
  {
    id: 'leonards-skipper',
    name: "Leonard's Skipper",
    scientificName: 'Hesperia leonardus',
    emoji: '🦋',
    shortDesc: "Adults emerge in late August — the last butterfly to fly in the eastern US each year — and a male finds the tallest native grass stem in his search area, perches at the tip, and holds that position, chasing off rivals and intercepting females for the ten days of his adult life.",
    status: 'declining',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/173602758/large.jpeg',
    photoCredit: "loricvs / iNaturalist obs. 103708717, CC0",
    page: 'leonards-skipper',
    habitatTags: ['open-meadow', 'native-grass', 'edge'],
  },
  {
    id: 'cobweb-skipper',
    name: 'Cobweb Skipper',
    scientificName: 'Hesperia metea',
    emoji: '🦋',
    shortDesc: "Adults emerge in late April — the first grass skipper of spring — and a male finds the tallest native bunchgrass stem in his search area, perches at the tip, and holds that position for his two-week adult life while the larvae that will become next year's adults are still overwintering in the crown of the same grass clump.",
    status: 'declining',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/639962673/large.jpg',
    photoCredit: 'wildreturn / iNaturalist obs. 350723896, CC0',
    page: 'cobweb-skipper',
    habitatTags: ['open-meadow', 'native-grass', 'edge'],
  },
  {
    id: 'little-bluestem',
    name: 'Little Bluestem',
    scientificName: 'Schizachyrium scoparium',
    emoji: '🌾',
    shortDesc: "Turns copper-red in October and holds that color through January while Leonard's Skipper and Cobweb Skipper larvae overwinter in silk shelters at the crown — one bunchgrass clump, two skipper species, a ten-month sequence from egg in summer to adult the following spring.",
    status: 'stable',
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/103310661/large.jpeg',
    photoCredit: 'jasonswanson / iNaturalist obs. 64276736, CC0',
    page: 'little-bluestem',
    habitatTags: ['open-meadow', 'native-grass', 'dry-garden'],
  },
  {
    id: 'luna-moth',
    name: 'Luna Moth',
    scientificName: 'Actias luna',
    emoji: '🦋',
    shortDesc: "Has no mouth as an adult — carries only stored energy from its caterpillar stage into its one-week adult life. The pale green hindwing tails produce spurious echolocation returns that redirect bat attacks away from the moth's body.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Actias_luna-male.jpg',
    photoCredit: 'Rmartin1952 / CC BY-SA 3.0',
    page: 'luna-moth',
    habitatTags: ['woodland', 'garden', 'canopy'],
  },
  {
    id: 'polyphemus-moth',
    name: 'Polyphemus Moth',
    scientificName: 'Antheraea polyphemus',
    emoji: '🦋',
    shortDesc: "Adults have no functional mouths — they emerge, mate, and die without eating, living entirely on energy stored during the caterpillar stage. A single native oak supports Polyphemus caterpillars across multiple generations.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Polyphemus_Moth_Antheraea_polyphemus.JPG',
    photoCredit: 'USGS / Public Domain',
    page: 'polyphemus-moth',
    habitatTags: ['woodland', 'garden', 'canopy'],
  },
  {
    id: 'cecropia-moth',
    name: 'Cecropia Moth',
    scientificName: 'Hyalophora cecropia',
    emoji: '🦋',
    shortDesc: "North America's largest native moth — wingspan up to 7 inches. Adults cannot eat; they live roughly two weeks on caterpillar-stored energy while searching for a mate. A parasitoid fly introduced from Europe in 1906 now attacks over 80% of Cecropia cocoons in some parts of its range.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Hyalophora_cecropia_adult_female_sjh.JPG',
    photoCredit: 'Steven Katovich / CC BY 3.0',
    page: 'cecropia-moth',
    habitatTags: ['woodland', 'garden', 'canopy'],
  },
  {
    id: 'common-nighthawk',
    name: 'Common Nighthawk',
    scientificName: 'Chordeiles minor',
    emoji: '🦅',
    shortDesc: 'Nests on bare gravel rooftops — no nest at all, just eggs laid on the surface. The move from gravel-bed rivers to flat commercial rooftops happened as the bird tracked the substrate it originally evolved on. Population has declined 61% since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Common_Nighthawk_%2814428313550%29.jpg',
    photoCredit: 'Andy Reago & Chrissy McClarren / CC BY 2.0',
    page: 'common-nighthawk',
    habitatTags: ['open-sky', 'rooftop', 'edge'],
  },
  {
    id: 'chimney-swift',
    name: 'Chimney Swift',
    scientificName: 'Chaetura pelagica',
    emoji: '🦅',
    shortDesc: "Cannot perch — its feet are shaped only for clinging to vertical surfaces. It spends almost its entire life airborne, landing only inside chimneys or hollow trees to roost and nest. Population has dropped 72% since 1966 as capped chimneys eliminated its nesting sites.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Chaetura_pelagica%2C_by_Lake_Erie%2C_Cleveland%2C_Ohio%2C_USA_339593191.jpg',
    photoCredit: 'Dan Pancamo / CC BY-SA 2.0',
    page: 'chimney-swift',
    habitatTags: ['open-sky', 'chimney', 'near-water'],
  },
  {
    id: 'purple-martin',
    name: 'Purple Martin',
    scientificName: 'Progne subis',
    emoji: '🦅',
    shortDesc: 'East of the Rockies, Purple Martins now nest almost exclusively in human-supplied housing — they have essentially abandoned natural tree cavities. Native Americans strung hollow gourds to attract them centuries ago; the dependency has continued and deepened.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Purple_Martin_%28Progne_subis%29_%287885320572%29.jpg/960px-Purple_Martin_%28Progne_subis%29_%287885320572%29.jpg',
    photoCredit: 'Andy Reago & Chrissy McClarren / CC BY 2.0',
    page: 'purple-martin',
    habitatTags: ['open-sky', 'near-water', 'garden'],
  },
  {
    id: 'ruby-throated-hummingbird',
    name: 'Ruby-throated Hummingbird',
    scientificName: 'Archilochus colubris',
    emoji: '🐦',
    shortDesc: 'Crosses the Gulf of Mexico nonstop — 500 miles in roughly 18 hours, fueled entirely by fat stored in the days before departure. A bird weighing less than a nickel burns the caloric equivalent of 155,000 calories per pound during the crossing.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Archilochus_colubris_-flying_-male-8.jpg',
    photoCredit: 'Andrew Weitzel / CC BY-SA 2.0',
    page: 'ruby-throated-hummingbird',
    habitatTags: ['garden', 'edge', 'woodland'],
  },
  {
    id: 'northern-flicker',
    name: 'Northern Flicker',
    scientificName: 'Colaptes auratus',
    emoji: '🐦',
    shortDesc: 'A woodpecker that feeds on the ground — hunting ants with a tongue that wraps around the back of its skull and extends two inches beyond its bill. Population has declined 49% since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Northern_Flicker_%28Red-shafted%29.jpg/960px-Northern_Flicker_%28Red-shafted%29.jpg',
    photoCredit: 'Alan D. Wilson / CC BY-SA 3.0',
    page: 'northern-flicker',
    habitatTags: ['open-woodland', 'edge', 'garden'],
  },
  {
    id: 'downy-woodpecker',
    name: 'Downy Woodpecker',
    scientificName: 'Dryobates pubescens',
    emoji: '🐦',
    shortDesc: 'Excavates beetle larvae from dead wood by hammering at speeds exceeding 20 strikes per second. Nest cavities in snags become winter roost holes for small owls and flying squirrels after the woodpecker abandons them.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Dryobates_pubescens_UL_03.jpg/960px-Dryobates_pubescens_UL_03.jpg',
    photoCredit: 'Wolfgang Wander / CC BY-SA 3.0',
    page: 'downy-woodpecker',
    habitatTags: ['woodland', 'snag', 'garden'],
  },
  {
    id: 'eastern-screech-owl',
    name: 'Eastern Screech-Owl',
    scientificName: 'Megascops asio',
    emoji: '🦉',
    shortDesc: 'Nests in cavities — natural tree hollows, abandoned woodpecker holes, or nest boxes — and cannot excavate its own. Rodenticide contamination from eating poisoned mice and voles has been found in 50–80% of sampled screech-owls in suburban areas.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Screech_Owl.jpg',
    photoCredit: 'Peterwchen / CC BY-SA 3.0',
    page: 'eastern-screech-owl',
    habitatTags: ['woodland', 'garden', 'snag'],
  },
  {
    id: 'red-tailed-hawk',
    name: 'Red-tailed Hawk',
    scientificName: 'Buteo jamaicensis',
    emoji: '🦅',
    shortDesc: 'Hunts by scanning from a perch or circling above open ground — locating a mouse or vole before the prey is visible to human observers from the same distance. Rodenticide poisoning from eating contaminated prey is the leading cause of mortality in suburban populations.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Red-tailed_Hawk_ad.jpg/960px-Red-tailed_Hawk_ad.jpg',
    photoCredit: 'Walter Siegmund / CC BY-SA 3.0',
    page: 'red-tailed-hawk',
    habitatTags: ['open-woodland', 'edge', 'meadow'],
  },
  {
    id: 'american-kestrel',
    name: 'American Kestrel',
    scientificName: 'Falco sparverius',
    emoji: '🦅',
    shortDesc: 'Hunts voles by detecting their urine trails in ultraviolet light — rodent urine reflects UV, making their paths visible from 60 feet. Population has dropped 47% since 1966; rodenticide contamination is found in 50–80% of sampled birds.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Falco-sparverius-001.jpg/960px-Falco-sparverius-001.jpg',
    photoCredit: 'Accipiter / CC BY-SA 3.0',
    page: 'american-kestrel',
    habitatTags: ['meadow', 'open-land', 'edge'],
  },
  {
    id: 'wood-thrush',
    name: 'Wood Thrush',
    scientificName: 'Hylocichla mustelina',
    emoji: '🐦',
    shortDesc: 'Sings two notes simultaneously — its syrinx has two independent voice boxes that produce overlapping harmonics at once. Population has declined 59% since 1966, one of the steepest drops of any forest songbird in North America.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Wood_thrush_%28Hylocichla_mustelina%29_Peten.jpg',
    photoCredit: 'Francesco Veronesi / CC BY-SA 2.0',
    page: 'wood-thrush',
    habitatTags: ['woodland', 'leaf-litter', 'near-water'],
  },
  {
    id: 'scarlet-tanager',
    name: 'Scarlet Tanager',
    scientificName: 'Piranga olivacea',
    emoji: '🐦',
    shortDesc: "Arrives in May burning crimson; by September, every red feather on the male's body has been replaced by olive-green for migration. Needs at least 10 hectares of contiguous forest to breed — in smaller fragments, cowbird parasitism rates reach 60–80%.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Scarlet_tanager_in_GWC_%2850867%29.jpg/1280px-Scarlet_tanager_in_GWC_%2850867%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'scarlet-tanager',
    habitatTags: ['forest-interior', 'canopy', 'woodland'],
  },
  {
    id: 'hermit-thrush',
    name: 'Hermit Thrush',
    scientificName: 'Catharus guttatus',
    emoji: '🐦',
    shortDesc: 'The only spotted thrush that winters in the eastern US — its gut shifts in autumn to digest berry wax that would otherwise pass through undigested. Raises its rufous tail in a slow upward pump, a behavior no other common thrush makes.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hermit_Thrush_0777vv_%28cloudy%29.jpg/960px-Hermit_Thrush_0777vv_%28cloudy%29.jpg',
    photoCredit: 'Dan Pancamo / CC BY-SA 2.0',
    page: 'hermit-thrush',
    habitatTags: ['woodland', 'shrub-edge', 'leaf-litter'],
  },
  {
    id: 'eastern-wood-pewee',
    name: 'Eastern Wood-Pewee',
    scientificName: 'Contopus virens',
    emoji: '🐦',
    shortDesc: 'Sings its name from the midstory of eastern forests at dawn and dusk — one of the most consistent sounds of a mature woodland in summer. Population has fallen over 30% since 1970, tracking loss of both forest interior breeding habitat and South American wintering grounds.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg/960px-Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg',
    photoCredit: 'D. Gordon E. Robertson / CC BY-SA 3.0',
    page: 'eastern-wood-pewee',
    habitatTags: ['woodland', 'forest-interior', 'canopy'],
  },
  {
    id: 'brown-creeper',
    name: 'Brown Creeper',
    scientificName: 'Certhia americana',
    emoji: '🐦',
    shortDesc: 'Starts at the base of a trunk, spirals upward reading every inch of bark for beetle larvae and spider eggs, then drops to the base of the next tree. Never descends the trunk it just climbed. Population has declined 40% since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Certhia_americana_CT2.jpg/960px-Certhia_americana_CT2.jpg',
    photoCredit: 'i_got_the_fever / CC BY 2.0',
    page: 'brown-creeper',
    habitatTags: ['woodland', 'snag', 'bark'],
  },
  {
    id: 'baltimore-oriole',
    name: 'Baltimore Oriole',
    scientificName: 'Icterus galbula',
    emoji: '🐦',
    shortDesc: 'Weaves a hanging nest — a tightly woven pouch suspended from the tip of an outer branch — using plant fibers, bark strips, and synthetic material found in the yard. The pendulum motion of the finished nest makes it difficult for many predators to access.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Baltimore_Oriole-_dorsum.jpg',
    photoCredit: 'Alan D. Wilson / CC BY-SA 3.0',
    page: 'baltimore-oriole',
    habitatTags: ['open-woodland', 'edge', 'garden'],
  },
  {
    id: 'black-capped-chickadee',
    name: 'Black-capped Chickadee',
    scientificName: 'Poecile atricapillus',
    emoji: '🐦',
    shortDesc: 'Remembers the exact locations of thousands of individual food caches stored across hundreds of separate sites over periods of months. Studies measuring memory found the hippocampus grows measurably in autumn when caching peaks.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg',
    photoCredit: 'Cephas / CC BY-SA 3.0',
    page: 'black-capped-chickadee',
    habitatTags: ['woodland', 'garden', 'snag'],
  },
  {
    id: 'eastern-bluebird',
    name: 'Eastern Bluebird',
    scientificName: 'Sialia sialis',
    emoji: '🐦',
    shortDesc: 'Population crashed across the eastern US by the 1960s as European Starlings displaced it from every natural cavity it depended on for nesting. The nest box program that followed is one of the most documented bird recovery stories in North American ornithology.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg',
    photoCredit: 'Sandysphotos2009 / CC BY 2.0',
    page: 'eastern-bluebird',
    habitatTags: ['open-woodland', 'edge', 'meadow'],
  },
  {
    id: 'northern-cardinal',
    name: 'Northern Cardinal',
    scientificName: 'Cardinalis cardinalis',
    emoji: '🐦',
    shortDesc: 'Feeds nestlings almost exclusively on caterpillars — soft-bodied larvae chicks can digest. A yard that has replaced native oaks with ornamental trees produces a fraction of the caterpillar biomass the same canopy area of native trees would generate across the six-week nesting window.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Male_northern_cardinal_in_Central_Park_%2852612%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'northern-cardinal',
    habitatTags: ['shrub-edge', 'garden', 'woodland'],
  },
  {
    id: 'american-robin',
    name: 'American Robin',
    scientificName: 'Turdus migratorius',
    emoji: '🐦',
    shortDesc: 'Detects earthworms underground by sound and vibration — the head-tilt posture before a lunge positions an ear to the ground, not an eye. A robin feeding in a lawn treated with pesticides shows measurable tremors and egg-shell thinning within days of exposure.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/American_robin_%2871307%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'american-robin',
    habitatTags: ['lawn', 'woodland', 'edge'],
  },
  {
    id: 'american-goldfinch',
    name: 'American Goldfinch',
    scientificName: 'Spinus tristis',
    emoji: '🐦',
    shortDesc: 'Delays nesting until mid-summer — later than almost any other songbird — timed to the peak availability of thistle and milkweed seeds. Feeds nestlings entirely on seeds rather than insects, unusual among North American songbirds.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg',
    photoCredit: 'Sandysphotos2009 / CC BY 2.0',
    page: 'american-goldfinch',
    habitatTags: ['meadow', 'garden', 'edge'],
  },
  {
    id: 'indigo-bunting',
    name: 'Indigo Bunting',
    scientificName: 'Passerina cyanea',
    emoji: '🐦',
    shortDesc: 'Male breeding plumage contains no blue pigment — the color comes entirely from feather microstructure that scatters light. Migrates at night, navigating by the stars using a star map calibrated in its first weeks of life.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Indigo_Bunting_by_Dan_Pancamo_4.jpg',
    photoCredit: 'Dan Pancamo / CC BY-SA 2.0',
    page: 'indigo-bunting',
    habitatTags: ['shrub-edge', 'meadow', 'garden'],
  },
  {
    id: 'dark-eyed-junco',
    name: 'Dark-eyed Junco',
    scientificName: 'Junco hyemalis',
    emoji: '🐦',
    shortDesc: 'Spends winters in the same suburban yards year after year — individual birds return to the same feeders, the same brush piles, the same patches of bare ground within 50 meters of where they fed in previous winters.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Junco_hyemalis_hyemalis_CT1_%28cropped%29.jpg',
    photoCredit: 'Cephas / CC BY-SA 3.0',
    page: 'dark-eyed-junco',
    habitatTags: ['shrub-edge', 'woodland', 'garden'],
  },
  {
    id: 'eastern-meadowlark',
    name: 'Eastern Meadowlark',
    scientificName: 'Sturnella magna',
    emoji: '🐦',
    shortDesc: 'Nests on the ground in grassland — a cup of grass concealed in dense cover where the entrance is on the side, not the top. Requires at least 10 acres of contiguous grassland for successful breeding. Population has dropped 75% since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sturnella_magna1.jpg/960px-Sturnella_magna1.jpg',
    photoCredit: 'Ómar Runólfsson / CC BY 2.0',
    page: 'eastern-meadowlark',
    habitatTags: ['meadow', 'grassland', 'open-land'],
  },
  {
    id: 'brown-thrasher',
    name: 'Brown Thrasher',
    scientificName: 'Toxostoma rufum',
    emoji: '🐦',
    shortDesc: 'Has the largest song repertoire of any North American bird — over 1,000 distinct phrase types, each sung twice in sequence before moving to the next. Population has declined 45% since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Toxostoma_rufum_CT2.jpg/960px-Toxostoma_rufum_CT2.jpg',
    photoCredit: 'i_got_the_fever / CC BY 2.0',
    page: 'brown-thrasher',
    habitatTags: ['shrub-edge', 'woodland', 'garden'],
  },
  {
    id: 'eastern-towhee',
    name: 'Eastern Towhee',
    scientificName: 'Pipilo erythrophthalmus',
    emoji: '🐦',
    shortDesc: "Scratches through leaf litter with a simultaneous backward double-hop — raking both feet at once to uncover what's underneath. Needs dense shrub thickets with intact leaf litter below, a combination disappearing from suburban landscapes as they are cleared and raked.",
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pipilo_erythrophthalmus_CT2.jpg/960px-Pipilo_erythrophthalmus_CT2.jpg',
    photoCredit: 'i_got_the_fever / CC BY 2.0',
    page: 'eastern-towhee',
    habitatTags: ['shrub-edge', 'leaf-litter', 'woodland'],
  },
  {
    id: 'carolina-wren',
    name: 'Carolina Wren',
    scientificName: 'Thryothorus ludovicianus',
    emoji: '🐦',
    shortDesc: 'Sings louder, relative to body weight, than almost any other bird in North America. Nests in almost anything — flower pots, old boots, open tool shelves. Does not migrate; extended cold snaps that freeze its insect supply can eliminate local populations overnight.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg/960px-Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg',
    photoCredit: 'Andy Reago & Chrissy McClarren / CC BY 2.0',
    page: 'carolina-wren',
    habitatTags: ['shrub-edge', 'woodland', 'garden'],
  },
  {
    id: 'gray-catbird',
    name: 'Gray Catbird',
    scientificName: 'Dumetella carolinensis',
    emoji: '🐦',
    shortDesc: 'Can produce hundreds of distinct sounds — mimicking other birds, frogs, and mechanical noises — but returns between sequences to the mewing call that named it. Rejects cowbird eggs from its nest at a rate higher than almost any other host species.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gray_catbird_%2885315%29.jpg/960px-Gray_catbird_%2885315%29.jpg',
    photoCredit: 'Rhododendrites / CC BY-SA 4.0',
    page: 'gray-catbird',
    habitatTags: ['shrub-edge', 'garden', 'woodland'],
  },
  {
    id: 'mourning-dove',
    name: 'Mourning Dove',
    scientificName: 'Zenaida macroura',
    emoji: '🐦',
    shortDesc: 'Produces crop milk — a protein-rich secretion from the lining of its crop that both parents feed to nestlings for the first week of life. The only North American bird that drinks by suction, lifting its head only when it stops.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mourning_Dove_in_North_Florida.jpg/960px-Mourning_Dove_in_North_Florida.jpg',
    photoCredit: 'Judy Gallagher / CC BY 2.0',
    page: 'mourning-dove',
    habitatTags: ['open-land', 'edge', 'garden'],
  },
  {
    id: 'song-sparrow',
    name: 'Song Sparrow',
    scientificName: 'Melospiza melodia',
    emoji: '🐦',
    shortDesc: 'Males learn songs from neighbors and modify them throughout their lives, creating local dialects that vary between populations just a few miles apart. Each male knows 8 to 12 distinct song types and switches between them in patterns that signal identity and territory status.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Song_Sparrow_Melospiza_melodia.jpg/960px-Song_Sparrow_Melospiza_melodia.jpg',
    photoCredit: 'Mdf / CC BY-SA 3.0',
    page: 'song-sparrow',
    habitatTags: ['shrub-edge', 'near-water', 'garden'],
  },
  {
    id: 'wild-turkey',
    name: 'Wild Turkey',
    scientificName: 'Meleagris gallopavo',
    emoji: '🦃',
    shortDesc: 'Can run 12 miles per hour and fly in short bursts at up to 55. Roosts in trees at night — often the same trees, in the same order, for years. A flock scratching through leaf litter in a single morning can expose and consume thousands of invertebrates.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tom_turkey_strutting.jpg/960px-Tom_turkey_strutting.jpg',
    photoCredit: 'USFWS / Public Domain',
    page: 'wild-turkey',
    habitatTags: ['woodland', 'edge', 'open-land'],
  },
  {
    id: 'eastern-phoebe',
    name: 'Eastern Phoebe',
    scientificName: 'Sayornis phoebe',
    emoji: '🐦',
    shortDesc: 'Among the earliest migrants to return in spring — present in the northern US by late March, before most insects are flying. Waits on a low perch, dips its tail rhythmically, and sallies out to catch individual flying insects one at a time.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eastern_Phoebe-27527-2.jpg/960px-Eastern_Phoebe-27527-2.jpg',
    photoCredit: 'Mdf / CC BY-SA 3.0',
    page: 'eastern-phoebe',
    habitatTags: ['woodland-edge', 'near-water', 'garden'],
  },
  {
    id: 'yellow-warbler',
    name: 'Yellow Warbler',
    scientificName: 'Setophaga petechia',
    emoji: '🐦',
    shortDesc: 'Responds to cowbird eggs by building a new floor over the parasitized nest — sometimes producing a multi-story structure 5 or 6 layers deep, each covering a cowbird egg laid in the previous one. Population has declined 27% since 1966.',
    status: 'declining',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg/960px-Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg',
    photoCredit: 'Mdf / CC BY-SA 2.0',
    page: 'yellow-warbler',
    habitatTags: ['shrub-edge', 'near-water', 'garden'],
  },
  {
    id: 'ruby-crowned-kinglet',
    name: 'Ruby-crowned Kinglet',
    scientificName: 'Regulus calendula',
    emoji: '🐦',
    shortDesc: "One of the smallest birds in North America — 4.3 inches and less than 6 grams. Its song is proportionally 25 times louder than a rooster's crow relative to body mass. Passes through eastern gardens each spring and fall on migration between boreal breeding forests and southern wintering grounds.",
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg/960px-Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg',
    photoCredit: 'Andy Reago & Chrissy McClarren / CC BY 2.0',
    page: 'ruby-crowned-kinglet',
    habitatTags: ['woodland', 'garden', 'edge'],
  },
  {
    id: 'yellow-rumped-warbler',
    name: 'Yellow-rumped Warbler',
    scientificName: 'Setophaga coronata',
    emoji: '🐦',
    shortDesc: 'The only warbler that regularly overwinters in the eastern US — it can digest waxy berries that other warblers cannot. When bayberry and wax myrtle ripen in late summer, its gut microbiome shifts to handle the wax, a metabolic switch documented in laboratory studies.',
    status: 'common',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Setophaga_coronata_coronata_CT1.jpg/960px-Setophaga_coronata_coronata_CT1.jpg',
    photoCredit: 'Cephas / CC BY-SA 3.0',
    page: 'yellow-rumped-warbler',
    habitatTags: ['woodland', 'shrub-edge', 'garden'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<Status, { badge: string; label: string }> = {
  common:     { badge: 'bg-emerald-100 text-emerald-800', label: 'Stable' },
  declining:  { badge: 'bg-amber-100 text-amber-800',     label: 'Declining' },
  endangered: { badge: 'bg-red-100 text-red-800',         label: 'Endangered' },
}

function SpeciesCard({
  species,
  onNavigate,
}: {
  species: Species
  onNavigate: (page: Page) => void
}) {
  const { badge, label } = STATUS_STYLES[species.status]

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="relative h-36 overflow-hidden bg-stone-100">
        <img
          src={species.photo}
          alt={species.name}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = PHOTO_FALLBACK
          }}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <span
          className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold ${badge}`}
        >
          {label}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-base font-semibold text-stone-900 leading-snug">
            {species.emoji} {species.name}
          </h3>
          <p className="text-xs italic text-stone-400 mt-0.5">{species.scientificName}</p>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed flex-1">{species.shortDesc}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Habitat tags">
          {species.habitatTags.map((tag) => (
            <li
              key={tag}
              className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>

        {species.page ? (
          <button
            onClick={() => onNavigate(species.page as Page)}
            className="mt-auto w-full py-2 px-4 rounded-lg bg-green-700 hover:bg-green-800 text-white text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Learn more →
          </button>
        ) : (
          <div className="mt-auto w-full py-2 px-4 rounded-lg bg-stone-100 text-stone-400 text-sm font-semibold text-center cursor-not-allowed">
            Page coming soon
          </div>
        )}
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────

type FilterValue = Status | 'all'

const DECLINING_COUNT  = SPECIES.filter(s => s.status === 'declining').length
const ENDANGERED_COUNT = SPECIES.filter(s => s.status === 'endangered').length
const COMMON_COUNT     = SPECIES.filter(s => s.status === 'common').length

const FILTER_OPTIONS: { value: FilterValue; label: string }[] = [
  { value: 'all',        label: `All (${SPECIES.length})` },
  { value: 'declining',  label: `Declining (${DECLINING_COUNT})` },
  { value: 'endangered', label: `Endangered (${ENDANGERED_COUNT})` },
  { value: 'common',     label: `Stable (${COMMON_COUNT})` },
]

export default function SpeciesGallery({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [filter, setFilter] = useState<FilterValue>('all')

  const displayed = filter === 'all' ? SPECIES : SPECIES.filter((s) => s.status === filter)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
          Wildlife Worth Protecting
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          These species live — or once lived — in backyards across the eastern United States.
          Each one tells you something about the health of the land around it.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filter by conservation status">
        {FILTER_OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150 ${
              filter === value
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-stone-600 border-stone-200 hover:border-green-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <section aria-label="Species gallery">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {displayed.map((species) => (
            <li key={species.id}>
              <SpeciesCard species={species} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Photo credits" className="border-t border-stone-200 pt-8">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
          Photo Credits
        </h2>
        <ul className="text-xs text-stone-400 space-y-1">
          {SPECIES.filter((s) => s.photo !== PHOTO_FALLBACK).map((s) => (
            <li key={s.id}>
              <strong>{s.name}</strong>: {s.photoCredit}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-stone-400">
          All photographs are sourced from Wikimedia Commons or iNaturalist under Creative Commons
          licenses (CC BY 2.0, CC BY-SA 3.0, CC BY-SA 4.0, or CC BY-NC 4.0). No modifications were made.
        </p>
      </section>
    </div>
  )
}
