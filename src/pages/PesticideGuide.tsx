import type { Page } from '../App'

interface PesticideGuideProps {
  onNavigate: (page: Page) => void
}

// bta-004: Give people a path. They already care.
// aiw-002: Concrete images do the emotional work. Don't name the feeling.
// aiw-006: Every claim has a number or a species name.
// bta-010: The conventional lawn is not normal — surface that gently.
// bta-008: Art bridges knowing to feeling; sensory specifics first.

const threats = [
  {
    id: 'neonics',
    label: '01',
    headline: 'Neonicotinoids — hidden in the plant you just bought',
    color: '#c0392b',
    body: `Neonicotinoids — imidacloprid, clothianidin, thiamethoxam — are the most
widely used insecticides in the world. They are systemic: absorbed into every
cell of a treated plant, present in the pollen, nectar, and leaf tissue
that insects consume. A single kernel of treated corn seed contains enough
imidacloprid to kill 80,000 bees.`,
    detail: `Most bedding plants and flowering annuals sold at big-box garden centers
are pre-treated with neonicotinoids at concentrations 10 to 20 times higher
than what is applied in agricultural fields. A monarch caterpillar that eats
treated milkweed shows neurological impairment within hours. A native bee
foraging on treated coneflower may not die immediately — instead, it loses
its ability to navigate back to its nest, leaving larvae to starve.

The European Union banned outdoor use of three major neonicotinoids in 2018
after linking them to colony collapse disorder in honeybees and sharp declines
in wild bee populations. They are still sold freely in the United States.`,
    action: `Ask before you buy. Any plant labeled "protected" or "long-lasting pest control"
has likely been treated. Ask your nursery directly whether their plants are
neonic-free. Buy from native plant nurseries, which typically do not treat their
stock. Grow your own from untreated seed. If a plant is labeled for pollinators
and you cannot verify it is untreated, leave it on the shelf.`,
    species: [
      { page: 'monarch-life' as Page, name: 'Monarch Butterfly', impact: 'Caterpillars on treated milkweed show neurological impairment within hours.' },
      { page: 'native-bees' as Page, name: 'Native Bees', impact: 'Sublethal exposure disrupts navigation — bees cannot return to nest, larvae starve.' },
      { page: 'ruby-throated-hummingbird' as Page, name: 'Ruby-throated Hummingbird', impact: 'Eats insects from treated flowers; residues accumulate in body tissue.' },
    ],
  },
  {
    id: 'glyphosate',
    label: '02',
    headline: 'Glyphosate — the herbicide at the end of the driveway',
    color: '#8e44ad',
    body: `Glyphosate (Roundup) was introduced as a targeted weed killer. It became
the most heavily applied agricultural chemical in history — more than
1.8 million tons used globally between 1974 and 2016. In residential yards,
people spray it along driveways, fence lines, and lawn edges to achieve
a "clean" look. Those margins are the habitat.`,
    detail: `The bare-edge aesthetic kills more than weeds. The strip along the fence,
the patch at the base of the tree, the groundcover at the lawn margin — these
are where ground-nesting bees dig their tunnels, where toads overwinter in
the soil, where firefly larvae spend two years before they ever produce light.

Glyphosate does not stay where it is sprayed. Studies show it moves through
soil and enters surface water, where it disrupts thyroid function in frogs
at concentrations well below what is considered safe for humans. Tadpoles
exposed to diluted Roundup in lab conditions at realistic field-runoff levels
show increased deformity rates and impaired metamorphosis. A spring peeper
breeding in a pond forty feet from a treated lawn absorbs these residues
through its permeable skin.`,
    action: `Replace the spray can with a different relationship to the edge. Let a
two-foot unmowed strip grow along every fence and structure on your property.
If specific plants need to be managed, use a propane flame weeder or pull by
hand. For patios and walkways, boiling water kills weeds on contact with no
residual chemical. The bare-edge look was invented by the chemical industry.
A living edge does more ecological work in one season than a sterile margin
does in a lifetime.`,
    species: [
      { page: 'spring-peeper' as Page, name: 'Spring Peeper', impact: 'Absorbs glyphosate through skin; disrupts thyroid function and metamorphosis in tadpoles.' },
      { page: 'toad' as Page, name: 'American Toad', impact: 'Overwinters in soil that absorbs herbicide; breeding affected by surface water runoff.' },
      { page: 'fireflies' as Page, name: 'Fireflies', impact: 'Two years as larvae in the soil margins you spray. There is no other larval habitat.' },
    ],
  },
  {
    id: 'mosquito',
    label: '03',
    headline: 'Broadcast mosquito sprays — killing what you came outside to see',
    color: '#2980b9',
    body: `Mosquito abatement services spray permethrin, bifenthrin, or pyrethrin across
the entire yard — lawn, shrubs, flower beds, garden edges — on a regular
schedule through the warm months. These are contact killers with no target
specificity. Everything an insect is, they are designed to destroy.`,
    detail: `A single backyard spray application kills not just mosquitoes but every
surface-active insect in the treated area: native bees resting on flower heads,
monarch butterflies nectaring on milkweed, fireflies crawling from leaf
litter at dusk, green darner dragonflies perching at pond's edge. Pyrethrin
has a half-life of hours in sunlight but can persist for weeks in shaded
areas and on plant surfaces — exactly where insects shelter.

A 2019 study of insect abundance across German nature reserves found a 75
percent decline in insect biomass over 27 years in areas adjacent to
agricultural land. Broadcast residential pesticide use adds to that pressure
in places where insects had previously found refuge. The yard that was
supposed to be a sanctuary becomes an extension of the problem.

Dragonflies are aquatic insects for most of their lives. A green darner
larva spends one to three years in the water column of a pond before emerging
as an adult. The adult that emerges is killed by your neighbor's spray service
before it can complete its migration — before it can reach the wintering
grounds in Mexico alongside the monarchs.`,
    action: `Cancel the service. This is the highest-impact single action most homeowners
can take for backyard wildlife. Replace it with targeted physical controls:
eliminate standing water in containers and clogged gutters (where mosquitoes
breed), add a bat house (one bat eats 3,000 to 7,000 mosquitoes per night),
encourage dragonflies by adding a small water feature (dragonfly larvae eat
mosquito larvae). If you feel you need some control, use Bacillus thuringiensis
israelensis (Bti) — a biological agent applied only to standing water that
kills mosquito and fungus gnat larvae with no effect on other insects.`,
    species: [
      { page: 'green-darner' as Page, name: 'Green Darner', impact: 'Migrates with monarchs. Adult killed on contact; larvae killed by spray runoff into water.' },
      { page: 'fireflies' as Page, name: 'Fireflies', impact: 'Surface-active at dusk — prime spray window. Adults killed before they can reproduce.' },
      { page: 'native-bees' as Page, name: 'Native Bees', impact: 'Contact kill on flowers. Ground-nesting bees exposed on emergence and landing.' },
      { page: 'monarch-life' as Page, name: 'Monarch Butterfly', impact: 'Killed on contact nectaring on milkweed. Cannot distinguish target from bycatch.' },
    ],
  },
]

