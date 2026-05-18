import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tphtbkodkfynyljbncen.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHRia29ka2Z5bnlsamJuY2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjAyMTksImV4cCI6MjA5MzU5NjIxOX0.Yva864Pt3GddpzssuczIRyC6qpGYXRuJM5UntBoZfRA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
