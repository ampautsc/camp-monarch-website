import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

// Derive a stable feature key from a URL hostname
function hostFeature(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, '') } catch { return 'unknown' }
}

interface NativePlantNearMeProps {
  onNavigate: (page: Page) => void
}

// National tools — specific pages, not homepages (www-013, bta-004)
const nationalResources = [
  {
    name: 'NWF Native Plant Finder',
    url: 'https://www.nwf.org/NativePlantFinder/',
    org: 'National Wildlife Federation',
    description: 'Enter your ZIP code. Returns the native plants most valuable to wildlife in your specific county — with a nursery supplier finder built in.',
    icon: '🔍',
  },
  {
    name: 'Xerces Milkweed Supplier Directory',
    url: 'https://xerces.org/milkweed',
    org: 'Xerces Society',
    description: 'Updated each spring. Lists suppliers by state with notes on which milkweed species they carry — plugs, seeds, or both.',
    icon: '🌱',
  },
  {
    name: 'Monarch Watch — Milkweed Market',
    url: 'https://shop.monarchwatch.org/milkweed/',
    org: 'Monarch Watch',
    description: 'Ships native milkweed plugs directly. Includes regional species recommendations. The right choice when no local nursery carries native milkweed.',
    icon: '📦',
  },
  {
    name: 'Lady Bird Johnson Wildflower Center',
    url: 'https://www.wildflower.org/plants/',
    org: 'Wildflower Center / UT Austin',
    description: 'Search by state, sun and water needs, bloom time. Includes a nursery finder for where to buy each listed species near you.',
    icon: '🌺',
  },
  {
    name: 'Audubon Native Plant Database',
    url: 'https://www.audubon.org/native-plants',
    org: 'National Audubon Society',
    description: 'Enter your ZIP. Returns native plants beneficial for birds in your area — useful for building habitat that supports multiple species beyond Monarchs.',
    icon: '🐦',
  },
]

// Programs by region — place-specific (bta-005)
const regionalPrograms = [
  {
    region: 'Midwest (IL, IN, IA, MN, MO, OH, WI)',
    programs: [
      {
        name: 'Prairie Moon Nursery (MN)',
        url: 'https://www.prairiemoon.com/',
        note: 'One of the most trusted Midwest native plant suppliers. Large selection of prairie species; ships nationwide.',
      },
      {
        name: 'Illinois Monarch Project',
        url: 'https://illinoismonarchproject.com/',
        note: 'State-specific milkweed guidance and native plant sale listings by Illinois county.',
      },
      {
        name: 'Monarch Watch Milkweed Market',
        url: 'https://shop.monarchwatch.org/milkweed/',
        note: 'Based in Kansas; ships native Midwestern milkweed species. Key resource for the Central Flyway corridor.',
      },
    ],
  },
  {
    region: 'Northeast (CT, MA, ME, NH, NJ, NY, PA, RI, VT)',
    programs: [
      {
        name: 'Ernst Conservation Seeds (PA)',
        url: 'https://www.ernstseeds.com/',
        note: 'Regional native seed mixes and plugs; heavy focus on Northeast natives and restoration projects.',
      },
      {
        name: 'New England Wild Flower Society (NEWFS)',
        url: 'https://www.newfs.org/',
        note: 'Annual native plant sales; lists of regionally appropriate species for New England gardens.',
      },
      {
        name: 'NJ Audubon Native Plant Resources',
        url: 'https://www.njaudubon.org/native-plants/',
        note: 'Lists native plant events and sources throughout New Jersey.',
      },
    ],
  },
  {
    region: 'Southeast (AL, FL, GA, NC, SC, TN, VA)',
    programs: [
      {
        name: 'Florida Wildflowers Growers Cooperative',
        url: 'https://www.floridawildflowers.com/',
        note: 'Florida-native milkweed species including Butterflyweed and Pineland Milkweed. Key for southern migration habitat.',
      },
      {
        name: 'NC Botanical Garden Plant Sales',
        url: 'https://ncbg.unc.edu/shop/',
        note: 'Annual fall and spring native plant sales; species native to the Carolinas and Mid-Atlantic.',
      },
      {
        name: 'Monarch Watch Milkweed Profiles — Southeast',
        url: 'https://www.monarchwatch.org/milkweed/profiles/',
        note: 'Species profiles with photos for southeastern milkweed varieties. Useful for identifying what to ask for locally.',
      },
    ],
  },
  {
    region: 'Great Plains & Texas (KS, NE, OK, TX)',
    programs: [
      {
        name: 'Native American Seed (TX)',
        url: 'https://www.seedsource.com/',
        note: 'Texas and southern plains natives, including Antelope Horn Milkweed (Asclepias asperula) — critical for the Texas crossing.',
      },
      {
        name: 'Wildseed Farms (TX)',
        url: 'https://www.wildseedfarms.com/',
        note: 'Texas-native wildflower seeds and plugs. Essential species for the southern migration corridor.',
      },
      {
        name: 'NRCS EQIP Habitat Programs',
        url: 'https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives',
        note: 'Federal cost-share programs for landowners planting native habitat in agricultural areas of the Great Plains.',
      },
    ],
  },
  {
    region: 'West (AZ, CA, CO, NM, NV, OR, UT, WA)',
    programs: [
      {
        name: 'Theodore Payne Foundation (CA)',
        url: 'https://www.theodorepayne.org/',
        note: 'California native plants; nursery and annual seed festival. Specialists in drought-tolerant native milkweed for the Western population.',
      },
      {
        name: 'High Country Gardens (NM / CO)',
        url: 'https://www.highcountrygardens.com/',
        note: 'Drought-tolerant natives for the intermountain West, including several western milkweed species adapted to dry climates.',
      },
      {
        name: 'Oregon Department of Agriculture Native Plant Program',
        url: 'https://www.oregon.gov/ODA/programs/Weeds/Pages/NativePlants.aspx',
        note: 'State list of Oregon native plant sources and conservation programs.',
      },
    ],
  },
]

