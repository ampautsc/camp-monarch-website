import type { Page } from '../App'

interface RaiseAMonarchProps {
  onNavigate: (page: Page) => void
}

// lesson-234571eb: practical rearing help is the #1 unmet need in monarch communities
// bta-004: give people a visible path, not more reasons to care
// bta-008: doing produces feeling; the hands-on sequence matters

const steps = [
  {
    id: 'find',
    number: '01',
    heading: 'Find an egg or young caterpillar',
    color: 'var(--monarch-orange)',
    content: [
      'Check the underside of milkweed leaves in the morning when light is low and the leaf surface is easy to scan. Eggs are tiny — smaller than a sesame seed — pale yellow-green, ridged vertically, and always alone.',
      'First-instar caterpillars (just hatched) are translucent and nearly invisible against a leaf. Look for tiny irregular bite marks as evidence. Third-instar and up are striped yellow-black-white and visible to the naked eye.',
      'The safest time to bring in a caterpillar is during the first or second instar — before it has had time to accumulate the parasitic wasp eggs that are common on outdoor populations.',
    ],
    tip: 'Bring in the entire milkweed stem the egg or caterpillar is on. Cutting the plant stresses it. Instead, place the stem in water or cover the cut end with a damp paper towel.',
  },
  {
    id: 'container',
    number: '02',
    heading: 'Set up a rearing container',
    color: 'var(--monarch-green)',
    content: [
      'A gallon zip-lock bag or a mesh laundry hamper works for one to three caterpillars. Ventilation matters more than space — stale air grows mold on the frass (droppings) and can kill caterpillars in days.',
      'Place fresh milkweed cuttings in a small jar of water. Plug the jar opening with paper towel so caterpillars can\'t fall in and drown. Replace the milkweed every 1–2 days or when the leaves are wilted.',
      'Do not use tropical milkweed (Asclepias curassavica) if you can avoid it. It can harbor a protozoan parasite called OE (Ophryocystis elektroscirrha). Native milkweed species — Common, Swamp, Butterfly Weed — are safer choices.',
    ],
    tip: 'Line the container bottom with paper towel. It absorbs moisture, makes frass easy to see, and is quick to swap out. Change it every day or two.',
  },
  {
    id: 'care',
    number: '03',
    heading: 'Daily care: feed, clean, observe',
    color: 'var(--monarch-orange)',
    content: [
      'Caterpillars eat constantly. A fifth-instar caterpillar (the large, boldly striped one) can strip a milkweed leaf in an hour. Check twice a day and replenish.',
      'Remove frass daily. A dirty container is the most common cause of caterpillar death in captivity — bacteria and mold accumulate fast. Spot-clean or replace the paper towel lining each morning.',
      'Expect the caterpillar to stop eating and sit still before each molt. This is normal — do not disturb it. Molts happen five times (five instars) over 9–14 days. You may find the shed skin still on the leaf.',
      'If a caterpillar turns dark, becomes soft or lethargic, or liquid appears on the container walls, it has likely contracted OE or a bacterial infection. Remove it immediately to prevent spreading.',
    ],
    tip: 'Keep the container out of direct sunlight. A cool, shaded surface — a counter top, not a windowsill — is ideal. Temperatures between 65–85°F are the target range.',
  },
  {
    id: 'chrysalis',
    number: '04',
    heading: 'The J-hang and chrysalis',
    color: 'var(--monarch-green)',
    content: [
      'When the caterpillar is ready to pupate, it will wander the container looking for a surface to hang from. It needs height — a stick, the container lid, or a paper towel taped to the top wall.',
      'It will attach with a silk pad, then hang in a J-shape for 12–24 hours. Do not move or disturb the container during this time.',
      'Then, in roughly 60 seconds, the skin splits and rolls back to reveal the chrysalis underneath. The chrysalis is jade green with a ring of gold dots near the top. If yours is black or brown immediately after forming, it is OE-infected.',
      'After the chrysalis forms, you can gently move the container. Keep it stable and upright. The adult butterfly needs room to drop and hang when it emerges — at least 4 inches below the chrysalis.',
    ],
    tip: 'The chrysalis darkens and becomes transparent in the 24 hours before eclosion (emergence). You can see the orange wings inside. This is your signal to stay nearby.',
  },
  {
    id: 'release',
    number: '05',
    heading: 'Emergence and release',
    color: 'var(--monarch-orange)',
    content: [
      'The butterfly emerges in a few minutes of active struggling, then hangs from the empty chrysalis for 2–4 hours while its wings inflate and dry. Do not handle it during this time.',
      'Release on a warm, calm day above 55°F, between 10am and 4pm. Release near nectar flowers — goldenrod, ironweed, native asters — so it can refuel immediately.',
      'If the butterfly emerged with crumpled wings, it likely fell before they dried. It cannot survive in the wild. Your options are limited: some rearers keep these individuals as educational animals; recovery is rare.',
      'Note the date, sex (males have a black dot on the lower hindwing), and your ZIP code. This data has conservation value when reported.',
    ],
    tip: 'You can tag your butterfly before release. Monarch Watch\'s tagging program provides numbered tags and data cards. A tagged Monarch recovered in Mexico can be traced back to your yard by date and location.',
  },
  {
    id: 'report',
    number: '06',
    heading: 'Report your sighting',
    color: 'var(--monarch-green)',
    content: [
      'Every monarch you raise and release is a data point in a population under pressure. Reporting it costs two minutes and adds to a dataset that researchers use to track the population.',
      'iNaturalist: create an observation when the butterfly is still in the chrysalis or just emerged. Photo-backed observations are research-grade and directly available to scientists.',
      'Journey North: the oldest Monarch citizen science network. Accepts sightings of adults, eggs, caterpillars, and chrysalises. Maps migration and breeding patterns across North America.',
      'Monarch Watch (if tagged): submit your tag code and release date at monarchwatch.org/tagging. If the butterfly is recovered — in Mexico or along the route — you will be notified.',
    ],
    tip: 'iNaturalist is the simplest starting point. One photo is enough. Your observation is visible to researchers within 24 hours of upload.',
  },
]

