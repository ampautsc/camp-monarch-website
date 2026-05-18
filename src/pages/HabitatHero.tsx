import { useEffect, useMemo, useState } from 'react'
import type { PageSlug } from '../config/sitePages'
import { trackEvent } from '../lib/analytics'
import { supabase } from '../lib/supabase'

type Page = PageSlug

interface HabitatHeroProps {
  onNavigate: (page: Page) => void
}

type AuthUser = {
  id: string
  email?: string | null
}

type AsyncState = 'idle' | 'loading' | 'submitting' | 'sent' | 'error'
type SunExposure = 'full-sun' | 'part-sun' | 'mostly-shade'
type YardSize = 'balcony' | 'small' | 'medium' | 'large' | 'acre-plus'

interface StewardProfile {
  id: string
  full_name: string
  street: string
  city: string
  state: string
  zip: string
  sun_exposure: SunExposure
  yard_size: YardSize
  token_balance: number
}

interface SeedRequestItemRecord {
  id: string
  collection: string
  seed_name: string
  status: string
}

interface SeedRequestRecord {
  id: string
  season: string
  status: string
  requested_tokens: number
  submitted_at: string
  fulfillment_due_at: string | null
  seed_request_items?: SeedRequestItemRecord[] | null
}

interface SeedOption {
  id: string
  collection: string
  label: string
  botanical?: string
  description: string
}

const EMAIL_REDIRECT_TO = 'https://dist-phi-ebon-52.vercel.app/habitat-hero'

const SEED_OPTIONS: SeedOption[] = [
  {
    id: 'common-milkweed',
    collection: 'Milkweed collection',
    label: 'Common Milkweed',
    botanical: 'Asclepias syriaca',
    description: 'Tall stems for sunny yards and roadside-style patches.',
  },
  {
    id: 'butterfly-milkweed',
    collection: 'Milkweed collection',
    label: 'Butterfly Milkweed',
    botanical: 'Asclepias tuberosa',
    description: 'Orange bloom spikes for the driest, hottest spots.',
  },
  {
    id: 'swamp-milkweed',
    collection: 'Milkweed collection',
    label: 'Swamp Milkweed',
    botanical: 'Asclepias incarnata',
    description: 'Pink blooms for downspouts, rain gardens, and damp ground.',
  },
  {
    id: 'whorled-milkweed',
    collection: 'Milkweed collection',
    label: 'Whorled Milkweed',
    botanical: 'Asclepias verticillata',
    description: 'Fine-textured stems for lean soils and narrow strips.',
  },
  {
    id: 'golden-alexander',
    collection: 'Season-Long Nectar collection',
    label: 'Golden Alexander',
    description: 'One of the first yellow umbels to open in late spring.',
  },
  {
    id: 'lance-leaved-coreopsis',
    collection: 'Season-Long Nectar collection',
    label: 'Lance-leaved Coreopsis',
    description: 'Long yellow bloom run for dry, sunny beds.',
  },
  {
    id: 'black-eyed-susan',
    collection: 'Season-Long Nectar collection',
    label: 'Black-Eyed Susan',
    description: 'Mid-summer color that fills quickly from seed.',
  },
  {
    id: 'wild-bergamot',
    collection: 'Season-Long Nectar collection',
    label: 'Wild Bergamot',
    description: 'Lavender heads that pull in bees and butterflies at once.',
  },
  {
    id: 'rough-blazing-star',
    collection: 'Season-Long Nectar collection',
    label: 'Rough Blazing Star',
    description: 'Tall purple spikes that carry late-summer nectar upward.',
  },
  {
    id: 'smooth-blue-aster',
    collection: 'Season-Long Nectar collection',
    label: 'Smooth Blue Aster',
    description: 'September and October bloom when the migration is moving.',
  },
  {
    id: 'sawtooth-sunflower',
    collection: 'Season-Long Nectar collection',
    label: 'Sawtooth Sunflower',
    description: 'A tall yellow wall for the back edge of a habitat strip.',
  },
  {
    id: 'showy-goldenrod',
    collection: 'Season-Long Nectar collection',
    label: 'Showy Goldenrod',
    description: 'Fall nectar when monarchs are filling up before heading south.',
  },
]

