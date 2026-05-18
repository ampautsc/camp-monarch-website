import type { Page } from '../App'

interface HabitatTransformationProps {
  onNavigate: (page: Page) => void
}

// bta-004: Give people a path. They already care.
// bta-010: The conventional lawn is not normal — surface that gently.
// bta-001: The comparison moment — what a lawn gives vs. what a native patch gives.
// aiw-002: Concrete images do the emotional work. Don't name the feeling.
// aiw-006: Every claim has a number or a species name.

const steps = [
  {
    number: '01',
    headline: 'Choose your patch',
    body:
      'Pick a spot — any spot. Four feet by four feet is enough to start. A forgotten corner, the strip along the fence, the edge of the driveway where the grass is thin anyway. Size does not determine whether it works. Connection does. Even a small patch creates a landing zone for insects that would otherwise pass over an empty lawn.',
  },
  {
    number: '02',
    headline: 'Smother the grass',
    body:
      'No herbicide needed. Lay down overlapping sheets of plain cardboard — free at any grocery or hardware store — and cover it with three to four inches of wood chip mulch. The cardboard kills the grass underneath over six to eight weeks. The mulch holds moisture and feeds soil fungi. By the time the cardboard breaks down, the ground is ready to plant.',
  },
  {
    number: '03',
    headline: 'Plant one native',
    body:
      'One plant is not a compromise — it is how habitat starts. Common milkweed for Monarch caterpillars. Wild bergamot for native bees and hummingbirds. Purple coneflower for goldfinches and bumble bees. Any native perennial you plant this spring will spread on its own, return next year with a bigger root system, and make the patch more hospitable for the plants around it.',
  },
  {
    number: '04',
    headline: 'Keep the leaves',
    body:
      'A firefly spends up to two years as a larva in your leaf litter before it produces a single flash of light. So does the luna moth. So do the ground beetles, the rove beetles, and the predatory insects that keep pest populations in check. When you rake the leaves and haul them to the curb, you are removing two years of their development. Leave the leaves under shrubs and at the edges of beds. Let the lawn margins go.',
  },
  {
    number: '05',
    headline: 'Stop mowing the edges',
    body:
      'The margins of your lawn — along fences, under shrubs, at the base of trees — do more ecological work per square foot than any other part of a yard. Insects shelter there. Birds forage there. Amphibians overwinter there. When those edges go unmowed from September through April, they carry a community of organisms through the season that would otherwise have nowhere to go.',
  },
]

const neighbors: { page: Page; name: string; what: string }[] = [
  {
    page: 'monarch-life',
    name: 'Monarch Butterfly',
    what: 'Returns with milkweed. Cannot breed without it.',
  },
  {
    page: 'fireflies',
    name: 'Fireflies',
    what: 'Two years of larval life in your leaf litter before the first flash.',
  },
  {
    page: 'hummingbird',
    name: 'Ruby-throated Hummingbird',
    what: 'Finds tubular native flowers: wild bergamot, cardinal flower, trumpet vine.',
  },
  {
    page: 'american-toad',
    name: 'American Toad',
    what: 'Needs chemical-free soil to overwinter and shallow water to breed.',
  },
  {
    page: 'dark-eyed-junco',
    name: 'Dark-eyed Junco',
    what: 'Forages in leaf litter for insect eggs and native seeds through winter.',
  },
  {
    page: 'eastern-chipmunk',
    name: 'Eastern Chipmunk',
    what: 'Disperses native seeds from native shrubs. Needs brush piles and ground cover.',
  },
  {
    page: 'spring-peeper',
    name: 'Spring Peeper',
    what: 'First frog to call. Needs a pesticide-free yard and intact leaf litter near water.',
  },
  {
    page: 'native-bees',
    name: 'Native Bees',
    what: '70% of North American native bees nest in the ground — in soil you never disturb.',
  },
]

