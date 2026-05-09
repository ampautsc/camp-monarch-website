import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

interface WaystationGuideProps {
  onNavigate: (page: Page) => void
}

// prop-087: Monarch Waystation Certification Guide
//
// lesson-234571eb: the #1 unmet need in monarch communities is practical, specific help.
// "How do I get my yard certified?" is one of the most common questions. TakeAction
// mentions Waystations but just links externally. This page walks through it completely.
//
// fc8dbca5: habitat-first philosophy. Waystation certification IS the habitat-first action —
// it is about creating outdoor habitat, not intensive indoor rearing.
//
// bta-004: give people a visible path, not more reasons to care.
// The path here is specific: plants → criteria → application → registry.

const criteria = [
  {
    heading: 'Milkweed — at least one species',
    detail: 'Monarchs cannot reproduce without milkweed. A female will only lay eggs on milkweed, and the caterpillar eats nothing else. At least two milkweed plants are required. Native species are strongly preferred: Common Milkweed (Asclepias syriaca), Swamp Milkweed (A. incarnata), or Butterfly Weed (A. tuberosa).',
    note: 'Tropical milkweed (A. curassavica) is allowed but discouraged in the South where it stays green year-round. Year-round milkweed disrupts migration cues and can harbor OE, a parasite that spreads when infected butterflies linger on persistent plants.',
    icon: '🌱',
  },
  {
    heading: 'Nectar plants — variety and bloom succession',
    detail: 'Adult Monarchs need nectar from late spring through fall migration. Your waystation should include plants that bloom in succession — something for June, July, August, and September. Native options: native coneflowers (Echinacea), native asters, goldenrod (Solidago), ironweed (Vernonia), native liatris.',
    note: 'You need plants that bloom when Monarchs pass through your region. In the Midwest, late-summer goldenrod and asters are the most critical — migrating Monarchs fuel the journey south on these species.',
    icon: '🌼',
  },
  {
    heading: 'No pesticides or herbicides',
    detail: 'Pesticides and herbicides kill Monarchs at all life stages. Insecticides kill caterpillars directly. Systemic insecticides persist in plant tissue — a Monarch feeding on a treated nectar plant can be killed even if the plant looks healthy. Herbicides kill milkweed and nectar plants. A certified Waystation is chemical-free.',
    note: 'This criterion matters beyond Monarchs. Pesticide-free yards support native bees, beetles, fireflies, and the full web of insects that birds, frogs, and other wildlife depend on. This is the practice Amy\'s mission calls for.',
    icon: '🚫',
  },
  {
    heading: 'Shelter — sun and some wind protection',
    detail: 'Monarchs need sun to warm up enough to fly. Milkweed grows best in full sun (6+ hours). Wind protection — a fence, shrubs, or a building edge — is ideal but not required. The primary criterion is sun: a shaded yard will produce weak caterpillars and sparse nectar.',
    note: 'A south-facing slope or wall increases sun exposure significantly. Even a 3-foot raised bed against a south-facing fence can produce strong milkweed in a smaller yard.',
    icon: '☀️',
  },
]