const InlineLink = ({
  page,
  label,
  onNavigate,
}: {
  page: Page
  label: string
  onNavigate: (p: Page) => void
}) => (
  <button
    onClick={() => onNavigate(page)}
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
    {label}
  </button>
)

export default function PesticideGuide({ onNavigate }: PesticideGuideProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Take Action</div>
        <h1>Pesticides and Your Habitat</h1>
        <p className="hero__lead">
          You planted milkweed. You left the leaf litter. You put up a bee block.
          Then you or your neighbor sprayed the yard. Three common chemicals —
          applied by millions of homeowners every spring — silently undo
          everything a habitat is supposed to do.
        </p>
      </section>

      <div className="page">

        {/* ── Intro ── */}
        <section aria-labelledby="intro-heading">
          <h2 id="intro-heading">The problem no one talks about at the garden center</h2>
          <p>
            Habitat restoration is not just about what you plant. It is about
            what you spray. A yard full of native milkweed, native wildflowers,
            and native groundcover can still function as a chemical wasteland if
            it is treated with neonicotinoid-pre-treated plants, sprayed with
            herbicide along its edges, and hit by a mosquito abatement service
            twice a month.
          </p>
          <p>
            Three categories of chemicals account for most of the residential
            pesticide harm to wildlife: systemic insecticides in nursery plants,
            glyphosate-based herbicides applied to margins and edges, and
            broadcast insecticide sprays for mosquito control. Each works
            differently. Each kills different things. Each has a specific
            alternative.
          </p>
          <p>
            This page covers all three — what they are, what they kill, and
            what you can do instead.
          </p>
          <div
            style={{
              background: 'var(--surface-soft, #f7faf7)',
              border: '1px solid var(--border-light, #d8e4d8)',
              borderRadius: '8px',
              padding: '1rem 1.25rem',
              marginTop: '1rem',
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.6rem', fontSize: '1rem' }}>
              Label check before you buy
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Skip plants labeled "insect protected," "systemic," or "long-lasting pest control."</li>
              <li>Ask the nursery one direct question: "Were these treated with neonicotinoids?"</li>
              <li>Choose untreated native plants or seed-grown stock when treatment history is unclear.</li>
            </ul>
          </div>
        </section>

        {/* ── Three Threats ── */}
        {threats.map((threat) => (
          <section key={threat.id} aria-labelledby={`${threat.id}-heading`} style={{ marginTop: '2.5rem' }}>
            <div
              style={{
                borderLeft: `4px solid ${threat.color}`,
                paddingLeft: '1rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: threat.color,
                  marginBottom: '0.3rem',
                  textTransform: 'uppercase',
                }}
              >
                Threat {threat.label}
              </div>
              <h2 id={`${threat.id}-heading`} style={{ margin: 0 }}>
                {threat.headline}
              </h2>
            </div>

            <p>{threat.body}</p>

            {threat.detail.split('\n\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}

            {/* Who it kills */}
            <div
              style={{
                background: 'var(--surface-soft, #f7faf7)',
                border: `1px solid ${threat.color}33`,
                borderRadius: '8px',
                padding: '1.1rem 1.25rem',
                margin: '1.25rem 0',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: threat.color,
                  marginBottom: '0.75rem',
                }}
              >
                Who it kills in your yard
              </div>
              <div style={{ display: 'grid', gap: '0.6rem' }}>
                {threat.species.map((s) => (
                  <div key={s.page} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <button
                      onClick={() => onNavigate(s.page)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: 'var(--monarch-orange, #e07b2a)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        whiteSpace: 'nowrap',
                        textDecoration: 'underline',
                        minWidth: '10rem',
                        textAlign: 'left',
                      }}
                    >
                      {s.name}
                    </button>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #555)', lineHeight: 1.5 }}>
                      {s.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to do instead */}
            <div
              style={{
                background: '#f0f9f0',
                borderLeft: '4px solid #2e7d32',
                borderRadius: '0 8px 8px 0',
                padding: '1.1rem 1.25rem',
                marginTop: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#2e7d32',
                  marginBottom: '0.6rem',
                }}
              >
                What to do instead
              </div>
              <p style={{ margin: 0, lineHeight: 1.7 }}>{threat.action}</p>
            </div>
          </section>
        ))}

        {/* ── The compound effect ── */}
        <section aria-labelledby="compound-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="compound-heading">When all three are present at once</h2>
          <p>
            In a typical suburban neighborhood, all three of these chemical
            categories operate simultaneously. The homeowner plants pre-treated
            annuals in spring, sprays the fence line in July, and has a mosquito
            service treating the yard biweekly from May through September. The
            yard may have native milkweed in it. It may have a bird bath.
            It will still have essentially zero insects by midsummer.
          </p>
          <p>
            This is why the number of monarch butterflies passing through the
            Midwest has dropped by more than 80 percent since the 1990s. It
            is not one cause. It is the compound effect of a chemical
            management culture applied at residential scale across an entire
            flyway. Each individual yard seems too small to matter. The aggregate
            is catastrophic.
          </p>
          <p>
            You cannot control what your neighbor does. You can control what
            happens in your yard. That control, exercised by enough people in
            enough yards, adds up to a corridor — or a void.
          </p>
        </section>

        {/* ── Quick reference ── */}
        <section aria-labelledby="ref-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="ref-heading">Quick reference: swap these out</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {[
              {
                out: 'Pre-treated nursery plants',
                in: 'Verified neonic-free natives from specialty nurseries or seed-grown from untreated stock',
              },
              {
                out: 'Glyphosate along edges and fence lines',
                in: 'Propane flame weeder, hand-pulling, or a 2-foot unmowed living margin',
              },
              {
                out: 'Broadcast mosquito spray service',
                in: 'Bat house + eliminate standing water + Bti dunks for any remaining water features',
              },
              {
                out: 'Systemic pesticides on vegetable garden',
                in: 'Row covers, companion planting, and hand-removal for the few pests that matter',
              },
            ].map((swap) => (
              <div
                key={swap.out}
                style={{
                  background: 'var(--surface-soft, #f7faf7)',
                  border: '1px solid var(--border-light, #d8e4d8)',
                  borderRadius: '8px',
                  padding: '1rem',
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    color: '#c0392b',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                    display: 'flex',
                    gap: '0.35rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span>✕</span>
                  <span>{swap.out}</span>
                </div>
                <div
                  style={{
                    color: '#2e7d32',
                    fontWeight: 600,
                    display: 'flex',
                    gap: '0.35rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span>✓</span>
                  <span>{swap.in}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <h2 style={{ marginTop: 0 }}>Start with what you can control</h2>
          <p>
            Not sure what your yard currently offers — or lacks — for wildlife?
            Take the{' '}
            <InlineLink page="habitat-score" label="Yard Check" onNavigate={onNavigate} />{' '}
            for a six-question habitat assessment and a specific next action for
            your situation. If you are ready to add plants, the{' '}
            <InlineLink page="choose-a-plant" label="Native Plant Finder" onNavigate={onNavigate} />{' '}
            can match you to untreated, local-ecotype natives by zone and sun
            conditions.
          </p>
          <p>
            Want to understand the broader transformation — converting turf to
            habitat step by step? See the{' '}
            <InlineLink page="habitat-transformation" label="From Lawn to Habitat" onNavigate={onNavigate} />{' '}
            guide.
          </p>
          <p>
            Canceling a spray service creates a gap that dragonflies and bats already fill — but
            only when your yard gives them somewhere to breed. A green darner nymph spends ten
            months to two years in a pond, hunting mosquito larvae in the water column before it
            surfaces as an adult. A 25-gallon container sunk flush to the ground supports a small
            nymph colony through a season. The{' '}
            <InlineLink page="water-for-wildlife" label="Water for Wildlife" onNavigate={onNavigate} />{' '}
            guide covers what each water feature needs — the depth, edge texture, and plants that
            make the difference between a decoration and a dragonfly nursery.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('habitat-score')} className="btn btn-primary">
              Take the Yard Check →
            </button>
            <button onClick={() => onNavigate('choose-a-plant')} className="btn btn-secondary">
              Find plants for my yard →
            </button>
            <button onClick={() => onNavigate('water-for-wildlife')} className="btn btn-secondary">
              Add water for wildlife →
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
              Goulson, D. (2013). An overview of the environmental risks posed by neonicotinoid
              insecticides. <em>Journal of Applied Ecology</em> 50(4), 977–987. — Systemic
              concentration in pollen/nectar; bee colony collapse links.
            </li>
            <li>
              Eng, M.L., Stutchbury, B.J.M., & Morrissey, C.A. (2019). A neonicotinoid insecticide
              reduces fueling and delays migration in songbirds. <em>Science</em> 365(6458),
              1177–1180. — Sublethal exposure effects on navigation and migration.
            </li>
            <li>
              Hallmann, C.A. et al. (2017). More than 75 percent decline over 27 years in total
              flying insect biomass in protected areas. <em>PLOS ONE</em> 12(10), e0185809. —
              Insect biomass decline adjacent to agricultural land.
            </li>
            <li>
              Relyea, R.A. (2005). The lethal impact of Roundup on aquatic and terrestrial
              amphibians. <em>Ecological Applications</em> 15(4), 1118–1124. — Glyphosate
              effects on tadpoles and adult frogs.
            </li>
            <li>
              Mineau, P. & Whiteside, M. (2013). Pesticide acute toxicity is a better correlate
              of US grassland bird declines than agricultural intensification.{' '}
              <em>PLOS ONE</em> 8(2), e57457. — Pesticide toxicity and songbird decline correlation.
            </li>
            <li>
              US Geological Survey (2016). Neonicotinoid pesticides in surface and groundwater
              across the US. — Persistence and movement of neonics beyond application site.
            </li>
          </ul>
        </section>

      </div>
    </>
  )
}
