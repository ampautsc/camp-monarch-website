import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

interface ChooseAPlantProps {
  onNavigate: (page: Page) => void
}

// Milkweed species selection table — zone, sun/shade, container-suitable, availability
// Sources: Xerces Society milkweed guide, USDA Plants Database, Monarch Watch
const milkweedSpecies = [
  {
    name: 'Butterfly Weed',
    latin: 'Asclepias tuberosa',
    zones: '3–9',
    region: 'East, Midwest, Great Plains',
    sun: 'Full sun',
    container: true,
    availability: 'Widely available at native plant nurseries',
    note: 'Best choice for containers and dry spots. Tap-rooted — plant in spring, not fall.',
  },
  {
    name: 'Common Milkweed',
    latin: 'Asclepias syriaca',
    zones: '3–9',
    region: 'East, Midwest',
    sun: 'Full sun to part shade',
    container: false,
    availability: 'Available at native plant nurseries',
    note: 'Highest caterpillar-carrying capacity. Spreads — give it room, not a container.',
  },
  {
    name: 'Swamp Milkweed',
    latin: 'Asclepias incarnata',
    zones: '3–8',
    region: 'East, Midwest, South',
    sun: 'Full sun to part shade',
    container: true,
    availability: 'Available at native plant nurseries',
    note: 'Tolerates wet soil. Works in containers with regular watering.',
  },
  {
    name: 'Showy Milkweed',
    latin: 'Asclepias speciosa',
    zones: '3–9',
    region: 'West, Great Plains',
    sun: 'Full sun',
    container: false,
    availability: 'Available in western states; less common in East',
    note: 'Primary species along the western migration route. Drought-tolerant once established.',
  },
  {
    name: 'Antelope Horn Milkweed',
    latin: 'Asclepias asperula',
    zones: '5–9',
    region: 'Southwest, Texas',
    sun: 'Full sun',
    container: false,
    availability: 'Available at Texas native plant nurseries',
    note: 'Critical for the spring Texas crossing. Needs well-drained, dry soil.',
  },
]

// Companion natives for when milkweed is unavailable — nectar sources for adult Monarchs.
// Not substitutes for milkweed (caterpillars need milkweed).
// But a yard with milkweed + these plants supports the full Monarch lifecycle.
const companionPlants = [
  {
    name: 'New England Aster',
    latin: 'Symphyotrichum novae-angliae',
    why: 'Blooms September–October — exactly when Monarchs are migrating south. One of the highest-value nectar sources for migrating adults.',
    zones: '3–8',
    tip: 'Plant it and Monarchs will stop. More than any other native, this is the plant that makes your yard a migration stopover.',
  },
  {
    name: 'Goldenrod',
    latin: 'Solidago spp.',
    why: 'Blooms late summer through fall alongside the migration. Native goldenrod supports 100+ pollinator species. Note: goldenrod does not cause hay fever — that is ragweed.',
    zones: '3–9',
    tip: 'Widely available, extremely drought-tolerant once established, and beloved by bees, butterflies, and beetles alike.',
  },
  {
    name: 'Purple Coneflower',
    latin: 'Echinacea purpurea',
    why: 'Blooms June–August, bridging the milkweed season into late summer. Supports Monarch nectaring during breeding season and attracts goldfinches to seed heads in fall.',
    zones: '3–9',
    tip: 'Leave seed heads through winter — they feed birds and add structure to your habitat patch.',
  },
]