const steps = [
  {
    number: '01',
    heading: 'Establish your milkweed and nectar plants',
    color: 'var(--monarch-orange)',
    content: 'At minimum: two milkweed plants and three nectar plant varieties that bloom across the season. They don\'t need to be large — a 3×3 patch is sufficient for registration. The plants need to be established, not just planted. A bare patch of newly seeded milkweed does not qualify until it is growing.',
    practical: 'If you are starting this spring: plant now. Common Milkweed from seed takes 2–3 years to bloom. Buy transplants or plugs for faster establishment. Butterfly Weed (Asclepias tuberosa) blooms in its second year from seed.',
  },
  {
    number: '02',
    heading: 'Stop all pesticide and herbicide use',
    color: 'var(--monarch-green)',
    content: 'Remove all pesticide and herbicide products from use in your certified area before registering. This includes systemic insecticides applied to other plants in the same zone — their residue can persist in soil and plant tissue for weeks.',
    practical: 'You do not need to treat your entire property — only the designated Waystation area. If you have a large yard, you can designate a specific section (e.g., a back-corner native garden) as the certified area.',
  },
  {
    number: '03',
    heading: 'Register at monarchwatch.org',
    color: 'var(--monarch-orange)',
    content: 'Go to monarchwatch.org/waystations/ and complete the online application. The application asks for your name, address, and a description of your habitat: milkweed species, nectar species, and approximate size. There is a $16 registration fee (as of 2025–2026).',
    practical: 'The registration fee covers your listing in the national Waystation database and your printed certificate and sign. The sign is optional — some registrants just want the numbered certificate. Both ship within 4–6 weeks.',
  },
  {
    number: '04',
    heading: 'Receive your certificate and sign',
    color: 'var(--monarch-green)',
    content: 'Your numbered Waystation certificate includes your name, address, and official Waystation number. The optional metal sign (included in the fee) can be posted in your yard, visible from the street. Your Waystation number is searchable in the public Monarch Watch registry.',
    practical: 'Post the sign at the edge of your milkweed garden if you want to start conversations with neighbors. Many Waystation owners report that the sign prompts more questions than any other outreach. It makes the habitat visible — and visible habitat spreads.',
  },
  {
    number: '05',
    heading: 'Maintain and log what you see',
    color: 'var(--monarch-orange)',
    content: 'A Waystation is not a one-time action. It is a maintained habitat. Cut back dead milkweed in late winter. Let native asters and goldenrod go to seed for overwintering insects. Add milkweed species over time. When you see eggs, caterpillars, or adults, log them.',
    practical: 'Even one milkweed observation per season logged to iNaturalist or Journey North becomes part of the national dataset. A Waystation that produces 10 data points per year — sightings, phenology, plant health — is a scientific asset, not just a garden.',
  },
]

const faqs = [
  {
    q: 'Do I need a certain size yard?',
    a: 'No minimum size is required. Monarch Watch states that even a small urban container garden or balcony planting can qualify if it includes milkweed and nectar plants. The quality of the habitat matters more than the square footage.',
  },
  {
    q: 'Can I certify a community garden, schoolyard, or public space?',
    a: 'Yes. Monarch Watch certifies community gardens, schoolyards, parks, corporate campuses, and roadsides — anywhere habitat can be maintained. These registrations have special categories in the application.',
  },
  {
    q: 'What if I only have a balcony or containers?',
    a: 'Container milkweed (Common or Swamp Milkweed in large pots, 5 gallons or larger) can qualify. Native asters and goldenrod can also grow in containers. A balcony in the Monarch corridor is genuine habitat — butterflies nectaring on city balconies have been documented in iNaturalist data.',
  },
  {
    q: 'Does tropical milkweed count?',
    a: 'It can satisfy the milkweed criterion in the North where hard frost kills it back each year. In southern states (Gulf Coast and south), cut it to the ground in fall to prevent year-round persistence. Monarch Watch\'s guidance is to plant native milkweed wherever possible and avoid tropical milkweed in Florida, Texas, California, and similar climates.',
  },
  {
    q: 'What happens after I register?',
    a: 'Your yard appears in the public Monarch Waystation database, searchable by state. You receive a numbered certificate and optional sign. There is no ongoing fee. Monarch Watch may contact you periodically for research surveys or to share updates, but registration does not require ongoing reporting.',
  },
  {
    q: 'How many Waystations are there?',
    a: 'As of 2025, Monarch Watch has registered more than 40,000 Waystations across the United States and Canada. The goal is 100,000 — enough to form a continuous habitat network along the migration corridor from Mexico to Canada.',
  },
]

