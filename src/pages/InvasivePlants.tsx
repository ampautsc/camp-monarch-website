import type { Page } from '../App'

interface InvasivePlantsProps {
  onNavigate: (page: Page) => void
}

// bta-004: Give people a path. They already care.
// bta-010: Challenge the normalized lawn.
// aiw-002: Concrete images do the emotional work.
// aiw-006: Every claim has a number or a species name.
// man-001: Usufruct frame — we hold the land in trust.
// cp-003: Invasive shrubs disrupt the food web; removing them restores wildlife.
// to-005: Autumn olive and purple loosestrife harm tadpoles and amphibians.
// ck-008: Replace non-native ornamentals with caterpillar-hosting natives.

const sections = [
  {
    id: 'shrubs',
    label: '01',
    headline: 'Burning bush, barberry, and autumn olive — the most common offenders',
    color: '#c0392b',
    body: `Japanese barberry is sold in nearly every garden center in the eastern
United States. So is burning bush. Both are on most state invasive
species lists — because they both spread aggressively into native forest
edges and understories, displacing the native shrubs that provide
the berries, seeds, and caterpillar habitat that wildlife depends on.
A barberry hedge in your backyard has already sent thousands of seeds
into the woods behind it.`,
    detail: `Burning bush (Euonymus alatus) produces seeds that birds eat and deposit
into wild areas. Once established in a forest edge, it grows in dense
thickets that shade out native wildflowers, shrubs, and tree seedlings.
Japanese barberry (Berberis thunbergii) does the same — but it also
alters soil chemistry in ways that increase black-legged tick populations,
because white-footed mice (tick hosts) favor the dense low cover it creates.
Studies in New Jersey and Connecticut found 120 percent more ticks per acre
in areas with established barberry than in comparable areas without it.

Autumn olive (Elaeagnus umbellata) was once promoted by the USDA for
erosion control. It fixes nitrogen, outcompetes native plants, and a single
mature specimen produces tens of thousands of seeds per year. In a 2016
study published in Wetlands, tadpoles reared in water with autumn olive
leaf litter showed significantly higher parasite burdens and lower survival
rates than those reared with native species — a direct toxicological effect,
not just competition.

Eastern chipmunks, which cache seeds as a primary food source, show lower
foraging activity and reduced reproduction in areas dominated by invasive
shrubs — because none of these plants produce the high-fat, high-calorie
seeds that native shrubs like spicebush, viburnum, or elderberry produce.
The food web literally does not connect.`,
    action: `In fall or late winter, cut burning bush and barberry to the ground and
immediately paint the cut stump with undiluted triclopyr (sold as Garlon
or generic brush killer). The fall and late-winter application windows
matter — the plants are moving carbohydrates downward, which pulls the
herbicide into the root system instead of leaving it in the stem. Do not
pull barberry; its roots run deep and a broken root will resprout.
For autumn olive: cut, paint the stump, and then monitor for resprouting
for two to three seasons. A mature plant may require two or three stump
treatments before it stops regenerating.`,
    species: [
      { page: 'eastern-chipmunk' as Page, name: 'Eastern Chipmunk', why: 'Invasive shrubs produce negligible food value; native viburnums and hazelnuts restore the seed cache it depends on.' },
      { page: 'spring-peeper' as Page, name: 'Spring Peeper', why: 'Autumn olive leaf chemistry directly increases tadpole parasite burden and reduces survival.' },
      { page: 'toad' as Page, name: 'American Toad', why: 'Tadpoles raised in water near invasive shrubs show elevated stress and lower metamorphosis success.' },
      { page: 'native-bees' as Page, name: 'Native Bees', why: 'Native shrubs like spicebush and elderberry bloom in sequence with native bee emergence; invasive shrubs do not align.' },
    ],
  },
  {
    id: 'vines',
    label: '02',
    headline: 'English ivy, Oriental bittersweet, and Japanese honeysuckle — slow stranglers',
    color: '#8e44ad',
    body: `English ivy is the most popular ground cover sold in American
garden centers and the most destructive non-native plant in eastern
urban forests. It does not stay in the yard. It climbs trees, adding
weight to branches and pulling them down in ice storms, while its
dense ground mat eliminates every native wildflower, fern, and shrub
seedling beneath it. A yard blanketed in ivy is biologically inert.`,
    detail: `Oriental bittersweet (Celastrus orbiculatus) is the worst invasive vine
in the eastern United States by total acreage affected. A single plant
can climb 60 feet into a canopy and girdle a mature tree in 10 to 15
years. Its berries are widely distributed by birds — the same birds
we are trying to attract. American bittersweet (Celastrus scandens),
its native lookalike, is now rare in many areas because the Oriental
species hybridizes with it and outcompetes it for pollinators and nest
sites.

Japanese honeysuckle (Lonicera japonica) leafs out before native
species in spring and holds its leaves later in fall — a two-season
competitive advantage that allows it to capture light before and after
native wildflowers, suppressing the understory plants that host the
caterpillars that feed birds. A study by Tallamy and colleagues found
that native oaks support 534 caterpillar species; Japanese honeysuckle
supports none with significant biomass.

English ivy in its mature, arborescent form produces flowers and
berries — which birds eat and distribute into wild areas. Once
established in a forest, it creates an &ldquo;ivy desert&rdquo;: no native
wildflowers, no native shrub regeneration, no leaf litter arthropods —
because the mat blocks access to the soil entirely.`,
    action: `For English ivy: cut all stems at the base of each tree, creating a
one-foot gap of cut stems all the way around. Let the vine die in the
canopy — do not try to pull it down; it will take bark with it.
Then remove the ground mat by hand in sections, rolling it back like
carpet. This is labor-intensive but one-time work; the ivy does not
regrow from roots the way barberry does. For bittersweet and honeysuckle:
cut at the base and treat the stump with triclopyr. Monitor for two
seasons. Both will attempt to resprout from the root collar.`,
    species: [
      { page: 'downy-woodpecker' as Page, name: 'Downy Woodpecker', why: 'Oriental bittersweet girdles and kills the snag trees woodpeckers use for foraging and nesting.' },
      { page: 'black-capped-chickadee' as Page, name: 'Black-capped Chickadee', why: 'Japanese honeysuckle displaces caterpillar-hosting natives; chickadees need 6,000\u20139,000 caterpillars per clutch.' },
      { page: 'fireflies' as Page, name: 'Fireflies', why: 'English ivy mats block soil access for firefly larvae and eliminate the leaf litter layer they overwinter in.' },
      { page: 'indigo-bunting' as Page, name: 'Indigo Bunting', why: 'Nests in dense shrubby growth; Oriental bittersweet outcompetes the native shrubs it prefers for cover.' },
    ],
  },
  {
    id: 'trees',
    label: '03',
    headline: 'Norway maple and Bradford pear — trees that look right but are wrong',
    color: '#d35400',
    body: `Norway maple was planted along millions of American streets as a
tough, attractive shade tree. It is one of the most invasive plants
in the northeastern United States. A single Norway maple shades out
all native understory plants beneath it, drops highly allelopathic
leaf litter that suppresses germination, and produces seeds that
spread into every nearby wild area. The shade tree in the front
yard has been colonizing local parks for 30 years.`,
    detail: `Norway maple (Acer platanoides) supports a small fraction of the
caterpillar diversity of native sugar maple (Acer saccharum) or
red maple (Acer rubrum). A University of Delaware study found that
Norway maple in suburban settings supported 90 percent fewer
caterpillar species than native maples planted at the same density.
That caterpillar deficit cascades directly to breeding bird productivity:
no caterpillars, no fledglings.

Callery pear — sold as &ldquo;Bradford pear,&rdquo; &ldquo;Cleveland Select,&rdquo; or
&ldquo;Aristocrat&rdquo; — is now banned for sale in several states including
Ohio and Pennsylvania. Individual cultivars are self-sterile, but
when two cultivars cross-pollinate — which happens when both are
planted in the same neighborhood — they produce billions of viable
seeds distributed by birds. In spring, when the roadsides are white
with pear blossoms, that is not a native flowering tree. It is invasive
cover spreading across every disturbed area in the region.

Tree of heaven (Ailanthus altissima) is the fastest-spreading tree
in the United States. It establishes in every disturbed area —
roadsides, fencerows, utility corridors, the edge of your property
where the mower does not reach. A mature female produces 350,000
seeds per year. It produces allelopathic chemicals that suppress
germination of native trees around it. The spotted lanternfly uses
it as its primary host — making tree of heaven removal directly
relevant to protecting native trees, grapevines, and orchards in
the eastern United States.`,
    action: `For Norway maple: if removal is feasible, cut and treat the stump
with concentrated glyphosate or triclopyr immediately after cutting.
If the tree is too large or the location makes removal impractical,
commit to removing any seedlings that appear beneath it every year —
they are numerous and persistent. For Bradford pear: many municipalities
now have buyback programs replacing them with native trees at no cost;
check your county extension office. For tree of heaven: cut in late
July when carbohydrates are lowest, treat the stump immediately with
basal bark application of triclopyr in oil. This is the most effective
timing window. A tree left uncut will send up suckers from lateral
roots up to 30 feet away from the trunk.`,
    species: [
      { page: 'american-robin' as Page, name: 'American Robin', why: 'Forages in native leaf litter; Norway maple leaf chemistry suppresses the invertebrate community beneath it.' },
      { page: 'baltimore-oriole' as Page, name: 'Baltimore Oriole', why: 'Nests in high canopy of native elms and maples; Norway maple outcompetes native maples in disturbed settings.' },
      { page: 'tiger-swallowtail' as Page, name: 'Tiger Swallowtail', why: 'Caterpillars feed on native cherry, tulip tree, and birch — not on Norway maple or Bradford pear.' },
      { page: 'monarch-life' as Page, name: 'Monarch Butterfly', why: 'Milkweed thrives in open sunny areas; tree of heaven shades and displaces it in disturbed corridors.' },
    ],
  },
]

