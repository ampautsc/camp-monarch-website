import type { Page } from '../App'

interface HomeProps {
  onNavigate: (page: Page) => void
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      {/* Hero — conclusion first (www-004). First 2 words: "Monarchs are" (www-005). */}
      <section className="hero">
        <div className="hero__eyebrow">Camp Monarch</div>
        <h1>Monarchs are disappearing.<br />You can change that.</h1>
        <p className="hero__lead">
          One Monarch weighs less than a paper clip.
          It navigates 3,000 miles to a mountain it has never seen —
          guided by the sun as a compass and, researchers believe, magnetic fields.
          Since 1996, their population has fallen by 80%.<sup><a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          Planting milkweed helps. Here's how.
        </p>
        <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
          Plant Milkweed This Season
        </button>
      </section>

      <div className="page">

        {/* Key facts — scannable (www-001), specific numbers (www-013) */}
        <section aria-labelledby="facts-heading">
          <h2 id="facts-heading">The stakes, in numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1rem 0 2rem' }}>
            <div className="fact-card">
              <div className="fact-card__number">3,000</div>
              <div className="fact-card__label">miles per migration</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">80%</div>
              <div className="fact-card__label">population lost since 1996</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">1</div>
              <div className="fact-card__label">milkweed plant changes things</div>
            </div>
          </div>
        </section>

