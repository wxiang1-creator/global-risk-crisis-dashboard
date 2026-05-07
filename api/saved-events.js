import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(200).json([])
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { data, error } = await supabase
      .from('saved_events')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    res.status(200).json(data)
  } catch (error) {
      res.status(500).json({
        error: 'Failed to save event',
        details: error.message,
        hasUrl: Boolean(process.env.SUPABASE_URL),
        hasKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY)
      })
  }
}