const SUN_OPTIONS: { value: SunExposure; label: string; detail: string }[] = [
  { value: 'full-sun', label: 'Full sun', detail: '6+ hours of direct light most days' },
  { value: 'part-sun', label: 'Part sun', detail: '3–5 hours, or bright afternoon light' },
  { value: 'mostly-shade', label: 'Mostly shade', detail: 'Under trees, fence lines, or north sides' },
]

const YARD_SIZE_OPTIONS: { value: YardSize; label: string; detail: string }[] = [
  { value: 'balcony', label: 'Balcony or containers', detail: 'Pots, stoops, patios, or no ground to plant' },
  { value: 'small', label: 'Small yard', detail: 'One sunny bed, curb strip, or side yard' },
  { value: 'medium', label: 'Average lot', detail: 'Room for a border, rain garden, or pocket meadow' },
  { value: 'large', label: 'Large yard', detail: 'Multiple beds or a dedicated habitat patch' },
  { value: 'acre-plus', label: 'Acre or more', detail: 'Field edge, orchard margin, or meadow-scale space' },
]

function normalizeAddress(street: string, city: string, state: string, zip: string): string {
  return [street, city, state, zip]
    .join(' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

function currentSeason(): string {
  return String(new Date().getUTCFullYear())
}

function formatRequestStatus(status: string): string {
  switch (status) {
    case 'submitted':
      return 'Submitted — waiting for Camp Monarch to assign packets'
    case 'assigned':
      return 'Assigned — seed is being matched to available packets'
    case 'confirmed':
      return 'Confirmed — a steward has claimed this request'
    case 'fulfilled':
      return 'Fulfilled — your packets are on the way or already delivered'
    case 'released':
      return 'Released — the request reopened after the hold window expired'
    case 'cancelled':
      return 'Cancelled'
    default:
      return status
  }
}

function formatDate(value: string | null): string {
  if (!value) return 'Not scheduled yet'
  return new Date(value).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function getSeasonalTip(): { heading: string; detail: string; actionLabel: string; actionPage: Page } {
  const month = new Date().getMonth()

  if (month >= 2 && month <= 4) {
    return {
      heading: 'Spring: mark the sunny places before the grass gets tall.',
      detail: 'A photo of your sunniest strip in April answers the June question of where milkweed can actually live. Habitat often starts with noticing one place that stays bright all afternoon.',
      actionLabel: 'See the spring checklist →',
      actionPage: 'spring-checklist',
    }
  }

  if (month >= 5 && month <= 7) {
    return {
      heading: 'Summer: watch which flowers still hold nectar at dusk.',
      detail: 'The early bloomers are already fading. A yard that still has color in late July is the yard a migrating butterfly can use in September.',
      actionLabel: 'Open the seasonal calendar →',
      actionPage: 'seasonal-calendar',
    }
  }

  if (month >= 8 && month <= 10) {
    return {
      heading: 'Fall: leave the stems standing if you can.',
      detail: 'The seed heads you see in October are next year\'s packets. The hollow stems are winter shelter for bees that never make nests in boxes.',
      actionLabel: 'Why the stems matter →',
      actionPage: 'leave-the-leaves',
    }
  }

  return {
    heading: 'Winter: sketch the patch before spring gets busy.',
    detail: 'A pencil map of one bed, one fence line, or one downspout patch makes the first warm weekend easier to use. Seed goes farther when the place is already chosen.',
    actionLabel: 'Check your yard score →',
    actionPage: 'habitat-score',
  }
}

export default function HabitatHero({ onNavigate }: HabitatHeroProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [email, setEmail] = useState('')
  const [otpState, setOtpState] = useState<AsyncState>('idle')
  const [otpError, setOtpError] = useState<string | null>(null)

  const [steward, setSteward] = useState<StewardProfile | null>(null)
  const [currentRequest, setCurrentRequest] = useState<SeedRequestRecord | null>(null)

  const [step, setStep] = useState(1)
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateCode, setStateCode] = useState('')
  const [zip, setZip] = useState('')
  const [sunExposure, setSunExposure] = useState<SunExposure | ''>('')
  const [yardSize, setYardSize] = useState<YardSize | ''>('')
  const [selectedSeeds, setSelectedSeeds] = useState<string[]>([])
  const [submitState, setSubmitState] = useState<AsyncState>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const seasonalTip = useMemo(() => getSeasonalTip(), [])
  const selectedSeedDetails = useMemo(
    () => selectedSeeds
      .map(id => SEED_OPTIONS.find(option => option.id === id))
      .filter((option): option is SeedOption => Boolean(option)),
    [selectedSeeds],
  )

  const canContinueAddress =
    fullName.trim().length >= 2 &&
    street.trim().length >= 4 &&
    city.trim().length >= 2 &&
    stateCode.trim().length >= 2 &&
    zip.trim().length >= 5

  const canContinueYard = Boolean(sunExposure) && Boolean(yardSize)
  const canSubmitRequest = selectedSeeds.length > 0 && selectedSeeds.length <= 6

  useEffect(() => {
    let active = true

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setUser(data.session?.user ? { id: data.session.user.id, email: data.session.user.email } : null)
      setLoadingAuth(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? { id: session.user.id, email: session.user.email } : null)
      setLoadingAuth(false)
    })

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    let active = true

    async function loadProfile() {
      if (!user) {
        setSteward(null)
        setCurrentRequest(null)
        setLoadError(null)
        setLoadingProfile(false)
        return
      }

      setLoadingProfile(true)
      setLoadError(null)

      const { data: stewardData, error: stewardError } = await supabase
        .from('stewards')
        .select('id, full_name, street, city, state, zip, sun_exposure, yard_size, token_balance')
        .eq('user_id', user.id)
        .maybeSingle()

      if (!active) return

      if (stewardError) {
        setLoadError('You are signed in, but the steward profile did not load yet.')
        setLoadingProfile(false)
        return
      }

      setSteward((stewardData as StewardProfile | null) ?? null)

      if (!stewardData) {
        setCurrentRequest(null)
        setLoadingProfile(false)
        return
      }

      const { data: requestData, error: requestError } = await supabase
        .from('seed_requests')
        .select('id, season, status, requested_tokens, submitted_at, fulfillment_due_at, seed_request_items(id, collection, seed_name, status)')
        .eq('steward_id', stewardData.id)
        .order('submitted_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (!active) return

      if (requestError) {
        setLoadError('Your steward profile loaded, but the current request status did not.')
        setCurrentRequest(null)
      } else {
        setCurrentRequest((requestData as SeedRequestRecord | null) ?? null)
      }

      setLoadingProfile(false)
    }

    void loadProfile()

    return () => {
      active = false
    }
  }, [user])

  const handleSendMagicLink = async (event: React.FormEvent) => {
    event.preventDefault()
    setOtpState('loading')
    setOtpError(null)
    trackEvent('cta_click', 'habitat-hero', 'send-magic-link')

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: EMAIL_REDIRECT_TO },
    })

    if (error) {
      setOtpState('error')
      setOtpError('I could not send the sign-in link. Please try again.')
      return
    }

    setOtpState('sent')
  }

  const handleSeedToggle = (seedId: string) => {
    setSelectedSeeds(current => {
      if (current.includes(seedId)) return current.filter(item => item !== seedId)
      if (current.length >= 6) return current
      return [...current, seedId]
    })
  }

  const handleOnboardingSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!user || !canSubmitRequest || !sunExposure || !yardSize) return

    setSubmitState('submitting')
    setSubmitError(null)
    trackEvent('tool_interaction', 'habitat-hero', 'submit-onboarding', { packet_count: selectedSeeds.length })

    try {
      const addressNormalized = normalizeAddress(street, city, stateCode, zip)

      const { data: stewardData, error: stewardError } = await supabase
        .from('stewards')
        .insert({
          user_id: user.id,
          email: user.email ?? null,
          full_name: fullName.trim(),
          street: street.trim(),
          city: city.trim(),
          state: stateCode.trim().toUpperCase(),
          zip: zip.trim(),
          address_normalized: addressNormalized,
          sun_exposure: sunExposure,
          yard_size: yardSize,
          token_balance: 6,
        })
        .select('id, full_name, street, city, state, zip, sun_exposure, yard_size, token_balance')
        .single()

      if (stewardError) throw stewardError

      const { data: requestData, error: requestError } = await supabase
        .from('seed_requests')
        .insert({
          steward_id: stewardData.id,
          season: currentSeason(),
          status: 'submitted',
          requested_tokens: selectedSeedDetails.length,
        })
        .select('id, season, status, requested_tokens, submitted_at, fulfillment_due_at')
        .single()

      if (requestError) throw requestError

      const { data: itemsData, error: itemsError } = await supabase
        .from('seed_request_items')
        .insert(selectedSeedDetails.map(seed => ({
          request_id: requestData.id,
          collection: seed.collection,
          seed_name: seed.label,
          token_cost: 1,
          status: 'requested',
        })))
        .select('id, collection, seed_name, status')

      if (itemsError) throw itemsError

      setSteward(stewardData as StewardProfile)
      setCurrentRequest({
        ...(requestData as SeedRequestRecord),
        seed_request_items: (itemsData as SeedRequestItemRecord[] | null) ?? [],
      })
      setSubmitState('sent')
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      setSubmitState('error')
      setSubmitError(
        message.includes('address_normalized') || message.includes('duplicate key')
          ? 'That address already has a Habitat Hero profile. Sign in with the email already tied to that address.'
          : 'I could not save the request yet. Please try again in a moment.',
      )
    }
  }

  const handleSignOut = async () => {
    trackEvent('cta_click', 'habitat-hero', 'sign-out')
    await supabase.auth.signOut()
  }

  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Habitat Hero</div>
        <h1>Request free milkweed and native plant seed for your yard.</h1>
        <p className="hero__lead">
          Tell us what your yard is like and we'll match you to the packets Camp Monarch has on hand.
          Milkweed for monarchs. Native nectar plants for everything that follows.
        </p>
      </section>

      <div className="page">
        {loadError && (
          <div className="callout callout--orange" style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: 0 }}>{loadError}</p>
          </div>
        )}

        {loadingAuth || loadingProfile ? (
          <section aria-labelledby="loading-heading">
            <h2 id="loading-heading">Loading Habitat Hero…</h2>
            <p>Checking your sign-in and your current request status.</p>
          </section>
        ) : !user ? (
          <>
            <section aria-labelledby="how-heading">
              <h2 id="how-heading">How it works</h2>
              <p>
                New stewards start with six tokens — one per packet. Sign in with your email,
                tell us about your yard, and choose the packets you want from the milkweed
                and native nectar collection. A steward near you confirms the match and sends the seed.
              </p>
              <p>One address, one request per season. No cost.</p>
            </section>

            <section aria-labelledby="seed-options-heading" style={{ marginTop: '2.5rem' }}>
              <h2 id="seed-options-heading">What you can request</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                <div className="callout callout--green" style={{ margin: 0 }}>
                  <h3 style={{ marginTop: 0 }}>Milkweed collection</h3>
                  <p>Common, butterfly, swamp, and whorled milkweed. These are the leaves monarch females search for when they lay eggs — no other plant will do.</p>
                </div>
                <div className="callout callout--orange" style={{ margin: 0 }}>
                  <h3 style={{ marginTop: 0 }}>Season-long nectar collection</h3>
                  <p>Golden Alexander through showy goldenrod. Staggered bloom times so something is still feeding insects when the migration reaches your street.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="email-heading" style={{ marginTop: '2.5rem' }}>
              <h2 id="email-heading">Request your packets</h2>
              <p>Enter your email and we'll send a sign-in link. The link brings you back here to choose your seed.</p>
              <form onSubmit={handleSendMagicLink} style={{ maxWidth: '560px' }}>
                <label htmlFor="habitat-hero-email" style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Email address
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <input
                    id="habitat-hero-email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    style={{
                      flex: '1 1 260px',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                    }}
                  />
                  <button className="hero__cta" type="submit" disabled={otpState === 'loading'}>
                    {otpState === 'loading' ? 'Sending link…' : 'Email me the link'}
                  </button>
                </div>
              </form>
              {otpState === 'sent' && (
                <p style={{ marginTop: '0.85rem', color: 'var(--monarch-green)', fontWeight: 700 }}>
                  Check your email for a sign-in link.
                </p>
              )}
              {otpError && (
                <p style={{ marginTop: '0.85rem', color: '#b91c1c' }}>{otpError}</p>
              )}
            </section>
          </>
        ) : !steward ? (
          <>
            <section aria-labelledby="onboarding-heading">
              <h2 id="onboarding-heading">Finish your Habitat Hero profile</h2>
              <p>Signed in as <strong>{user.email ?? 'your email address'}</strong>.</p>
              <p>One address gets one active request each season. The form below builds that address record, then saves the first request.</p>
            </section>

            <form onSubmit={handleOnboardingSubmit}>
              <section aria-labelledby="step-heading" className="callout callout--green" style={{ maxWidth: '720px' }}>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--monarch-orange)', marginBottom: '0.5rem' }}>
                  Step {step} of 3
                </div>
                {step === 1 && (
                  <>
                    <h2 id="step-heading" style={{ marginTop: 0 }}>Where should the envelope go?</h2>
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                      <label>
                        <span style={{ display: 'block', fontWeight: 700, marginBottom: '0.35rem' }}>Full name</span>
                        <input value={fullName} onChange={event => setFullName(event.target.value)} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                      </label>
                      <label style={{ gridColumn: '1 / -1' }}>
                        <span style={{ display: 'block', fontWeight: 700, marginBottom: '0.35rem' }}>Street address</span>
                        <input value={street} onChange={event => setStreet(event.target.value)} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                      </label>
                      <label>
                        <span style={{ display: 'block', fontWeight: 700, marginBottom: '0.35rem' }}>City</span>
                        <input value={city} onChange={event => setCity(event.target.value)} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                      </label>
                      <label>
                        <span style={{ display: 'block', fontWeight: 700, marginBottom: '0.35rem' }}>State</span>
                        <input value={stateCode} onChange={event => setStateCode(event.target.value.slice(0, 2).toUpperCase())} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                      </label>
                      <label>
                        <span style={{ display: 'block', fontWeight: 700, marginBottom: '0.35rem' }}>ZIP</span>
                        <input value={zip} onChange={event => setZip(event.target.value)} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                      </label>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 id="step-heading" style={{ marginTop: 0 }}>What kind of yard are you working with?</h2>
                    <p>The point is not perfection. Camp Monarch just needs enough detail to send the packets that fit the place you actually have.</p>

                    <div style={{ marginTop: '1.5rem' }}>
                      <h3 style={{ marginTop: 0 }}>Sun</h3>
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {SUN_OPTIONS.map(option => (
                          <label key={option.value} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', borderRadius: '8px', border: `2px solid ${sunExposure === option.value ? 'var(--monarch-orange)' : '#d5d5d5'}`, background: sunExposure === option.value ? 'rgba(241, 175, 85, 0.12)' : '#fff' }}>
                            <input type="radio" name="sun" checked={sunExposure === option.value} onChange={() => setSunExposure(option.value)} style={{ marginTop: '0.2rem' }} />
                            <span><strong>{option.label}</strong><br />{option.detail}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                      <h3 style={{ marginTop: 0 }}>Approximate size</h3>
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {YARD_SIZE_OPTIONS.map(option => (
                          <label key={option.value} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', borderRadius: '8px', border: `2px solid ${yardSize === option.value ? 'var(--monarch-orange)' : '#d5d5d5'}`, background: yardSize === option.value ? 'rgba(241, 175, 85, 0.12)' : '#fff' }}>
                            <input type="radio" name="yard-size" checked={yardSize === option.value} onChange={() => setYardSize(option.value)} style={{ marginTop: '0.2rem' }} />
                            <span><strong>{option.label}</strong><br />{option.detail}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h2 id="step-heading" style={{ marginTop: 0 }}>Choose up to six packets</h2>
                    <p>Each packet costs one token. You started with six, and nothing is deducted until a steward confirms the match.</p>
                    <p style={{ fontWeight: 700, marginBottom: '1rem' }}>
                      Selected: {selectedSeeds.length}/6 packets
                    </p>
                    <div style={{ display: 'grid', gap: '0.85rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                      {SEED_OPTIONS.map(option => {
                        const selected = selectedSeeds.includes(option.id)
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleSeedToggle(option.id)}
                            style={{
                              textAlign: 'left',
                              padding: '1rem',
                              borderRadius: '10px',
                              border: `2px solid ${selected ? 'var(--monarch-orange)' : '#d5d5d5'}`,
                              background: selected ? 'rgba(241, 175, 85, 0.12)' : '#fff',
                              cursor: 'pointer',
                              fontFamily: 'inherit',
                            }}
                          >
                            <span style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--monarch-green)', marginBottom: '0.35rem' }}>
                              {option.collection}
                            </span>
                            <strong style={{ display: 'block', marginBottom: '0.2rem' }}>
                              {option.label}
                              {option.botanical ? ` (${option.botanical})` : ''}
                            </strong>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{option.description}</span>
                          </button>
                        )
                      })}
                    </div>
                  </>
                )}

                {submitError && (
                  <p style={{ color: '#b91c1c', marginTop: '1rem', marginBottom: 0 }}>{submitError}</p>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                  {step > 1 && (
                    <button type="button" onClick={() => setStep(step - 1)} style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.65rem 1.1rem', borderRadius: '6px', fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer' }}>
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      className="hero__cta"
                      onClick={() => setStep(step + 1)}
                      disabled={(step === 1 && !canContinueAddress) || (step === 2 && !canContinueYard)}
                      style={{ opacity: (step === 1 && !canContinueAddress) || (step === 2 && !canContinueYard) ? 0.6 : 1 }}
                    >
                      Continue
                    </button>
                  ) : (
                    <button className="hero__cta" type="submit" disabled={!canSubmitRequest || submitState === 'submitting'} style={{ opacity: !canSubmitRequest || submitState === 'submitting' ? 0.6 : 1 }}>
                      {submitState === 'submitting' ? 'Saving request…' : 'Submit my request'}
                    </button>
                  )}
                </div>
              </section>
            </form>
          </>
        ) : (
          <>
            <section aria-labelledby="dashboard-heading">
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
                <div>
                  <h2 id="dashboard-heading">Welcome back, {steward.full_name.split(' ')[0]}.</h2>
                  <p style={{ marginBottom: 0 }}>{steward.street}, {steward.city}, {steward.state} {steward.zip}</p>
                </div>
                <button type="button" onClick={handleSignOut} style={{ background: 'none', border: '2px solid var(--monarch-green)', color: 'var(--monarch-green)', padding: '0.6rem 1rem', borderRadius: '6px', fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer', height: 'fit-content' }}>
                  Sign out
                </button>
              </div>
            </section>

            {submitState === 'sent' && (
              <div className="callout callout--green" style={{ marginTop: '1.5rem' }}>
                <p style={{ margin: 0 }}>Your Habitat Hero request is saved. The dashboard below will show the status as Camp Monarch moves it forward.</p>
              </div>
            )}

            <section aria-labelledby="status-heading" style={{ marginTop: '2rem' }}>
              <h2 id="status-heading">Your dashboard</h2>
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="fact-card" style={{ margin: 0 }}>
                  <div className="fact-card__number">{steward.token_balance}</div>
                  <div className="fact-card__label">Tokens on your account</div>
                </div>
                <div className="callout callout--orange" style={{ margin: 0 }}>
                  <h3 style={{ marginTop: 0 }}>Current request</h3>
                  <p style={{ marginBottom: '0.5rem' }}>
                    {currentRequest ? formatRequestStatus(currentRequest.status) : 'No active request yet.'}
                  </p>
                  {currentRequest && (
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Submitted {formatDate(currentRequest.submitted_at)} · Hold window {formatDate(currentRequest.fulfillment_due_at)}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {currentRequest?.seed_request_items?.length ? (
              <section aria-labelledby="packets-heading" style={{ marginTop: '2rem' }}>
                <h2 id="packets-heading">Packets in this request</h2>
                <div style={{ display: 'grid', gap: '0.85rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                  {currentRequest.seed_request_items.map(item => (
                    <div key={item.id} className="callout callout--green" style={{ margin: 0 }}>
                      <div style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--monarch-orange)', marginBottom: '0.35rem' }}>
                        {item.collection}
                      </div>
                      <h3 style={{ marginTop: 0 }}>{item.seed_name}</h3>
                      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{formatRequestStatus(item.status)}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section aria-labelledby="seasonal-tip-heading" className="right-now-panel" style={{ marginTop: '2rem' }}>
              <div className="right-now-panel__header" id="seasonal-tip-heading">{seasonalTip.heading}</div>
              <p className="right-now-panel__context">{seasonalTip.detail}</p>
              <button
                type="button"
                className="hero__cta"
                onClick={() => {
                  trackEvent('cta_click', 'habitat-hero', `nav-${seasonalTip.actionPage}`)
                  onNavigate(seasonalTip.actionPage)
                }}
              >
                {seasonalTip.actionLabel}
              </button>
            </section>
          </>
        )}
      </div>
    </>
  )
}
