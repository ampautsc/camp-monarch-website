import type { Page } from '../App'

// Photo data — Wikimedia Commons (CC BY-SA) and iNaturalist open-data (CC BY-NC).
// Verified 2026-05-13. Attribution listed at bottom of page.
// vis-001, vis-002, vis-003, vis-004: real subject photography, card-top strip format.
const PHOTO_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="100%" height="100%" fill="%23e8ede8"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="34" fill="%234a5a4a" text-anchor="middle" dominant-baseline="middle">Photo unavailable</text></svg>'

const SPECIES: {
  page: Page
  name: string
  tagline: string
  photo: string
  alt: string
  attr: string
}[] = [
  {
    page: 'monarch-life',
    name: "Monarch Butterfly",
    tagline: "Travels 3,000 miles to Mexico every fall. Needs your milkweed.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg',
    alt: "Male Monarch butterfly with wings open showing orange and black pattern",
    attr: "Derek Ramsey / Wikimedia Commons / CC BY-SA 2.5",
  },
  {
    page: 'fireflies',
    name: "Fireflies",
    tagline: "Bioluminescent beetles disappearing with light pollution and pesticides.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Photinus_pyralis_Firefly_3.jpg/960px-Photinus_pyralis_Firefly_3.jpg',
    alt: "Photinus pyralis firefly on a green leaf",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'box-turtles',
    name: "Box Turtles",
    tagline: "May live a century. Cannot outrun a lawnmower.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/960px-Florida_Box_Turtle_Digon3.jpg',
    alt: "Box turtle with orange and yellow patterned shell on forest floor",
    attr: "Digon3 / Wikimedia Commons / CC BY-SA 3.0",
  },
  {
    page: 'native-bees',
    name: "Native Bees",
    tagline: "4,000 North American species — most nest in the ground, not hives.",
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/6812/medium.jpg',
    alt: "Bumblebee foraging on a flower",
    attr: "sankax / iNaturalist / CC BY-NC",
  },
  {
    page: 'gray-tree-frogs',
    name: "Gray Tree Frogs",
    tagline: "Camouflage masters whose summer trill fills the canopy on warm nights.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gray_treefrog_amplexus.JPG/960px-Gray_treefrog_amplexus.JPG',
    alt: "Two gray treefrogs on a branch",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'downy-woodpecker',
    name: "Downy Woodpecker",
    tagline: "Smallest woodpecker in North America. Drills insects from dead branches.",
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/177108982/medium.jpeg',
    alt: "Downy Woodpecker clinging to a tree trunk",
    attr: "Alexis Williams / iNaturalist / CC BY",
  },
  {
    page: 'baltimore-oriole',
    name: "Baltimore Oriole",
    tagline: "A flash of neon orange that just crossed the Gulf of Mexico.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baltimore_Oriole-_dorsum.jpg/960px-Baltimore_Oriole-_dorsum.jpg',
    alt: "Male Baltimore Oriole showing bright orange and black plumage on a branch",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'northern-cardinal',
    name: "Northern Cardinal",
    tagline: "Year-round resident. The male's red comes entirely from his diet.",
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/1396655/medium.jpg',
    alt: "Male Northern Cardinal with bright red plumage perched in a shrub",
    attr: "Greg Lasley / iNaturalist / CC BY-NC",
  },
  {
    page: 'eastern-bluebird',
    name: "Eastern Bluebird",
    tagline: "Nearly lost to nest competitors. Brought back by nest-box volunteers.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sialia_sialis_male_Pennington_NJ.jpg/960px-Sialia_sialis_male_Pennington_NJ.jpg',
    alt: "Male Eastern Bluebird showing sky-blue back and rusty-orange breast",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'black-capped-chickadee',
    name: "Black-capped Chickadee",
    tagline: "Fearless year-round feeder visitor and insect hunter of bark and branches.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Poecile-atricapilla-001.jpg/960px-Poecile-atricapilla-001.jpg',
    alt: "Black-capped Chickadee perched on a thin branch",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'ruby-throated-hummingbird',
    name: "Ruby-throated Hummingbird",
    tagline: "The only hummingbird in eastern North America. Weighs less than a nickel.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Archilochus_colubris_-flying_-male-8.jpg/960px-Archilochus_colubris_-flying_-male-8.jpg',
    alt: "Male Ruby-throated Hummingbird in flight with iridescent red throat",
    attr: "Dick Daniels / Wikimedia Commons / CC BY-SA 3.0",
  },
  {
    page: 'american-goldfinch',
    name: "American Goldfinch",
    tagline: "Strict seed eater. Delays breeding until thistle and milkweed down are ready.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg/960px-Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg',
    alt: "Male American Goldfinch in bright yellow breeding plumage on a branch",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'american-robin',
    name: "American Robin",
    tagline: "The original spring messenger. Arrives when earthworms reach the surface.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/American_robin_%2871307%29.jpg/960px-American_robin_%2871307%29.jpg',
    alt: "American Robin on grass showing its characteristic orange-red breast",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'indigo-bunting',
    name: "Indigo Bunting",
    tagline: "So blue it defies belief. Navigates by the stars across the Gulf of Mexico.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Indigo_Bunting_by_Dan_Pancamo_4.jpg/960px-Indigo_Bunting_by_Dan_Pancamo_4.jpg',
    alt: "Male Indigo Bunting showing brilliant iridescent blue plumage",
    attr: "Dan Pancamo / Wikimedia Commons / CC BY-SA 2.0",
  },
  {
    page: 'tiger-swallowtail',
    name: "Tiger Swallowtail",
    tagline: "Largest butterfly in eastern North America. Caterpillars need your canopy trees.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pristine_Eastern_Tiger_Swallowtail.jpg/960px-Pristine_Eastern_Tiger_Swallowtail.jpg',
    alt: "Eastern Tiger Swallowtail butterfly with yellow and black striped wings open",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'polyphemus-moth',
    name: "Polyphemus Moth",
    tagline: "Six-inch wingspan, four enormous eyespots, one week to live. Named for the Cyclops.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Antheraea_polyphemus_sjh.jpg/960px-Antheraea_polyphemus_sjh.jpg',
    alt: "Polyphemus Moth with wings spread showing large eyespots on hindwings",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'luna-moth',
    name: "Luna Moth",
    tagline: "Pale green wings, sweeping tails, no mouth. Seven days to find a mate in the dark.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Actias_luna.jpg/960px-Actias_luna.jpg',
    alt: "Luna Moth with wings spread showing pale green wings and long hindwing tails",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'green-darner',
    name: "Green Darner",
    tagline: "A dragonfly that migrates with Monarchs and eats 100 mosquitoes a day.",
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/10604112/medium.jpg',
    alt: "Green darner dragonfly perched on vegetation showing blue abdomen",
    attr: "Greg Lasley / iNaturalist / CC BY-NC",
  },
  {
    page: 'garter-snake',
    name: "Common Garter Snake",
    tagline: "North America's most widespread reptile — and your garden's best pest control.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thamnophis_sirtalis_sirtalis_Wooster.jpg/960px-Thamnophis_sirtalis_sirtalis_Wooster.jpg',
    alt: "Eastern garter snake coiled on ground showing striped pattern",
    attr: "Wikimedia Commons / CC BY-SA",
  },
  {
    page: 'dark-eyed-junco',
    name: "Dark-eyed Junco",
    tagline: "The snowbird at your winter feeder. A sign the boreal forest is still intact.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Junco_hyemalis_hyemalis_CT1_%28cropped%29.jpg/960px-Junco_hyemalis_hyemalis_CT1_%28cropped%29.jpg',
    alt: "Dark-eyed Junco perched showing dark gray back and white belly",
    attr: "Wikimedia Commons / CC BY-SA",
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
    tagline: "A thumbnail-sized frog whose chorus announces the end of winter.",
    photo: 'https://inaturalist-open-data.s3.amazonaws.com/photos/6428345/medium.jpg',
    alt: "Spring peeper frog showing the characteristic X mark on its back",
    attr: "Bruce J. Mohn / iNaturalist / CC BY-NC",
  },
  {
    page: 'toad',
    name: "American Toad",
    tagline: "Eats 10,000 insects a summer. Its spring trill is one of the longest frog calls.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bufo_americanus_PJC1.jpg/960px-Bufo_americanus_PJC1.jpg',
    alt: "American toad on forest floor showing brown warty skin",
    attr: "Patrick J. Campbell / Wikimedia Commons / CC BY-SA 3.0",
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
    tagline: "Lives in your neighborhood trees. Down 38% since 1970. Most people who share a yard with one have never seen it.",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Megascops_asio_in_hole.jpg/960px-Megascops_asio_in_hole.jpg',
    alt: "Eastern Screech Owl peering from a tree cavity, showing cryptic bark-like camouflage",
    attr: "Ltshears / Wikimedia Commons / CC BY-SA 3.0",
  },
]

