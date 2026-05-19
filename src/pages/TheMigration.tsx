import type { Page } from '../App'

interface TheMigrationProps {
  onNavigate: (page: Page) => void
}

const monthlyPhase = [
  { month: 'March', phase: 'Mexico departure', detail: 'Overwintering generation moves north. First milkweed in Texas and Oklahoma needed now.' },
  { month: 'April', phase: 'Texas to Kansas', detail: 'First generation lays eggs on southern milkweed. This generation dies in May.' },
  { month: 'May', phase: 'Midwest arrival', detail: 'Milkweed across Illinois, Indiana, Ohio, Michigan must be leafed out to receive breeding monarchs.' },
  { month: 'Jun-Jul', phase: 'Peak breeding', detail: '3-4 short-lived generations born in northern US and Canada. Summer milkweed abundance determines fall population size.' },
  { month: 'August', phase: 'Diapause generation', detail: 'The migration generation hatches. No reproduction. Fat storage begins. 3,000 miles ahead.' },
  { month: 'September', phase: 'Southern migration', detail: 'Eastern corridor fills with monarchs heading south. Peak viewing in Kansas, Missouri, Oklahoma.' },
  { month: 'October', phase: 'Texas crossing', detail: 'Monarchs concentrate in central Texas before crossing to Mexico. Last large US numbers.' },
  { month: 'Nov-Feb', phase: 'Mexico overwintering', detail: 'Sierra Madre oyamel fir forests at 3,000m. Same trees used every year for over 10,000 years.' },
]

const corridors = [
  { name: 'Eastern', route: 'MI → OH → KY → TN → AL → MS → TX', peak: 'Late Sept – mid Oct', note: 'Largest population. Funnels through Texas hill country before Mexico crossing.' },
  { name: 'Central Plains', route: 'MN → IA → MO → KS → OK → TX', peak: 'Mid Sept – early Oct', note: 'Tallgrass prairie belt. Monarchs follow river corridors and county road margins.' },
  { name: 'Eastern Seaboard', route: 'ME → NJ → DE → VA → NC', peak: 'Late Sept – late Oct', note: 'Cape May, NJ and Kiptopeke, VA are major bottleneck points with annual counts.' },
  { name: 'Pacific Coast', route: 'OR → CA coast → Pismo Beach / Pacific Grove', peak: 'Oct – Nov', note: 'Separate western population. Fell to 2,000 in 2020; partially recovered to ~300,000.' },
]

export default function TheMigration({ onNavigate }: TheMigrationProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">The Migration</div>
        <h1>3,000 miles on an inherited map.<br />No one teaches the route.</h1>
        <p className="hero__lead">
          The Eastern Monarch migration is the longest known insect migration in the world.
          It spans four generations, three countries, and the full length of North America.
          Every fall, it passes through your county.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="calendar-heading">
          <h2 id="calendar-heading">Month by month</h2>
          <p>
            The migration is a relay of short-lived generations, each carrying the route forward.
            No individual monarch completes the round trip. The inherited program does.
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

        <section aria-labelledby="corridors-heading">
          <h2 id="corridors-heading">Four corridors</h2>
          <p>
            Monarchs follow consistent routes shaped by geography, prevailing winds, and milkweed.
            Milkweed along these corridors is what makes the 3,000-mile journey survivable.
          </p>
          <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'var(--monarch-cream)', borderBottom: '2px solid var(--monarch-orange)' }}>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left' }}>Corridor</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left' }}>Route</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left' }}>Peak</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', display: 'none' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {corridors.map((c, i) => (
                  <tr key={c.name} style={{ background: i % 2 === 0 ? 'white' : 'var(--monarch-light)', verticalAlign: 'top' }}>
                    <td style={{ padding: '0.5rem 0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{c.name}</td>
                    <td style={{ padding: '0.5rem 0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c.route}</td>
                    <td style={{ padding: '0.5rem 0.75rem', whiteSpace: 'nowrap' }}>{c.peak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.75rem' }}>
            Cape May, NJ and Kiptopeke, VA are major eastern seaboard count points.
            The western population uses separate overwintering sites along the California coast.
          </p>
        </section>

        <section aria-labelledby="nav-heading">
          <h2 id="nav-heading">How they know where to go</h2>
          <p>
            A monarch born in Illinois in August has never migrated. Its parents died before fall.
            Yet it navigates 2,500 miles to a specific mountain in central Mexico —
            the same forest its ancestors used 10,000 years before Western science knew it existed.
          </p>
          <ul>
            <li>
              <strong>Sun compass:</strong> Monarchs navigate southwest using the sun's position,
              adjusted for time of day by a circadian clock in their antennae.
              Paint the antennae and they lose the compass but not the clock.
            </li>
            <li>
              <strong>Magnetic sensing:</strong> Researchers at UMass found monarchs respond to Earth's magnetic field —
              they orient south even when the sun is obscured.
            </li>
            <li>
              <strong>Population counts:</strong> Eastern monarchs are assessed each winter
              by measuring forest area at overwintering sites. 18.2 hectares in 1996; 0.67 ha at the 2013 low;
              2.2 ha in the 2023-24 count.
            </li>
          </ul>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Milkweed for the relay, sightings in fall, the Journey North map, and no pesticides in August</h2>
          <p>
            The migration passes through every state between Canada and Mexico.
            The butterfly on your roof in September depended on milkweed 500 miles north in May.
          </p>
          <ol className="step-list">
            <li>
              <strong>Plant milkweed for the corridor generations.</strong>{' '}
              Breeding generations born in May–July on Midwest milkweed are what produce the fall migration cohort.
              One milkweed patch in a sunny yard is a contribution to the relay.
            </li>
            <li>
              <strong>Log every monarch you see in September and October.</strong>{' '}
              Fall sightings on iNaturalist help researchers identify where the corridors are and whether they are shifting.
              A photo-verified observation takes 90 seconds.
            </li>
            <li>
              <strong>Track the migration at Journey North.</strong>{' '}
              <a href="https://journeynorth.org/monarchs" target="_blank" rel="noreferrer">journeynorth.org/monarchs</a>{' '}
              publishes weekly sighting maps showing the migration front as it moves south.
              Check it in September to know when your area is in the path.
            </li>
            <li>
              <strong>Skip pesticide applications to the garden in August and September.</strong>{' '}
              The diapause generation nectars on whatever blooms along its route south.
              A fall garden where asters or goldenrod were treated with systemic insecticide in August
              delivers sublethal imidacloprid doses to monarchs with each nectar visit —
              at exactly the point when they are loading fat reserves they cannot replace
              until the next uncontaminated stand, miles south.
            </li>
          </ol>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
              Find Your Milkweed Species
            </button>
            <button
              onClick={() => onNavigate('log-a-sighting')}
              style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Log a Sighting
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
