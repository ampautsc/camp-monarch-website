import { useState } from 'react'

// Supabase project for camp-monarch-website
// The anon key is intentionally public — client-side only, insert-restricted by RLS
const SUPABASE_URL =
  (import.meta as { env?: Record<string, string> }).env?.VITE_SUPABASE_URL ??
  'https://tphtbkodkfynyljbncen.supabase.co'
const SUPABASE_ANON_KEY =
  (import.meta as { env?: Record<string, string> }).env?.VITE_SUPABASE_ANON_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHRia29ka2Z5bnlsamJuY2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjAyMTksImV4cCI6MjA5MzU5NjIxOX0.Yva864Pt3GddpzssuczIRyC6qpGYXRuJM5UntBoZfRA'

interface FeedbackWidgetProps {
  page: string
}

type WidgetState = 'closed' | 'open' | 'submitting' | 'success' | 'error'

export default function FeedbackWidget({ page }: FeedbackWidgetProps) {
  const [state, setState] = useState<WidgetState>('closed')
  const [message, setMessage] = useState('')

  const open = () => setState('open')
  const close = () => {
    setState('closed')
    setMessage('')
  }

  const submit = async () => {
    if (!message.trim()) return
    setState('submitting')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ page, message: message.trim() }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setState('success')
      setTimeout(() => {
        setState('closed')
        setMessage('')
      }, 2000)
    } catch {
      setState('error')
    }
  }

  return (
    <>
      {/* Floating button — always visible */}
      <button
        onClick={open}
        aria-label="Share feedback"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 1000,
          background: 'var(--monarch-orange, #e07b22)',
          color: '#fff',
          border: 'none',
          borderRadius: '2rem',
          padding: '0.6rem 1.1rem',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.22)',
          letterSpacing: '0.01em',
          lineHeight: 1.3,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span style={{ fontSize: '1rem' }}>💬</span> Share thoughts
      </button>

      {/* Modal overlay — only when open/submitting/success/error */}
      {state !== 'closed' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Feedback"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1001,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: '1.5rem',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              width: 'min(360px, 92vw)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {state === 'success' ? (
              <p style={{ margin: 0, textAlign: 'center', fontWeight: 600, color: '#2d6a2d' }}>
                Thank you — your feedback goes directly to Sis.
              </p>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Share your thoughts</h2>
                  <button
                    onClick={close}
                    aria-label="Close feedback"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      lineHeight: 1,
                      color: '#555',
                      padding: '0 0.2rem',
                    }}
                  >
                    ✕
                  </button>
                </div>

                <textarea
                  placeholder="What would help you take action for Monarchs?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
                  maxLength={1000}
                  rows={4}
                  disabled={state === 'submitting'}
                  style={{
                    width: '100%',
                    resize: 'vertical',
                    borderRadius: '0.4rem',
                    border: '1px solid #ccc',
                    padding: '0.6rem',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                />

                {state === 'error' && (
                  <p style={{ margin: 0, color: '#b91c1c', fontSize: '0.85rem' }}>
                    Something went wrong — please try again.
                  </p>
                )}

                <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'flex-end' }}>
                  <button
                    onClick={close}
                    disabled={state === 'submitting'}
                    style={{
                      background: 'none',
                      border: '1px solid #ccc',
                      borderRadius: '0.4rem',
                      padding: '0.45rem 1rem',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submit}
                    disabled={state === 'submitting' || !message.trim()}
                    style={{
                      background: 'var(--monarch-orange, #e07b22)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.4rem',
                      padding: '0.45rem 1.2rem',
                      cursor: state === 'submitting' || !message.trim() ? 'not-allowed' : 'pointer',
                      opacity: state === 'submitting' || !message.trim() ? 0.65 : 1,
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    {state === 'submitting' ? 'Sending…' : 'Send'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
