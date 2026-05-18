import type { Page } from '../App'

interface HabitatLayersProps {
  onNavigate: (page: Page) => void
}

// Writing rules applied:
// - Observations, not conclusions
// - No evaluation words (important, meaningful, significant, critical, vital, essential, unique, remarkable, deeply, truly)
// - No AI fingerprints (tapestry, testament, crucial, foster, holistic, beacon, plays a role, at the heart of, etc.)
// - Headings name specific things
// - Short sections, one job each

const sections = [
  {
    id: 'floor',
    label: '01',
    headline: 'Firefly larvae, overwintering moths, and the Wood Thrush\'s foraging method',
    color: '#7b5e3a',
    body: `A Wood Thrush feeds by pressing its bill sideways into wet leaves, levering
them to expose the invertebrates underneath — earthworms, crane fly larvae,
millipedes, beetle grubs. A single foraging pass through 10 square feet of
undisturbed leaf litter takes less than two minutes and yields more calories
than the same time on bare soil. The floor is not ground cover. It is the
litter layer itself: whole fallen leaves left in place from October through May.`,
    detail: `Most suburban yards have no floor. The October rake removes it. A spring
cleanup removes what remained. What is left is bare soil, turf grass, or
wood chip mulch — none of which supports the invertebrate community that
floor-feeding birds locate by scent and touch in wet conditions.

Firefly larvae spend one to two years in the top two inches of litter and
soil before they pupate. Overwintering moth caterpillars drop from tree
canopies in September and burrow into the litter to complete that stage of
their life cycle. Both are gone when the litter is gone. The Wood Thrush
arriving in late April after a migration is looking for exactly those
invertebrates. A yard raked in October gave away the food it is about
to need.

Undisturbed litter also insulates soil temperatures, preventing the
freeze-thaw cycling that destroys overwintering insect cells. An American
Toad that burrowed under your oak leaf pile in September depends on
that insulation staying in place through March.`,
    action: `Stop raking under shrubs and beneath trees. Rake lawn leaves into garden
beds rather than to the curb. Accumulate 2-4 inches of undisturbed litter
under any native tree or shrub cluster. The floor does not need to cover
the whole yard — it needs to exist as a contiguous patch of at least
20 square feet under cover. By the third year of accumulation, a single
patch supports breeding fireflies, overwintering bee queens, and daily
foraging by floor-feeding birds.`,
    species: [
      { page: 'wood-thrush' as Page, name: 'Wood Thrush', why: 'Forages exclusively by flipping leaf litter; its breeding-season food is almost entirely litter-layer invertebrates.' },
      { page: 'fireflies' as Page, name: 'Fireflies', why: 'Larvae spend 1-2 years in the litter-soil interface; raking in October removes them before they can complete their life cycle.' },
      { page: 'dark-eyed-junco' as Page, name: 'Dark-eyed Junco', why: 'Scratches in leaf litter for 60-70% of its winter diet; finds 30-50% more food per minute in unraked yards.' },
      { page: 'toad' as Page, name: 'American Toad', why: 'Overwinters just below the litter surface; depends on the insulating layer to stay above lethal soil temperatures from October through March.' },
    ],
  },
  {
    id: 'shrub',
    label: '02',
    headline: 'Where Gray Catbirds build nests and Ruby-crowned Kinglets search for caterpillar eggs',
    color: '#27814a',
    body: `A Gray Catbird selects its nest site in dense shrub 2-6 feet high — low enough
to stay hidden inside the canopy of the shrub as seen from outside, high enough
to stay above ground predators. It uses the branches surrounding the nest for
foraging: berries in fall, insects in spring, caterpillar larvae all summer.
The nest and the food come from the same physical space. Remove the shrub layer
and the Gray Catbird cannot breed in your yard, regardless of what else is there.`,
    detail: `A native serviceberry in April hosts 28-60 caterpillar species on its bark and
branches. A non-native ornamental shrub — burning bush, Japanese barberry,
English boxwood — hosts fewer than five. A Ruby-crowned Kinglet on spring
migration hovers at branch tips scanning for caterpillar eggs cemented to bark
the previous fall. On a non-native shrub, those eggs are absent. On a native
serviceberry or native dogwood, they are concentrated on exactly the branch
surfaces the kinglet is searching.

The shrub layer is the most commonly absent vertical zone in suburban yards.
It gets removed because it shades lawn, because the shrubs that were planted
decades ago were non-native and have been replaced with nothing, or because
a previous owner cleared the transition between lawn and fence line and left
it mown. Without it, a yard has no nesting habitat for shrub-nesting species,
no overwintering insect supply at the 3-15 foot level, and no migration
stopover value for insect-hunting warblers and flycatchers.`,
    action: `Plant 3 or more native shrubs in a continuous cluster. The cluster is what
matters — a single isolated shrub does not provide the interior concealment
a Gray Catbird uses for nest placement. Native serviceberry, native dogwood,
viburnum, spicebush, and native wild rose all work depending on your region.
If you are in the mid-Atlantic or Northeast, add at least one bayberry (Morella
pensylvanica): its October berries hold through November when most other berries
are consumed, and they carry specific caloric value for Yellow-rumped Warblers
and Ruby-crowned Kinglets. Find species suited to your zone at the plant finder.`,
    species: [
      { page: 'gray-catbird' as Page, name: 'Gray Catbird', why: 'Nests almost exclusively in dense shrubs 2-6 feet high; the nest site and the foraging zone are the same physical space.' },
      { page: 'ruby-crowned-kinglet' as Page, name: 'Ruby-crowned Kinglet', why: 'On migration, searches native shrub branch surfaces for caterpillar eggs; non-native ornamentals carry almost none.' },
      { page: 'yellow-warbler' as Page, name: 'Yellow Warbler', why: 'Nests in shrub forks 2-8 feet high; requires native shrubs with caterpillar biomass to feed nestlings during the 28-30 day nesting window.' },
      { page: 'yellow-rumped-warbler' as Page, name: 'Yellow-rumped Warbler', why: 'Uses bayberry berries from the shrub layer as its primary fall cold-weather food source; can digest the wax coating most other birds cannot.' },
    ],
  },
  {
    id: 'canopy',
    label: '03',
    headline: 'A single native oak and 534 caterpillar species — what replaces it when it\'s gone',
    color: '#4a7c59',
    body: `A Black-capped Chickadee pair raising one clutch of 6-8 chicks needs
6,000-9,000 caterpillars during the 16-day nestling period. Those caterpillars
come almost entirely from native tree foliage. A mature native oak carries 534
species of lepidopteran caterpillars. A Bradford pear carries fewer than 10.
If the yard's canopy is all non-native trees, the caterpillar supply collapses
and the birds that need it to breed cannot breed there — regardless of how many
feeders are filled with seed.`,
    detail: `The caterpillar supply from a native canopy tree cascades through the other
layers. Caterpillars drop from oak branches in late summer and pupate in the
litter below — the Wood Thrush's floor-layer food. Some become moths that lay
eggs on shrub bark the following fall — the Ruby-crowned Kinglet's spring food.
The canopy is the primary production layer. Its output seeds every layer below it.

Native cherries are the third-highest caterpillar hosts in the eastern United
States, after oaks and willows. Black cherry (Prunus serotina) and chokecherry
(Prunus virginiana) reach nesting-tree size in 8-10 years. If your yard has
no native canopy, the caterpillar cascade does not start. But a native cherry
planted this spring opens its production contribution in 2032 — well within the
lifespan of the yard's long-term role as habitat.

Standing dead trees — snags — carry a separate function. Woodpeckers excavate
nesting cavities in snags; 85 North American bird species use those cavities
for nesting or roosting, including Eastern Screech Owls, Wood Ducks, and
American Kestrels. A snag left standing in a back corner provides nesting
opportunity that no living tree can yet replace in a young habitat.`,
    action: `If you have a native canopy tree (oak, hickory, cherry, willow, native maple),
protect it. Do not remove it for a lawn renovation or to increase light to the
ground floor — its caterpillar contribution is the production base for
everything else. If your canopy is entirely non-native, plant one native tree.
Native cherry (Prunus serotina or Prunus virginiana) is the fastest path to
caterpillar production in a young habitat. If a tree dies and it is not a
hazard, leave the snag standing. The nesting birds that use it will tell you
it was the right call.`,
    species: [
      { page: 'black-capped-chickadee' as Page, name: 'Black-capped Chickadee', why: 'Needs 6,000-9,000 caterpillars to raise one clutch; that supply comes almost entirely from native tree foliage within half a mile of the nest.' },
      { page: 'wood-thrush' as Page, name: 'Wood Thrush', why: 'Forages for caterpillars in the canopy foliage; the caterpillars that drop to the floor-layer litter in September are its spring food supply as a returning migrant.' },
      { page: 'baltimore-oriole' as Page, name: 'Baltimore Oriole', why: 'Weaves its hanging nest from the canopy of large native trees; forages for caterpillars in the upper foliage during June nesting season.' },
      { page: 'eastern-screech-owl' as Page, name: 'Eastern Screech-Owl', why: 'Nests in natural cavities and woodpecker holes in large trees; depends on the caterpillar supply to feed nestlings in April-May.' },
    ],
  },
  {
    id: 'edge',
    label: '04',
    headline: 'The airspace Chimney Swifts and Eastern Phoebes hunt — and how it disappears',
    color: '#4a6b9e',
    body: `An Eastern Phoebe perches on a low branch or fence post 8-12 feet off the
ground, launches into the open air, catches a flying insect, and returns to
the same perch. Chimney Swifts fly continuous loops over the canopy edge,
capturing midges and aphids in sustained aerial flight. Both species are
hunting the open airspace between the top of the shrub layer and the bottom
of the forest canopy — roughly 8-25 feet above the ground. That zone is not
a thing you plant. It is the space that opens when the other three layers exist.`,
    detail: `In a typical American front yard, lawn extends to the base of a single canopy
tree, then straight up is the canopy. There is no shrub layer, no litter floor
beneath the canopy, and no gradually ascending structure — just turf to trunk.
The edge airspace in that configuration is a column with nothing in it. Phoebes
have no launch perch in the 8-foot zone. Swifts have no insect density to
hunt because the production layers below are absent.

The insects that populate the edge zone depend on what the layers below are
producing. A shrub layer hosting caterpillars produces emergent moths and flies.
A litter floor produces crane fly and beetle emergence in spring. A native
canopy produces massive caterpillar emergence in June when they drop on silk
threads to pupate. All of this feeds the midair insect cloud that aerial
hunters chase. Without the producing layers below, the edge zone is empty air.

Common Nighthawks and Purple Martins use the same zone, at higher altitudes
on warm evenings. All four species are aerial insectivores: they eat only what
they catch in flight. Their population trends track insect abundance, which
tracks native plant coverage, which tracks the presence or absence of the
three layers that produce insects.`,
    action: `Add native shrubs 10-15 feet out from canopy tree bases rather than directly
at the trunk. This creates a gradual slope of structure from ground cover
to shrubs to canopy that opens an interior edge zone. Leave any exposed
fence post, dead snag tip, or low horizontal branch as a Phoebe launch
perch — it uses the same spot repeatedly through the season. Do not clear
the understory between the shrub layer and canopy to "tidy" the yard;
that transition zone is the airspace itself.`,
    species: [
      { page: 'chimney-swift' as Page, name: 'Chimney Swift', why: 'Eats only what it catches in sustained aerial flight above the canopy edge; population tracks total insect abundance across the layers below.' },
      { page: 'eastern-phoebe' as Page, name: 'Eastern Phoebe', why: 'Hunts from launch perches 8-12 feet up, catching flying insects in the open airspace between shrub and canopy layers.' },
      { page: 'common-nighthawk' as Page, name: 'Common Nighthawk', why: 'Aerial insectivore that hunts 30-100 feet above the canopy edge on warm evenings; population has declined 60% since 1966, tracking insect loss.' },
      { page: 'purple-martin' as Page, name: 'Purple Martin', why: 'Hunts entirely in open airspace above yards and water; colony success tracks flying insect density, which tracks the native plant coverage producing those insects.' },
    ],
  },
]

