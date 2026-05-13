import { useState } from 'react'
import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

interface HabitatScoreProps {
  onNavigate: (page: Page) => void
}

// Lessons applied:
// bta-004 / lesson-043: assume people already care — give permission + a specific path
// lesson-030: teach attention; every question is an invitation to notice
// 234571eb: lead with practical help, not mission statements
// lesson-025: observation is an art — each question teaches ecological noticing

type Answer = string | null

interface Question {
  id: string
  text: string
  subtext?: string
  options: { value: string; label: string; emoji: string }[]
}

const questions: Question[] = [
  {
    id: 'milkweed',
    text: 'Do you have milkweed in your yard right now?',
    subtext: 'Milkweed is the only plant Monarch caterpillars can eat. No milkweed means no caterpillars.',
    options: [
      { value: 'yes-native', emoji: '🌿', label: 'Yes — native species (Common, Butterfly Weed, Swamp, Showy, etc.)' },
      { value: 'yes-tropical', emoji: '🌺', label: 'Yes — tropical milkweed (orange-and-yellow from a garden center)' },
      { value: 'no-plan', emoji: '📦', label: 'Not yet, but I have plants coming' },
      { value: 'no', emoji: '🪨', label: 'No milkweed yet' },
    ],
  },
  {
    id: 'sun',
    text: 'How much sun does your best available planting spot get?',
    subtext: 'Most milkweed and monarch nectar plants need at least 6 hours of direct sun.',
    options: [
      { value: 'full', emoji: '☀️', label: 'Full sun — 6+ hours most days' },
      { value: 'partial', emoji: '⛅', label: 'Partial sun — 3–5 hours' },
      { value: 'shade', emoji: '🌑', label: 'Mostly shade — under 3 hours' },
      { value: 'container', emoji: '🪴', label: 'Containers only — balcony, patio, or no ground to plant in' },
    ],
  },
  {
    id: 'pesticides',
    text: 'Does your yard use pesticides?',
    subtext: 'Pesticides — including "mosquito spray services" — kill caterpillars and the insects birds eat.',
    options: [
      { value: 'none', emoji: '✅', label: 'None — our yard is pesticide-free' },
      { value: 'herbicide-only', emoji: '🌱', label: 'Herbicides only (no insecticides)' },
      { value: 'some', emoji: '⚠️', label: 'Some use — occasional insecticides or lawn treatment' },
      { value: 'regular', emoji: '🚫', label: 'Regular use — or neighbors spray heavily' },
    ],
  },
  {
    id: 'nectar',
    text: 'Do you have native late-blooming nectar plants?',
    subtext: 'Goldenrod, native asters, and coneflowers. Adult Monarchs need nectar to fuel egg-laying and fall migration.',
    options: [
      { value: 'yes-abundant', emoji: '🌼', label: 'Yes — several species blooming June through October' },
      { value: 'yes-some', emoji: '🌸', label: 'A few — one or two native nectar species' },
      { value: 'summer-only', emoji: '🌻', label: 'Summer bloomers only — nothing blooming in September or October' },
      { value: 'none', emoji: '🪨', label: 'No native nectar plants yet' },
    ],
  },
  {
    id: 'sightings',
    text: 'Have you seen Monarchs in your yard or neighborhood?',
    options: [
      { value: 'breeding', emoji: '🥚', label: 'Yes — including eggs or caterpillars on milkweed' },
      { value: 'passing', emoji: '🦋', label: 'Yes — passing through or nectaring, but no eggs' },
      { value: 'occasional', emoji: '👀', label: 'Occasionally — once or twice a season' },
      { value: 'none', emoji: '❓', label: "Not yet — or I'm not sure what I've seen" },
    ],
  },
  {
    id: 'challenge',
    text: "What's your biggest challenge right now?",
    options: [
      { value: 'know-what-to-plant', emoji: '🌱', label: "I don't know what to plant or where to get it" },
      { value: 'space', emoji: '📐', label: 'Limited space — small yard, containers, or rental' },
      { value: 'hoa', emoji: '🏘️', label: 'HOA rules or neighbor pushback' },
      { value: 'deer-pests', emoji: '🦌', label: 'Deer, rabbits, or pests keep eating my plants' },
      { value: 'next-step', emoji: '🗺️', label: "I'm already doing the basics — what's the next level?" },
      { value: 'just-starting', emoji: '👋', label: "Just starting — I want to help but don't know where to begin" },
    ],
  },
]

