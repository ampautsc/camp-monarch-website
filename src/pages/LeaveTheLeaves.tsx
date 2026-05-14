import type { Page } from '../App'

interface LeaveTheLeavesProps {
  onNavigate: (page: Page) => void
}

// bta-004: Give people a path. They already care.
// bta-010: Challenge the normalized lawn.
// aiw-002: Concrete images do the emotional work.
// aiw-006: Every claim has a number or a species name.
// man-001: Usufruct frame — we hold the land in trust.

const sections = [
  {
    id: 'fireflies',
    label: '01',
    headline: 'Fireflies spend two years under your leaves',
    color: '#c8a000',
    body: `A firefly larva looks nothing like the blinking adult. It is a small,
flattened predator — dark brown, armored, slow-moving — that spends the
first one to two years of its life hunting in the soil and leaf layer.
It eats earthworms, snails, and other soft-bodied invertebrates. Every
firefly you see in June spent the previous two summers in your leaf litter.
When that litter goes into a bag in October, the larva goes with it.`,
    detail: `Firefly populations have declined significantly across North America over
the past two decades. Habitat loss, light pollution, and pesticide use are
the primary drivers. But the one variable that homeowners control most
directly is this: the presence or absence of leaf litter and undisturbed
soil from October through May.

A firefly larva overwinters in the leaf layer, often burrowing into the
loose soil just beneath it when temperatures drop. It is not dormant — it
continues to hunt slowly through the winter. In spring, when soil
temperatures rise above 50°F, it becomes more active, feeds heavily, and
then pupates in a small cell it constructs in the soil. The adult emerges
3 to 4 weeks later.

A yard that was raked clean in October has almost no firefly emergence in
June. A yard with leaf litter under the shrubs and in the garden beds can
support dozens of larvae per square yard. The math is direct: more leaf
litter equals more fireflies. The action — or rather the inaction — is
completely free.`,
    action: `Leave leaves under all shrubs and in garden beds from October through
late May. You do not need to leave leaves on the lawn itself — the under-
shrub and garden bed areas are what the larvae need. A 10-foot ring of leaf
litter under each tree and around each shrub cluster is meaningful habitat.
Do not shred or mulch the leaves fine; firefly larvae need the loose, airy
layer that whole leaves create. If municipal leaf pickup is mandatory in your
neighborhood, rake leaves from the lawn into beds rather than to the curb.`,
    species: [
      { page: 'fireflies' as Page, name: 'Fireflies', why: 'Larvae spend 1–2 years foraging in leaf litter before pupating; litter removal is the primary local population driver.' },
      { page: 'toad' as Page, name: 'American Toad', why: 'Overwinters buried in soft soil just beneath leaf litter; disturbing the layer in autumn evicts overwintering adults.' },
      { page: 'garter-snake' as Page, name: 'Garter Snake', why: 'Feeds on firefly larvae and earthworms attracted to leaf litter; uses deep litter as a thermal refuge in cold snaps.' },
      { page: 'eastern-chipmunk' as Page, name: 'Eastern Chipmunk', why: 'Forages for seeds, fungi, and invertebrates in leaf litter; uses thick litter as insulation over burrow entrance.' },
    ],
  },
  {
    id: 'bees',
    label: '02',
    headline: 'A third of your native bees nest in the ground under leaves',
    color: '#e07b20',
    body: `Not all bees live in hives. About 70 percent of North America&apos;s
4,000 native bee species are ground nesters — solitary females that dig
small tunnels in bare or sparsely covered soil and provision each cell
with a pollen ball for one larva. Many of these species overwinter as
pupae just below the soil surface, often in the exact spots where leaf
litter has softened the ground and kept it from freezing solid.`,
    detail: `Ground-nesting native bees need three things: access to bare or loosely
covered soil for nest entry, undisturbed ground from late summer through
spring, and leaf litter nearby to regulate moisture and temperature. A thick
layer of mulch or compacted soil locks them out. Complete removal of fall
leaves eliminates the insulating layer that keeps the top few inches of soil
from freeze-thaw cycling — which can destroy overwintering cells.

Bumble bees overwinter differently: only mated queens survive, tucked just
under the soil surface or in loose leaf litter at the base of a north-facing
slope or rock face. A bumble bee queen emerging in March looks for that
protected spot; if the area was cleared and raked in fall, she was almost
certainly dislodged when she was building her overwintering burrow in
September.

The Xerces Society estimates that 30 percent of native bee species require
undisturbed soil or ground-level litter for some stage of their life cycle.
Raking is a selective pressure: it removes the bees that need the ground,
leaving only those that can use stems and wood — a narrowing of the
community that feeds back into reduced pollination diversity.`,
    action: `Leave a section of your yard unraked and undisturbed from August through
May. This does not need to be large — a 4-by-8-foot patch under a hedge,
the base of a fence line, the sloped corner where the garage meets the house.
Do not apply fresh mulch over these areas in fall; it smothers nest entrances.
If you see small mounds of soil or perfectly round holes in the ground, that
is a ground-nesting bee. Mark the spot and leave it alone for the season.`,
    species: [
      { page: 'native-bees' as Page, name: 'Native Bees', why: 'Over 30% of native bee species overwinter in the soil or ground-level leaf litter.' },
      { page: 'american-goldfinch' as Page, name: 'American Goldfinch', why: 'Feeds on seed heads of goldenrod and aster that stand through winter in undisturbed areas.' },
      { page: 'monarch-life' as Page, name: 'Monarch Butterfly', why: 'Milkweed plants left standing in fall protect the root crowns that produce new stems each spring.' },
      { page: 'indigo-bunting' as Page, name: 'Indigo Bunting', why: 'Forages in low scrubby vegetation and leaf litter during fall migration stopovers.' },
    ],
  },
  {
    id: 'birds',
    label: '03',
    headline: 'Leaf litter is a bird feeding station — fully stocked, year-round',
    color: '#27814a',
    body: `An American robin in October is not looking for worms. It is looking
for the soft-bodied grubs, crane fly larvae, and beetle pupae that
have just moved into the leaf layer to overwinter. A hermit thrush
works the forest floor by kicking leaves backward with both feet,
exposing the invertebrates underneath. A dark-eyed junco scratches
with the same motion in a backyard with leaf litter, finding 30 to 50
percent more food per minute than it would in a raked yard.`,
    detail: `Leaf litter is habitat architecture, not debris. A single square meter of
undisturbed deciduous leaf litter in late October contains hundreds to
thousands of arthropods — beetle larvae, fly pupae, moth caterpillars,
millipedes, isopods, springtails — in active or dormant stages. These
are the calories that carry birds through winter.

Douglas Tallamy's research at the University of Delaware documented that
native caterpillars — the single highest-calorie food for songbirds raising
young — spend most of their life cycle in the soil and leaf layer, not
on leaves. A caterpillar eating a native oak leaf in September will
drop to the ground, burrow into the litter, and spend the next six months
there. It emerges as a moth in spring just as the first migrants arrive.
If the litter was removed in October, that protein pulse — timed over
millions of years to match migration — disappears.

The Eastern towhee, hermit thrush, American robin, and dark-eyed junco all
forage primarily in leaf litter during fall and winter. Their winter range
distributions correlate strongly with the presence of undisturbed deciduous
litter. A yard with intact litter holds, on average, three to four times
more winter bird activity than an adjacent raked yard.`,
    action: `Leave the largest, deepest litter accumulation in one corner of your yard —
ideally under a native tree or dense shrub cluster. A pile 2 to 4 inches
deep over 20 or more square feet is a winter bird feeding station. Sparrows,
juncos, and thrushes will work it from the edge, flipping leaves. Do not
rake this area until nighttime temperatures consistently stay above 50°F;
by then, most overwintering insects have completed their spring migration to
above-ground plants. The whole window is October through late April.`,
    species: [
      { page: 'american-robin' as Page, name: 'American Robin', why: 'Shifts from earthworms to leaf-litter invertebrates in fall; active in litter all winter when soil is unfrozen.' },
      { page: 'dark-eyed-junco' as Page, name: 'Dark-eyed Junco', why: 'Scratches in leaf litter for 60–70% of its winter diet; finds 30–50% more food in unraked yards.' },
      { page: 'black-capped-chickadee' as Page, name: 'Black-capped Chickadee', why: 'Gleans overwintering insect eggs and pupae from litter and bark; litter supports the insect base it depends on.' },
      { page: 'american-goldfinch' as Page, name: 'American Goldfinch', why: 'Uses undisturbed areas for seed foraging; benefits from the insect diversity that litter supports in other species.' },
    ],
  },
]

