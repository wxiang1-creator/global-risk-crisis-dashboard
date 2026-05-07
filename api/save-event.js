import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({ error: 'Supabase is not configured' })
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const event = req.body

    const record = {
      event_id: event.id,
      title: event.title,
      event_type: event.type,
      source: event.source,
      latitude: event.latitude,
      longitude: event.longitude,
      severity_score: event.severity,
      timestamp: event.time === 'Unknown' ? null : event.time,
      description: event.description,
    }

    const { data, error } = await supabase
      .from('saved_events')
      .insert([record])
      .select()

    if (error) throw error

    res.status(201).json(data[0])
  } catch (error) {
    res.status(500).json({ error: 'Failed to save event' })
  }
}