function scoreAnswers(answers: Record<string, Answer>): {
  tier: 'starting' | 'growing' | 'thriving'
  tierLabel: string
  tierColor: string
  what: string[]
  nextStep: { headline: string; detail: string; action?: { label: string; page?: Page; url?: string } }
  encouragement: string
} {
  const { milkweed, nectar, pesticides, sightings, challenge, sun } = answers

  let score = 0
  if (milkweed === 'yes-native') score += 3
  else if (milkweed === 'yes-tropical') score += 1
  else if (milkweed === 'no-plan') score += 1
  if (nectar === 'yes-abundant') score += 2
  else if (nectar === 'yes-some') score += 1
  if (pesticides === 'none') score += 2
  else if (pesticides === 'herbicide-only') score += 1
  if (sightings === 'breeding') score += 2
  else if (sightings === 'passing') score += 1

  const tier = score >= 7 ? 'thriving' : score >= 3 ? 'growing' : 'starting'
  const tierLabel = tier === 'thriving' ? '🦋 Established Habitat' : tier === 'growing' ? '🌿 Growing Habitat' : '🌱 Starting Out'
  const tierColor = tier === 'thriving' ? 'var(--monarch-green)' : tier === 'growing' ? 'var(--monarch-orange)' : 'var(--monarch-gold)'

  const what: string[] = []
  if (milkweed === 'yes-native') what.push('Native milkweed — the single most important thing')
  if (milkweed === 'no-plan') what.push('You have plants on the way — that is forward motion')
  if (nectar === 'yes-abundant' || nectar === 'yes-some') what.push('Nectar plants to fuel adult Monarchs')
  if (pesticides === 'none') what.push('A pesticide-free yard — Monarchs can actually survive here')
  if (sightings === 'breeding') what.push('Active breeding — eggs and caterpillars in your yard')
  if (sightings === 'passing') what.push('Monarchs already using your yard as a waypoint')
  if (what.length === 0) what.push('You are paying attention — that is where restoration begins')

  let nextStep: { headline: string; detail: string; action?: { label: string; page?: Page; url?: string } }

  if (milkweed === 'yes-tropical') {
    nextStep = {
      headline: 'Replace tropical milkweed with a native species.',
      detail: 'Tropical milkweed (the orange-and-yellow kind sold widely at garden centers) stays green year-round in warm climates. This keeps Monarchs breeding past migration season and concentrates an OE parasite that weakens butterflies. Cut it back hard now and replace it with a species native to your region. Native milkweed dies back naturally in fall — exactly what Monarchs need.',
      action: { label: 'Find native milkweed for your region →', page: 'plant-milkweed' },
    }
  } else if (milkweed === 'no' || milkweed === 'no-plan') {
    nextStep = {
      headline: 'Plant one milkweed this season.',
      detail: 'A single Common Milkweed or Butterfly Weed in a sunny spot does real work. A Monarch female will find it, lay eggs, and those caterpillars will become adults that join the migration. No milkweed means no caterpillars. One plant is enough to start.',
      action: { label: 'Which milkweed species is right for your yard →', page: 'plant-milkweed' },
    }
  } else if (pesticides === 'regular' || pesticides === 'some') {
    nextStep = {
      headline: 'Reduce or eliminate insecticide use.',
      detail: 'Pesticides are the second-largest threat to Monarchs after habitat loss. Insecticides do not distinguish between target insects and Monarch caterpillars, native bees, or the insects birds eat. If a mosquito spray service treats your yard, even one treatment can wipe out a generation of caterpillars. The milkweed matters — but a sprayed yard turns milkweed into a trap.',
      action: { label: 'What habitat actually requires →', page: 'why-monarchs' },
    }
  } else if (nectar === 'none' || nectar === 'summer-only') {
    nextStep = {
      headline: 'Add late-blooming native nectar plants.',
      detail: 'Fall migration happens in September and October. Adult Monarchs need large amounts of nectar to build fat reserves for the 2,500-mile flight to Mexico. If your yard blooms out by August, the migrating butterflies passing through in September have nothing to fuel on. Native goldenrod, asters, and ironweed bloom through first frost. They are the fill-up stations on the migration highway.',
      action: { label: 'Find plants that bloom late →', page: 'choose-a-plant' },
    }
  } else if (challenge === 'next-step' && sightings === 'breeding') {
    nextStep = {
      headline: 'Log your breeding activity on iNaturalist.',
      detail: 'You have active breeding in your yard — eggs, caterpillars, or chrysalises on milkweed. This is conservation-grade data. Researchers tracking population recovery use citizen observations to map where breeding is occurring. Your yard is not just habitat — it is a monitoring site. Upload observations to iNaturalist and tag them as Danaus plexippus.',
      action: { label: 'Log on iNaturalist →', url: 'https://www.inaturalist.org/taxa/48662-Danaus-plexippus' },
    }
  } else if (challenge === 'hoa') {
    nextStep = {
      headline: 'Register your yard as a Monarch Waystation.',
      detail: 'A Monarch Waystation is a nationally recognized registered habitat through Monarch Watch. It comes with an official designation number and a sign you can post — which can change HOA conversations. "I have a registered wildlife habitat" reads differently than "I have a weedy garden." The registration takes 10 minutes and costs $16 for the sign.',
      action: { label: 'Register as a Monarch Waystation →', url: 'https://www.monarchwatch.org/waystations/' },
    }
  } else if (challenge === 'space' || sun === 'container') {
    nextStep = {
      headline: 'One container with milkweed, one with nectar.',
      detail: 'A 12-inch pot in direct sun supports Butterfly Weed (Asclepias tuberosa), the most drought-tolerant native milkweed. A second pot with a coneflower or native aster gives adult Monarchs nectar. Monarchs do not require acres — they require milkweed and nectar. Two containers in a sunny spot is a real waypoint on the migration route.',
      action: { label: 'Which species work in containers →', page: 'plant-milkweed' },
    }
  } else if (challenge === 'know-what-to-plant') {
    nextStep = {
      headline: 'Start with the native plant finder.',
      detail: 'The plant finder lets you filter by region, sun exposure, bloom time, and which wildlife each plant supports. Enter your situation and you will get a list of species that actually work for your yard — not a generic list. Native milkweed that fits your climate and nectar plants that bloom in sequence from spring through fall.',
      action: { label: 'Open the native plant finder →', page: 'choose-a-plant' },
    }
  } else if (challenge === 'deer-pests') {
    nextStep = {
      headline: 'Choose deer-resistant native plants.',
      detail: 'Deer pressure does not have to mean no habitat. Butterfly Weed (Asclepias tuberosa) is naturally unpalatable to deer and is the most drought-tolerant native milkweed. Wild Bergamot, Anise Hyssop, Black-eyed Susan, and native asters are also rarely browsed. A simple wire cage around young plants for the first season lets roots establish before deer pressure becomes critical. Most native plants, once established, are tougher than deer can fully defeat.',
      action: { label: 'Find native plants for your yard →', page: 'choose-a-plant' },
    }
  } else if (challenge === 'just-starting') {
    nextStep = {
      headline: 'Start with one plant in one sunny spot.',
      detail: 'The most effective first step for Monarchs is native milkweed in a spot with at least 6 hours of sun. Butterfly Weed (Asclepias tuberosa) is drought-tolerant, low-maintenance, and blooms orange-gold in summer. A single plant is a real habitat contribution. Most people who start with one plant add more the following season. You do not need a plan yet — you need one plant.',
      action: { label: 'Find native milkweed for your region →', page: 'plant-milkweed' },
    }
  } else {
    nextStep = {
      headline: 'Extend your bloom season through October.',
      detail: 'The fall migration passes through your region in September and October. If your yard blooms through that window, you are a fuel stop on one of the great migrations on Earth. Native goldenrod and asters are the highest-value additions. They also support specialist native bees that overwinter and emerge early in spring.',
      action: { label: 'Find late-blooming native plants →', page: 'choose-a-plant' },
    }
  }

  const encouragement =
    tier === 'thriving'
      ? 'Your yard is doing real conservation work. The Monarchs that pass through this fall will find something here.'
      : tier === 'growing'
      ? 'You are further along than most yards in your neighborhood. The next step will compound what you already have.'
      : 'Most yards in the US have nothing for Monarchs. Adding one milkweed plant puts you in the minority that is actively helping.'

  return { tier, tierLabel, tierColor, what, nextStep, encouragement }
}

