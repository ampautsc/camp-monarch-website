import type { Page } from '../App'

interface PlantMilkweedProps {
  onNavigate: (page: Page) => void
}

// Species data — specific, regional, actionable (www-013, www-006, bta-004)
const species = [
  {
    name: 'Butterfly Weed',
    latin: 'Asclepias tuberosa',
    region: 'East, Midwest, Great Plains',
    zones: '3–9',
    description: 'Orange clusters bloom June–August. Drought-tolerant once established. The most widely available milkweed species in native plant nurseries.',
    tip: 'Tap-rooted — transplant in spring, not fall. Takes 2 years to establish; worth the wait.',
  },
  {
    name: 'Common Milkweed',
    latin: 'Asclepias syriaca',
    region: 'East, Midwest',
    zones: '3–9',
    description: 'Pink-purple flower balls bloom June–August. Spreads by rhizome — give it room. Highest caterpillar-carrying capacity of any US milkweed.',
    tip: 'One plant can support 40 caterpillars. Plant 2–3 for a reliable breeding patch.',
  },
  {
    name: 'Swamp Milkweed',
    latin: 'Asclepias incarnata',
    region: 'East, Midwest, South',
    zones: '3–8',
    description: 'Pink flowers, tolerates wet soil. Excellent for rain gardens and yard low spots. Strong nectar source for adult Monarchs.',
    tip: 'Cut back to 6 inches in fall. Re-emerges reliably every spring.',
  },
  {
    name: 'Showy Milkweed',
    latin: 'Asclepias speciosa',
    region: 'West, Great Plains',
    zones: '3–9',
    description: 'Pale pink star-shaped flowers. The primary milkweed species along western migration routes. More drought-tolerant than Common Milkweed.',
    tip: 'Key species for California overwintering population support. Also used by other monarch populations.',
  },
  {
    name: 'Antelope Horn Milkweed',
    latin: 'Asclepias asperula',
    region: 'Southwest, Texas',
    zones: '5–9',
    description: 'Creamy green flowers, extremely drought-tolerant. Critical for Monarchs wintering in Mexico — supports the Texas crossing in spring.',
    tip: 'Native to limestone soils. Well-drained planting required. Seeds germinate best with cold stratification.',
  },
  {
    name: 'California Milkweed',
    latin: 'Asclepias californica',
    region: 'California, Pacific Coast',
    zones: '8–10',
    description: 'Purple-pink flowers, adapted to hot, dry summers. Supports the Western Monarch population wintering along the California coast.',
    tip: 'Avoid tropical milkweed (A. curassavica) — it disrupts migration timing by staying green too long. Use this native species instead.',
  },
]

