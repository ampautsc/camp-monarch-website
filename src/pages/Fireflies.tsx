import type { Page } from '../App'

interface FirefliesProps {
  onNavigate: (page: Page) => void
}

// ffl-008: five homeowner actions that directly support firefly populations
const actions = [
  {
    id: 'wild-habitat',
    emoji: '🌿',
    label: 'Provide wild habitat',
    summary: 'A corner of leaf litter, tall grass, and native plants',
    detail: [
      'Firefly larvae live in the soil and leaf litter for one to two years before emerging as adults. They need soft, moist ground with organic matter — exactly what a naturalized corner of yard provides.',
      'Larvae are predators: they hunt earthworms, slugs, and snails in the soil. Native plants support the soil biology that keeps this food web intact.',
      'Even a 4×6 foot patch of naturalized ground — with native grasses, wildflowers, and leaf accumulation — is meaningful habitat. You do not need acreage.',
    ],
  },
  {
    id: 'leave-the-leaves',
    emoji: '🍂',
    label: 'Leave the leaves',
    summary: 'The most counterintuitive and most impactful action',
    detail: [
      'Firefly larvae and pupae overwinter in the leaf litter beneath trees and shrubs. When you bag and remove fallen leaves in autumn, you are removing the overwintering habitat of the next generation.',
      'Leave a layer of leaves in garden beds and naturalized corners through the winter. Rake paths and lawn in spring if needed — but let the beds sit.',
      'The payoff is direct: fireflies that pupated in your leaves emerge as adults in your yard the following summer. They are likely to breed there too.',
    ],
  },
  {
    id: 'lights-out',
    emoji: '🌑',
    label: 'Turn off outdoor lights at night',
    summary: 'Light pollution disrupts the flash dialogue that is firefly mating',
    detail: [
      'Fireflies communicate entirely through bioluminescent flash patterns. Males flash a species-specific sequence while flying; females perched in vegetation respond. They find each other by this light-language.',
      'Ambient light — porch lights, landscape lighting, streetlights — drowns out the signals. Females cannot distinguish a male\'s flash against a lit background. Mating fails.',
      'Turn off porch and landscape lights from dusk to midnight in summer, especially June and July when fireflies peak. Motion sensors are better than constant lights. Warm amber bulbs (2200K) are far less disruptive than cool white LEDs.',
    ],
  },
  {
    id: 'no-pesticides',
    emoji: '🚫',
    label: 'Eliminate pesticides',
    summary: 'Larvae live in the soil — insecticides and herbicides both harm them',
    detail: [
      'Firefly larvae spend one to two years hunting in the soil before they ever flash a single light. They are directly exposed to anything applied to your lawn or garden: insecticides, fungicides, and herbicides that kill the earthworms and snails they depend on.',
      'Even "targeted" insecticides like mosquito spray services are broad-spectrum in practice — they kill firefly adults during peak mating season.',
      'Removing pesticides entirely is the single most effective change a homeowner can make for fireflies — and for the broader web of soil life, pollinators, and birds that depend on insects.',
    ],
  },
  {
    id: 'mow-less',
    emoji: '✂️',
    label: 'Mow less and less often',
    summary: 'Reduce lawn; raise your mowing height',
    detail: [
      'Traditional lawn management — frequent mowing, low cut — is hostile to fireflies at every stage. Adults need tall vegetation to perch and signal. Larvae need undisturbed soil and litter.',
      'Raise your mowing height to four inches or more. Mow less frequently — every two to three weeks instead of weekly. Let sections of grass go unmowed through the summer.',
      'Replacing lawn with native groundcovers, wildflowers, or shrub beds is the deeper change. Every square foot of lawn converted to native habitat reduces pesticide and fertilizer use, increases soil biology, and provides cover for fireflies.',
    ],
  },
]