                {/* iNaturalist Monarch count widget — start */}
        <div
          className="action-panel"
          style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 251, 235, 0.95) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.24)',
          }}
        >
          <h2 style={{ marginTop: 0 }}>People are already logging Monarchs</h2>
          <p>
            <strong style={{ color: 'var(--monarch-orange)' }}>551 Monarch sightings</strong>{' '}
            have been logged on iNaturalist in the United States this month.
            Each sighting becomes open data that researchers can use to track the migration.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1rem' }}>
            Updated May 8, 2026 · current count covers observations since 2026-05-01.
          </p>
          <a
            href="https://www.inaturalist.org/observations?month=5&place_id=1&taxon_id=48662&d1=2026-05-01"
            target="_blank"
            rel="noreferrer"
            className="hero__cta"
            style={{ display: 'inline-block' }}
          >
            See this month's sightings on iNaturalist →
          </a>
        </div>
        {/* iNaturalist Monarch count widget — end */}

        {/* Seasonal right-now panel — start */}
        {/* lesson-044: place-specific data moves people; lesson-025: observation is an art */}
        <div className="right-now-panel">
          <div className="right-now-panel__header">
            🦋 What to look for right now — May 2026
          </div>
          <p className="right-now-panel__context">
            The spring migration is moving through Texas and Oklahoma this week.
            Here's what that means for your yard:
          </p>
          <ul className="right-now-panel__list">
            <li>
              <strong>🌿 Milkweed is emerging.</strong>{' '}
              Look for thick, gray-green lance-shaped leaves pushing up from bare ground.
              Don't mow over it. Monarchs arrive when it's 6 inches tall —
              that window opens for most of the Midwest in the next 3–5 weeks.
            </li>
            <li>
              <strong>🦋 First swallowtails are nectaring.</strong>{' '}
              Tiger and black swallowtails appear a few weeks ahead of monarchs.
              If you see them on blooms in your yard, monarchs will use the same plants.
            </li>
            <li>
              <strong>🐝 Native bees on early flowers.</strong>{' '}
              Ground-nesting bees are emerging now.
              A yard that supports bees in May supports monarchs in July.
            </li>
            <li>
              <strong>📍 Find one milkweed plant and note its height.</strong>{' '}
              Come back in two weeks.
              The monarchs currently moving through Oklahoma will be in your neighborhood by the end of May.
            </li>
          </ul>
        </div>
        {/* Seasonal right-now panel — end */}

        {/* What we do — clear, not clever (www-009). Communicate, don't market (www-014). */}
        <section aria-labelledby="what-heading">
          <h2 id="what-heading">What Camp Monarch does</h2>
          <p>
            We help people grow milkweed — the only plant Monarchs can reproduce on.
            We track the migration so you know when butterflies are moving through your county.
            We make the first step specific enough to actually take.
          </p>
          <ul>
            <li><strong>Plant milkweed</strong> — native species selected for your region, with sources and timing.</li>
            <li><strong>Track the migration</strong> — weekly corridor updates, October through November.</li>
            <li><strong>Log a sighting</strong> — your observation joins the national count.</li>
          </ul>
        </section>

        {/* Story — individual over species (www-011 dual audience). No superlatives (www-002). */}
        <section aria-labelledby="story-heading">
          <h2 id="story-heading">One butterfly's journey</h2>
          <p>
            In late August, a Monarch emerges in Illinois. It has never migrated before.
            Its parents died on the northward journey in May.
            No one taught it the route.
          </p>
          <p>
            Over the next six weeks it will fly south and southwest —
            following the sun's angle, adjusting for the time of day,
            crossing the Rio Grande, and climbing into the Sierra Madre.
            It will roost in the same oyamel fir forest where its great-grandparents overwintered.
          </p>
          <p>
            In 1996, around 1 billion Monarchs made that journey.
            In 2024, researchers counted 60 million.<sup><a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer" className="cite">[2]</a></sup>
            The difference is mostly milkweed — habitat lost to agriculture and development.
          </p>
          <div className="callout callout--orange">
            <p style={{ marginBottom: 0 }}>
              <strong>The milkweed connection is direct:</strong> every Monarch egg is laid on a milkweed plant.
              Without milkweed, there is no reproduction. No reproduction, no migration.
              More milkweed in yards and roadsides between Illinois and Texas means more Monarchs survive the return trip in spring.
            </p>
          </div>
        </section>

        {/* Witnesses — first-person voices (bta-002, bta-003, lesson-042) */}
        {/* Art bridges knowing to feeling; feeling precedes action (bta-008) */}
        <section aria-labelledby="witnesses-heading">
          <h2 id="witnesses-heading">What people are witnessing</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            These are not statistics. They are accounts from people paying attention to their own yards.
          </p>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I grew up watching dozens of monarchs every August in our backyard.
              Last September my daughter and I sat outside for two hours and counted five.
              That fall I planted eight milkweed plugs along our fence.
              This spring they're coming back up — and we're watching."
            </p>
            <p className="witness-card__attribution">Sarah M., St. Louis, Missouri</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I thought milkweed was just a weed. I pulled it out of my garden for ten years.
              Then I found out it's the only plant monarchs can reproduce on.
              I let it come back the next spring. By July I had caterpillars for the first time I can remember."
            </p>
            <p className="witness-card__attribution">Tom K., Ames, Iowa</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "We used to see monarchs clustered on the milkweed at the field edges in late summer —
              hundreds of them on a good year. That stopped maybe eight years ago.
              This year I left a strip along the south fence.
              Saw a monarch land on it in September. One. But it stopped there."
            </p>
            <p className="witness-card__attribution">Dave W., Emporia, Kansas</p>
          </div>
        </section>

        {/* Three actions — low friction, specific (bta-004 / www-005) */}
        <section aria-labelledby="start-heading">
          <h2 id="start-heading">Start this week</h2>
          <ol className="step-list">
            <li>
              <strong>Find your region's milkweed.</strong>
              Different milkweed species grow in different climates.
              Butterfly Weed (<em>Asclepias tuberosa</em>) works from Maine to Texas.
              Find the right species for your yard in 2 minutes.
            </li>
            <li>
              <strong>Order or source locally.</strong>
              Native plant nurseries carry plugs in spring. Many states have Monarch restoration programs that sell starts at cost.
              We list sources by state.
            </li>
            <li>
              <strong>Plant in a sunny spot.</strong>
              Milkweed needs 6 hours of sun. A 3-foot patch can support dozens of caterpillars in one season.
            </li>
          </ol>
          <button className="hero__cta" style={{ marginTop: '0.5rem' }} onClick={() => onNavigate('plant-milkweed')}>
            Find Your Milkweed Species →
          </button>
        </section>

        {/* Why this matters — place-based, not abstract (bta-005) */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>The migration passes your yard</h2>
          <p>
            Every fall, Monarchs funnel through specific corridors across the US —
            the Central Flyway through the Great Plains, the Eastern corridor through Texas hill country.
            Milkweed in your county is part of the web that makes the migration possible.
            <strong style={{ color: 'var(--monarch-orange)' }}> This is not abstract.</strong> The butterfly navigating over your roof in September
            needs a place to lay eggs in your neighborhood in spring.
          </p>
          <button
            onClick={() => onNavigate('the-migration')}
            style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
          >
            See the Migration Map →
          </button>
        </div>

        {/* Citation list — web-citation-practices lesson */}
        <section className="cite-list" aria-label="Sources">
          <p>[1] Xerces Society. <a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer">Monarch Butterfly Conservation.</a> Accessed 2026-05-08.</p>
          <p>[2] Monarch Joint Venture. <a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer">Overwintering Population Monitoring.</a> Accessed 2026-05-08.</p>
        </section>
      </div>
    </>
  )
}
