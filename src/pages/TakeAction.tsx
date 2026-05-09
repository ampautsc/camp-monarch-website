import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

interface TakeActionProps {
  onNavigate: (page: Page) => void
}

// Five concrete actions — low-friction, named, place-specific (bta-004, bta-005)
const actions = [
  {
    number: 1,
    title: 'Plant one milkweed this season.',
    detail: 'A 3-foot patch in a sunny spot. That is the baseline. Every Monarch egg is laid on milkweed. Without it, there is no caterpillar. Without caterpillars, there is no migration.',
    link: null as Page | null,
    linkLabel: null as string | null,
    external: null as string | null,
    externalLabel: null as string | null,
    page: 'plant-milkweed' as Page,
    pageLabel: 'Find your milkweed species →',
  },
  {
    number: 2,
    title: 'Remove 9 square feet of lawn.',
    detail: 'A 3×3 patch. Smother it with cardboard and wood chips this fall. It will be ready for planting next spring. You are not converting your yard — you are starting one spot.',
    link: null,
    linkLabel: null,
    external: 'https://xerces.org/milkweed',
    externalLabel: 'Xerces habitat guide',
    page: null as Page | null,
    pageLabel: null as string | null,
  },
  {
    number: 3,
    title: 'Log a Monarch sighting when you see one.',
    detail: 'Your observation joins the national count that researchers use to track population trends. It takes 90 seconds. iNaturalist is the trusted citizen science platform researchers rely on — your sighting becomes open data.',
    link: null,
    linkLabel: null,
    external: 'https://www.inaturalist.org/taxa/48662-Danaus-plexippus',
    externalLabel: 'Log on iNaturalist →',
    page: null,
    pageLabel: null,
  },
  {
    number: 4,
    title: 'Apply for Monarch Waystation certification.',
    detail: 'A Monarch Waystation is a registered habitat with milkweed and nectar plants. The application takes 10 minutes. Your yard gets a numbered entry in the national registry and a sign you can post.',
    link: null,
    linkLabel: null,
    external: null,
    externalLabel: null,
    page: 'waystation-guide' as Page,
    pageLabel: 'How to get certified →',
  },
  {
    number: 5,
    title: 'Tell one neighbor what you are doing.',
    detail: 'Habitat is not a single yard — it is a corridor. One milkweed patch matters. Ten patches within a quarter mile matter far more. The most effective thing you can do after planting is tell one person on your block.',
    link: null,
    linkLabel: null,
    external: null,
    externalLabel: null,
    page: null,
    pageLabel: null,
  },
]

// Resources — specific, sourced, no marketese (www-013, www-003)
const resources = [
  { label: 'Find native milkweed by region', url: 'https://xerces.org/milkweed', org: 'Xerces Society' },
  { label: 'Native Plant Finder — sources near you', url: 'https://www.nwf.org/NativePlantFinder/', org: 'National Wildlife Federation' },
  { label: 'USDA Plant Hardiness Zone Map', url: 'https://planthardiness.ars.usda.gov/', org: 'USDA' },
  { label: 'Monarch Waystation registry', url: 'https://www.monarchwatch.org/waystations/', org: 'Monarch Watch' },
  { label: 'Journey North — track the migration', url: 'https://journeynorth.org/monarchs', org: 'Journey North' },
  { label: 'Log a Monarch sighting — open citizen science data', url: 'https://www.inaturalist.org/taxa/48662-Danaus-plexippus', org: 'iNaturalist' },
]