const sources = [
  'Tallamy, D.W. (2007). Bringing Nature Home. Timber Press.',
  'Cipollini, K., & Cipollini, D. (2016). A review of garlic mustard (Alliaria petiolata) as a belowground pathogen. Phytopathology 106(9), 948–951.',
  'Williams, S.C., Ward, J.S., Worthley, T.E., & Stafford, K.C. (2009). Managing Japanese barberry infestations reduces blacklegged tick abundance. Environmental Entomology 38(4), 977–284.',
  'Hartman, K.M., & McCarthy, B.C. (2004). Restoration of a forest understory after the removal of an invasive shrub, Amur honeysuckle. Restoration Ecology 12(2), 154–165.',
  'Rauschert, E.S.J., et al. (2010). Ecological impacts of the invasive shrub Amur honeysuckle. Invasive Plant Science and Management 3(2), 121–130.',
  'Narango, D.L., Tallamy, D.W., & Marra, P.P. (2018). Nonnative plants reduce population growth of an insectivorous bird. PNAS 115(45), 11549–11554.',
]

export default function InvasivePlants({ onNavigate }: InvasivePlantsProps) {
  return (
    <div className="page-container">
      <header className="page-hero">
        <p className="page-hero__eyebrow">What To Do</p>
        <h1>Remove Invasive Plants</h1>
        <p className="page-hero__sub">
          Most American yards contain at least one invasive plant that is actively
          displacing wildlife habitat — often sold at the same nursery as the
          native plants meant to replace it. Identification and removal is the
          most direct action a homeowner can take to stop the spread.
        </p>
      </header>

      <section className="page-section">
        <div className="prose">
          <p>
            An invasive plant is not just a non-native plant. Most garden plants
            are non-native without causing ecological harm. An invasive plant is
            one that spreads beyond where it is planted — into wild areas, forest
            edges, and natural corridors — and displaces the native plants that
            form the foundation of local food webs.
          </p>
          <p>
            The distinction matters because most invasive plants look attractive.
            They were selected and sold precisely because they are adaptable, low-
            maintenance, and visually appealing. Their invasiveness is a function
            of those same qualities. If you have burning bush turning red in
            October, barberry adding structure to your foundation planting, or
            English ivy blanketing the slope you didn&apos;t want to mow — you have
            the most common invasive plants in the eastern United States.
          </p>
          <p>
            Removing them is not just &ldquo;cleaning up.&rdquo; It restores the food web.
            The native shrubs, trees, and groundcovers that replace them host
            hundreds of caterpillar and invertebrate species. The invasives they
            replaced hosted almost none.
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
        <h2>What to plant instead</h2>
        <div className="prose">
          <p>
            Removal creates space. What you plant in that space determines
            whether the wildlife benefit is immediate or delayed by years.
            The highest-impact replacements are native shrubs and trees that
            host caterpillars — because caterpillars are the primary food
            source for breeding birds.
          </p>
          <p>
            Native viburnums (arrowwood, blackhaw, nannyberry) replace burning
            bush and barberry directly — same size range, better wildlife value.
            Native elderberry and spicebush replace autumn olive in shrub borders.
            Native sugar maple, red maple, or serviceberry replace Norway maple.
            Native Virginia creeper replaces English ivy as a groundcover and
            climber. American bittersweet — if you can source it — replaces
            Oriental bittersweet.
          </p>
          <p>
            The &ldquo;Choose a Plant&rdquo; tool can help you match native alternatives
            to your site conditions — sun, soil moisture, and size. The &ldquo;Find
            Plants Near Me&rdquo; tool finds nurseries with native stock in your county.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button className="btn btn--primary" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            <button className="btn btn--secondary" onClick={() => onNavigate('native-plant-near-me')}>
              Find plants near me
            </button>
          </div>
        </div>
      </section>

      <section className="page-section page-section--cta-row">
        <h2>Keep going</h2>
        <div className="cta-card-row">
          <div className="cta-card">
            <h3>From Lawn to Habitat</h3>
            <p>Five steps to transform turf into a living ecosystem — removal is step one.</p>
            <button className="btn btn--primary" onClick={() => onNavigate('habitat-transformation')}>
              Start the transformation
            </button>
          </div>
          <div className="cta-card">
            <h3>Leave the Leaves</h3>
            <p>Why fall cleanup is the most ecologically damaging thing most homeowners do.</p>
            <button className="btn btn--secondary" onClick={() => onNavigate('leave-the-leaves')}>
              Read the guide
            </button>
          </div>
          <div className="cta-card">
            <h3>Pesticides &amp; Your Habitat</h3>
            <p>What&apos;s already in your yard that is killing wildlife — and what to do instead.</p>
            <button className="btn btn--primary" onClick={() => onNavigate('pesticide-guide')}>
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