interface SpeciesGalleryProps {
  onNavigate: (page: Page) => void
}

// Photo card with strip at top (vis-003: photo strip > color accent > emoji)
function SpeciesCard({
  species,
  onNavigate,
}: {
  species: (typeof SPECIES)[number]
  onNavigate: (page: Page) => void
}) {
  return (
    <button
      className="species-card"
      onClick={() => onNavigate(species.page)}
      aria-label={`Learn about ${species.name}`}
      style={{
        display: 'block',
        width: '100%',
        background: '#fff',
        border: '1px solid #d4e2d4',
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.15s ease, transform 0.15s ease',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
        ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'
        ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
      }}
    >
      {/* Photo strip — vis-003: photo at top of card */}
      <div
        style={{
          width: '100%',
          height: '180px',
          overflow: 'hidden',
          background: '#e8ede8',
          flexShrink: 0,
        }}
      >
        <img
          src={species.photo}
          alt={species.alt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={e => {
            const img = e.currentTarget as HTMLImageElement
            img.onerror = null
            img.src = PHOTO_FALLBACK
          }}
        />
      </div>
      {/* Card body */}
      <div style={{ padding: '0.875rem 1rem 1rem' }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: '1rem',
            color: '#2d4a2d',
            marginBottom: '0.25rem',
            lineHeight: 1.3,
          }}
        >
          {species.name}
        </div>
        <p
          style={{
            margin: '0 0 0.75rem',
            fontSize: '0.875rem',
            color: '#4a5a4a',
            lineHeight: 1.4,
          }}
        >
          {species.tagline}
        </p>
        <span
          style={{
            fontSize: '0.8125rem',
            color: '#2d7a2d',
            fontWeight: 600,
          }}
        >
          Learn more →
        </span>
      </div>
    </button>
  )
}