export default function PlantMilkweed({ onNavigate }: PlantMilkweedProps) {
  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__eyebrow">Take Action</div>
        {/* www-005: first 2 words = "Plant Milkweed" — maximum meaning */}
        <h1>Plant Milkweed.<br />It is the single most useful thing you can do.</h1>
        {/* www-004: conclusion first */}
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '65ch' }}>
          Monarchs cannot reproduce without milkweed. No other plant works.
          Six native milkweed species cover every US climate zone.
          Find yours below, then order or source locally this spring.
        </p>
      </header>

      {/* Why native matters — www-003 no marketese, www-007 specific */}
      <section aria-labelledby="native-heading">
        <h2 id="native-heading">Native milkweed, not tropical</h2>
        <div className="callout callout--orange">
          <p>
            <strong>Avoid Tropical Milkweed (<em>Asclepias curassavica</em>)</strong> — the orange-and-yellow species sold widely at garden centers.
            It does not die back in winter in warm climates.
            When milkweed persists through fall, Monarchs skip migration and breed year-round on it instead.
            This disrupts the inherited migration program that has worked for 10,000 years.
            A <em>Ophryocystis elektroscirrha</em> parasite (OE) also concentrates on non-native milkweed and weakens Monarchs.
            Native species die back naturally, which keeps both the migration and the parasite load in check.
          </p>
        </div>
      </section>

      {/* Species grid — scannable (www-001), specific (www-013) */}
      <section aria-labelledby="species-heading">
        <h2 id="species-heading">Six species, every US region</h2>
        <p>Find your hardiness zone at <a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noreferrer">USDA Plant Hardiness Zone Map</a>.</p>
        <div className="species-grid">
          {species.map(s => (
            <div key={s.latin} className="species-card">
              <div className="species-card__region">{s.region}</div>
              <h3>{s.name}</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{s.latin} · Zones {s.zones}</p>
              <p>{s.description}</p>
              <p style={{ fontSize: '0.88rem', background: 'var(--monarch-light)', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: 0 }}>
                💡 {s.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Where to get plants — low friction (bta-004), specific (www-013) */}
      <section aria-labelledby="sources-heading">
        <h2 id="sources-heading">Where to get plants this season</h2>
        <p>
          Native plant nurseries stock milkweed plugs from March through June.
          Prices range from $4–$12 per plug. You do not need many.
        </p>
        <ul>
          <li>
            <strong>Butterfly Weed, Common Milkweed, Swamp Milkweed</strong> —
            available at most native plant nurseries in hardiness zones 3–9.
            Search <a href="https://www.nwf.org/NativePlantFinder/" target="_blank" rel="noreferrer">NWF Native Plant Finder</a> for sources near you.
          </li>
          <li>
            <strong>State restoration programs</strong> — several US states run Monarch habitat programs that sell native milkweed at cost or subsidized.
            Search "[your state] Monarch milkweed restoration program."
          </li>
          <li>
            <strong>Seed vs. plugs</strong> — plugs establish faster. Seeds require cold stratification (6–8 weeks in a moist paper towel in the fridge).
            For first-time growers, plugs are more reliable.
          </li>
          <li>
            <strong>Milkweed Market (xerces.org)</strong> — the Xerces Society maintains a supplier directory updated each spring:
            <a href="https://xerces.org/milkweed" target="_blank" rel="noreferrer"> xerces.org/milkweed</a>.
          </li>
        </ul>
        <button
          onClick={() => onNavigate('native-plant-near-me')}
          style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem', marginTop: '0.75rem' }}
        >
          Find nurseries by region →
        </button>
      </section>

      {/* First season expectations — www-012: one idea per paragraph, 15-20 words */}
      <section aria-labelledby="season1-heading">
        <h2 id="season1-heading">What to expect in year one</h2>
        <ol className="step-list">
          <li>
            <strong>Plant after last frost (May–June in most zones).</strong>
            Milkweed is warm-season. Planting too early stunts growth. Wait until nights stay above 50°F.
          </li>
          <li>
            <strong>Water weekly for the first month.</strong>
            After that, most milkweed species are drought-tolerant. Overwatering causes root rot more often than underwatering.
          </li>
          <li>
            <strong>Caterpillars may strip it bare.</strong>
            This is success, not failure. Defoliated milkweed re-grows within 2–3 weeks if well-established.
            One plant can support a full caterpillar cohort and recover.
          </li>
          <li>
            <strong>Let it die back in fall.</strong>
            Cut to 6 inches in October. This signals migration timing to any late-season Monarchs in your area.
            Mark the spot — it will re-emerge next spring.
          </li>
        </ol>
        <div className="callout callout--green">
          <p style={{ marginBottom: 0 }}>
            <strong>Year two is when it matters most.</strong> Most milkweed species establish slowly.
            By the second season, a well-placed plant will have deep roots, spread slightly,
            and be ready to support 4–6x more caterpillars than it could in year one.
            Plant this spring. The return is in next year's summer.
          </p>
        </div>
      </section>

      {/* Cross-link to migration */}
      <div className="action-panel">
        <h2 style={{ marginTop: 0 }}>Know when Monarchs are near you</h2>
        <p>
          Planting milkweed matters most when Monarchs are actually moving through your area.
          The Eastern migration peaks in September through October across the Central Flyway.
          Track weekly corridor updates so you know when your yard is in the path.
        </p>
        <button
          className="hero__cta"
          onClick={() => onNavigate('the-migration')}
          style={{ marginTop: '0.5rem' }}
        >
          See Migration Corridor Map →
        </button>
      </div>

    </div>
  )
}
