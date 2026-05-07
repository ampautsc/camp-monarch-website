import type { Page } from '../App'

interface TheMigrationProps {
  onNavigate: (page: Page) => void
}

// Corridor data — specific, place-based (bta-005, www-013)
const corridors = [
  {
    name: 'Eastern Corridor',
    states: 'Michigan → Ohio → Kentucky → Tennessee → Alabama → Mississippi → Texas',
    peak: 'Late September – mid October',
    notes: 'Largest population segment. Funnels through Texas hill country before crossing into Mexico. Primary milkweed corridor follows I-35 from Dallas to Laredo.',
  },
  {
    name: 'Central Great Plains Corridor',
    states: 'Minnesota → Iowa → Missouri → Kansas → Oklahoma → Texas',
    peak: 'Mid September – early October',
    notes: 'Crosses through the tallgrass prairie belt. Monarchs follow milkweed patches along river corridors and county road margins.',
  },
  {
    name: 'Eastern Seaboard Corridor',
    states: 'Maine → Connecticut → New Jersey → Delaware → Virginia → North Carolina',
    peak: 'Late September – late October',
    notes: 'Coastline acts as a leading edge. Cape May, NJ and Kiptopeke, VA are major bottleneck concentration points where counts are conducted annually.',
  },
  {
    name: 'Western Corridor (Pacific Coast)',
    states: 'Oregon → Northern California → Central Valley → Southern California',
    peak: 'October – November',
    notes: 'Separate population from Eastern Monarchs. Overwinters along the California coast at Pismo Beach, Pacific Grove, and Santa Cruz. Population peaked at ~1.2 million in the 1980s; fell to 2,000 in 2020; has partially recovered to ~300,000 in recent counts.',
  },
]

const monthlyPhase = [
  { month: 'March', phase: 'Texas northward departure', detail: 'Overwintering generation begins north migration. First milkweed of the season needed in Texas and Oklahoma.' },
  { month: 'April', phase: 'First generation: Texas to Kansas', detail: 'Eggs laid on early milkweed along the Southern Plains. This generation dies in May–June.' },
  { month: 'May', phase: 'Second generation: Midwest arrival', detail: 'Milkweed across Illinois, Indiana, Ohio, Michigan must be established and leafing out.' },
  { month: 'June–July', phase: 'Peak breeding season', detail: 'Three to four generations born and die in northern US and southern Canada. Milkweed abundance here determines fall population size.' },
  { month: 'August', phase: 'Diapause generation emerges', detail: 'The migration generation. No reproduction. Fat storage begins. They will fly 3,000 miles.' },
  { month: 'September', phase: 'Southern migration begins', detail: 'Eastern corridor fills with Monarchs heading south. Peak viewing in Kansas, Missouri, Oklahoma.' },
  { month: 'October', phase: 'Texas crossing', detail: 'Monarchs concentrate in central Texas before crossing to Mexico. Last chance to see large numbers in the US.' },
  { month: 'November', phase: 'Mexico overwintering begins', detail: 'Sierra Madre oyamel fir forests at 3,000m elevation. Same trees used every year for over 10,000 years.' },
  { month: 'December–February', phase: 'Overwintering in Mexico', detail: 'Clustered in fir forests. Population assessed by counting forest area covered rather than individuals.' },
]

