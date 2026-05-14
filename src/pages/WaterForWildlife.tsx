import type { Page } from '../App'

interface WaterForWildlifeProps {
  onNavigate: (page: Page) => void
}

// bta-004: Give people a path. They already care.
// aiw-002: Concrete images do the emotional work.
// aiw-006: Every claim has a number or a species name.
// man-001: Usufruct frame — we hold the land in trust.

const sections = [
  {
    id: 'birdbaths',
    label: '01',
    headline: 'The birdbath — a one-square-foot habitat',
    color: '#1a7abf',
    body: `On a hot July afternoon, a ruby-throated hummingbird will visit a
birdbath dozens of times. It does not drink — it bathes, then perches
nearby to preen its feathers into flight-perfect alignment. Without that
ritual, its insulating layer breaks down and it burns more calories staying
warm at night. A birdbath is not a decoration. It is infrastructure.`,
    detail: `The right birdbath is shallow — no more than two inches at the deepest
point. Birds cannot swim. A basin that holds four inches of water is a trap,
not a resource. Rough texture on the bottom gives footing; a smooth ceramic
basin sends birds sliding to the center. A large flat rock placed in the
center of a deep basin solves both problems instantly.

Moving water attracts birds that would ignore a still bath. A solar-powered
dripper or wiggler adds gentle surface movement that birds detect from
hundreds of feet away. The sound alone — water on water — is a signal:
this yard is safe, this yard has what you need.

In winter, a heated birdbath becomes one of the most valuable things in a
neighborhood. When temperatures drop, open water can be miles away.
A 150-watt immersion heater keeps water liquid down to -20°F and costs
about the same as a bag of birdseed to run for a season.`,
    action: `Place the bath within ten feet of shrub cover so birds can escape to
safety after bathing — wet feathers slow flight by 30 percent. Clean the
basin every two to three days; standing water grows algae and becomes
a mosquito breeding site within a week. Dump, scrub, refill. The whole
job takes four minutes.`,
    species: [
      { page: 'ruby-throated-hummingbird' as Page, name: 'Ruby-throated Hummingbird', why: 'Bathes to maintain feather alignment critical for hovering flight.' },
      { page: 'american-robin' as Page, name: 'American Robin', why: 'Requires daily bathing; visits birdbaths more than almost any backyard bird.' },
      { page: 'indigo-bunting' as Page, name: 'Indigo Bunting', why: 'Attracted by moving water sounds during migration stopover.' },
      { page: 'dark-eyed-junco' as Page, name: 'Dark-eyed Junco', why: 'Overwinters in neighborhoods; open water in January is scarce.' },
    ],
  },
  {
    id: 'ponds',
    label: '02',
    headline: 'A small pond — even fifteen gallons changes everything',
    color: '#27814a',
    body: `A spring peeper finds a water source by sound first, then smell. In April,
when the males begin calling — a sound like hundreds of tiny bells —
they are broadcasting their location to females and to every other
spring peeper within half a mile. A small pond, even a half-barrel
sunk flush to the ground, brings that sound to your yard within one
to three years of installation.`,
    detail: `Container ponds work. A 25-gallon stock tank, a ceramic planter sealed
at the drain hole, a half whiskey barrel with a liner — all of these
can support aquatic insects, frogs, and dragonfly larvae if they have:
sloped edges or a rock ramp that lets animals climb out, some aquatic
native plants (pickerelweed, water sedge, blue flag iris) that provide
oxygen and shelter, and no fish. Fish eat everything else. A fishless
pond is a wildlife pond. A fish pond is a garden ornament.

Green darner dragonflies lay eggs in standing water. Their larvae — nymphs
that breathe through gills and ambush prey underwater — spend 10 months
to two years in a pond before emerging as adults. A fifteen-gallon container
can support a small nymph colony. By the time the adults emerge, they will
hunt mosquitoes across a quarter-mile radius. No spray required.`,
    action: `Sink the container so the rim is flush with the ground — this lets
toads, frogs, and small mammals reach the water and climb out safely.
Plant native aquatic or marginal plants around at least half the edge.
Skip the mosquito dunks if you have dragonfly nymphs; Bti (the active
ingredient) is not selective. Add a flat stone that rises just above
the water line as a perch for emerging insects and a landing spot
for birds.`,
    species: [
      { page: 'spring-peeper' as Page, name: 'Spring Peeper', why: 'Breeds in small temporary ponds; finds new water sources within 1–3 years.' },
      { page: 'toad' as Page, name: 'American Toad', why: 'Lays eggs in still water in shallow strings; a single female can lay 8,000 eggs.' },
      { page: 'green-darner' as Page, name: 'Green Darner', why: 'Larval stage lives entirely underwater; a small pond supports a breeding colony.' },
      { page: 'garter-snake' as Page, name: 'Garter Snake', why: 'Hunts amphibians near water; a pond with frogs brings garter snakes within weeks.' },
    ],
  },
  {
    id: 'rain-garden',
    label: '03',
    headline: 'A rain garden — turning runoff into habitat',
    color: '#7b5ea7',
    body: `Every time it rains, water runs off your lawn, picks up fertilizer,
herbicide, and petroleum residues from the driveway, and dumps that
mix into the nearest storm drain. That drain connects to a creek.
That creek connects to everything downstream. A rain garden intercepts
that flow and turns it into something else entirely.`,
    detail: `A rain garden is a shallow depression planted with native plants that
can tolerate both temporary flooding and dry periods. Water pools in it
for 24 to 48 hours after a storm, then percolates into the soil. A
properly sized rain garden can capture 30 to 40 percent of the runoff
from an average residential lot.

The plants that thrive in a rain garden — swamp milkweed, blue wild
indigo, cardinal flower, Joe Pye weed, buttonbush — are also the plants
that support monarchs, native bees, hummingbirds, and goldfinches.
The habitat function and the water management function are the same thing.
You are not trading one for the other. You are getting both.

Monarch butterflies use swamp milkweed (Asclepias incarnata) as readily
as common milkweed, and swamp milkweed is native to rain garden conditions.
A monarch caterpillar eating swamp milkweed in a rain garden at the base
of your downspout is a fact that was impossible in that location until
you made it possible.`,
    action: `Locate the rain garden 10 feet from your foundation, in a natural
low spot or at the end of a downspout extension. Dig 6 to 8 inches deep,
amend the soil with 50 percent compost if the native soil drains slowly.
Plant densely — spacing plants 12 to 18 inches apart. A 100 square foot
rain garden can handle the runoff from 1,000 square feet of roof. City
rebate programs in many municipalities cover part of the installation cost;
check your local stormwater utility.`,
    species: [
      { page: 'monarch-life' as Page, name: 'Monarch Butterfly', why: 'Swamp milkweed (Asclepias incarnata) thrives in rain garden conditions.' },
      { page: 'american-goldfinch' as Page, name: 'American Goldfinch', why: 'Seeds of Joe Pye weed and other rain garden natives are primary late-summer food.' },
      { page: 'native-bees' as Page, name: 'Native Bees', why: 'Cardinal flower and buttonbush — rain garden staples — support 75+ bee species.' },
      { page: 'eastern-chipmunk' as Page, name: 'Eastern Chipmunk', why: 'Uses rain garden soil for winter larder caching; drinks from temporary pools.' },
    ],
  },
]

