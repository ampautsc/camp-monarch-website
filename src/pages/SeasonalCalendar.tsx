import { useState } from 'react'
import type { Page } from '../App'

interface SeasonalCalendarProps {
  onNavigate: (page: Page) => void
}

interface SpeciesSpotlight {
  label: string
  page: Page
  detail: string
}

interface MonthData {
  name: string
  season: string
  headline: string
  intro: string
  spotlights: SpeciesSpotlight[]
  action: string
  actionDetail: string
}

const MONTHS: MonthData[] = [
  {
    name: 'January',
    season: 'Winter',
    headline: 'The feeders carry the neighborhood',
    intro:
      'The yard looks quiet in January, but the animals that chose to stay are watching. ' +
      'Dark-eyed juncos and black-capped chickadees work the feeder. ' +
      'Beneath the soil, frozen leaf litter, and bark piles, garter snakes, toads, chipmunks, and tree frogs ' +
      'are dormant — surviving entirely on the shelter you left standing when the leaves fell. ' +
      'The yard\'s work in January is almost invisible. That\'s the point.',
    spotlights: [
      {
        label: 'Dark-eyed Junco',
        page: 'dark-eyed-junco',
        detail:
          'The snowbird of feeders. White-millet at a ground-level tray keeps them fed. ' +
          'A junco in January means you left the leaf litter down and planted something worth eating.',
      },
      {
        label: 'Black-capped Chickadee',
        page: 'black-capped-chickadee',
        detail:
          'Working every tree crevice, bark flap, and seed head for hidden insects. ' +
          'Native trees with rough bark are as important as your feeder.',
      },
    ],
    action: 'Top off feeders with white millet and black-oil sunflower.',
    actionDetail:
      'January is the lowest point in wild food availability. ' +
      'White millet goes to juncos and sparrows. Black-oil sunflower serves chickadees, cardinals, and goldfinches. ' +
      'Keep them clear of ice and replenish every few days.',
  },
  {
    name: 'February',
    season: 'Winter',
    headline: 'The first thaw — something is listening',
    intro:
      'February is still winter, but the light is changing. Chipmunks may emerge on warm afternoons ' +
      'to check the cache before returning underground. Garter snakes will bask on the first 50-degree day ' +
      'they can find. Cardinals begin singing mate-seeking songs. Nothing has arrived yet, but the whole ' +
      'system is listening for the cue to wake up.',
    spotlights: [
      {
        label: 'Northern Cardinal',
        page: 'northern-cardinal',
        detail:
          'Males begin their spring song in February — clear, loud, and repeated from a prominent perch. ' +
          'If you hear it, a mated pair is likely already resident in your trees.',
      },
      {
        label: 'Eastern Chipmunk',
        page: 'eastern-chipmunk',
        detail:
          'Torpor isn\'t true hibernation. Chipmunks wake periodically to eat from their underground cache. ' +
          'A warm February day may bring one briefly above ground before it disappears again.',
      },
    ],
    action: 'Avoid pruning and cleanup until temperatures stay above 50°F consistently.',
    actionDetail:
      'Hollow stems, brush piles, and leaf litter hold overwintering insects, larvae, and small mammals. ' +
      'A February cleanup removes the food and shelter that February animals are counting on. ' +
      'Wait until the new growth is pushing through.',
  },
  {
    name: 'March',
    season: 'Early Spring',
    headline: 'Spring peepers announce the season',
    intro:
      'The moment spring peepers begin calling, the season has officially turned. ' +
      'These thumbnail-sized tree frogs can call on nights that freeze again the next morning — ' +
      'their cells loaded with glucose that prevents ice crystal damage. ' +
      'In March, the chorus at dusk is the loudest evidence that the yard\'s water and leaf-litter resources survived winter intact. ' +
      'American robins return to lawns. Garter snakes emerge to bask in the first real sun.',
    spotlights: [
      {
        label: 'Spring Peeper',
        page: 'spring-peeper',
        detail:
          'Up to 13,500 calls per night from a frog the size of your thumbnail. ' +
          'Calling means fish-free shallow water and intact leaf litter are both present. ' +
          'That is a habitat verification result.',
      },
      {
        label: 'American Robin',
        page: 'american-robin',
        detail:
          'Robins wintering nearby move back to lawns as earthworm activity resumes with thaw. ' +
          'They are hunting by sound — cocking their head to detect movement below soil, not looking for worms.',
      },
      {
        label: 'Garter Snake',
        page: 'garter-snake',
        detail:
          'The first warm-day basker. Garter snakes emerge from communal hibernacula when ground temperatures rise. ' +
          'A rock pile in a sunny spot gives them the thermal bridge they need from winter to hunting season.',
      },
    ],
    action: 'Protect fish-free water features. Keep chemicals off breeding habitat.',
    actionDetail:
      'Spring peepers and American toads will begin breeding in March and April. ' +
      'If your rain garden, tub pond, or low spot accumulates water, keep road salt and ' +
      'glyphosate runoff away from it. Those chemicals kill amphibian tadpoles at the concentrations ' +
      'found in ordinary suburban use.',
  },
  {
    name: 'April',
    season: 'Spring',
    headline: 'Monarchs cross the border — and hummingbirds cross the Gulf',
    intro:
      'April is when the migrations most people associate with spring actually arrive. ' +
      'Monarch butterflies move through Texas and into the Ozarks, tracking milkweed emergence north. ' +
      'Ruby-throated hummingbirds cross the Gulf of Mexico in a single nonstop night — ' +
      'one of the most demanding flights in North America — and appear at nectar plants and feeders ' +
      'from the Gulf Coast northward through April. American toads begin their long breeding trill from every ' +
      'pond and puddle with shallow water.',
    spotlights: [
      {
        label: 'Monarch Butterfly',
        page: 'monarch-life',
        detail:
          'The spring migration has no organized reporting network the way the fall does. ' +
          'Log what you see on iNaturalist. Your observation tells researchers which corridors are being used this year.',
      },
      {
        label: 'Ruby-Throated Hummingbird',
        page: 'ruby-throated-hummingbird',
        detail:
          'Males arrive 1–2 weeks ahead of females to establish territory. ' +
          'Put the feeder out before you expect them — they are scouting ahead of schedule. ' +
          'Native red and orange tubular flowers are more reliable than feeders alone.',
      },
      {
        label: 'American Toad',
        page: 'toad',
        detail:
          'The long musical trill of breeding toads can fill a yard for weeks in April. ' +
          'One toad eats up to 1,000 insects per night. ' +
          'The pesticide-free yard is the only yard where toads can breed safely.',
      },
    ],
    action: 'Get milkweed in the ground. Monarchs need it when they arrive.',
    actionDetail:
      'Common milkweed, butterfly weed, and swamp milkweed are the three most reliable species ' +
      'for the Midwest corridor. April is the right window to transplant starts or get plugs in the ground ' +
      'before the first monarchs move through your area. ' +
      'Six inches of growth is enough for egg-laying to begin.',
  },
  {
    name: 'May',
    season: 'Spring',
    headline: 'Peak migration: the yard earns everything it planted',
    intro:
      'May is the busiest migration month of the year in the Midwest. Indigo buntings and Baltimore orioles ' +
      'arrive from Central America. American goldfinches shift into brilliant yellow. Tiger swallowtails ' +
      'patrol every flowering tree and shrub. Monarchs move through the Midwest in numbers. ' +
      'Native bees — many just emerging from winter dormancy — work every open flower. ' +
      'A yard with native plants in bloom is now proving its worth to every passing animal.',
    spotlights: [
      {
        label: 'Indigo Bunting',
        page: 'indigo-bunting',
        detail:
          'Not blue from pigment — from light-scattering nanostructure in feather barbs. ' +
          'Buntings navigate by star patterns during migration. ' +
          'A male singing from a high perch in May is one of the most vivid signs of spring in the eastern US.',
      },
      {
        label: 'Tiger Swallowtail',
        page: 'tiger-swallowtail',
        detail:
          'North America\'s largest butterfly, wing-spanning up to 5.5 inches. ' +
          'Males puddle at mud and mineral seeps. Host trees include wild black cherry, tulip poplar, and ash. ' +
          'A yard with a tall native tree is a yard with swallowtails.',
      },
      {
        label: 'Baltimore Oriole',
        page: 'baltimore-oriole',
        detail:
          'Just crossed the Gulf of Mexico. Looking for tall trees with pendant branches, dark native fruits, ' +
          'and caterpillar-rich foliage. A grape jelly feeder buys goodwill; native trees are what make them stay.',
      },
      {
        label: 'American Goldfinch',
        page: 'american-goldfinch',
        detail:
          'One of the latest breeders in North America — waiting until native thistles and coneflowers ' +
          'go to seed in midsummer. The yard that blooms through July feeds the next generation of goldfinches.',
      },
      {
        label: 'Monarch Butterfly',
        page: 'home',
        detail:
          'Left Mexico in March. The spring migration moves north through Texas and Oklahoma before ' +
          'reaching the Midwest in May. Females lay eggs on milkweed that is at least 6 inches tall. ' +
          'A milkweed plant in bloom right now is a waypoint in the corridor.',
      },
    ],
    action: 'Keep insecticides off flowering plants and milkweed entirely.',
    actionDetail:
      'May is when multiple species are using your yard simultaneously. ' +
      'A single insecticide application — even a "targeted" one — can kill monarch caterpillars, ' +
      'native bee larvae, and tiger swallowtail young in the same hour. ' +
      'The chemical-free yard in May is not a sacrifice. It is the whole point.',
  },
  {
    name: 'June',
    season: 'Summer',
    headline: 'Caterpillars, fireflies, and dragonfly season begins',
    intro:
      'June is monarch breeding peak in the Midwest. Check the underside of milkweed leaves every few days ' +
      'for pale yellow ribbed eggs, and look for the boldly striped caterpillars that follow. ' +
      'Fireflies begin their first flashes in the tall grass at dusk. ' +
      'Common green darners — the large dragonflies that migrated north in spring — are now hunting ' +
      'over every water feature and open lawn. Native bees are at peak activity on open flowers.',
    spotlights: [
      {
        label: 'Monarch Butterfly',
        page: 'monarch-life',
        detail:
          'Eggs hatch in 3–5 days. Caterpillars eat for 9–14 days, then form the jade-green chrysalis. ' +
          'The full cycle from egg to adult takes about 30 days in June heat. ' +
          'Leave the milkweed standing and standing-dead stems nearby for chrysalis attachment.',
      },
      {
        label: 'Fireflies',
        page: 'fireflies',
        detail:
          'Each species has its own flash pattern — a private language. ' +
          'Fireflies spend most of their life as larvae in moist leaf litter and soil, eating earthworms and snails. ' +
          'No leaf litter, no fireflies next year.',
      },
      {
        label: 'Green Darner',
        page: 'green-darner',
        detail:
          'The largest and most abundant dragonfly in North America. ' +
          'Larvae spend 1–2 years as aquatic predators before emergence. ' +
          'A clean-water pond without fish is their most important resource.',
      },
    ],
    action: 'Leave standing stems and grass areas unmowed around water features.',
    actionDetail:
      'Firefly larvae need moist undisturbed soil and leaf litter. ' +
      'Green darner larvae need clean, fish-free water with emergent vegetation. ' +
      'The June mow schedule that leaves field edges, pond margins, and unmulched beds ' +
      'alone is worth more to the local food web than any planting you\'ll do this year.',
  },
  {
    name: 'July',
    season: 'Summer',
    headline: 'Monarchs raise families. The rest fills in around them.',
    intro:
      'July is when the yard\'s ecological work becomes visible. Multiple monarch generations may be cycling ' +
      'through the milkweed simultaneously. American goldfinches are raising young on late-blooming native plants. ' +
      'Fireflies are at peak flash activity in the first two weeks. Eastern chipmunks are beginning ' +
      'to cache heavily for the coming winter. The heat is high, but the habitat is doing its job.',
    spotlights: [
      {
        label: 'American Goldfinch',
        page: 'american-goldfinch',
        detail:
          'One of the last birds to nest — waiting until thistles go to seed in midsummer. ' +
          'A yard with native wildflowers blooming into August supports the full nesting cycle. ' +
          'Coneflowers, black-eyed Susans, and native thistles all work.',
      },
      {
        label: 'Eastern Chipmunk',
        page: 'eastern-chipmunk',
        detail:
          'Chipmunks begin filling underground caches with seeds, nuts, and berries in July. ' +
          'A native shrub layer — serviceberry, spicebush, viburnum — is the grocery store they\'re working. ' +
          'A rodenticide-free yard lets them do this safely.',
      },
      {
        label: 'Green Darner',
        page: 'green-darner',
        detail:
          'Adults patrol territories over open water and adjacent meadow, consuming mosquitoes and small insects. ' +
          'One adult darner can eat hundreds of mosquitoes per day — more effective than any spray program.',
      },
    ],
    action: 'Check milkweed for monarch eggs and caterpillars every few days.',
    actionDetail:
      'Mid-July through early August is peak monarch breeding in the upper Midwest. ' +
      'Eggs are laid singly on the underside of milkweed leaves. ' +
      'Caterpillars strip leaves quickly — that is normal and healthy. Do not move them. ' +
      'The milkweed will rebound. Let the cycle complete.',
  },
  {
    name: 'August',
    season: 'Late Summer',
    headline: 'The fall migration begins — earlier than you think',
    intro:
      'The first monarchs begin moving south by late July and the stream becomes visible in August. ' +
      'These are not the same individuals that bred in your yard — they are the migratory generation, ' +
      'physiologically different, programmed to fly 2,000 miles without breeding. ' +
      'At the same time, common green darners begin their own southward migration, often moving on the ' +
      'same cold fronts the monarchs use. The nectar corridor south matters now as much as milkweed did in spring.',
    spotlights: [
      {
        label: 'Monarch Butterfly',
        page: 'monarch-life',
        detail:
          'The migratory generation needs late-season nectar to build fat reserves for the journey. ' +
          'Native asters, ironweed, goldenrod, and joe-pye weed blooming in August and September ' +
          'are the fuel stations the migration depends on.',
      },
      {
        label: 'Green Darner',
        page: 'green-darner',
        detail:
          'Green darners and monarchs often travel together on the same cold fronts in August and September. ' +
          'A yard that supports clean-water dragonfly emergence also supports a co-migrant that few people know exists.',
      },
      {
        label: 'Ruby-Throated Hummingbird',
        page: 'ruby-throated-hummingbird',
        detail:
          'Hummingbirds begin moving south in August, often before nectar flowers peak in the north. ' +
          'Keep the feeder full through September — migrants stopping through may not be "your" birds at all.',
      },
    ],
    action: 'Let goldenrod, asters, and ironweed bloom. Resist the fall cleanup urge.',
    actionDetail:
      'The fall bloom strip is the most underrated part of monarch habitat. ' +
      'A corridor of native late-blooming wildflowers along a fence line, property edge, or garden bed ' +
      'can serve as a refueling stop for hundreds of monarchs over the course of a two-week window. ' +
      'Leave it standing through October.',
  },
  {
    name: 'September',
    season: 'Fall',
    headline: 'Peak monarch migration — and the juncos are coming',
    intro:
      'September brings the peak of the monarch migration through the central corridor. ' +
      'On certain days following a cold front from the north, thousands of monarchs may pass through a single ' +
      'location, nectaring on every available late wildflower. The migration is one of the great wildlife ' +
      'spectacles on the continent. It is also fragile — dependent on an intact nectar corridor that ' +
      'is shrinking as native late-season flowers are replaced with turf grass and annual beds. ' +
      'Dark-eyed juncos begin arriving from their boreal breeding grounds.',
    spotlights: [
      {
        label: 'Monarch Butterfly',
        page: 'monarch-life',
        detail:
          'Log every monarch sighting on Journey North or iNaturalist during September. ' +
          'The fall migration is better tracked than the spring, but every data point matters. ' +
          'A yard full of blooming native asters on a cold-front morning can hold dozens of resting monarchs.',
      },
      {
        label: 'Dark-eyed Junco',
        page: 'dark-eyed-junco',
        detail:
          'Juncos begin arriving in September and October as their boreal breeding habitat cools. ' +
          'They spend the winter at feeders and in leaf-litter beds, eating fallen seeds. ' +
          'The leaf litter you leave down in fall is their foraging habitat all winter.',
      },
      {
        label: 'Green Darner',
        page: 'green-darner',
        detail:
          'Late September sees the last large green darner movement south. ' +
          'Watch for them flying low over fields and open water on days following a north wind.',
      },
    ],
    action: 'Plant native asters and goldenrod now for next fall migration season.',
    actionDetail:
      'September is the right month to plant native asters, goldenrod, and ironweed for next year. ' +
      'Fall-planted perennials establish strong root systems over winter and bloom more vigorously ' +
      'in their first full season than spring-planted ones. ' +
      'Even one clump of native asters in a 10-square-foot patch can serve as a visible fuel stop ' +
      'in the migration corridor.',
  },
  {
    name: 'October',
    season: 'Fall',
    headline: 'Monarchs reach Mexico. Juncos settle in.',
    intro:
      'By mid-October, the last monarchs are crossing into Mexico. The mountain forests of Michoacán ' +
      'will hold hundreds of millions of them through the winter, dormant in a cold they need to survive. ' +
      'Back home, the yard transitions to its winter residents. Dark-eyed juncos are working ' +
      'every seed head left standing. Eastern chipmunks are making their final cache runs before ' +
      'entering torpor. Garter snakes are finding their way to communal hibernacula.',
    spotlights: [
      {
        label: 'Dark-eyed Junco',
        page: 'dark-eyed-junco',
        detail:
          'Juncos work the leaf litter and ground beneath feeders, flicking leaves aside to find fallen seeds. ' +
          'The leaf-litter layer you leave in place is literally their foraging habitat. ' +
          'A tidy raked-bare yard is a food desert for juncos.',
      },
      {
        label: 'Eastern Chipmunk',
        page: 'eastern-chipmunk',
        detail:
          'October chipmunks are running hard. Cheek pouches stuffed with seeds, nuts, and berries ' +
          'on every trip underground. A single chipmunk may cache several pounds of food before entering torpor. ' +
          'Native shrubs with persistent fruit are the most valuable thing you can plant for them.',
      },
      {
        label: 'Garter Snake',
        page: 'garter-snake',
        detail:
          'Garter snakes are seeking communal hibernacula — often rocky slopes, stone walls, or deep soil ' +
          'around old foundations. A rock pile in a protected sunny corner is used year after year. ' +
          'Disturbing a hibernaculum in winter can be fatal to the whole group.',
      },
    ],
    action: 'Leave the leaves. Leave the stems. Leave everything standing through March.',
    actionDetail:
      'The fall cleanup ritual is the single most destructive thing most homeowners do to their local wildlife. ' +
      'Hollow stems hold native bee larvae. Leaf litter holds firefly larvae, overwintering moths, toads, ' +
      'and the insects that juncos eat all winter. ' +
      'Leaving it standing requires nothing more than not doing the thing you were trained to do.',
  },
  {
    name: 'November',
    season: 'Late Fall',
    headline: 'The residents are counting on what you left behind',
    intro:
      'November is the month when everything you did or didn\'t do in October becomes real. ' +
      'The chipmunks are underground in their caches. The garter snakes are in their hibernacula. ' +
      'The toads are buried below the frost line in loose soil. ' +
      'The firefly larvae are in the leaf litter. The native bee larvae are in hollow stems. ' +
      'None of them can go anywhere else. They are living in whatever habitat was left standing.',
    spotlights: [
      {
        label: 'Dark-eyed Junco',
        page: 'dark-eyed-junco',
        detail:
          'Juncos will be at feeders all month. ' +
          'White millet on a tray feeder at ground level is the highest-value food. ' +
          'They forage in small flocks, often with sparrows and other ground-feeding birds.',
      },
      {
        label: 'Black-capped Chickadee',
        page: 'black-capped-chickadee',
        detail:
          'Chickadees are caching seeds in November — hiding them individually in bark crevices and soil ' +
          'and remembering every location. A yard with rough-barked native trees is a pantry for them.',
      },
      {
        label: 'American Toad',
        page: 'toad',
        detail:
          'Toads burrow below the frost line in fall, digging backward into loose soil or under root masses. ' +
          'An undisturbed leaf-litter and brush-pile area gives them the insulation and loose substrate they need.',
      },
    ],
    action: 'Fill feeders. Prepare for the long haul.',
    actionDetail:
      'If you run a feeder, November through March is when it matters most. ' +
      'Wild food is at its lowest. ' +
      'Black-oil sunflower, white millet, and suet consistently support ' +
      'the broadest range of winter birds. ' +
      'Keep feeders clean to prevent disease transmission — rinse every two weeks in a 10% bleach solution.',
  },
  {
    name: 'December',
    season: 'Winter',
    headline: 'The system is asleep. And it\'s waiting.',
    intro:
      'December is the resting state. Monarchs are clustered in Michoacán forests. ' +
      'Garter snakes and toads are below the frost line. Chipmunks are in their caches. ' +
      'Green darner larvae are developing slowly in cold ponds. Firefly larvae are in the leaf litter. ' +
      'The yard has done its work for the year. ' +
      'What it holds right now — in soil, stems, and water — is what comes back in spring.',
    spotlights: [
      {
        label: 'Dark-eyed Junco',
        page: 'dark-eyed-junco',
        detail:
          'The reliable winter constant. Juncos are at feeders every clear morning. ' +
          'Watching them work the ground under a feeder is one of the most accessible bits of December nature ' +
          'available from any window.',
      },
      {
        label: 'Downy Woodpecker',
        page: 'downy-woodpecker',
        detail:
          'Downy woodpeckers work bark and dead wood for overwintering insects all winter. ' +
          'Suet feeders supplement their foraging. A standing dead tree or large snag is irreplaceable for them.',
      },
    ],
    action: 'Plan for spring: what\'s missing from your yard?',
    actionDetail:
      'December is the best time to plan what to add. ' +
      'Order native plant plugs from local nurseries — many sell out by March. ' +
      'Identify what your yard doesn\'t have: milkweed for monarchs, host trees for swallowtails, ' +
      'a water feature for darners and toads, a brush pile for garter snakes and chipmunks. ' +
      'The restoration year that matters most is the one you plan right now.',
  },
]