export default function TheMigration({ onNavigate }: TheMigrationProps) {
  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__eyebrow">The Migration</div>
        {/* www-010: headline works out of context */}
        <h1>3,000 miles on an inherited map.<br />No one teaches the route.</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '65ch' }}>
          The Eastern Monarch migration is the longest known insect migration in the world.
          It spans four generations, three countries, and the full length of North America.
          Every fall, it passes through your county.
        </p>
      </header>

      {/* Monthly phenology calendar — scannable (www-001), specific (www-013) */}
      <section aria-labelledby="calendar-heading">
        <h2 id="calendar-heading">Monthly migration calendar</h2>
        <p>
          The migration is not a single event — it is a relay of short-lived generations,
          each one carrying the route forward. The calendar below shows where Monarchs are,
          month by month, and what they need at each stage.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', marginTop: '1rem' }}>
            <thead>
              <tr style={{ background: 'var(--monarch-dark)', color: 'white' }}>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>Month</th>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>Phase</th>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>What it means for habitat</th>
              </tr>
            </thead>
            <tbody>
              {monthlyPhase.map((row, i) => (
                <tr key={row.month} style={{ background: i % 2 === 0 ? 'white' : 'var(--monarch-cream)', verticalAlign: 'top' }}>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 'bold', whiteSpace: 'nowrap', color: 'var(--monarch-orange)' }}>{row.month}</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 'bold' }}>{row.phase}</td>
                  <td style={{ padding: '0.6rem 1rem', color: 'var(--text-secondary)' }}>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Four migration corridors — place-based (bta-005) */}
      <section aria-labelledby="corridors-heading">
        <h2 id="corridors-heading">Four migration corridors</h2>
        <p>
          Monarchs don't spread randomly across the continent — they follow consistent routes determined by
          geography, prevailing winds, and milkweed distribution. Milkweed along these corridors
          is what makes the journey survivable.
        </p>
        {corridors.map(c => (
          <div key={c.name} className="callout callout--orange" style={{ marginBottom: '1rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>{c.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontStyle: 'italic' }}>
              {c.states}
            </p>
            <p style={{ marginBottom: '0.25rem' }}>
              <strong>Peak timing:</strong> {c.peak}
            </p>
            <p style={{ marginBottom: 0 }}>{c.notes}</p>
          </div>
        ))}
      </section>

      {/* Science of navigation — www-011 dual audience */}
      <section aria-labelledby="nav-heading">
        <h2 id="nav-heading">How they know where to go</h2>
        <p>
          A Monarch born in Illinois in August has never migrated before. Its parents died before fall.
          Yet it will navigate 2,500 miles to a specific mountain range in central Mexico.
          No learned behavior. No guide. Just physics and inherited programming.
        </p>
        <ul>
          <li>
            <strong>Time-compensated sun compass:</strong> Monarchs use the sun's position to navigate southwest.
            They adjust for the sun's daily movement using a circadian clock in their antennae.
            Blocking the antennae with paint disrupts the compass but not the clock.
          </li>
          <li>
            <strong>Magnetic sensing:</strong> Researchers at the University of Massachusetts found Monarchs
            respond to Earth's magnetic field. In experiments, they can orient toward magnetic south even when the sun is obscured.
          </li>
          <li>
            <strong>The mountain memory:</strong> The Sierra Madre oyamel fir forests where Monarchs overwinter
            were unknown to Western science until 1975. The same forest areas have been used for at least 10,000 years,
            longer than any human record of the butterfly.
          </li>
        </ul>
        <div className="callout callout--green">
          <p style={{ marginBottom: 0 }}>
            <strong>Research citation:</strong> Reppert, S. M., Gegear, R. J., & Merlin, C. (2010).
            Navigational mechanisms of migrating monarch butterflies.
            <em> Trends in Neurosciences</em>, 33(9), 399–406.
            The study that identified antenna-based time-compensated solar navigation in Monarchs.
          </p>
        </div>
      </section>

      {/* Population data — www-007 specific sources */}
      <section aria-labelledby="pop-heading">
        <h2 id="pop-heading">Population counts: what the numbers show</h2>
        <p>
          Eastern Monarchs are assessed each winter by measuring the forest area they occupy at their Mexico overwintering sites.
          One hectare of occupied forest holds approximately 21.1 million butterflies (WWF-Telcel estimate).
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1rem 0 1.5rem' }}>
          <div className="fact-card">
            <div className="fact-card__number">18.2 ha</div>
            <div className="fact-card__label">Peak forest coverage — 1996–97</div>
          </div>
          <div className="fact-card">
            <div className="fact-card__number">0.67 ha</div>
            <div className="fact-card__label">Lowest recorded — 2013–14</div>
          </div>
          <div className="fact-card">
            <div className="fact-card__number">2.2 ha</div>
            <div className="fact-card__label">Most recent count — 2023–24</div>
          </div>
        </div>
        <p>
          Source: WWF-Telcel/CONANP annual overwintering survey, February 2024.
          Western population assessed separately by Xerces Society, Pacific Grove count, November 2023.
        </p>
      </section>

      {/* CTA — plant milkweed */}
      <div className="action-panel">
        <h2 style={{ marginTop: 0 }}>Your yard is part of the route</h2>
        <p>
          The migration passes through every state between Canada and Mexico.
          Milkweed in your neighborhood supports the breeding generations that produce
          the fall migration cohort. The butterfly on your roof in September
          depends on milkweed that was planted 500 miles north in May.
        </p>
        <button
          className="hero__cta"
          onClick={() => onNavigate('plant-milkweed')}
          style={{ marginTop: '0.5rem' }}
        >
          Plant Milkweed This Season →
        </button>
      </div>

    </div>
  )
}