const sources = [
  'Tallamy, D.W. (2007). Bringing Nature Home. Timber Press.',
  'Narango, D.L., Tallamy, D.W., & Marra, P.P. (2018). Nonnative plants reduce population growth of an insectivorous bird. PNAS 115(45), 11549–11554.',
  'Forman, R.T.T. (2014). Urban Ecology. Cambridge University Press.',
  'NRCS (2012). Rain Garden: Conservation Practice Standard. USDA Natural Resources Conservation Service.',
  'Córdoba-Aguilar, A. (2008). Dragonflies and Damselflies: Model Organisms for Ecological and Evolutionary Research. Oxford University Press.',
  'Bates, A.J., et al. (2011). Changing habitat availability in urban gardens: the influence of the owner on the wildlife habitat value. Basic and Applied Ecology 12(3), 229–238.',
]

export default function WaterForWildlife({ onNavigate }: WaterForWildlifeProps) {
  return (
    <div className="page-container">
      <header className="page-hero">
        <p className="page-hero__eyebrow">What To Do</p>
        <h1>Water for Wildlife</h1>
        <p className="page-hero__sub">
          Every living thing needs water. Most of the land in a typical
          neighborhood offers almost none. A birdbath, a small pond, or a
          rain garden changes that — and the animals find it faster than you
          would expect.
        </p>
      </header>

      <section className="page-section">
        <div className="prose">
          <p>
            Habitat loss is not only about plants and food. For most wildlife,
            finding clean water is harder than finding food. A robin in July
            may travel a mile to find water for bathing. A toad crossing six
            lanes of suburban pavement to reach a storm-drain puddle is not
            unusual. The gap between what your neighborhood provides and what
            wildlife actually needs is, for water, almost total.
          </p>
          <p>
            Water features work fast. A birdbath placed this afternoon may have
            visitors by tomorrow morning. A small pond installed this spring may
            have frog eggs by next April. A rain garden planted in May becomes
            functional habitat before the summer is over. These are among the
            highest-return investments in the visitor-per-square-foot category
            of any habitat addition you can make.
          </p>
        </div>
      </section>

      {sections.map(s => (
        <section key={s.id} className="page-section page-section--bordered" style={{ borderLeftColor: s.color }}>
          <div className="threat-label" style={{ color: s.color }}>{s.label}</div>
          <h2>{s.headline}</h2>
          <div className="prose">
            {s.body.trim().split('\n').map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
          <div className="prose prose--detail">
            {s.detail.trim().split('\n').map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
          <div className="action-box">
            <strong>What to do</strong>
            <div className="prose">
              {s.action.trim().split('\n').map((line, i) => (
                <p key={i}>{line.trim()}</p>
              ))}
            </div>
          </div>
          <div className="species-impact-list">
            <p className="species-impact-list__label">Who benefits</p>
            <ul>
              {s.species.map(sp => (
                <li key={sp.page}>
                  <button
                    className="link-button"
                    onClick={() => onNavigate(sp.page)}
                  >
                    {sp.name}
                  </button>
                  {' — '}{sp.why}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="page-section">
        <h2>One thing to skip</h2>
        <div className="prose">
          <p>
            Decorative fountains and waterfalls with recirculating pumps are
            fine for aesthetics, but they do not function as wildlife habitat
            unless they have a shallow landing edge and easy exit points.
            A smooth basin with vertical walls is a drowning trap for small
            mammals and fledgling birds. If you have one, add a rough-textured
            ramp or a large flat stone that slopes from the water to the edge.
          </p>
          <p>
            Fish ponds are beautiful. They are not wildlife ponds. A single
            koi can consume an entire season&apos;s worth of dragonfly nymphs,
            frog eggs, and aquatic insect larvae in a matter of weeks. If you
            want a wildlife pond, the fish have to go — or the pond needs to
            be physically separate, with no water connection between the two.
          </p>
        </div>
      </section>

      <section className="page-section page-section--cta-row">
        <h2>Keep going</h2>
        <div className="cta-card-row">
          <div className="cta-card">
            <h3>From Lawn to Habitat</h3>
            <p>Five concrete steps to replace turf with a living ecosystem — starting this weekend.</p>
            <button className="btn btn--primary" onClick={() => onNavigate('habitat-transformation')}>
              Start the transformation
            </button>
          </div>
          <div className="cta-card">
            <h3>Yard Check</h3>
            <p>Six questions to find out how your yard scores for wildlife — and what to add next.</p>
            <button className="btn btn--primary" onClick={() => onNavigate('habitat-score')}>
              Check your yard
            </button>
          </div>
          <div className="cta-card">
            <h3>Pesticides &amp; Your Habitat</h3>
            <p>What is already in your yard that is killing wildlife — and what to do instead.</p>
            <button className="btn btn--secondary" onClick={() => onNavigate('pesticide-guide')}>
              Read the guide
            </button>
          </div>
        </div>
      </section>

      <section className="page-section page-section--sources">
        <h2>Sources</h2>
        <ol className="sources-list">
          {sources.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </section>
    </div>
  )
}