export default function Fireflies({ onNavigate }: FirefliesProps) {
  return (
    <>
      {/* Hero — bta-008: art before action; evoke the felt experience first */}
      <section className="hero">
        <div className="hero__eyebrow">Fireflies in Your Yard</div>
        <h1>They are trying to find each other<br />in the dark.</h1>
        <p className="hero__lead">
          On a June night, a male firefly rises from the grass and traces a slow J in the air,
          flashing once every six seconds. Somewhere in the shrubs, a female watches.
          If she likes what she sees, she flashes back — exactly two seconds later.
          He navigates toward her light. They mate. She lays her eggs in the soil.
          Her larvae will live underground for two years, hunting earthworms in the dark,
          before they ever produce a single flash of their own.
        </p>
        <p className="hero__lead">
          Firefly populations have declined sharply across North America.
          The causes are well understood. The solutions begin in your yard.
        </p>
      </section>

      <div className="page">

        {/* Biology — lesson-029: specificity is a moral act */}
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The flash is a conversation</h2>
          <p>
            There are roughly 170 firefly species in North America. The most common in eastern yards
            is <em>Photinus pyralis</em> — the Big Dipper Firefly, named for the J-shaped arc
            males trace while flashing. Its flash is a warm yellow-green, about 0.3 seconds long,
            repeated every 5.5 seconds. The female responds from her perch with a 0.5-second flash,
            2.1 seconds after the male's signal.
          </p>
          <p>
            This timing is the key. Each species has its own flash interval, duration, and response
            delay — a private frequency in the visible spectrum. Multiple firefly species can occupy
            the same meadow on the same night without interference, each couple searching for
            their own signal in a crowd of others.
          </p>
          <div className="callout callout--orange" style={{ margin: '1.5rem 0' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>How bioluminescence works</h3>
            <p style={{ marginBottom: 0 }}>
              The light organ in a firefly's abdomen contains luciferin, a compound that reacts
              with oxygen in the presence of the enzyme luciferase to produce light — cold light,
              with almost no heat loss. The firefly controls the flash by regulating oxygen flow
              to the light organ. The result is the most efficient light source known in biology:
              nearly 100% of the energy becomes light. For comparison, an incandescent bulb
              converts about 5% of its energy to visible light and the rest to heat.
            </p>
          </div>
          <p>
            The larvae glow too — dimly, in the soil — which is why they are called glowworms.
            Biologists believe the larval glow is a warning: it signals to predators that the larva
            is toxic. Fireflies, like Monarch caterpillars, advertise their unpalatability honestly.
          </p>
        </section>

        {/* Decline — lesson-022: the earth is given for usufruct alone */}
        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">What is happening to them</h2>
          <p>
            A 2020 global review of firefly populations found that habitat loss, light pollution,
            and pesticide use were the three leading threats — in that order — across every
            region studied.
            <sup><a href="https://resjournals.onlinelibrary.wiley.com/doi/10.1111/icad.12407" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          </p>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Habitat loss</h3>
            <p style={{ marginBottom: 0 }}>
              Wetlands, meadows, and forest edges — the moist, organic habitats where fireflies
              breed — have been drained, mowed, or developed across most of their range.
              Leaf litter removal (bagged and discarded each autumn) eliminates the overwintering
              habitat of larvae that would have emerged as adults the following summer.
              Lawn monoculture replaces the tall grass and wildflower edges where adults perch and signal.
            </p>
          </div>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Light pollution</h3>
            <p style={{ marginBottom: 0 }}>
              The flash conversation that fireflies depend on for reproduction is fragile.
              Ambient light — from porches, streetlights, and landscape lighting —
              makes it difficult for females to detect male flashes against the background glow.
              Mating rates drop. Over time, local populations decline.
              Astronomers measure sky brightness in magnitudes per square arcsecond.
              The threshold that disrupts firefly mating is far lower than what most people
              would consider "bright."
            </p>
          </div>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Pesticide use</h3>
            <p style={{ marginBottom: 0 }}>
              Firefly larvae spend one to two years in the soil, hunting earthworms and snails.
              They are directly exposed to insecticides, fungicides, and herbicides applied to lawns
              and gardens. Mosquito spray services — widely marketed as targeted — are broad-spectrum
              in practice and applied during the peak of firefly mating season.
            </p>
          </div>

          <p>
            These are not abstract trends. The people who grew up watching fireflies in a particular
            field or yard often report that the lights are fewer now, or gone.
            That loss is real, and it is documented.
          </p>
        </section>

        {/* Fellow mortals — lesson-027 */}
        <section aria-labelledby="mortals-heading">
          <h2 id="mortals-heading">A small light, a whole world</h2>
          <p>
            A firefly lives most of its life underground, in the dark, as a larva.
            The weeks of summer when it flashes — the weeks we notice it — are a small fraction
            of its total life. It surfaces into adulthood to do one thing: find another firefly,
            in the dark, using light.
          </p>
          <p>
            It does not need our notice to matter. But it benefits from our attention.
            The yard where fireflies still gather — where the lights go off after dark,
            where the leaf litter stays, where the grass grows a little long at the edges —
            is a yard that is working, in the ecological sense.
            Fireflies are an indicator species: their presence signals a soil and plant community
            that is functioning. Their absence signals the opposite.
          </p>
          <p>
            They are, as Muir would have said, fellow mortals — enjoying their own version
            of the summer night. They are not here for us to watch. But they will let us watch,
            if we make room.
          </p>
        </section>

        {/* Five actions — ffl-008: canonical homeowner checklist */}
        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">Five actions that directly support firefly populations</h2>
          <p>
            These five actions address the three leading causes of firefly decline —
            habitat loss, light pollution, and pesticide use — at the scale of a single yard.
            They require no expertise and no large investment. They require changing what you do
            in and around your yard.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            They compound: each change makes the next more effective.
            A yard with wild habitat, unraked leaves, no pesticides, low mowing, and dark nights
            is a different ecosystem than the one it was replacing.
          </p>

          {actions.map((action) => (
            <div key={action.id} className="callout callout--orange" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{action.emoji}</span>
                <h3 style={{ margin: 0, color: 'var(--monarch-green)' }}>{action.label}</h3>
              </div>
              <p style={{ margin: '0 0 0.75rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {action.summary}
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {action.detail.map((line, j) => (
                  <li key={j} style={{ marginBottom: '0.4rem' }}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Connection to monarchs — man-003: co-workers with nature */}
        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The same yard that helps monarchs helps fireflies</h2>
          <p>
            The actions that support firefly populations are the same actions that support
            Monarch butterflies, native bees, and most of the other species that have been
            disappearing from residential landscapes.
          </p>
          <p>
            Native plants over lawn: better habitat for firefly larvae,
            better habitat for Monarch caterpillars, better habitat for native bees.
            No pesticides: removes the direct threat to soil insects, eliminates the compounds
            that bioaccumulate through the food chain. Reduced mowing: more cover for adults,
            more native plant growth, more complexity in the yard's ecology.
          </p>
          <div className="callout callout--green">
            <p style={{ marginBottom: 0 }}>
              <strong>You are not managing a lawn.</strong>{' '}
              You are deciding what kind of ecosystem your land supports.
              The choice to leave the leaves, turn off the lights, and let the edges grow
              is a choice to be, as Marsh put it, a co-worker with nature in reconstruction —
              not a further agent of disturbance.
            </p>
          </div>
        </section>

        {/* CTA — bta-004: give a visible path */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Start this summer</h2>
          <p>
            The best time to start is now. Leave the leaves this autumn.
            Turn off the porch light this June. Let one corner go unmowed.
            You may not see a change this year. But fireflies that hatch from larvae overwintering
            in your yard next spring will be flying by July.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              className="hero__cta"
              onClick={() => onNavigate('take-action')}
            >
              Take Action This Week →
            </button>
            <button
              onClick={() => onNavigate('log-a-sighting')}
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
              Log a Firefly Sighting →
            </button>
          </div>
        </div>

        {/* Sources */}
        <section className="cite-list" aria-label="Sources">
          <p>
            [1] Owens, A.C.S., et al. (2020). Light pollution is a driver of insect declines.{' '}
            <em>Biological Conservation</em>, 241.{' '}
            <a href="https://resjournals.onlinelibrary.wiley.com/doi/10.1111/icad.12407" target="_blank" rel="noreferrer">
              Firefly research: threats and opportunities.
            </a>{' '}
            Accessed 2026-05-09.
          </p>
          <p>
            Firefly action checklist: Xerces Society.{' '}
            <a href="https://xerces.org/fireflies" target="_blank" rel="noreferrer">
              Firefly Conservation.
            </a>{' '}
            Accessed 2026-05-09.
          </p>
          <p>
            Bioluminescence biology: Sara Lewis,{' '}
            <em>Silent Sparks: The Wondrous World of Fireflies</em> (Princeton University Press, 2016).
          </p>
          <p>
            <em>Photinus pyralis</em> flash timing: Faust, L.F. (2017).{' '}
            <em>Fireflies, Glow-worms, and Lightning Bugs: Identification and Natural History of the Fireflies of Eastern North America</em>.
            University of Georgia Press.
          </p>
        </section>

      </div>
    </>
  )
}