export default function ChooseAPlant({ onNavigate }: ChooseAPlantProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Choose a Plant</div>
        <h1>Choose a plant.<br />Walk into the nursery knowing exactly what to ask for.</h1>
        <p className="hero__lead">
          Five native milkweed species cover every US climate zone.
          Three companion plants support the migration when milkweed is unavailable.
          Below: a selection table, a container guide, and the three-sentence nursery script.
        </p>
      </section>
      <div className="page">

      {/* Zone reference */}
      <section aria-labelledby="zone-heading">
        <h2 id="zone-heading">Step 1: Know your hardiness zone</h2>
        <p>
          Your USDA hardiness zone determines which milkweed species will survive your winters.
          If you do not know your zone, look it up before going to the nursery — it takes 30 seconds.
        </p>
        <p>
          <a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noreferrer" style={{ fontWeight: 'bold', color: 'var(--monarch-green)' }} onClick={() => trackEvent('outbound_link', 'choose-a-plant', 'usda-hardiness-zone')}>
            Find your USDA Hardiness Zone →
          </a>
          {' '}(enter your zip code)
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.25rem' }}>
          Most of the US is zones 3–9. If you are in zones 9–11 (Florida, Gulf Coast, California),
          also read the note on Tropical Milkweed below.
        </p>
      </section>

      {/* Milkweed selection table */}
      <section aria-labelledby="table-heading">
        <h2 id="table-heading">Step 2: Pick your species</h2>
        <p>Match your zone and growing conditions to one of these five native species.</p>
        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: 'var(--monarch-light)', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--monarch-orange)' }}>Species</th>
                <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--monarch-orange)' }}>Zones</th>
                <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--monarch-orange)' }}>Region</th>
                <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--monarch-orange)' }}>Sun</th>
                <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--monarch-orange)' }}>Container?</th>
                <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--monarch-orange)' }}>Availability</th>
              </tr>
            </thead>
            <tbody>
              {milkweedSpecies.map((s, i) => (
                <tr key={s.latin} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--monarch-light)' }}>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>
                    <strong>{s.name}</strong>
                    <br />
                    <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{s.latin}</span>
                    <br />
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{s.note}</span>
                  </td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>{s.zones}</td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>{s.region}</td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>{s.sun}</td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top', textAlign: 'center' }}>
                    {s.container ? '✅ Yes' : '❌ No'}
                  </td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>{s.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Source:{' '}
          <a href="https://xerces.org/milkweed" target="_blank" rel="noreferrer" onClick={() => trackEvent('outbound_link', 'choose-a-plant', 'xerces-milkweed-guide')}>Xerces Society Milkweed Guide</a>
          {' · '}
          <a href="https://plants.usda.gov/" target="_blank" rel="noreferrer" onClick={() => trackEvent('outbound_link', 'choose-a-plant', 'usda-plants-database')}>USDA Plants Database</a>
        </p>
      </section>

      {/* Tropical milkweed warning */}
      <div className="callout callout--orange">
        <p style={{ marginBottom: 0 }}>
          <strong>Avoid Tropical Milkweed (<em>Asclepias curassavica</em>)</strong> — the orange-and-yellow species
          widely sold at garden centers, especially in zones 9–11. It does not die back in winter in warm climates.
          When milkweed persists through fall, Monarchs skip migration and breed year-round instead.
          This disrupts the migration program and concentrates a debilitating parasite (OE).
          If you see it at the nursery, skip it. Ask for a native species instead.
        </p>
      </div>

      {/* Nursery script */}
      <section aria-labelledby="script-heading">
        <h2 id="script-heading">Step 3: The nursery script</h2>
        <p>
          You do not need to be a botanist. Three sentences will get you what you need.
        </p>
        <ol className="step-list">
          <li>
            <strong>What to say when you walk in:</strong>
            <p style={{ background: 'var(--monarch-light)', padding: '0.75rem 1rem', borderRadius: '6px', fontStyle: 'italic', margin: '0.5rem 0' }}>
              "I'm looking for native milkweed for Monarch Butterflies —
              specifically <em>[species name]</em> or a native substitute.
              I need something that will die back in fall, not tropical milkweed."
            </p>
          </li>
          <li>
            <strong>What to check before you buy:</strong>
            <ul style={{ marginTop: '0.4rem' }}>
              <li>Read the tag — confirm the Latin name matches your target species. Avoid <em>Asclepias curassavica</em>.</li>
              <li>Check the roots — lift the pot slightly. Roots should be white or tan. Brown mushy roots mean rot.</li>
              <li>Look for signs of life — milkweed plugs in early spring may look bare. Scratch the stem gently; green underneath means the plant is alive.</li>
            </ul>
          </li>
          <li>
            <strong>What to do if they are out of stock:</strong>
            <p style={{ margin: '0.5rem 0' }}>
              Ask for New England Aster, Goldenrod, or Purple Coneflower — the companion plants listed below.
              These support adult Monarchs during migration and other pollinators year-round.
              Order milkweed online from the Xerces supplier directory for next season.
            </p>
            <p style={{ margin: 0 }}>
              <a href="https://xerces.org/milkweed" target="_blank" rel="noreferrer" style={{ fontWeight: 'bold', color: 'var(--monarch-green)' }} onClick={() => trackEvent('outbound_link', 'choose-a-plant', 'xerces-milkweed-suppliers')}>
                Find milkweed suppliers near you → xerces.org/milkweed
              </a>
            </p>
          </li>
        </ol>
      </section>

      {/* Companion plants */}
      <section aria-labelledby="companion-heading">
        <h2 id="companion-heading">When milkweed is out of stock: three companion plants</h2>
        <p>
          Companion plants are not substitutes for milkweed — Monarch caterpillars can only eat milkweed.
          But adult Monarchs need nectar throughout the migration, and these three plants provide it at exactly the right time.
          A yard with milkweed <em>and</em> these plants supports the full Monarch lifecycle, not just the caterpillar stage.
        </p>
        <div className="species-grid" style={{ marginTop: '1rem' }}>
          {companionPlants.map(p => (
            <div key={p.latin} className="species-card">
              <h3>{p.name}</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                {p.latin} · Zones {p.zones}
              </p>
              <p>{p.why}</p>
              <p style={{ fontSize: '0.88rem', background: 'var(--monarch-light)', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: 0 }}>
                💡 {p.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* After you plant — cross-link to PlantMilkweed */}
      <div className="action-panel" style={{ marginTop: '2.5rem' }}>
        <h2 style={{ marginTop: 0 }}>Once you have the plant: how to grow it</h2>
        <p>
          You have made the purchase. Now: where to put it, what to expect in year one,
          and what it means when caterpillars strip it bare (hint: that is success).
        </p>
        <button
          className="hero__cta"
          onClick={() => { trackEvent('cta_click', 'choose-a-plant', 'how-to-grow-milkweed'); onNavigate('plant-milkweed') }}
          style={{ marginTop: '0.5rem' }}
        >
          How to grow milkweed →
        </button>
      </div>

      {/* Cross-links */}
      <section aria-labelledby="next-heading" style={{ marginTop: '2rem' }}>
        <h2 id="next-heading">More ways to help</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            onClick={() => { trackEvent('cta_click', 'choose-a-plant', 'learn-more-take-action'); onNavigate('take-action') }}
            style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
          >
            Five actions to take this week →
          </button>
          <button
            onClick={() => { trackEvent('cta_click', 'choose-a-plant', 'learn-more-the-migration'); onNavigate('the-migration') }}
            style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
          >
            Track the migration →
          </button>
        </div>
      </section>

    </div>
    </>
  )
}