// What to avoid at garden centers — specific, honest (www-003, www-013)
const avoidTips = [
  'Big-box garden centers stock "Butterfly Mix" and decorative milkweed — almost always Tropical Milkweed (Asclepias curassavica), which disrupts Monarch migration timing. Ask specifically for native species and check the scientific name on the tag.',
  'Plants labeled "milkweed" without a species name. Native milkweed has a specific Latin name (Asclepias tuberosa, A. syriaca, etc.). If the tag just says "milkweed," it is likely tropical.',
  'Pre-mixed wildflower seed packets from hardware stores. These typically include non-native and potentially invasive species mixed with the native ones.',
]

// Timing grid
const timing = [
  { month: 'Mar–Apr', note: 'Online orders begin shipping; local sales start in South and coastal West' },
  { month: 'May–Jun', note: 'Peak availability everywhere; best selection at local nurseries' },
  { month: 'Jul–Aug', note: 'Limited selection; order online from national suppliers' },
  { month: 'Sep–Oct', note: 'Fall sales at native plant societies; ideal time to plant perennials for next year' },
]

export default function NativePlantNearMe({ onNavigate }: NativePlantNearMeProps) {
  return (
    <>
      {/* Hero — conclusion first (www-004), place-specific hook (bta-005) */}
      <section className="hero">
        <div className="hero__eyebrow">Find Plants</div>
        <h1>Native plants near you.<br />Here is where to find them.</h1>
        <p className="hero__lead">
          The biggest obstacle between wanting to plant milkweed and actually doing it
          is not motivation — it is not knowing where to buy a native plant locally.
          This page answers that question for your region.
        </p>
        <button className="hero__cta" onClick={() => { trackEvent('cta_click', 'native-plant-near-me', 'hero-plant-milkweed'); onNavigate('plant-milkweed') }}>
          Which Milkweed for My Yard? →
        </button>
      </section>

      <div className="page">

        {/* First step — low friction, named action (bta-004) */}
        <section aria-labelledby="start-heading">
          <h2 id="start-heading">Start here: 60 seconds to a local source</h2>
          <ol className="step-list">
            <li>
              <strong>Go to NWF Native Plant Finder.</strong>
              Enter your ZIP code. It returns the native plants most valuable to wildlife in your specific county,
              with a nursery supplier finder built in.
              <br />
              <a
                href="https://www.nwf.org/NativePlantFinder/"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-block', marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--monarch-orange)' }}
                onClick={() => trackEvent('outbound_link', 'native-plant-near-me', 'nwf-native-plant-finder')}
              >
                nwf.org/NativePlantFinder →
              </a>
            </li>
            <li>
              <strong>If no local nursery shows up, check the Xerces milkweed supplier list.</strong>
              Updated every spring and covers every US state.
              Many suppliers ship live plugs — a plant that establishes in one season.
              <br />
              <a
                href="https://xerces.org/milkweed"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-block', marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--monarch-orange)' }}
                onClick={() => trackEvent('outbound_link', 'native-plant-near-me', 'xerces-milkweed-suppliers')}
              >
                xerces.org/milkweed →
              </a>
            </li>
            <li>
              <strong>Search for a local native plant society sale.</strong>
              Most states have a native plant society that runs annual spring and fall sales.
              Search "[your state] native plant society sale" — these events often have the widest
              selection of locally-grown, regionally-appropriate species.
            </li>
          </ol>
        </section>

        {/* National tools grid */}
        <section aria-labelledby="national-heading">
          <h2 id="national-heading">Five national tools that search by ZIP</h2>
          <p>
            These resources cover every US state and return location-specific results.
            Use them in order if the first one does not surface a local nursery.
          </p>
          <div className="species-grid">
            {nationalResources.map(r => (
              <div key={r.url} className="species-card">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{r.icon}</div>
                <h3 style={{ marginTop: 0 }}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--monarch-green)', textDecoration: 'none' }}
                    onClick={() => trackEvent('outbound_link', 'native-plant-near-me', hostFeature(r.url))}
                  >
                    {r.name}
                  </a>
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--monarch-orange)', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                  {r.org}
                </p>
                <p style={{ fontSize: '0.88rem', marginBottom: 0 }}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regional programs — place-specific (bta-005) */}
        <section aria-labelledby="regional-heading">
          <h2 id="regional-heading">Regional programs and nurseries</h2>
          <p>
            Regional nurseries grow plants adapted to local soils, rainfall, and climate.
            They establish better and support more local insects than plants grown elsewhere.
          </p>
          {regionalPrograms.map(region => (
            <div key={region.region} style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--monarch-green)', borderBottom: '2px solid var(--border)', paddingBottom: '0.4rem' }}>
                {region.region}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {region.programs.map(p => (
                  <li key={p.url} style={{ marginBottom: '1rem', paddingLeft: 0, maxWidth: '68ch' }}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontWeight: 'bold', fontSize: '1rem' }}
                      onClick={() => trackEvent('outbound_link', 'native-plant-near-me', hostFeature(p.url))}
                    >
                      {p.name}
                    </a>
                    <p style={{ marginTop: '0.2rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {p.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* What to avoid */}
        <section aria-labelledby="avoid-heading">
          <h2 id="avoid-heading">What to avoid at the garden center</h2>
          <div className="callout callout--orange">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {avoidTips.map((tip, i) => (
                <li
                  key={i}
                  style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative', maxWidth: '68ch' }}
                >
                  <span style={{ position: 'absolute', left: 0, color: 'var(--monarch-orange)', fontWeight: 'bold' }}>
                    ✗
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Timing grid — specific, scannable (www-013, www-001) */}
        <section aria-labelledby="timing-heading">
          <h2 id="timing-heading">When to buy</h2>
          <p>
            Native plant availability follows the growing season. Plan ahead:
            the best selection is in spring, but fall is often overlooked and excellent for perennials.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', margin: '1rem 0' }}>
            {timing.map(t => (
              <div key={t.month} className="fact-card" style={{ borderLeftColor: 'var(--monarch-green)' }}>
                <div className="fact-card__number" style={{ color: 'var(--monarch-green)', fontSize: '1.3rem' }}>
                  {t.month}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fallback — no dead ends (bta-004) */}
        <div className="callout callout--green">
          <p style={{ marginBottom: 0 }}>
            <strong>No nursery within driving distance?</strong>{' '}
            Monarch Watch ships live milkweed plugs directly to your door between May and July —
            native species selected for your region.
            A single plug costs about $5 shipped.
            Two plugs in a sunny spot will establish a small patch in one season.{' '}
            <a
              href="https://shop.monarchwatch.org/milkweed/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--monarch-orange)' }}
              onClick={() => trackEvent('outbound_link', 'native-plant-near-me', 'monarchwatch-shop')}
            >
              Order from Monarch Watch →
            </a>
          </p>
        </div>

        {/* Cross-links — keep users moving forward (www-004) */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Once you have a plant</h2>
          <p>
            Know which milkweed species belongs in your yard — and how to keep it alive through year one.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              onClick={() => { trackEvent('cta_click', 'native-plant-near-me', 'plant-milkweed-species-guide'); onNavigate('plant-milkweed') }}
              className="hero__cta"
            >
              Milkweed species guide →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'native-plant-near-me', 'choose-a-plant'); onNavigate('choose-a-plant') }}
              style={{
                background: 'none',
                border: '2px solid var(--monarch-orange)',
                color: 'var(--monarch-orange)',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              Help me choose a plant →
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
