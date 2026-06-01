import type { Page } from '../App'

type Status = 'Common' | 'Declining' | 'Endangered'

type SpeciesItem = {
  name: string
  scientificName: string
  emoji: string
  summary: string
  status: Status
  page: Page
  habitats: string[]
}

const SPECIES: SpeciesItem[] = [
  { name: 'Monarch Butterfly', scientificName: 'Danaus plexippus', emoji: '\ud83e\udd8b', summary: 'Depends on milkweed to reproduce and remains one of Camp Monarch\'s clearest indicator species.', status: 'Endangered', page: 'why-monarchs', habitats: ['milkweed', 'open meadow', 'garden'] },
  { name: 'Firefly', scientificName: 'Photinus pyralis', emoji: '\u2728', summary: 'Needs leaf litter and dark summer nights to complete its life cycle.', status: 'Declining', page: 'fireflies', habitats: ['leaf litter', 'tall grass', 'edge'] },
  { name: 'Eastern Box Turtle', scientificName: 'Terrapene carolina', emoji: '\ud83d\udc22', summary: 'Uses small home ranges and suffers when roads cut through familiar territory.', status: 'Declining', page: 'box-turtles', habitats: ['woodland', 'edge', 'leaf litter'] },
  { name: 'Native Bees', scientificName: '4,000+ species', emoji: '\ud83d\udc1d', summary: 'Most species are solitary nesters that need flowers and exposed or lightly covered soil.', status: 'Declining', page: 'native-bees', habitats: ['meadow', 'garden', 'bare soil'] },
  { name: 'American Bumble Bee', scientificName: 'Bombus pensylvanicus', emoji: '\ud83d\udc1d', summary: 'A once-common prairie pollinator now missing from much of its former range.', status: 'Endangered', page: 'american-bumble-bee', habitats: ['meadow', 'garden', 'open land'] },
  { name: 'Northern Spring Peeper', scientificName: 'Pseudacris crucifer', emoji: '\ud83d\udc38', summary: 'A tiny frog whose early spring calls signal healthy seasonal wetlands.', status: 'Common', page: 'spring-peeper', habitats: ['wetland', 'vernal pool', 'woodland edge'] },
  { name: 'Eastern Gray Treefrog', scientificName: 'Hyla versicolor', emoji: '\ud83d\udc38', summary: 'A camouflage specialist that uses trees, shrubs, and nearby water.', status: 'Common', page: 'gray-tree-frogs', habitats: ['woodland edge', 'garden', 'wetland edge'] },
  { name: 'Wood Frog', scientificName: 'Lithobates sylvaticus', emoji: '\ud83d\udc38', summary: 'Can freeze through winter and recover when spring returns.', status: 'Common', page: 'wood-frog', habitats: ['woodland', 'leaf litter', 'vernal pool'] },
  { name: 'American Toad', scientificName: 'Anaxyrus americanus', emoji: '\ud83d\udc38', summary: 'A backyard insect hunter that benefits from loose soil and pesticide-free ground cover.', status: 'Common', page: 'toad', habitats: ['garden', 'woodland edge', 'open ground'] },
  { name: 'Eastern Garter Snake', scientificName: 'Thamnophis sirtalis', emoji: '\ud83d\udc0d', summary: 'A cold-tolerant snake that depends on layered ground habitat and prey-rich yards.', status: 'Common', page: 'garter-snake', habitats: ['garden', 'meadow', 'woodland edge'] },
  { name: 'Eastern Chipmunk', scientificName: 'Tamias striatus', emoji: '\ud83d\udc3f', summary: 'Buries and forgets seeds, helping regenerate native woodland edges.', status: 'Common', page: 'eastern-chipmunk', habitats: ['woodland edge', 'garden', 'edge'] },
  { name: 'Eastern Gray Squirrel', scientificName: 'Sciurus carolinensis', emoji: '\ud83d\udc3f', summary: 'Moves acorns across suburban landscapes and unintentionally plants future trees.', status: 'Common', page: 'eastern-gray-squirrel', habitats: ['woodland edge', 'garden', 'suburban'] },
  { name: 'Eastern Cottontail', scientificName: 'Sylvilagus floridanus', emoji: '\ud83d\udc07', summary: 'Raises young in shallow nests hidden in unmowed grass and low cover.', status: 'Common', page: 'eastern-cottontail', habitats: ['woodland edge', 'garden', 'suburban'] },
  { name: 'Virginia Opossum', scientificName: 'Didelphis virginiana', emoji: '\ud83e\udd94', summary: 'North America\'s only marsupial and a frequent nighttime insect and carrion scavenger.', status: 'Common', page: 'virginia-opossum', habitats: ['woodland edge', 'garden', 'suburban'] },
  { name: 'Striped Skunk', scientificName: 'Mephitis mephitis', emoji: '\ud83e\udda8', summary: 'Excavates lawn grubs and thrives where yards retain den cover and insect life.', status: 'Common', page: 'striped-skunk', habitats: ['woodland edge', 'garden', 'suburban'] },
  { name: 'Red Fox', scientificName: 'Vulpes vulpes', emoji: '\ud83e\udd8a', summary: 'A mobile predator that uses connected green space and abundant small mammals.', status: 'Common', page: 'red-fox', habitats: ['woodland edge', 'suburban', 'garden'] },
  { name: 'Little Brown Bat', scientificName: 'Myotis lucifugus', emoji: '\ud83e\udd87', summary: 'Consumes large numbers of insects but has been devastated by white-nose syndrome.', status: 'Declining', page: 'little-brown-bat', habitats: ['woodland edge', 'wetland edge', 'suburban'] },
  { name: 'Downy Woodpecker', scientificName: 'Dryobates pubescens', emoji: '\ud83d\udc26', summary: 'Uses small trunks and stems that larger woodpeckers often ignore.', status: 'Common', page: 'downy-woodpecker', habitats: ['woodland', 'edge', 'garden'] },
  { name: 'Northern Flicker', scientificName: 'Colaptes auratus', emoji: '\ud83d\udc26', summary: 'A ground-feeding woodpecker that follows ant-rich open habitat.', status: 'Declining', page: 'northern-flicker', habitats: ['open woodland', 'edge', 'lawn'] },
  { name: 'Hackberry', scientificName: 'Celtis occidentalis', emoji: '\ud83c\udf33', summary: 'A host tree that supports specialist butterflies other plants cannot replace.', status: 'Common', page: 'hackberry', habitats: ['woodland edge', 'suburban', 'garden'] },
  { name: 'Hackberry Emperor', scientificName: 'Asterocampa celtis', emoji: '\ud83e\udd8b', summary: 'A hackberry specialist whose caterpillars depend on leaves and leaf litter beneath the tree.', status: 'Common', page: 'hackberry-emperor', habitats: ['woodland edge', 'suburban', 'garden'] },
  { name: 'American Snout', scientificName: 'Libytheana carinenta', emoji: '\ud83e\udd8b', summary: 'A strange butterfly with elongated palps and a strict dependence on hackberry.', status: 'Common', page: 'american-snout', habitats: ['woodland edge', 'suburban', 'garden'] },
  { name: 'Tawny Emperor', scientificName: 'Asterocampa clyton', emoji: '\ud83e\udd8b', summary: 'Another hackberry-dependent butterfly that disappears when host trees are missing.', status: 'Common', page: 'tawny-emperor', habitats: ['woodland edge', 'suburban', 'garden'] },
  { name: 'Eastern Bluebird', scientificName: 'Sialia sialis', emoji: '\ud83d\udc26', summary: 'Needs open feeding space, cavity nesting sites, and room to hunt insects low to the ground.', status: 'Declining', page: 'eastern-bluebird', habitats: ['open woodland', 'lawn', 'edge'] },
  { name: 'Black-Capped Chickadee', scientificName: 'Poecile atricapillus', emoji: '\ud83d\udc26', summary: 'Raises broods on caterpillars that come from native trees and shrubs.', status: 'Common', page: 'black-capped-chickadee', habitats: ['woodland', 'woodland edge', 'garden'] },
  { name: 'Northern Cardinal', scientificName: 'Cardinalis cardinalis', emoji: '\ud83d\udc26', summary: 'A familiar yard bird whose nestlings still rely heavily on insects.', status: 'Common', page: 'northern-cardinal', habitats: ['woodland edge', 'garden', 'suburban'] },
  { name: 'American Robin', scientificName: 'Turdus migratorius', emoji: '\ud83d\udc26', summary: 'Uses lawns, gardens, and edges where earthworms and insects remain abundant.', status: 'Common', page: 'american-robin', habitats: ['lawn', 'garden', 'woodland edge'] },
  { name: 'American Kestrel', scientificName: 'Falco sparverius', emoji: '\ud83d\udc26', summary: 'A small falcon declining with the loss of open grassland, cavity sites, and large insects.', status: 'Declining', page: 'american-kestrel', habitats: ['open woodland', 'edge', 'lawn'] },
  { name: 'Eastern Screech-Owl', scientificName: 'Megascops asio', emoji: '\ud83e\udd89', summary: 'A compact owl that often shares neighborhoods with people unnoticed.', status: 'Common', page: 'eastern-screech-owl', habitats: ['woodland', 'woodland edge', 'suburban'] },
  { name: 'Chimney Swift', scientificName: 'Chaetura pelagica', emoji: '\ud83d\udc26', summary: 'An aerial insectivore that now depends on surviving chimneys and healthy insect populations.', status: 'Declining', page: 'chimney-swift', habitats: ['open woodland', 'edge', 'suburban'] },
  { name: 'Eastern Towhee', scientificName: 'Pipilo erythrophthalmus', emoji: '\ud83d\udc26', summary: 'Needs dense understory and leaf litter for its scratch-foraging lifestyle.', status: 'Declining', page: 'eastern-towhee', habitats: ['woodland edge', 'edge', 'leaf litter'] },
  { name: 'Wood Thrush', scientificName: 'Hylocichla mustelina', emoji: '\ud83d\udc26', summary: 'A forest songbird in long decline because fragmentation reduces caterpillars and nesting success.', status: 'Declining', page: 'wood-thrush', habitats: ['woodland', 'woodland edge', 'leaf litter'] },
  { name: 'Eastern Meadowlark', scientificName: 'Sturnella magna', emoji: '\ud83d\udc26', summary: 'A grassland bird whose breeding success depends on large, uninterrupted meadow blocks.', status: 'Declining', page: 'eastern-meadowlark', habitats: ['meadow', 'open land', 'edge'] },
  { name: 'Baltimore Oriole', scientificName: 'Icterus galbula', emoji: '\ud83d\udc26', summary: 'Builds pendant nests in tall trees and has declined as elms and other suitable canopy structure disappeared.', status: 'Declining', page: 'baltimore-oriole', habitats: ['woodland edge', 'garden'] },
  { name: 'Scarlet Tanager', scientificName: 'Piranga olivacea', emoji: '\ud83d\udc26', summary: 'A forest-interior migrant that needs large blocks of canopy and suffers under heavy cowbird pressure.', status: 'Declining', page: 'scarlet-tanager', habitats: ['woodland'] },
]