export default function WaystationGuide({ onNavigate }: WaystationGuideProps) {
  return (
    <>
      {/* Hero — inverted pyramid (www-004), conclusion first, specific (www-013) */}
      <section className="hero">
        <div className="hero__eyebrow">Monarch Waystation</div>
        <h1>Your yard can be<br />certified habitat.</h1>
        <p className="hero__lead">
          A Monarch Waystation is a registered habitat — milkweed and nectar plants,
          no pesticides, in the national registry maintained by Monarch Watch.
          The application takes 10 minutes. The certification is permanent.
          This page walks through everything: criteria, application, and what comes next.
        </p>
        <a
          href="https://www.monarchwatch.org/waystations/"
          target="_blank"
          rel="noreferrer"
          className="hero__cta"
          style={{ display: 'inline-block' }}
          onClick={() => trackEvent('outbound_link', 'waystation-guide', 'hero-apply')}
        >
          Apply at Monarch Watch →
        </a>
      </section>

      <div className="page">

        {/* What is a Waystation — specific, not marketing language (www-007) */}
        <section aria-labelledby="what-heading">
          <h2 id="what-heading">What a Waystation is, precisely</h2>
          <p>
            A Monarch Waystation is a yard, garden, school ground, or public space that
            meets specific habitat criteria and is registered in a national database maintained
            by{' '}
            <a href="https://monarchwatch.org" target="_blank" rel="noreferrer">
              Monarch Watch
            </a>{' '}
            at the University of Kansas.
          </p>
          <p>
            The term "waystation" refers to a place where migrating Monarchs can stop, feed, and continue south.
            In the fall migration, a Monarch traveling from northern Minnesota to central Mexico covers
            roughly 3,000 miles. It needs nectar — a lot of it — at reliable intervals.
            Your yard, if it has the right plants in September, is a literal fueling station
            on that route.
          </p>
          <p>
            As of 2025, Monarch Watch has registered more than 40,000 Waystations.
            The goal is 100,000 — enough to form a continuous corridor from Canada to Mexico.
            <sup>
              <a
                href="https://www.monarchwatch.org/waystations/"
                target="_blank"
                rel="noreferrer"
                className="cite"
              >
                [1]
              </a>
            </sup>
          </p>
        </section>

        {/* Criteria — the four things required */}
        <section aria-labelledby="criteria-heading">
          <h2 id="criteria-heading">The four criteria</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            You need all four to qualify. Most yards can meet them within one growing season.
          </p>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {criteria.map((c) => (
              <div
                key={c.heading}
                style={{
                  background: 'var(--surface, #f8f4ef)',
                  borderRadius: '8px',
                  padding: '1.25rem 1.25rem 1rem',
                  borderLeft: '4px solid var(--monarch-orange)',
                }}
              >
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.05rem', color: 'var(--monarch-green)' }}>
                  {c.icon} {c.heading}
                </h3>
                <p style={{ margin: '0 0 0.6rem', lineHeight: 1.65 }}>{c.detail}</p>
                <p
                  style={{
                    margin: 0,
                    background: 'rgba(255,255,255,0.65)',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                  }}
                >
                  <strong>Note:</strong> {c.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The callout on scale */}
        <div className="callout callout--orange" style={{ margin: '2rem 0' }}>
          <p style={{ margin: 0 }}>
            <strong>You don't need a large yard.</strong>{' '}
            A 3×3 patch with two milkweed plants and a border of native asters qualifies.
            A container garden on a balcony in the migration corridor qualifies.
            Monarch Watch's application has a field for habitat size — there is no minimum.
          </p>
        </div>

        {/* Five steps to certification */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading">Five steps to certification</h2>
          <div style={{ display: 'grid', gap: '1.25rem', marginTop: '1rem' }}>
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  borderLeft: `4px solid ${step.color}`,
                  paddingLeft: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      color: step.color,
                      minWidth: '2rem',
                    }}
                  >
                    {step.number}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--monarch-green)' }}>
                    {step.heading}
                  </h3>
                </div>
                <p style={{ margin: '0 0 0.5rem', lineHeight: 1.65 }}>{step.content}</p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    fontStyle: 'italic',
                  }}
                >
                  {step.practical}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Apply CTA — mid-page anchor (www-005, bta-004) */}
        <div className="action-panel" style={{ margin: '2.5rem 0' }}>
          <h2 style={{ marginTop: 0 }}>Ready to register?</h2>
          <p>
            The Monarch Watch application is at monarchwatch.org. It takes about 10 minutes.
            Registration fee: $16 (as of 2025–2026). You receive a numbered certificate and
            optional sign.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            <a
              href="https://www.monarchwatch.org/waystations/"
              target="_blank"
              rel="noreferrer"
              className="hero__cta"
              style={{ display: 'inline-block' }}
              onClick={() => trackEvent('outbound_link', 'waystation-guide', 'mid-page-apply')}
            >
              Register your Waystation →
            </a>
            <button
              onClick={() => { trackEvent('cta_click', 'waystation-guide', 'plant-milkweed'); onNavigate('plant-milkweed') }}
              style={{
                background: 'none',
                border: '2px solid var(--monarch-green)',
                color: 'var(--monarch-green)',
                padding: '0.55rem 1.1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '0.95rem',
              }}
            >
              Choose your milkweed first →
            </button>
          </div>
        </div>

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading">Common questions</h2>
          <div style={{ display: 'grid', gap: '0.875rem', marginTop: '1rem' }}>
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                style={{
                  padding: '0.875rem 1rem',
                  background: 'var(--surface, #f8f4ef)',
                  borderRadius: '6px',
                  borderLeft: '3px solid var(--monarch-green)',
                }}
              >
                <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {q}
                </p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The neighbor effect — social action (bta-004) */}
        <section aria-labelledby="neighbor-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="neighbor-heading">The sign is worth it</h2>
          <p>
            The optional Monarch Waystation sign is a 4×6 inch metal placard with your Waystation
            number. It costs nothing beyond the registration fee. Many certified Waystation owners
            post it near their milkweed garden — visible from the street.
          </p>
          <p>
            The sign does something the plants alone cannot: it makes the habitat readable.
            A neighbor who walks past a yard of native plants might wonder what they are.
            A neighbor who walks past a sign labeled "Monarch Waystation #41,892" knows
            exactly what they are and why they are there. That sign — in one conversation —
            has converted more yards than any social media post.
          </p>
          <div className="callout callout--green">
            <p style={{ margin: 0 }}>
              <strong>The corridor is built yard by yard.</strong>{' '}
              One certified Waystation on a block matters.
              Three within a quarter mile matter far more —
              they create overlapping habitat that can support a breeding population, not just
              a passing adult. The most effective thing after certifying is telling one neighbor
              what you did and why.
            </p>
          </div>
        </section>

        {/* After certification — log your sightings */}
        <section aria-labelledby="after-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="after-heading">After you're certified — log what you see</h2>
          <p>
            A certified Waystation that produces sightings is a node in the research network.
            When you observe an egg, caterpillar, or adult Monarch in your registered habitat,
            log it. Log it here, log it on iNaturalist, log it on Journey North.
          </p>
          <p>
            A Waystation that produces one or two logged sightings per year becomes data.
            Over five years, that is a longitudinal record of Monarch presence in your zip code.
            Aggregated across thousands of Waystations, it is how population trends are tracked
            without expensive formal surveys.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              className="hero__cta"
              onClick={() => { trackEvent('cta_click', 'waystation-guide', 'log-a-sighting'); onNavigate('log-a-sighting') }}
            >
              Log a sighting →
            </button>
            <a
              href="https://journeynorth.org/monarchs"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: 'none',
                border: '2px solid var(--monarch-orange)',
                color: 'var(--monarch-orange)',
                padding: '0.55rem 1.1rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
              onClick={() => trackEvent('outbound_link', 'waystation-guide', 'journey-north')}
            >
              Submit to Journey North →
            </a>
          </div>
        </section>

        {/* Sources */}
        <section className="cite-list" aria-label="Sources" style={{ marginTop: '2.5rem' }}>
          <p>
            [1] Monarch Watch.{' '}
            <a href="https://www.monarchwatch.org/waystations/" target="_blank" rel="noreferrer">
              Monarch Waystation Program.
            </a>{' '}
            University of Kansas. Accessed 2026-05-09.
          </p>
          <p>
            Native milkweed species guide: Xerces Society.{' '}
            <a href="https://xerces.org/milkweed" target="_blank" rel="noreferrer">
              Milkweed: An Essential Resource for Monarchs and Native Bees.
            </a>{' '}
            Accessed 2026-05-09.
          </p>
          <p>
            Tropical milkweed guidance: Monarch Joint Venture.{' '}
            <a href="https://monarchjointventure.org/resources/faq/what-milkweed-should-i-plant" target="_blank" rel="noreferrer">
              What milkweed should I plant?
            </a>{' '}
            Accessed 2026-05-09.
          </p>
        </section>

        {/* Cross-links */}
        <section aria-labelledby="learn-heading" style={{ marginTop: '2rem' }}>
          <h2 id="learn-heading">Related pages</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              onClick={() => { trackEvent('cta_click', 'waystation-guide', 'plant-milkweed'); onNavigate('plant-milkweed') }}
              style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Choose your milkweed →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'waystation-guide', 'native-plant-near-me'); onNavigate('native-plant-near-me') }}
              style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Find plants near me →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'waystation-guide', 'take-action'); onNavigate('take-action') }}
              style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              All actions →
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