export default function HabitatTransformation({ onNavigate }: HabitatTransformationProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Take Action</div>
        <h1>From Lawn to Habitat</h1>
        <p className="hero__lead">
          Forty million acres of grass cover the continental United States — more
          land than any single crop. That grass supports almost no native insects.
          The birds that depend on those insects are in decline. The path from
          this to something better starts in your yard, with one small patch.
        </p>
      </section>

      <div className="page">

        {/* ── Section 1: The lawn exposed ── */}
        <section aria-labelledby="lawn-heading">
          <h2 id="lawn-heading">What a conventional lawn actually is</h2>
          <p>
            The American lawn was not always here. It spread after World War II,
            modeled on the golf course, promoted by the turf and chemical
            industries, and enforced by HOA rules and social expectation. It
            became the default. It is still the default today.
          </p>
          <p>
            Turf grass — Kentucky bluegrass, fescue, Bermuda — supports
            essentially zero native caterpillar species. That matters because
            96 percent of North American land birds feed their young exclusively
            on insects, and caterpillars are by far the most important of those
            insects. A yard full of turfgrass has the ecological structure of a
            parking lot. It looks like land. It functions like concrete.
          </p>
          <p>
            Meanwhile, a single native white oak supports more than 500 species
            of caterpillars. One tree. The difference is not scale — it is
            species selection. Native plants carry the insect communities that
            evolved alongside them. Exotic turf does not.
          </p>
        </section>

        {/* ── Section 2: The math ── */}
        <section aria-labelledby="math-heading">
          <h2 id="math-heading">Any patch counts — the math is in your favor</h2>
          <p>
            You do not need to convert your entire yard. You do not need to give
            up a lawn your family uses. The research behind the Camp Monarch
            approach, drawn in part from Doug Tallamy's work on residential
            habitat, shows that converting as little as 10 to 20 percent of a
            yard to native plantings produces measurable increases in insect
            diversity and bird activity.
          </p>
          <p>
            A 4-by-4-foot native wildflower bed can support 15 to 25 native bee
            species across a single summer. A window box of native milkweed on a
            third-floor balcony can feed a Monarch caterpillar passing through a
            city. When your small patch is adjacent to a neighbor's small patch —
            even separated by a fence — the combined habitat functions as a
            corridor, and corridors are what migrating species need.
          </p>
          <p>
            The problem was created at scale. It can be reversed at scale too,
            one yard at a time.
          </p>
        </section>

        {/* ── Section 3: Five steps ── */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading">Five moves. Start with one.</h2>
          <p>
            You do not have to do all five at once. Most people start with one
            or two and add over the following seasons. The critical thing is
            starting — the first native plant you put in the ground starts
            building soil relationships immediately.
          </p>
          <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  background: 'var(--surface-soft, #f7faf7)',
                  borderLeft: '4px solid var(--monarch-orange, #e07b2a)',
                  borderRadius: '0 8px 8px 0',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--monarch-orange, #e07b2a)',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Step {step.number}
                </div>
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.1rem' }}>{step.headline}</h3>
                <p style={{ margin: 0, lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: This weekend ── */}
        <section aria-labelledby="weekend-heading">
          <h2 id="weekend-heading">This weekend: a 30-minute habitat start</h2>
          <p>
            If this feels big, shrink it. Set a 30-minute timer. Pick one edge,
            lay one strip of cardboard, and plant one native. Take one photo so
            you can see what changed. That is enough to begin.
          </p>
          <p>
            Want help choosing that first plant? Open the{' '}
            <button
              onClick={() => onNavigate('choose-a-plant')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--monarch-orange, #e07b2a)',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontFamily: 'inherit',
              }}
            >
              Native Plant Finder
            </button>{' '}
            and start with whatever matches your sun and soil.
          </p>
        </section>

        {/* ── Section 5: Who comes back ── */}
        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Milkweed draws the monarch. Leaf litter holds the firefly. Eight species, eight specific needs.</h2>
          <p>
            A monarch butterfly lays her eggs only on milkweed — no other plant
            hosts her caterpillars. A firefly larva spends two years in your
            leaf litter before it produces a single flash of light. Each species
            below needs something specific from a yard, and each one has a full
            page on this site explaining what it needs, what threatens it, and
            what you can do.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1rem',
              marginTop: '1.25rem',
            }}
          >
            {neighbors.map((n) => (
              <button
                key={n.page}
                onClick={() => onNavigate(n.page)}
                style={{
                  background: 'var(--surface-soft, #f7faf7)',
                  border: '1px solid var(--border-light, #d8e4d8)',
                  borderRadius: '8px',
                  padding: '1rem 1.1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.15s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.35rem' }}>
                  {n.name}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #555)', lineHeight: 1.5 }}>
                  {n.what}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── Section 6: Next step ── */}
        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Your next step</h2>
          <p>
            Not sure where your yard stands right now? Take the{' '}
            <button
              onClick={() => onNavigate('habitat-score')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--monarch-orange, #e07b2a)',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontFamily: 'inherit',
              }}
            >
              Yard Check
            </button>{' '}
            — a six-question habitat assessment that returns a specific next
            action for your situation.
          </p>
          <p>
            Ready to plant? The{' '}
            <button
              onClick={() => onNavigate('choose-a-plant')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--monarch-orange, #e07b2a)',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontFamily: 'inherit',
              }}
            >
              Native Plant Finder
            </button>{' '}
            guides you to the right milkweed species and companion natives for
            your zone, sun conditions, and whether you're planting in the ground
            or a container.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('habitat-score')}
              className="btn btn-primary"
            >
              Take the Yard Check →
            </button>
            <button
              onClick={() => onNavigate('choose-a-plant')}
              className="btn btn-secondary"
            >
              Find plants for my yard →
            </button>
          </div>
        </div>

        {/* ── Sources ── */}
        <section aria-labelledby="sources-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="sources-heading" style={{ fontSize: '1rem', color: 'var(--text-secondary, #555)' }}>
            Sources
          </h2>
          <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #555)', lineHeight: 1.7 }}>
            <li>
              Tallamy, D.W. <em>Nature's Best Hope: A New Approach to Conservation That Starts in Your Yard</em> (2019).
              Timber Press. — Lawn area estimates, caterpillar-bird dependency, native oak data.
            </li>
            <li>
              Narango, D.L., Tallamy, D.W., & Marra, P.P. (2018). Nonnative plants reduce population
              growth of an insectivorous bird. <em>PNAS</em> 115(45), 11549–11554. — 96% insect-feeding
              statistic for land birds.
            </li>
            <li>
              Tallamy, D.W. & Shropshire, K.J. (2009). Ranking lepidopteran use of native versus
              introduced plants. <em>Conservation Biology</em> 23(4), 941–947. — Native vs. exotic host
              plant data.
            </li>
            <li>
              Lewis, S.M. et al. (2020). A global review of firefly conservation. <em>BioScience</em>
              70(9), 730–743. — Larval habitat and light pollution threats.
            </li>
            <li>
              Journey North / Monarch Watch sighting data — Monarch population trend since 1990s.
            </li>
          </ul>
        </section>

      </div>
    </>
  )
}
