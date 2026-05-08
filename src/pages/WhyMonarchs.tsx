import type { Page } from '../App'

interface WhyMonarchsProps {
  onNavigate: (page: Page) => void
}

export default function WhyMonarchs({ onNavigate }: WhyMonarchsProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Why It Matters</div>
        {/* www-010: headline works out of context */}
        <h1>Monarchs are an indicator species.<br />Their decline is an early warning.</h1>
        {/* www-004: conclusion first */}
        <p className="hero__lead">
          When Monarchs disappear from a region, native milkweed is gone, flowering meadows are gone,
          and the web of insects that pollinates crops and wildflowers is fraying.
          Bringing Monarchs back means restoring that web — not just protecting one species.
        </p>
      </section>
      <div className="page">

      {/* www-007: specific numbers, named sources */}
      <section aria-labelledby="numbers-heading">
        <h2 id="numbers-heading">What the numbers say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem', margin: '1rem 0 1.5rem' }}>
          <div className="fact-card">
            <div className="fact-card__number">1B+</div>
            <div className="fact-card__label">Monarchs counted in 1996 (USFWS)</div>
          </div>
          <div className="fact-card">
            <div className="fact-card__number">60M</div>
            <div className="fact-card__label">Counted in 2024 — down 94%</div>
          </div>
          <div className="fact-card">
            <div className="fact-card__number">165M</div>
            <div className="fact-card__label">Acres of milkweed habitat lost since 1992 (USDA)</div>
          </div>
        </div>
        <p>
          Sources:{' '}
          <a href="https://www.fws.gov/species/monarch-butterfly-danaus-plexippus" target="_blank" rel="noreferrer">US Fish &amp; Wildlife Service, Monarch Butterfly</a>
          {' · '}
          <a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer">Monarch Joint Venture, Overwintering Population Monitoring</a>
          {' · '}
          <a href="https://monarchjointventure.org/mjvprograms/habitat/milkweed" target="_blank" rel="noreferrer">Monarch Joint Venture, Milkweed Habitat</a>
        </p>
      </section>

      {/* Normalization breaker — lesson-054: once people accept collapse as normal, change stops */}
      {/* Comparison encounter — lesson-055: abundance described sensorially triggers 'why not here?' */}
      <section aria-labelledby="abundance-heading">
        <h2 id="abundance-heading">What you may not know you have forgotten</h2>
        <p>
          If you grew up after the 1990s, you may never have seen Monarch abundance.
          The depleted landscape is all you have known.
          That is not normal — it is the result of 30 years of habitat loss, and it is reversible.
        </p>

        <div className="callout callout--orange">
          <h3 style={{ marginTop: 0 }}>What abundance looked like</h3>
          <p>
            In a yard with milkweed in a healthy corridor in the early 1990s,
            a September morning might mean stepping outside and counting 30 or 40 Monarchs
            moving south through your yard before breakfast.
            Not in a meadow reserve — in a suburban backyard.
            They moved in streams along fence lines, nectared on the late goldenrod,
            rested in the oaks overnight.
          </p>
          <p>
            Common Milkweed in bloom in July smells like vanilla mixed with cut grass.
            It hums.
            On a warm morning, a single plant in flower can host eight species of native bee
            working simultaneously — bumblebees, sweat bees, digger wasps, skippers.
            You hear it before you see it.
          </p>
          <p style={{ marginBottom: 0 }}>
            Most yards today have none of this. Not because it stopped being possible —
            because the milkweed was removed.
            The butterflies did not decide to stop coming.
            The food source was taken away.
          </p>
        </div>

        <p style={{ marginTop: '1.5rem' }}>
          The people who remember this abundance are still alive.
          Farmers in their 60s and 70s recall milkweed at every field edge.
          Older homeowners remember September mornings with dozens of Monarchs in passage.
          This is not ancient history — it is one human lifetime ago.
        </p>
        <p>
          <strong>The current state is the anomaly. The original baseline is the target.</strong>{' '}
          That target is achievable because the ecological knowledge is intact, the species still exists,
          and the milkweed can grow back within one season.
        </p>
      </section>

      {/* Individual story — www-011 dual audience, www-003 no marketese */}
      <section aria-labelledby="journey-heading">
        <h2 id="journey-heading">A Monarch's year, month by month</h2>
        <p>
          Monarchs living east of the Rockies are the same butterflies year to year — but not in the way we usually imagine.
          A single Monarch lives about six weeks in summer. It mates, lays eggs, and dies.
          But the generation that hatches in late August is different.
        </p>
        <p>
          This generation — called the <em>diapause generation</em> — does not reproduce until spring.
          Instead it stores fat, delays sexual maturity, and migrates 3,000 miles to the Sierra Madre mountains in Mexico.
          It overwinters there, clustered in fir forests so densely that tree branches bend.
          In February it begins the return journey — and dies somewhere in Texas or northern Mexico,
          having laid the eggs of the generation that will reach Illinois and Michigan in June.
        </p>
        <div className="callout callout--green">
          <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>How they navigate</h3>
          <p style={{ marginBottom: 0 }}>
            No individual Monarch completes the full round trip.
            The migration is carried by a relay of short-lived generations —
            each one following a navigational program encoded in their genome.
            Scientists still do not fully understand how they know where to go.
            They use the sun as a compass, correcting for time of day with an internal clock.
            They may also sense magnetic fields.
            The mountain they roost on has not changed in recorded history.
            What changes is whether there is milkweed along the route for them to reproduce on.
          </p>
        </div>
      </section>

      {/* Why it matters beyond Monarchs */}
      <section aria-labelledby="signal-heading">
        <h2 id="signal-heading">Beyond the butterfly: what Monarchs tell us</h2>
        <p>
          In 1962, Rachel Carson documented how pesticides moved through food chains —
          accumulating in fatty tissue, concentrating at each level, killing predators that had eaten contaminated prey.
          She called it biological magnification.
          The Monarch decline follows a similar chain: herbicide-tolerant crops → milkweed eliminated from farmland →
          Monarch reproduction collapses → insect-dependent birds decline.
        </p>
        <p>
          Monarchs are easy to count and easy to care about.
          That makes them a useful indicator — the canary in the agricultural coal mine.
          When Monarch numbers fall, it means the landscape is becoming less hospitable to all insect life,
          including the bees that pollinate 35% of the US food supply.
        </p>
        <ul>
          <li><a href="https://www.fs.usda.gov/wildflowers/pollinators/Monarch_Butterfly/index.shtml" target="_blank" rel="noreferrer"><strong>Milkweed supports 457 native insect species</strong></a> beyond Monarchs (USDA Forest Service, 2019).</li>
          <li><strong>Monarch habitat overlaps with key pollinator corridors</strong> across the Central Flyway.</li>
          <li><strong>Native plants in suburban yards</strong> can carry{' '}
            <a href="https://homegrownnationalpark.org" target="_blank" rel="noreferrer">10–50x more caterpillars</a>
            {' '}than ornamental plantings of the same area (Tallamy, 2020).</li>
        </ul>
      </section>

      {/* Action — low friction, specific ask */}
      <div className="action-panel">
        <h2 style={{ marginTop: 0 }}>The most useful thing you can plant</h2>
        <p>
          Milkweed is the only plant Monarchs can reproduce on.
          No other plant substitutes.
          A single Common Milkweed (<em>Asclepias syriaca</em>) in bloom can feed 40 caterpillars.
          Three plants in a sunny corner can support a full generation in one summer.
        </p>
        <button
          className="hero__cta"
          onClick={() => onNavigate('plant-milkweed')}
          style={{ marginTop: '0.5rem' }}
        >
          Find Your Milkweed Species →
        </button>
      </div>

    </div>
    </>
  )
}
