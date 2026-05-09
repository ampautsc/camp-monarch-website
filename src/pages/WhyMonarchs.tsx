import type { Page } from '../App'

interface WhyMonarchsProps {
  onNavigate: (page: Page) => void
}

export default function WhyMonarchs({ onNavigate }: WhyMonarchsProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Why It Matters</div>
        <h1>Monarchs are down 94%.<br />They are not alone.</h1>
        <p className="hero__lead">
          Since 1970, Earth's wildlife populations have declined 69% on average.
          Monarchs lost 94% of their eastern population in the same period.
          They are not a special case. They are a legible signal from a larger collapse
          that is happening too gradually for most people to see.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="numbers-heading">
          <h2 id="numbers-heading">The numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem', margin: '1rem 0 1.5rem' }}>
            <div className="fact-card">
              <div className="fact-card__number">69%</div>
              <div className="fact-card__label">Average wildlife decline since 1970 (WWF Living Planet Report)</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">94%</div>
              <div className="fact-card__label">Eastern monarch decline since 1996 (USFWS)</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">165M</div>
              <div className="fact-card__label">Acres of monarch habitat lost since 1992 (USDA)</div>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Sources:{' '}
            <a href="https://www.worldwildlife.org/pages/living-planet-report-2022" target="_blank" rel="noreferrer">WWF Living Planet Report 2022</a>
            {' · '}
            <a href="https://www.fws.gov/species/monarch-butterfly-danaus-plexippus" target="_blank" rel="noreferrer">US Fish & Wildlife Service</a>
            {' · '}
            <a href="https://monarchjointventure.org/mjvprograms/habitat/milkweed" target="_blank" rel="noreferrer">Monarch Joint Venture</a>
          </p>
        </section>

        <section aria-labelledby="why-signal-heading">
          <h2 id="why-signal-heading">Why monarchs are the right signal to watch</h2>
          <p>
            Monarchs are countable. They congregate in specific, findable places each winter.
            They depend on a single plant to reproduce. They are large enough to see and follow.
            That makes them one of the few species where we can measure decline precisely
            and connect it directly to specific causes.
          </p>
          <p>
            The cause is milkweed loss. Herbicide-tolerant crop varieties introduced in the late 1990s
            allowed broad field spraying that eliminated the milkweed growing at field edges for generations.
            Between 1999 and 2010, an estimated 850 million milkweed stems disappeared from the Midwest alone.
            Monarchs cannot reproduce without milkweed. The math is direct.
          </p>
          <p>
            Milkweed also supports{' '}
            <a href="https://www.fs.usda.gov/wildflowers/pollinators/Monarch_Butterfly/index.shtml" target="_blank" rel="noreferrer">
              457 other native insect species
            </a>{' '}
            beyond monarchs. The same habitat loss collapsing monarch numbers is reducing native bee populations,
            ground-nesting bird food supplies, and the pollination services that 35% of the US food supply depends on.
            Monarchs are easy to care about. That is why they are useful: as a proxy for everything harder to count.
          </p>
        </section>

        <section aria-labelledby="forgotten-heading">
          <h2 id="forgotten-heading">What you may not know you have forgotten</h2>
          <p>
            If you grew up after the 1990s, you may never have seen monarch abundance.
            The depleted landscape is all you have known. That is not normal.
            It is the result of 30 years of habitat loss, and it is reversible.
          </p>
          <div className="callout callout--orange">
            <h3 style={{ marginTop: 0 }}>What a healthy yard used to be</h3>
            <p>
              In the early 1990s, a suburban backyard with milkweed in a healthy corridor
              might see 30 or 40 monarchs moving south through a September morning.
              Not in a meadow reserve. In an ordinary yard.
              Common milkweed in July smells like vanilla and cut grass. It hums.
              A single plant in bloom can carry eight native bee species working simultaneously.
            </p>
            <p style={{ marginBottom: 0 }}>
              Most yards today have none of this. Not because it stopped being possible.
              Because the milkweed was removed. The farmers who remember field-edge milkweed are still alive.
              Older homeowners remember September mornings with dozens of monarchs.
              <strong> This is one human lifetime ago.</strong>
            </p>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <strong>The current state is the anomaly.</strong>{' '}
            The original baseline is the target, and it is achievable: the ecological knowledge is intact,
            the species still exists, and milkweed grows back in one season.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that make a difference</h2>
          <ol className="step-list">
            <li>
              <strong>Plant milkweed.</strong>{' '}
              It is the only plant monarchs can reproduce on. One common milkweed plant can feed 40 caterpillars.
              Three plants in a sunny corner is a nursery.
            </li>
            <li>
              <strong>Log what you see.</strong>{' '}
              Every monarch observation on iNaturalist becomes open data that researchers use
              to track population recovery. Sixty seconds.
            </li>
            <li>
              <strong>Tell one neighbor.</strong>{' '}
              Habitat is a corridor, not a single yard. One conversation in May can become
              two milkweed patches by September.
            </li>
          </ol>
          <button
            className="hero__cta"
            onClick={() => onNavigate('plant-milkweed')}
            style={{ marginTop: '0.5rem' }}
          >
            Find Your Milkweed Species
          </button>
        </div>
      </div>
    </>
  )
}
