import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface YouTubeVideo {
  id: string
  title: string
  youtube_url: string
  thumbnail_url?: string
  created_at: string
  updated_at: string
}