export default function RaiseAMonarch({ onNavigate }: RaiseAMonarchProps) {
  return (
    <>
      {/* Hero — bta-004: assume they care; offer a path */}
      <section className="hero">
        <div className="hero__eyebrow">Raise a Monarch</div>
        <h1>You found an egg.<br />Here's what to do.</h1>
        <p className="hero__lead">
          Raising a Monarch from egg to butterfly takes about three weeks and almost no equipment.
          It is also one of the most direct connections you can make to the migration.
          This guide covers every step — finding eggs, daily care, the chrysalis,
          release, and where to report what you found.
        </p>
      </section>

      <div className="page">

        {/* Why raise — practical, honest (lesson-234571eb) */}
        <section aria-labelledby="why-raise-heading">
          <h2 id="why-raise-heading">Why raise indoors at all?</h2>
          <p>
            Fewer than 5% of wild Monarch eggs survive to become adults.
            Predators, parasitoids, and weather account for most of the loss.
            In a rearing container, survival rates of 80–95% are common.
          </p>
          <p>
            Raising indoors is not required for conservation — planting milkweed is more
            important at scale. But it produces something milkweed alone cannot:
            a direct, irreversible experience of the lifecycle. People who have held a butterfly
            they watched emerge from a chrysalis they watched form on a caterpillar
            they fed for two weeks are changed by it in a way that reading about Monarchs is not.
          </p>
          <div className="callout callout--green" style={{ margin: '1.5rem 0' }}>
            <p style={{ margin: 0 }}>
              <strong>One caveat on scale:</strong> Releasing large numbers of captive-reared Monarchs
              is not recommended. The primary concern is OE (Ophryocystis elektroscirrha), a protozoan
              parasite that spreads when infected butterflies are released among wild populations.
              Raise a few each season; prioritize healthy milkweed habitat for the rest.
            </p>
          </div>
        </section>

        {/* The 6 steps */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading">Six steps, three weeks</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            From egg to release, the process takes 20–25 days and about 10 minutes of daily attention.
          </p>

          {steps.map((step) => (
            <div
              key={step.id}
              className="callout callout--orange"
              style={{ marginBottom: '1.5rem', borderLeft: `4px solid ${step.color}` }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: step.color,
                  minWidth: '2rem',
                }}>
                  {step.number}
                </span>
                <h3 style={{ margin: 0, color: 'var(--monarch-green)' }}>{step.heading}</h3>
              </div>
              <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem' }}>
                {step.content.map((line, j) => (
                  <li key={j} style={{ marginBottom: '0.5rem' }}>{line}</li>
                ))}
              </ul>
              <p style={{
                margin: 0,
                background: 'rgba(255,255,255,0.6)',
                padding: '0.5rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.9rem',
                color: 'var(--monarch-green)',
              }}>
                <strong>💡 Practical tip:</strong> {step.tip}
              </p>
            </div>
          ))}
        </section>

        {/* Troubleshooting — answer the real questions (lesson-234571eb) */}
        <section aria-labelledby="trouble-heading">
          <h2 id="trouble-heading">What can go wrong</h2>
          <p>
            Most failures have clear causes and are preventable once you know what to look for.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            {[
              {
                problem: 'Caterpillar stopped eating and won\'t move',
                answer: 'Probably molting. Each of the five instars begins with the caterpillar becoming still for 12–24 hours. Leave it alone. Remove it only if it develops a dark, sunken appearance after 48 hours.',
              },
              {
                problem: 'Black, watery caterpillar',
                answer: 'Bacterial infection (nuclear polyhedrosis virus or similar). Remove immediately and discard. Disinfect the container with diluted bleach (10:1 water to bleach) and rinse thoroughly before reusing.',
              },
              {
                problem: 'Chrysalis is black',
                answer: 'Either OE (if the discoloration appeared immediately after the chrysalis formed) or death from another cause. A chrysalis that starts jade and slowly darkens to transparent orange-black before eclosion is normal — those are the wings showing through.',
              },
              {
                problem: 'Butterfly emerged with crumpled wings',
                answer: 'It fell or was disturbed before wings dried. Recovery is rare. Do not release — it cannot migrate or survive long outside. If this happens consistently, check that the chrysalis has at least 4 inches of hanging space below it.',
              },
              {
                problem: 'Butterfly won\'t emerge after 15 days in chrysalis',
                answer: 'The chrysalis may be developing slowly in cool temperatures. If it remains opaque (not transparent) after 15 days at normal temperatures, it did not survive. A failed chrysalis will collapse, shrink, or turn uniformly black.',
              },
              {
                problem: 'Tiny yellow-white eggs or threadlike larvae on caterpillar',
                answer: 'Tachinid fly parasitoids. They are common on outdoor caterpillars. The fly larva will kill the caterpillar before or after it forms a chrysalis. There is no treatment — the outcome is fixed when the egg was laid. This is why early instars are safer to bring inside.',
              },
            ].map(({ problem, answer }) => (
              <div
                key={problem}
                style={{
                  padding: '0.875rem 1rem',
                  background: 'var(--surface, #f8f4ef)',
                  borderRadius: '6px',
                  borderLeft: '3px solid var(--monarch-orange)',
                }}
              >
                <p style={{ margin: '0 0 0.4rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {problem}
                </p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The numbers — lesson-024: hold both truths */}
        <section aria-labelledby="numbers-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="numbers-heading">The math behind it</h2>
          <p>
            In the wild, egg-to-adult survival is roughly 2–5%.
            In a clean rearing container with fresh milkweed, it commonly reaches 80–95%.
          </p>
          <p>
            A single generation of Monarchs takes 20–25 days from egg to adult.
            Three to four generations breed in North America each summer before the diapause
            generation migrates in August. More butterflies in the breeding season means
            a larger migratory generation — and a better chance of enough arriving in Mexico
            to sustain the overwintering population.
          </p>
          <p>
            Population surveys at the Mexican overwintering sites count butterflies in hectares
            of forest occupied. In 1996, Monarchs occupied 20.97 hectares. In the 2024–2025
            season, they occupied 4.01 hectares — a decline of about 80% over 30 years.
            <sup><a href="https://monarchwatch.org/blog/2025/03/04/monarch-population-status-2024-2025/" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          </p>
          <div className="callout callout--green">
            <p style={{ margin: 0 }}>
              <strong>The numbers matter:</strong> a yard with three milkweed plants can support
              20–40 caterpillars in a season. A neighborhood with 50 yards of milkweed
              can produce thousands of butterflies. The relay is built from exactly these
              small, specific contributions.
            </p>
          </div>
        </section>

        {/* Action panel */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Ready to start?</h2>
          <p>
            The first step is milkweed — if you don't have it growing, nothing else is possible.
            Native species are best: Common Milkweed, Swamp Milkweed, Butterfly Weed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
              Find Your Milkweed Species →
            </button>
            <button
              onClick={() => onNavigate('monarch-life')}
              style={{
                background: 'none',
                border: '2px solid var(--monarch-orange)',
                color: 'var(--monarch-orange)',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '0.95rem',
              }}
            >
              Learn the Life Cycle →
            </button>
          </div>
        </div>

        {/* Sources */}
        <section className="cite-list" aria-label="Sources">
          <p>
            [1] Monarch Watch.{' '}
            <a href="https://monarchwatch.org/blog/2025/03/04/monarch-population-status-2024-2025/" target="_blank" rel="noreferrer">
              Monarch Population Status 2024–2025.
            </a>{' '}
            March 2025. Accessed 2026-05-08.
          </p>
          <p>
            Rearing guidance: Monarch Lab, University of Minnesota.{' '}
            <a href="https://monarchlab.org/biology-and-research/rearing-monarchs" target="_blank" rel="noreferrer">
              Rearing Monarchs.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
          <p>
            OE parasite information: Monarch Health citizen science program.{' '}
            <a href="https://www.monarchparasites.org/" target="_blank" rel="noreferrer">
              monarchparasites.org.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
          <p>
            Tagging program: Monarch Watch.{' '}
            <a href="https://monarchwatch.org/tagging/" target="_blank" rel="noreferrer">
              monarchwatch.org/tagging.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
          <p>
            Sighting reporting: Journey North.{' '}
            <a href="https://journeynorth.org/monarchs" target="_blank" rel="noreferrer">
              journeynorth.org/monarchs.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
        </section>

      </div>
    </>
  )
}