export default function TakeAction({ onNavigate }: TakeActionProps) {
  return (
    <>
      {/* Hero — conclusion first (www-004), first 2 words = "Your yard" (www-005) */}
      <section className="hero">
        <div className="hero__eyebrow">Take Action</div>
        <h1>Your yard can be part<br />of the migration.</h1>
        <p className="hero__lead">
          The Monarch migration passes through your county every fall.
          Milkweed in your yard — even a small patch — feeds the next generation of butterflies.
          These five steps are specific enough to start this week.
        </p>
        <button className="hero__cta" onClick={() => { trackEvent('cta_click', 'take-action', 'hero-find-milkweed'); onNavigate('plant-milkweed') }}>
          Find Your Milkweed Species
        </button>
      </section>

      <div className="page">

        {/* Context — pre-existing grief needs a path (bta-005); don't just add more information */}
        <section aria-labelledby="context-heading">
          <h2 id="context-heading">The situation, in plain terms</h2>
          <p>
            The Eastern Monarch population has declined 80% since 1996.
            The primary cause is milkweed loss — habitat converted to agriculture and development.
            Researchers estimate that restoring milkweed to 1.8 billion acres of agricultural land would stabilize the population.
          </p>
          <p>
            That number is too large to hold. But your yard is not.
            A sunny 3-foot patch of native milkweed is a real contribution to a real problem.
            It is not a gesture. It is breeding habitat.
          </p>
        </section>

        {/* Five actions — numbered, specific, low-friction (bta-004, www-001) */}
        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">Five things you can do this week</h2>
          <ol className="step-list">
            {actions.map(a => (
              <li key={a.number}>
                <strong>{a.title}</strong>
                <p style={{ marginBottom: '0.5rem' }}>{a.detail}</p>
                {a.page && (
                  <button
                    className="hero__cta"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1.1rem', marginTop: '0.25rem' }}
                    onClick={() => { trackEvent('cta_click', 'take-action', `action-${a.number}-internal`); onNavigate(a.page!) }}
                  >
                    {a.pageLabel}
                  </button>
                )}
                {a.external && (
                  <a
                    href={a.external}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'inline-block', marginTop: '0.25rem', fontWeight: 'bold', color: 'var(--monarch-green)' }}
                    onClick={() => trackEvent('outbound_link', 'take-action', `action-${a.number}-external`)}
                  >
                    {a.externalLabel}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* The 3×3 patch — concrete visual, removes vagueness (bta-004) */}
        <div className="callout callout--orange">
          <p style={{ marginBottom: 0 }}>
            <strong>You do not need a big yard or a big plan.</strong>{' '}
            A 3-foot patch of milkweed in a sunny spot is a real contribution.
            It can support 40 caterpillars in one season.
            One of those caterpillars will become the butterfly crossing the Rio Grande in October.
            Plant this spring. The return is in this fall's migration.
          </p>
        </div>

        {/* Track your sightings — place-specific engagement (bta-004) */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Track what you see</h2>
          <p>
            Your observations are data. When you log a Monarch sighting, you are contributing to the count that researchers use to track the migration.
            iNaturalist is the citizen science platform that researchers rely on — every observation you submit becomes open data that conservation scientists can access.
            It takes 90 seconds and your data is real.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
            <a
              href="https://www.inaturalist.org/taxa/48662-Danaus-plexippus"
              target="_blank"
              rel="noreferrer"
              className="hero__cta"
              style={{ display: 'inline-block' }}
              onClick={() => trackEvent('outbound_link', 'take-action', 'inaturalist-log')}
            >
              Log on iNaturalist →
            </a>
          </div>
        </div>

        {/* Resources — low friction, specific sources (www-013, bta-004) */}
        <section aria-labelledby="resources-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="resources-heading">Resources to get started</h2>
          <p>
            These are the organizations doing the most credible work on Monarch habitat.
            Each link goes to something specific you can do — not a homepage.
          </p>
          <ul>
            {resources.map(r => (
              <li key={r.url} style={{ marginBottom: '0.6rem' }}>
                <a href={r.url} target="_blank" rel="noreferrer" onClick={() => trackEvent('outbound_link', 'take-action', r.org.toLowerCase().replace(/\s+/g, '-'))}><strong>{r.label}</strong></a>
                {' '}— {r.org}
              </li>
            ))}
          </ul>
        </section>

        {/* The neighbor step — social action reduces collective action problem */}
        <section aria-labelledby="neighbor-heading">
          <h2 id="neighbor-heading">The most underrated step</h2>
          <p>
            When you plant milkweed, your yard becomes a node in a habitat corridor.
            A corridor needs multiple nodes. One yard in isolation is valuable.
            Three yards within a quarter mile — yours, a neighbor's, a friend's — begin to form something that can actually support a breeding population.
          </p>
          <p>
            Tell one person what you are doing and why.
            Not to recruit them — just to say what you planted and what it is for.
            Most people have never heard that Monarchs need milkweed specifically.
            That conversation is the step after planting.
          </p>
        </section>

        {/* Cross-link — inverted pyramid, keep them in the site (www-004) */}
        <section aria-labelledby="learn-heading">
          <h2 id="learn-heading">Learn more</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => { trackEvent('cta_click', 'take-action', 'learn-more-why-monarchs'); onNavigate('why-monarchs') }}
              style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Why Monarchs matter →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'take-action', 'learn-more-the-migration'); onNavigate('the-migration') }}
              style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Track the migration →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'take-action', 'learn-more-plant-milkweed'); onNavigate('plant-milkweed') }}
              style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Choose your milkweed →
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
