import { useState, useEffect } from 'react'
import type { Page } from '../App'

interface SpringChecklistProps {
  onNavigate: (page: Page) => void
}

const STORAGE_KEY = 'sis-spring-checklist-2026'

interface ChecklistItem {
  id: string
  label: string
  description: string
  detail: string
  linkPage: Page | null
  linkLabel: string | null
  emoji: string
}

const ITEMS: ChecklistItem[] = [
  {
    id: 'milkweed',
    emoji: '🌿',
    label: 'Plant milkweed or a native wildflower',
    description: 'One plant makes a waypoint.',
    detail:
      'Monarchs passing through in May will lay eggs on milkweed that is at least 6 inches tall. ' +
      'Common milkweed, butterfly weed, and swamp milkweed all work. ' +
      'A single container plant on a patio counts. The migration corridor is built one yard at a time.',
    linkPage: 'choose-a-plant',
    linkLabel: 'Find a native plant →',
  },
  {
    id: 'milkweed-spotted',
    emoji: '👀',
    label: 'Find and mark milkweed in your yard or neighborhood',
    description: 'If you can\u2019t identify it, you can\u2019t protect it.',
    detail:
      'Common milkweed emerges in May as thick gray-green clusters of oval leaves. ' +
      'Butterfly weed looks similar but is more compact with bright orange flowers. ' +
      'Mark it with a flag or stone so it doesn\u2019t get mowed. ' +
      'One plant known is one plant saved.',
    linkPage: 'monarch-life',
    linkLabel: 'Learn to identify monarch life stages →',
  },
  {
    id: 'log-sighting',
    emoji: '📍',
    label: 'Log a wildlife sighting on iNaturalist',
    description: 'Your observation becomes open research data.',
    detail:
      'Every observation logged on iNaturalist — a monarch, a swallowtail, a native bee — ' +
      'feeds real migration research. The Journey North tracking map runs on citizen observations. ' +
      'Sixty seconds of your time becomes a data point researchers use for years. ' +
      'Anything alive counts: a chipmunk, a toad, a plant in bloom.',
    linkPage: 'log-a-sighting',
    linkLabel: 'Log a sighting →',
  },
  {
    id: 'leave-leaves',
    emoji: '🍂',
    label: 'Leave leaf litter in at least one corner of your yard',
    description: 'The bare ground is not dead. It\u2019s full.',
    detail:
      'Spring peepers, American toads, garter snakes, dark-eyed juncos, and hundreds of native insect species ' +
      'overwinter in leaf litter and emerge in spring when temperatures rise above 50°F. ' +
      'A single pile of last year\u2019s leaves in a shaded corner — left in place — ' +
      'is a functional habitat feature, not a maintenance failure.',
    linkPage: 'spring-peeper',
    linkLabel: 'Learn about spring peepers →',
  },
  {
    id: 'neighbor',
    emoji: '🏡',
    label: 'Tell one neighbor what you\u2019re doing and why',
    description: 'Habitat works as a corridor, not a single yard.',
    detail:
      'The research is consistent: neighbor-to-neighbor conversation is the most effective ' +
      'mechanism for spreading native planting practices. ' +
      'You don\u2019t need a speech. Show them your milkweed. Tell them one thing you saw. ' +
      'A yard next door doubles the corridor.',
    linkPage: 'talking-points',
    linkLabel: 'Get talking points →',
  },
]