const SEASON_COLORS: Record<string, string> = {
  Winter: '#4a7fb5',
  'Early Spring': '#6aaa64',
  Spring: '#2e8b57',
  Summer: '#d4a017',
  'Late Summer': '#c07c2a',
  Fall: '#b85c26',
  'Late Fall': '#7a4f3a',
}

export default function SeasonalCalendar({ onNavigate }: SeasonalCalendarProps) {
  const currentMonthIndex = new Date().getMonth() // 0-indexed
  const [selected, setSelected] = useState(currentMonthIndex)

  const month = MONTHS[selected]
  const seasonColor = SEASON_COLORS[month.season] ?? '#4a7fb5'

  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">When to Watch</div>
        <h1>Seasonal Wildlife Calendar</h1>
        <p className="hero__lead">
          Every month, the yard is doing something. This calendar shows which species are active,
          what to look for, and what one action will matter most — month by month, through the full year.
        </p>
      </section>

      <div className="page">
        {/* Month selector */}
        <nav aria-label="Select month" style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '0.4rem',
              maxWidth: '640px',
            }}
          >
            {MONTHS.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                style={{
                  padding: '0.5rem 0.25rem',
                  fontSize: '0.8rem',
                  fontWeight: selected === i ? '700' : '400',
                  background: selected === i ? seasonColor : 'transparent',
                  color: selected === i ? '#fff' : 'inherit',
                  border: `1px solid ${selected === i ? seasonColor : '#ccc'}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background 0.15s, color 0.15s',
                }}
                title={i === currentMonthIndex ? 'Current month' : undefined}
              >
                {m.name.slice(0, 3)}
                {i === currentMonthIndex ? (
                  <span style={{ display: 'block', fontSize: '0.6rem', lineHeight: '1', marginTop: '0.1rem', opacity: 0.9 }}>now</span>
                ) : null}
              </button>
            ))}
          </div>
        </nav>

        {/* Season badge + headline */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: seasonColor,
              color: '#fff',
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.2em 0.7em',
              borderRadius: '3px',
              marginBottom: '0.5rem',
            }}
          >
            {month.season}
          </span>
          <h2 style={{ marginTop: 0 }}>{month.name}: {month.headline}</h2>
        </div>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{month.intro}</p>

        {/* Species spotlights */}
        <h3 style={{ marginTop: '2rem' }}>Who\'s active this month</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {month.spotlights.map((s) => (
            <div
              key={s.label}
              style={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '1rem',
                background: '#fafaf8',
              }}
            >
              <button
                className="link-button"
                onClick={() => onNavigate(s.page)}
                style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.4rem', display: 'block' }}
              >
                {s.label} →
              </button>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.55' }}>{s.detail}</p>
            </div>
          ))}
        </div>

        {/* Action panel */}
        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>
            Best action for {month.name}
          </h2>
          <p style={{ fontWeight: '700', fontSize: '1.05rem', marginTop: 0 }}>{month.action}</p>
          <p style={{ margin: 0 }}>{month.actionDetail}</p>
        </div>

        {/* Footer navigation */}
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="link-button" onClick={() => onNavigate('monarch-life')}>
            Monarch Butterfly
          </button>
          <button className="link-button" onClick={() => onNavigate('the-migration')}>
            The Migration
          </button>
          <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
            Choose a Plant
          </button>
          <button className="link-button" onClick={() => onNavigate('take-action')}>
            Take Action
          </button>
          <button className="link-button" onClick={() => onNavigate('log-a-sighting')}>
            Log a Sighting
          </button>
          <button className="link-button" onClick={() => onNavigate('species-gallery')}>
            All Species
          </button>
        </div>
      </div>
    </>
  )
}