const sources = [
  'Tallamy, D.W. (2007). Bringing Nature Home. Timber Press.',
  'Tallamy, D.W., & Shropshire, K.J. (2009). Ranking lepidopteran use of native versus introduced plants. Conservation Biology 23(4), 941–947.',
  'Narango, D.L., Tallamy, D.W., & Marra, P.P. (2018). Nonnative plants reduce population growth of an insectivorous bird. PNAS 115(45), 11549–11554.',
  'Rosenberg, K.V., et al. (2019). Decline of the North American avifauna. Science 366(6461), 120–124.',
  'North American Breeding Bird Survey, USGS Patuxent Wildlife Research Center (2023). Common Nighthawk trend data.',
  'Cornell Lab of Ornithology, Birds of the World (2024). Black-capped Chickadee, Gray Catbird, Wood Thrush accounts.',
]

export default function HabitatLayers({ onNavigate }: HabitatLayersProps) {
  return (
    <div className="page-container">
      <header className="page-hero">
        <p className="page-hero__eyebrow">How Your Yard Works</p>
        <h1>The Four Layers That Make a Yard Work</h1>
        <p className="page-hero__sub">
          Most native plant advice tells you what to plant. This page tells you
          where the gaps are in three dimensions. A yard organized as four
          distinct vertical layers — leaf-litter floor, shrub layer, canopy, and
          edge airspace — can support a Wood Thrush, a Gray Catbird, a Chimney
          Swift, and a dozen other species simultaneously, because each uses a
          different zone. A yard missing any one layer excludes every species
          that depends on it — no matter how many plants fill the other three.
        </p>
      </header>

      <section className="page-section">
        <div className="prose">
          <p>
            A Wood Thrush cannot complete a single day in a yard missing any one
            of its three required layers. It builds its nest in a shrub fork at
            3-6 feet. It feeds at the ground by flipping wet leaf litter. It
            forages for caterpillars from 30 feet up in the canopy. All three
            layers, simultaneously. A yard with two of the three is not halfway
            there — it is a yard where the Wood Thrush cannot live.
          </p>
          <p>
            The four layers described here are not abstract zones. They are the
            specific vertical spaces different species use for nesting, foraging,
            and overwintering. The audit at the end of each section asks one
            question: does this layer exist in your yard right now?
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
            <p className="species-impact-list__label">Who depends on this layer</p>
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
        <h2>The one layer most suburban yards are missing</h2>
        <div className="prose">
          <p>
            Most suburban yards have at least one canopy tree (often non-native)
            and a lawn floor. What they are almost universally missing is the
            shrub layer — the 3-15 foot zone. It was removed or never planted.
            The lawn runs to the fence, the fence runs to the house, the house
            has foundation plantings of non-native ornamentals that carry almost
            no insects. The 3-15 foot zone is empty.
          </p>
          <p>
            This is also the most recoverable missing layer. A serviceberry planted
            today reaches nesting height in 3 years and provides migration food
            value in its first spring. The leaf-litter floor requires only
            restraint — stop raking and it begins accumulating immediately.
            The canopy takes decades. The edge airspace appears on its own when
            the shrub layer fills in. The shrub layer is the place to start.
          </p>
        </div>
      </section>

      <section className="page-section page-section--cta-row">
        <h2>What to do next</h2>
        <div className="cta-card-row">
          <div className="cta-card">
            <h3>Find native shrubs for your region</h3>
            <p>Enter your zip code and get a list of native shrubs suited to your soil and sun conditions.</p>
            <button className="btn btn--primary" onClick={() => onNavigate('native-plant-near-me')}>
              Find plants near me
            </button>
          </div>
          <div className="cta-card">
            <h3>Leave the Leaves</h3>
            <p>How to build and keep the litter floor that fireflies and Wood Thrushes both need.</p>
            <button className="btn btn--secondary" onClick={() => onNavigate('leave-the-leaves')}>
              Read the guide
            </button>
          </div>
          <div className="cta-card">
            <h3>Yard Check</h3>
            <p>Six questions to find out which layer your yard is missing and what to add first.</p>
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