export default function SpringChecklist({ onNavigate }: SpringChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setChecked(JSON.parse(stored))
    } catch {
      // ignore
    }
  }, [])

  function toggle(id: string) {
    setChecked(prev => {
      const next = { ...prev, [id]: !prev[id] }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch { /* ignore */ }
      return next
    })
  }

  const count = ITEMS.filter(item => checked[item.id]).length
  const allDone = count === ITEMS.length

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Spring 2026 Habitat Checklist
      </h1>
      <p style={{ color: '#555', marginBottom: '0.25rem', fontSize: '1.05rem' }}>
        Five concrete actions. Each one matters. Each one is doable this week.
      </p>
      <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Your progress is saved in your browser.
      </p>

      {/* Progress bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '0.4rem',
          }}
        >
          <span style={{ fontWeight: 600, fontSize: '1rem' }}>
            {allDone ? '✅ All 5 complete — thank you.' : `${count} of ${ITEMS.length} complete`}
          </span>
          <span style={{ color: '#666', fontSize: '0.85rem' }}>Spring 2026</span>
        </div>
        <div
          style={{
            height: '8px',
            background: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${(count / ITEMS.length) * 100}%`,
              background: allDone ? '#2d8c4e' : '#5a9e6f',
              borderRadius: '4px',
              transition: 'width 0.4s ease',
            }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {ITEMS.map(item => {
          const isChecked = !!checked[item.id]
          return (
            <div
              key={item.id}
              style={{
                border: `2px solid ${isChecked ? '#2d8c4e' : '#ddd'}`,
                borderRadius: '10px',
                padding: '1.25rem',
                background: isChecked ? '#f4faf6' : '#fff',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <label
                style={{
                  display: 'flex',
                  gap: '0.9rem',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  style={{
                    width: '22px',
                    height: '22px',
                    flexShrink: 0,
                    marginTop: '2px',
                    accentColor: '#2d8c4e',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>{item.emoji}</span>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        textDecoration: isChecked ? 'line-through' : 'none',
                        color: isChecked ? '#666' : '#1a1a1a',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: '0.4rem 0 0',
                      color: isChecked ? '#888' : '#444',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.description}
                  </p>
                  {!isChecked && (
                    <p
                      style={{
                        margin: '0.5rem 0 0',
                        color: '#555',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {item.detail}
                    </p>
                  )}
                  {!isChecked && item.linkPage && item.linkLabel && (
                    <button
                      onClick={e => {
                        e.preventDefault()
                        if (item.linkPage) onNavigate(item.linkPage)
                      }}
                      style={{
                        marginTop: '0.75rem',
                        background: 'none',
                        border: 'none',
                        color: '#2d8c4e',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        padding: 0,
                        textDecoration: 'underline',
                      }}
                    >
                      {item.linkLabel}
                    </button>
                  )}
                </div>
              </label>
            </div>
          )
        })}
      </div>

      {/* All done celebration */}
      {allDone && (
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: '#f0faf4',
            border: '2px solid #2d8c4e',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>🎉</p>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            You did it. Five habitat habits active this spring.
          </p>
          <p style={{ color: '#444', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            The corridor is built one yard at a time. Yours counts.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('log-a-sighting')}
              style={{
                background: '#2d8c4e',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.6rem 1.2rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Log a sighting →
            </button>
            <button
              onClick={() => onNavigate('species-gallery')}
              style={{
                background: '#fff',
                color: '#2d8c4e',
                border: '2px solid #2d8c4e',
                borderRadius: '6px',
                padding: '0.6rem 1.2rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Meet your neighbors →
            </button>
          </div>
        </div>
      )}

      {/* Why this matters */}
      {!allDone && (
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem',
            background: '#fafafa',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: '0.4rem', color: '#1a1a1a' }}>
            Why spring matters
          </p>
          <p style={{ color: '#444', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            Monarchs left their Mexican overwintering sites in March. The leading edge of the spring
            migration is moving through Texas and Oklahoma right now — arriving in the Midwest in
            3 to 5 weeks. Native plants planted today will be established and blooming when they
            arrive. The window is now.
          </p>
        </div>
      )}

      {/* Source note */}
      <p
        style={{
          marginTop: '2rem',
          color: '#999',
          fontSize: '0.8rem',
          borderTop: '1px solid #eee',
          paddingTop: '1rem',
        }}
      >
        Migration timing: Journey North (journeynorth.org). Leaf litter ecology: Doug Tallamy,
        <em> Bringing Nature Home</em>, 2007. Neighbor-influence mechanism: Lerman et al. 2020,
        <em> Urban Ecosystems</em>.
      </p>
    </div>
  )
}
