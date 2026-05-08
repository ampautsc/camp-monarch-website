// Camp Monarch feature analytics
// Tracks feature usage — NOT individual users.
// PRIVACY GUARANTEE: No IP address, session ID, user agent, fingerprint, or any
// personally identifiable information is ever stored. The anon RLS policy permits
// INSERT only — the browser cannot read any events data.

// Same Supabase project as FeedbackWidget — anon key is intentionally public,
// constrained to INSERT-only by Row Level Security.
const SUPABASE_URL = 'https://tphtbkodkfynyljbncen.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHRia29ka2Z5bnlsamJuY2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjAyMTksImV4cCI6MjA5MzU5NjIxOX0.Yva864Pt3GddpzssuczIRyC6qpGYXRuJM5UntBoZfRA'

export type AnalyticsEventType =
  | 'page_view'
  | 'cta_click'
  | 'outbound_link'
  | 'external_link'
  | 'feedback_open'
  | 'tool_interaction'
  | 'plant_detail_view'
  | 'faq_open'

/**
 * Fire-and-forget analytics event. Never awaited. Never blocks UI.
 * Failures are silently swallowed — analytics must not degrade the user experience.
 *
 * @param eventType  Categorical event type
 * @param page       Page slug (matches App.tsx Page type values)
 * @param feature    Optional: specific feature within the page
 * @param meta       Optional: non-PII extra context (e.g. { plant: 'butterfly-weed' })
 */
export function trackEvent(
  eventType: AnalyticsEventType,
  page: string,
  feature?: string,
  meta?: Record<string, string | number | boolean>,
): void {
  fetch(`${SUPABASE_URL}/rest/v1/events`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      event_type: eventType,
      page,
      feature: feature ?? null,
      meta: meta ?? null,
    }),
  }).catch(() => {
    // Silently swallow — analytics failures must never surface to users
  })
}