interface SpeciesGalleryProps {
  onNavigate: (page: Page) => void
}

const STATUS_COLORS: Record<Status, string> = {
  Common: '#2e7d32',
  Declining: '#f57c00',
  Endangered: '#c62828',
}

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
  return (
    <div className="page">
      <section className="hero" style={{ paddingBottom: '1rem' }}>
        <div className="hero__eyebrow">All Species</div>
        <h1>The Species Gallery</h1>
        <p className="hero__lead">
          Browse every wildlife profile Camp Monarch currently tracks. Each card links to a full page with the species story and the yard actions that help.
        </p>
      </section>

      <section aria-label="Species gallery" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {SPECIES.map((species) => (
          <button
            key={species.page}
            type="button"
            onClick={() => onNavigate(species.page)}
            className="species-card"
            style={{ cursor: 'pointer', textAlign: 'left', padding: '1rem', border: '1px solid #d7e3d4', borderRadius: '16px', background: '#fff' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'baseline' }}>
              <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{species.emoji} {species.name}</h2>
              <span style={{ color: STATUS_COLORS[species.status], fontWeight: 700, fontSize: '0.85rem' }}>{species.status}</span>
            </div>
            <p style={{ margin: '0.35rem 0 0', fontStyle: 'italic', color: '#4d5b4f' }}>{species.scientificName}</p>
            <p style={{ margin: '0.75rem 0 0', lineHeight: 1.5 }}>{species.summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.9rem' }}>
              {species.habitats.map((habitat) => (
                <span key={habitat} style={{ background: '#eef4ea', borderRadius: '999px', padding: '0.25rem 0.6rem', fontSize: '0.78rem' }}>
                  {habitat}
                </span>
              ))}
            </div>
          </button>
        ))}
      </section>
    </div>
  )
}
