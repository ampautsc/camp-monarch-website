import { useState } from 'react'
import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

// Supabase project for camp-monarch-website
// The anon key is intentionally public — INSERT-only via RLS, no PII stored
const SUPABASE_URL = 'https://tphtbkodkfynyljbncen.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHRia29ka2Z5bnlsamJuY2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjAyMTksImV4cCI6MjA5MzU5NjIxOX0.Yva864Pt3GddpzssuczIRyC6qpGYXRuJM5UntBoZfRA'

interface LogASightingProps {
  onNavigate: (page: Page) => void
}

type SightingType = 'adult' | 'caterpillar' | 'egg' | 'chrysalis'
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const SIGHTING_TYPES: { value: SightingType; label: string; description: string }[] = [
  { value: 'adult', label: 'Adult butterfly', description: 'The orange-and-black winged adult' },
  { value: 'caterpillar', label: 'Caterpillar', description: 'Yellow, black, and white striped' },
  { value: 'egg', label: 'Egg', description: 'Tiny, pale yellow-green, ridged, always alone on milkweed' },
  { value: 'chrysalis', label: 'Chrysalis', description: 'Jade green with gold dots, hanging from a surface' },
]

function todayString(): string {
  return new Date().toISOString().slice(0, 10)
}

export default function LogASighting({ onNavigate }: LogASightingProps) {
  const [sightingType, setSightingType] = useState<SightingType>('adult')
  const [date, setDate] = useState(todayString())
  const [location, setLocation] = useState('')
  const [notes, setNotes] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const canSubmit = location.trim().length >= 2 && date.length === 10

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitState('submitting')
    trackEvent('tool_interaction', 'log-a-sighting', 'form-submit', { sighting_type: sightingType })
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/events`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          event_type: 'monarch_sighting',
          page: 'log-a-sighting',
          feature: sightingType,
          meta: {
            sighting_type: sightingType,
            date,
            location: location.trim(),
            notes: notes.trim() || null,
          },
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  if (submitState === 'success') {
    return (
      <>
        <section className="hero">
          <div className="hero__eyebrow">Log a Sighting</div>
          <h1>Sighting logged. Thank you.</h1>
          <p className="hero__lead">
            Your {sightingType} in {location} on {date} is in the record.
            For research-grade data that conservation scientists can access directly, submit
            the same sighting to iNaturalist — a photo-backed observation counts in
            published population studies.
          </p>
        </section>
        <div className="page">
          <div className="action-panel">
            <h2 style={{ marginTop: 0 }}>Make it research-grade</h2>
            <p>
              A photo observation on iNaturalist becomes open data within 24 hours.
              Researchers at universities and the USDA use this data directly.
              Journey North specifically tracks Monarch migration timing.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
              <a
                href="https://www.inaturalist.org/taxa/48662-Danaus-plexippus"
                target="_blank"
                rel="noreferrer"
                className="hero__cta"
                style={{ display: 'inline-block' }}
                onClick={() => trackEvent('outbound_link', 'log-a-sighting', 'inaturalist-post-success')}
              >
                Log on iNaturalist →
              </a>
              <a
                href="https://journeynorth.org/monarchs"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'none',
                  border: '2px solid var(--monarch-green)',
                  color: 'var(--monarch-green)',
                  padding: '0.55rem 1.1rem',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
                onClick={() => trackEvent('outbound_link', 'log-a-sighting', 'journeynorth-post-success')}
              >
                Submit to Journey North →
              </a>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={() => {
                setSubmitState('idle')
                setNotes('')
                setDate(todayString())
              }}
              style={{
                background: 'none',
                border: '2px solid var(--monarch-orange)',
                color: 'var(--monarch-orange)',
                padding: '0.55rem 1.1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '0.95rem',
              }}
            >
              Log another sighting
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Hero — inverted pyramid (www-004), first 2 words maximum meaning (www-005) */}
      <section className="hero">
        <div className="hero__eyebrow">Log a Sighting</div>
        <h1>You saw a Monarch.<br />Log it here.</h1>
        <p className="hero__lead">
          Every sighting is a data point. Where Monarchs are seen, when,
          and what stage — egg, caterpillar, chrysalis, adult —
          builds the picture researchers need to track the migration.
          This form takes 30 seconds.
        </p>
      </section>

      <div className="page">

        {/* Form — low friction, clear labels (bta-004) */}
        <section aria-labelledby="form-heading">
          <h2 id="form-heading">What did you see?</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: '560px' }}>

            {/* Sighting type — visual selector */}
            <fieldset style={{ border: 'none', padding: 0, margin: '0 0 1.5rem' }}>
              <legend style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>
                Stage
              </legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.5rem' }}>
                {SIGHTING_TYPES.map(st => (
                  <label
                    key={st.value}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: `2px solid ${sightingType === st.value ? 'var(--monarch-orange)' : '#ccc'}`,
                      background: sightingType === st.value ? 'rgba(224,123,34,0.07)' : 'var(--surface, #faf7f4)',
                      cursor: 'pointer',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                  >
                    <input
                      type="radio"
                      name="sighting_type"
                      value={st.value}
                      checked={sightingType === st.value}
                      onChange={() => setSightingType(st.value)}
                      style={{ marginTop: '2px', accentColor: 'var(--monarch-orange)' }}
                    />
                    <span>
                      <span style={{ fontWeight: 600, display: 'block' }}>{st.label}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{st.description}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Date */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="sighting-date" style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>
                Date
              </label>
              <input
                id="sighting-date"
                type="date"
                value={date}
                max={todayString()}
                onChange={e => setDate(e.target.value)}
                required
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  width: '100%',
                  boxSizing: 'border-box',
                  maxWidth: '220px',
                }}
              />
            </div>

            {/* Location */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="sighting-location" style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>
                Location <span style={{ fontWeight: 400, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>(city, state or ZIP code)</span>
              </label>
              <input
                id="sighting-location"
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value.slice(0, 100))}
                placeholder="e.g. Columbus, OH or 43215"
                required
                minLength={2}
                maxLength={100}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Notes — optional */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="sighting-notes" style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>
                Notes <span style={{ fontWeight: 400, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>(optional)</span>
              </label>
              <textarea
                id="sighting-notes"
                value={notes}
                onChange={e => setNotes(e.target.value.slice(0, 500))}
                placeholder="Milkweed species, number seen, behavior — anything you noticed"
                maxLength={500}
                rows={3}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  width: '100%',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                }}
              />
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {notes.length}/500
              </p>
            </div>

            {submitState === 'error' && (
              <p style={{ color: '#b91c1c', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                Something went wrong — please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={!canSubmit || submitState === 'submitting'}
              className="hero__cta"
              style={{
                opacity: canSubmit && submitState !== 'submitting' ? 1 : 0.55,
                cursor: canSubmit && submitState !== 'submitting' ? 'pointer' : 'not-allowed',
              }}
            >
              {submitState === 'submitting' ? 'Logging…' : 'Log This Sighting'}
            </button>
          </form>
        </section>

        {/* Privacy note — trustworthiness (www-007) */}
        <div className="callout callout--green" style={{ marginTop: '2rem', maxWidth: '560px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            <strong>What we store:</strong> sighting type, date, location, and notes.
            No account required. No name, email, or identifier is collected.
            Sightings are reviewed by Camp Monarch and available to researchers
            studying Monarch population trends.
          </p>
        </div>

        {/* Why it matters — specific (www-013, bta-008) */}
        <section aria-labelledby="why-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="why-heading">Why your sighting matters</h2>
          <p>
            Monarch population surveys at the Mexican overwintering sites count hectares
            of forest occupied. In 1996: 20.97 hectares. In 2024–2025: 4.01 hectares.
            An 80% decline in 30 years.
            <sup><a href="https://monarchwatch.org/blog/2025/03/04/monarch-population-status-2024-2025/" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          </p>
          <p>
            That trajectory is tracked sighting by sighting, across millions of observations
            from people who went outside and paid attention. Researchers at the{' '}
            <a href="https://www.fs.usda.gov/" target="_blank" rel="noreferrer">USDA Forest Service</a>,
            the{' '}
            <a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer">Xerces Society</a>,
            and universities across North America use citizen science observation data
            to understand where the population is, how it is moving, and whether
            conservation efforts are working.
          </p>
          <p>
            Your observation is one point in a dataset that shapes policy and funding decisions.
          </p>
        </section>

        {/* For research-grade data — explicit next step (bta-004) */}
        <section aria-labelledby="research-heading" style={{ marginTop: '2rem' }}>
          <h2 id="research-heading">Make it research-grade</h2>
          <p>
            A photo-backed observation on iNaturalist is automatically classified as
            "research grade" once two users agree on the identification. That data
            flows directly into the Global Biodiversity Information Facility (GBIF)
            and is available to scientists worldwide. Journey North specifically
            tracks migration timing and arrival patterns by region.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
            <a
              href="https://www.inaturalist.org/taxa/48662-Danaus-plexippus"
              target="_blank"
              rel="noreferrer"
              className="hero__cta"
              style={{ display: 'inline-block' }}
              onClick={() => trackEvent('outbound_link', 'log-a-sighting', 'inaturalist')}
            >
              Log on iNaturalist →
            </a>
            <a
              href="https://journeynorth.org/monarchs"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: 'none',
                border: '2px solid var(--monarch-green)',
                color: 'var(--monarch-green)',
                padding: '0.55rem 1.1rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
              onClick={() => trackEvent('outbound_link', 'log-a-sighting', 'journeynorth')}
            >
              Submit to Journey North →
            </a>
          </div>
        </section>

        {/* Sources */}
        <section className="cite-list" aria-label="Sources" style={{ marginTop: '2.5rem' }}>
          <p>
            [1] Monarch Watch.{' '}
            <a href="https://monarchwatch.org/blog/2025/03/04/monarch-population-status-2024-2025/" target="_blank" rel="noreferrer">
              Monarch Population Status 2024–2025.
            </a>{' '}
            March 2025. Accessed 2026-05-09.
          </p>
        </section>

        {/* Cross-links */}
        <section aria-labelledby="explore-heading" style={{ marginTop: '2rem' }}>
          <h2 id="explore-heading">Explore more</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              onClick={() => { trackEvent('cta_click', 'log-a-sighting', 'nav-the-migration'); onNavigate('the-migration') }}
              style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Track the migration →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'log-a-sighting', 'nav-raise-a-monarch'); onNavigate('raise-a-monarch') }}
              style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Raise a Monarch →
            </button>
            <button
              onClick={() => { trackEvent('cta_click', 'log-a-sighting', 'nav-take-action'); onNavigate('take-action') }}
              style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.55rem 1.1rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
            >
              Take action →
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
