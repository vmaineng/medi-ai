import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Get the current session from the Supabase server.
 *
 * @returns {Promise<Session | null>} The current session, or null if no session exists.
 */
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}