const sources = [
  'Tallamy, D.W. (2007). Bringing Nature Home. Timber Press.',
  'Tallamy, D.W., & Shropshire, K.J. (2009). Ranking lepidopteran use of native versus introduced plants. Conservation Biology 23(4), 941–947.',
  'Xerces Society for Invertebrate Conservation (2023). Gardening for Insects: Providing Year-Round Habitat. xerces.org.',
  'Lloyd, J.E. (1966). Studies on the flash communication system in Photinus fireflies. Miscellaneous Publications of the Museum of Zoology, University of Michigan 130.',
  'Narango, D.L., Tallamy, D.W., & Marra, P.P. (2018). Nonnative plants reduce population growth of an insectivorous bird. PNAS 115(45), 11549–11554.',
  'Otterstatter, M.C., & Thomson, J.D. (2008). Does pathogen spillover from commercially reared bumble bees threaten wild pollinators? PLOS ONE 3(7), e2771.',
]

export default function LeaveTheLeaves({ onNavigate }: LeaveTheLeavesProps) {
  return (
    <div className="page-container">
      <header className="page-hero">
        <p className="page-hero__eyebrow">What To Do</p>
        <h1>Leave the Leaves</h1>
        <p className="page-hero__sub">
          The most damaging thing most homeowners do to backyard wildlife happens
          in October with a leaf blower. The most impactful thing they can do in
          response requires doing nothing at all.
        </p>
      </header>

      <section className="page-section">
        <div className="prose">
          <p>
            Raking and bagging fall leaves is one of the most normalized acts in
            American yard culture — and one of the most ecologically costly. The
            leaf layer that accumulates from October through May is not waste.
            It is the overwintering habitat for firefly larvae, bumble bee queens,
            moth caterpillars, ground-nesting bees, and hundreds of other
            invertebrates that form the base of the food web your birds depend on.
          </p>
          <p>
            You do not have to leave every leaf everywhere. The lawn can be kept
            clear. But the areas under shrubs, around trees, and in garden beds
            are where it matters. Shifting leaves from the lawn into those zones
            instead of bagging them takes the same amount of time — and keeps
            the habitat intact.
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
        <h2>The one exception: invasive plants</h2>
        <div className="prose">
          <p>
            If your yard has invasive plants — Japanese barberry, autumn olive,
            burning bush, garlic mustard — their seeds are in those leaves.
            Bagging and removing the litter from immediately under those plants
            is a reasonable tradeoff; it reduces the seed bank without spreading
            the problem through composting. The leaves under native trees and
            native shrubs can stay. The distinction is worth making, because the
            broad rule — &ldquo;just leave all leaves everywhere&rdquo; — breaks down
            in a yard with significant invasive cover.
          </p>
          <p>
            The goal is not to stop managing. It is to manage with the leaf
            layer in mind: move it, don&apos;t remove it; blow it into beds, don&apos;t
            bag it; rake it from under invasives and compost it hot, don&apos;t
            spread it. The habitat function is preserved. The neighborhood
            aesthetic concern is largely addressed. And the firefly larvae under
            your azalea survive another October.
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
            <h3>Pesticides &amp; Your Habitat</h3>
            <p>What is already in your yard that is killing wildlife — and what to do instead.</p>
            <button className="btn btn--secondary" onClick={() => onNavigate('pesticide-guide')}>
              Read the guide
            </button>
          </div>
          <div className="cta-card">
            <h3>Yard Check</h3>
            <p>Six questions to find out how your yard scores for wildlife — and what to add next.</p>
            <button className="btn btn--primary" onClick={() => onNavigate('habitat-score')}>
              Check your yard
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
