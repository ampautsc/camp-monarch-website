import type { Page } from '../App'

interface TalkingPointsProps {
  onNavigate: (page: Page) => void
}

export default function TalkingPoints({ onNavigate }: TalkingPointsProps) {
  return (
    <div className="page">
      <h1>Talk about it</h1>
      <p style={{ fontSize: '1.05rem', maxWidth: '660px', lineHeight: 1.7, marginBottom: '2rem' }}>
        Most people have never heard that monarch populations have fallen 80% since 1996. That's not
        apathy — it's an information gap. A 60-second conversation with a neighbor who has a sunny yard
        is often all it takes. Here's what's worth knowing before you have it.
      </p>

      {/* Key facts */}
      <section aria-labelledby="facts-heading">
        <h2 id="facts-heading" style={{ marginBottom: '1.25rem' }}>Key facts</h2>

        <div style={{ borderLeft: '3px solid var(--monarch-orange)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem' }}>The population has crashed, not declined.</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.65 }}>
            Since 1996, the eastern monarch overwintering population has fallen by more than 80%.<sup><a
              href="https://xerces.org/monarchs"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--monarch-orange)', textDecoration: 'none' }}
            >[1]</a></sup> Around 1 billion monarchs overwintered in Mexico's oyamel fir forests at the
            peak. The most recent counts put the population between 60 and 300 million, depending on the
            year. That's not a gradual trend — it's a collapse within one human generation.
          </p>
        </div>

        <div style={{ borderLeft: '3px solid var(--monarch-orange)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem' }}>They can only reproduce on milkweed.</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.65 }}>
            No other plant works. Monarch caterpillars eat nothing but milkweed leaves. When milkweed
            was cleared from agricultural fields and roadsides over the past 30 years — through herbicide
            use and changing farm practices — the breeding habitat collapsed along the entire migration
            corridor.<sup><a
              href="https://www.fs.usda.gov/wildflowers/pollinators/Monarch_Butterfly/habitat/index.shtml"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--monarch-orange)', textDecoration: 'none' }}
            >[2]</a></sup>
          </p>
        </div>

        <div style={{ borderLeft: '3px solid var(--monarch-orange)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem' }}>Most of the corridor runs through private land.</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.65 }}>
            Federal wildlife refuges and state parks protect only a fraction of the migration route.
            The breeding corridor runs through the Midwest and Great Plains — through farms, roadsides,
            and residential yards. Restoration at scale means ordinary people planting in ordinary yards.
          </p>
        </div>

        <div style={{ borderLeft: '3px solid var(--monarch-orange)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem' }}>Three plants is a meaningful contribution.</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.65 }}>
            Three milkweed plants in a sunny corner can support 20–30 caterpillars in a season.
            You don't need an acre. You need a spot that gets six hours of sun and a neighbor who
            knows what they're looking at when the eggs appear.
          </p>
        </div>
      </section>

      {/* Corridor argument */}
      <section aria-labelledby="corridor-heading" style={{ marginTop: '2rem' }}>
        <h2 id="corridor-heading" style={{ marginBottom: '0.75rem' }}>Why your neighbor's yard matters as much as yours</h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '660px' }}>
          A single milkweed patch is a stepping stone — useful, but not self-sufficient. When three or
          four neighbors plant within a few blocks of each other, the butterfly has a continuous corridor
          to move through: a connected string of habitat rather than isolated islands in a sea of lawn.
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '660px' }}>
          Habitat restoration works at neighborhood scale, not yard scale. Field research on native plant
          gardening has found there are likely thresholds — a minimum density of participating households
          before the ecosystem benefits appear for birds and insects.<sup><a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8360073/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--monarch-orange)', textDecoration: 'none' }}
          >[3]</a></sup> The conversation you have with the person next door is how that threshold gets crossed.
        </p>
      </section>

      {/* What to say */}
      <section aria-labelledby="howto-heading" style={{ marginTop: '2rem' }}>
        <h2 id="howto-heading" style={{ marginBottom: '0.75rem' }}>What to say</h2>
        <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>Not scripts — starting points. Use whatever fits the conversation.</p>

        <div className="witness-card">
          <p className="witness-card__quote">
            "Did you know monarch populations have dropped 80% since the 90s? I just found out. We
            planted milkweed last spring and saw caterpillars two weeks later."
          </p>
        </div>

        <div className="witness-card">
          <p className="witness-card__quote">
            "It's the only plant they can reproduce on. When it got cleared from farms, the migration
            started collapsing. Three plants in a sunny spot is enough to help."
          </p>
        </div>

        <div className="witness-card">
          <p className="witness-card__quote">
            "The migration goes right through here every fall. But butterflies need milkweed during
            breeding season — that's what keeps the population going. If you have a sunny spot,
            I can help you get started."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="next-heading" style={{ marginTop: '2.5rem' }}>
        <h2 id="next-heading" style={{ marginBottom: '0.75rem' }}>When they ask what to plant</h2>
        <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          Native milkweed species matched to your region, where to get them, and how to care for them.
        </p>
        <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
          Find the right milkweed →
        </button>
      </section>

      {/* Citations */}
      <section aria-label="Sources" style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          [1] Xerces Society. Monarch Butterfly Conservation.{' '}
          <a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            xerces.org/monarchs
          </a>. Accessed May 2026.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          [2] USDA Forest Service. Monarch Butterfly Habitat.{' '}
          <a href="https://www.fs.usda.gov/wildflowers/pollinators/Monarch_Butterfly/habitat/index.shtml" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            fs.usda.gov
          </a>. Accessed May 2026.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          [3] Niemiec R, Jones MS, Lischka S, Champine V. Efficacy-based and normative interventions for
          facilitating the diffusion of conservation behavior through social networks.{' '}
          <em>Conservation Biology</em>. 2021;35(4):1073–1085.{' '}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8360073/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            PMC8360073
          </a>.
        </p>
      </section>
    </div>
  )
}