export default function HabitatScore({ onNavigate }: HabitatScoreProps) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [submitted, setSubmitted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)

  const handleAnswer = (questionId: string, value: string) => {
    const updated = { ...answers, [questionId]: value }
    setAnswers(updated)
    trackEvent('habitat_check_answer', questionId, value)
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(q => q + 1), 180)
    } else {
      setSubmitted(true)
      trackEvent('habitat_check_complete', 'habitat-score', Object.values(updated).join('|'))
    }
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setCurrentQ(0)
  }

  const result = submitted ? scoreAnswers(answers) : null
  const progress = submitted ? questions.length : currentQ
  const pct = Math.round((progress / questions.length) * 100)

  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Yard Check</div>
        <h1>Where is your yard right now<br />for Monarchs?</h1>
        <p className="hero__lead">
          Six questions. One specific next step — not a generic list.
          Meet Monarchs where you actually are, not where an ideal yard is.
        </p>
      </section>

      <div className="page">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
            <span>Question {Math.min(currentQ + 1, questions.length)} of {questions.length}</span>
            <span>{pct}% complete</span>
          </div>
          <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: 'var(--monarch-orange)', borderRadius: '3px', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ marginTop: 0 }}>{questions[currentQ].text}</h2>
              {questions[currentQ].subtext && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  {questions[currentQ].subtext}
                </p>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {questions[currentQ].options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(questions[currentQ].id, opt.value)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      background: 'white',
                      border: '2px solid var(--border)',
                      borderRadius: '8px',
                      padding: '0.9rem 1.1rem',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      fontSize: '1rem',
                      textAlign: 'left',
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '1px' }}>{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {currentQ > 0 && (
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                {questions.slice(0, currentQ).map(q => (
                  <span key={q.id} style={{ marginRight: '1rem' }}>
                    {q.options.find(o => o.value === answers[q.id])?.emoji}{' '}
                    {q.options.find(o => o.value === answers[q.id])?.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          result && (
            <div>
              <div style={{
                display: 'inline-block',
                background: result.tierColor,
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '24px',
                fontWeight: 'bold',
                fontSize: '1.05rem',
                marginBottom: '1.5rem',
              }}>
                {result.tierLabel}
              </div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                {result.encouragement}
              </p>
              <section aria-labelledby="what-heading">
                <h2 id="what-heading" style={{ marginTop: 0 }}>What your yard already has working for it</h2>
                <ul>
                  {result.what.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--monarch-green)', fontWeight: 'bold', marginRight: '0.4rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="next-heading">
                <div className="action-panel" style={{ marginTop: '1.75rem' }}>
                  <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--monarch-orange)', marginBottom: '0.4rem' }}>
                    Your highest-impact next step
                  </div>
                  <h2 id="next-heading" style={{ color: 'white', marginTop: '0.25rem' }}>{result.nextStep.headline}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.25rem' }}>{result.nextStep.detail}</p>
                  {result.nextStep.action && (() => {
                    const act = result.nextStep.action
                    return act.page ? (
                      <button
                        onClick={() => { onNavigate(act.page as Page); trackEvent('habitat_check_cta', act.page!, 'page') }}
                        className="hero__cta"
                        style={{ fontSize: '0.95rem', padding: '0.7rem 1.5rem' }}
                      >
                        {act.label}
                      </button>
                    ) : (
                      <a
                        href={act.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__cta"
                        style={{ fontSize: '0.95rem', padding: '0.7rem 1.5rem' }}
                        onClick={() => trackEvent('habitat_check_cta', act.url || '', 'external')}
                      >
                        {act.label}
                      </a>
                    )
                  })()}
                </div>
              </section>
              <section style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={handleReset}
                  style={{ background: 'none', border: '2px solid var(--border)', borderRadius: '6px', padding: '0.6rem 1.2rem', fontFamily: 'inherit', fontSize: '0.95rem', cursor: 'pointer', color: 'var(--text-secondary)' }}
                >
                  ← Retake the check
                </button>
                <button
                  onClick={() => onNavigate('take-action')}
                  style={{ background: 'none', border: '2px solid var(--border)', borderRadius: '6px', padding: '0.6rem 1.2rem', fontFamily: 'inherit', fontSize: '0.95rem', cursor: 'pointer', color: 'var(--text-secondary)' }}
                >
                  See all 5 action steps →
                </button>
              </section>
              <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '60ch' }}>
                This check is a starting point.{' '}
                <button
                  onClick={() => onNavigate('faq')}
                  style={{ background: 'none', border: 'none', color: 'var(--monarch-green)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', textDecoration: 'underline', padding: 0 }}
                >
                  See the FAQ
                </button>
                {' '}for specific caterpillar or milkweed questions.
              </p>
            </div>
          )
        )}
      </div>
    </>
  )
}
