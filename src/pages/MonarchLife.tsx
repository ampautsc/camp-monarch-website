import type { Page } from '../App'

interface MonarchLifeProps {
  onNavigate: (page: Page) => void
}

// Life stage data — mon-010: lifecycle facts
const stages = [
  {
    id: 'egg',
    emoji: '🥚',
    label: 'The Egg',
    duration: '3–5 days',
    what: 'Smaller than a pencil point',
    detail: [
      'A female Monarch lays each egg individually — usually on the underside of a milkweed leaf.',
      'She may lay 300–500 eggs over the course of her adult life, but she places each one alone.',
      'The egg is ribbed, pale yellow-green, no larger than the tip of a pin.',
      'Inside, a caterpillar is already forming. In three to five days, it will hatch by eating through its own eggshell.',
    ],
    look: 'Look on the underside of milkweed leaves — the smooth, inner surface. Pale ribbed dots, each alone.',
    source: null,
  },
  {
    id: 'larva',
    emoji: '🐛',
    label: 'The Caterpillar',
    duration: '9–14 days',
    what: 'Grows 2,000× its original mass',
    detail: [
      'A newly hatched Monarch caterpillar is barely visible — a sliver of green with a black head.',
      'It has one job: eat. It will increase its body mass more than 2,000 times in the next two weeks.',
      'It sheds its skin five times as it grows, each stage called an instar. By the fifth instar, it is an inch and a half long: bold yellow, black, and white bands.',
      'Milkweed contains cardiac glycosides — compounds toxic to most animals. The caterpillar doesn\'t detoxify them. It stores them, becoming toxic itself. That\'s why birds learn to leave it alone. The warning colors are honest.',
    ],
    look: 'Fifth-instar caterpillars (the big ones) often feed near the top of the plant. Look for chewed leaf edges first, then search the undersides of nearby leaves.',
    source: null,
  },
  {
    id: 'chrysalis',
    emoji: '💚',
    label: 'The Chrysalis',
    duration: '8–15 days',
    what: 'Complete dissolution and reconstruction',
    detail: [
      'The caterpillar finds a hard surface — a fence post, a leaf stem, the underside of a porch railing — and spins a silk pad.',
      'It hangs from it in a J-shape for 12 to 24 hours. Then it sheds its skin one final time, revealing the chrysalis underneath.',
      'The chrysalis is jade green with a row of gold dots around the top edge that catch the light like a crown.',
      'Inside, most of the caterpillar\'s body breaks down completely. The organs dissolve into a cellular soup. New structures — compound eyes, wings, legs, a proboscis for drinking nectar — form from that material.',
      'It is not sleep. It is more radical than that. A caterpillar does not become a butterfly the way a child becomes an adult. It becomes something structurally different from what it was.',
    ],
    look: 'Look on rough surfaces in sheltered spots — fence rails, the eaves of a shed, thick plant stems. The chrysalis is easy to miss; it blends with vegetation and hangs still.',
    source: null,
  },
  {
    id: 'adult',
    emoji: '🦋',
    label: 'The Adult',
    duration: '2–5 weeks (or 9 months)',
    what: 'Two different lives in the same body',
    detail: [
      'Most Monarch adults live two to five weeks. They emerge, mate, lay eggs, and die — one link in a chain of four or five generations each summer.',
      'But the generation that hatches in late August is different.',
      'It enters a state called reproductive diapause. Its gonads do not develop. It stores fat instead of reproducing. And it migrates.',
      'This generation — the diapause generation — will live up to nine months. It will fly 3,000 miles to a mountain it has never seen, overwinter there in clusters so dense the trees bend, and then make the return journey to Texas before dying.',
      'No individual lives long enough to complete the full round trip. The southbound butterfly that passes your yard in September will die in northern Mexico in February, somewhere along the way back.',
    ],
    look: 'Watch for Monarchs that are fueling up rather than passing through — feeding steadily on nectar flowers for twenty minutes or more. Those are the migratory generation, storing fat for 3,000 miles.',
    source: null,
  },
]