export default function SpeciesGallery({ onNavigate }: SpeciesGalleryProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>The wild lives sharing your yard</h1>
        <p className="hero__lead">
          The animals on this page don't need a nature preserve. They need
          habitat — food, cover, water, and land free of pesticides. Every one
          of them can thrive in a backyard. Every one of them is already
          trying to.
        </p>
      </section>

      <div className="page">
        {/* Species grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {SPECIES.map(species => (
            <SpeciesCard key={species.page} species={species} onNavigate={onNavigate} />
          ))}
        </div>

        {/* What connects them section */}
        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">What connects every species on this page</h2>
          <p>
            These {SPECIES.length} animals share something in common: all of them are doing worse than
            they were 50 years ago, and all of them can be meaningfully helped by what
            happens in residential yards. That's not an abstraction. Monarchs need
            milkweed that grows in backyards. Box turtles need leaf litter that homeowners
            typically rake away. Spring peepers need vernal pools that lawn grading
            typically fills. Green darners need wetland edges that lawn chemicals destroy.
          </p>
          <p>
            The common thread isn't a single action. It's a shift in how a yard is managed:
            fewer pesticides, more native plants, some standing water, less bare ground,
            some debris left in place. That combination — applied across millions of yards —
            is the difference between a fragmented landscape and a corridor.
          </p>
        </section>

        {/* Take Action section */}
        <section
          aria-labelledby="take-action-heading"
          style={{
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid #d4e2d4',
          }}
        >
          <h2 id="take-action-heading" style={{ marginBottom: '0.5rem' }}>What will you do?</h2>
          <p style={{ marginBottom: '1.5rem', color: '#4a5a4a' }}>
            Every yard in this list is declining partly because of how residential land is managed.
            That means residential land is also where the recovery happens.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                page: 'habitat-score' as Page,
                emoji: '📋',
                label: 'Take the Yard Check',
                desc: 'Six questions. A personalized next step.',
              },
              {
                page: 'habitat-transformation' as Page,
                emoji: '🌿',
                label: 'Transform Your Lawn',
                desc: 'Five concrete steps to convert turf to habitat.',
              },
              {
                page: 'hoa-guide' as Page,
                emoji: '🏘️',
                label: 'Navigate HOA Rules',
                desc: 'Eight state laws + five strategies that work.',
              },
            ].map(card => (
              <button
                key={card.page}
                onClick={() => onNavigate(card.page)}
                style={{
                  padding: '1.25rem',
                  textAlign: 'left',
                  background: '#f0f7f0',
                  border: '1px solid #c8dcc8',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#e4f0e4')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f7f0')}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{card.emoji}</div>
                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{card.label}</div>
                <div style={{ fontSize: '0.875rem', color: '#4a5a4a' }}>{card.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Attribution — required for CC licenses */}
        <section
          aria-labelledby="photo-credits-heading"
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #d4e2d4',
          }}
        >
          <h2
            id="photo-credits-heading"
            style={{ fontSize: '0.9375rem', color: '#4a5a4a', marginBottom: '0.5rem' }}
          >
            Photo credits
          </h2>
          <ul
            style={{
              margin: 0,
              padding: '0 0 0 1.25rem',
              fontSize: '0.8125rem',
              color: '#6a7a6a',
              lineHeight: 1.6,
            }}
          >
            {SPECIES.map(s => (
              <li key={s.page}>
                <strong>{s.name}:</strong> {s.attr}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