export default function MonarchLife({ onNavigate }: MonarchLifeProps) {
  return (
    <>
      {/* Hero — lesson-006: name the living world first, before naming the loss */}
      <section className="hero">
        <div className="hero__eyebrow">The Monarch's Life</div>
        <h1>One caterpillar.<br />2,000 times its weight in two weeks.</h1>
        <p className="hero__lead">
          A Monarch egg is smaller than a pencil point. The butterfly that hatches from it
          may live two weeks — or nine months. It may die in your backyard, or on a mountain in Mexico
          it navigated to without ever having seen a map. The biology is extraordinary.
          So is what we are losing.
        </p>
      </section>

      <div className="page">

        {/* Life stages — vivid and specific (seton-004, lesson-025) */}
        <section aria-labelledby="stages-heading">
          <h2 id="stages-heading">Four stages, one ancient cycle</h2>
          <p>
            Complete metamorphosis — egg, larva, pupa, adult — is one of the more improbable
            inventions of evolution. What happens inside a Monarch chrysalis is not gradual change.
            It is something closer to dissolution and reconstruction. The animal that emerges
            is not the animal that entered.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Here is the cycle, stage by stage, with what to look for if you have milkweed.
          </p>

          {stages.map((stage) => (
            <div key={stage.id} className="callout callout--orange" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{stage.emoji}</span>
                <h3 style={{ margin: 0, color: 'var(--monarch-green)' }}>{stage.label}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  {stage.duration} · <em>{stage.what}</em>
                </span>
              </div>
              <ul style={{ margin: '0.5rem 0 1rem', paddingLeft: '1.25rem' }}>
                {stage.detail.map((line, j) => (
                  <li key={j} style={{ marginBottom: '0.4rem' }}>{line}</li>
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
                <strong>What to look for:</strong> {stage.look}
              </p>
            </div>
          ))}
        </section>

        {/* The relay — emotional center; lesson-035: the "Lobo scene" */}
        <section aria-labelledby="relay-heading">
          <h2 id="relay-heading">The relay no individual completes</h2>
          <p>
            Here is the part that stops people when they hear it for the first time.
          </p>
          <p>
            The butterfly that overwinters in Mexico is not the butterfly that bred in Illinois in June.
            The migration is a relay — carried forward by a chain of short-lived generations,
            each one dying after laying the eggs of the next leg.
          </p>
          <div className="callout callout--green" style={{ margin: '1.5rem 0' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>The four-generation relay</h3>
            <ol style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Generation 1 (March–May, Texas to Kansas):</strong>{' '}
                The overwintering generation leaves Mexico in February, lays eggs on milkweed in Texas and Oklahoma,
                and dies. The people who plant milkweed in those states make this generation's reproduction possible.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Generation 2 (May–June, Midwest arrival):</strong>{' '}
                Born in Kansas and Oklahoma, this generation flies north to Illinois, Indiana, Ohio.
                It lives about six weeks and dies after laying eggs.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Generations 3–4 (June–August, northern breeding):</strong>{' '}
                Multiple generations breed in the northern US and southern Canada.
                The more milkweed here, the larger the migratory generation will be.
              </li>
              <li>
                <strong>The diapause generation (August–March):</strong>{' '}
                The generation that hatches in late August does not reproduce.
                It stores fat, delays sexual maturity, and migrates 3,000 miles to Mexico.
                It will live nine months — far longer than any of its relatives.
                It will die in Texas or northern Mexico in February, having laid the eggs
                that will start the relay again.
              </li>
            </ol>
          </div>
          <p>
            No individual Monarch completes the round trip.
            The migration is not a single journey — it is a story carried forward
            by one generation after another, each one dependent on the milkweed available
            at each stop along the route.
          </p>
          <p>
            <strong>Your yard is one of those stops.</strong>
          </p>
        </section>

        {/* Tagging — the "Lobo scene": the specific moment of connection */}
        {/* lesson-035: find the specific individual story that creates the ache */}
        <section aria-labelledby="tag-heading">
          <h2 id="tag-heading">The butterfly from your yard, tracked to Mexico</h2>
          <p>
            Since 1992, Monarch Watch has run a citizen science tagging program.
            Participants catch Monarchs in late summer, apply a small adhesive tag
            to the forewing, record the tag ID, and release them.
          </p>
          <p>
            When a tagged Monarch is recovered — by a research team at the overwintering sites
            in Mexico, or found along the route by another volunteer — the sighting is logged.
            The data links a specific butterfly to a specific location on a specific date,
            then to wherever it traveled next.
          </p>
          <div className="callout callout--orange" style={{ margin: '1.5rem 0' }}>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.7 }}>
              "A tagged Monarch recovered at the overwintering sites in Michoacán, Mexico, 
              was originally tagged in Lawrence, Kansas — 1,627 miles away. 
              It was recovered 56 days after tagging."
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Monarch Watch tagging database. Over 1.4 million Monarchs tagged since 1992.{' '}
              <a href="https://monarchwatch.org/tagging/" target="_blank" rel="noreferrer">monarchwatch.org/tagging</a>
            </p>
          </div>
          <p>
            You can see a Monarch leave your yard and — through the tagging network — 
            know that it arrived. That connection is not metaphorical.
            It is a specific butterfly, with a tag, traveling a real route.
          </p>
          <p>
            The milkweed in your yard made this possible. The caterpillar that pupated on your fence
            became the butterfly that flew past your window in September and kept going.
          </p>
        </section>

        {/* What we are losing — lesson-006: name the living world first, then name the loss */}
        <section aria-labelledby="loss-heading">
          <h2 id="loss-heading">What we stand to lose</h2>
          <p>
            In 1996, approximately 1 billion Monarchs made the migration to Mexico.
            In 2024, the count was 60 million.
          </p>
          <p>
            The difference is not a mystery. Milkweed habitat in the agricultural Midwest has collapsed —
            165 million acres lost since 1992, primarily due to herbicide-tolerant crops
            that eliminate milkweed from farmland edges where it once grew in abundance.
            <sup><a href="https://monarchjointventure.org/mjvprograms/habitat/milkweed" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          </p>
          <p>
            No milkweed means no eggs. No eggs means no caterpillars.
            No caterpillars means no migratory generation.
            The relay requires every link. Remove enough milkweed
            from the breeding corridor and the chain breaks.
          </p>
          <div className="callout callout--green">
            <p style={{ marginBottom: 0 }}>
              <strong>The math is not abstract:</strong> one Common Milkweed (<em>Asclepias syriaca</em>) 
              in bloom can support 20–40 caterpillars in a single season.
              Three plants in a sunny corner represents a meaningful contribution to the relay.
              The caterpillar that hatches on your milkweed may become the butterfly
              that reaches Mexico.
            </p>
          </div>
        </section>

        {/* Action — specific, low friction (bta-004) */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Add your yard to the relay</h2>
          <p>
            Milkweed is the only plant Monarchs can reproduce on.
            Native species — Common Milkweed, Butterfly Weed, Swamp Milkweed —
            grow readily from plugs and persist for years.
            The first plant you put in the ground is the hardest.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              className="hero__cta"
              onClick={() => onNavigate('plant-milkweed')}
            >
              Find Your Milkweed Species →
            </button>
            <button
              onClick={() => onNavigate('take-action')}
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
              Take Action This Week →
            </button>
          </div>
        </div>

        {/* Sources */}
        <section className="cite-list" aria-label="Sources">
          <p>
            [1] Monarch Joint Venture.{' '}
            <a href="https://monarchjointventure.org/mjvprograms/habitat/milkweed" target="_blank" rel="noreferrer">
              Milkweed Habitat.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
          <p>
            Lifecycle data: University of Minnesota Monarch Lab.{' '}
            <a href="https://monarchlab.org/biology-and-research/biology-and-natural-history/breeding-biology-life-cycle/life-cycle" target="_blank" rel="noreferrer">
              Monarch Life Cycle.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
          <p>
            Tagging data: Monarch Watch.{' '}
            <a href="https://monarchwatch.org/tagging/" target="_blank" rel="noreferrer">
              Tagging Program.
            </a>{' '}
            Accessed 2026-05-08.
          </p>
        </section>

      </div>
    </>
  )
}
