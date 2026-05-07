import { useEffect, useState } from 'react'
import EventChart from '../components/EventChart'
import EventMap from '../components/EventMap'

function Home() {
  const [events, setEvents] = useState([])
  const [savedEvents, setSavedEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  async function loadEvents() {
    try {
      setLoading(true)
      const response = await fetch('/api/events')
      const data = await response.json()
      setEvents(data)
      if (data.length > 0) {
        setSelectedEvent(data[0])
      }
    } catch (error) {
      console.error(error)
      setMessage('Unable to load event data.')
    } finally {
      setLoading(false)
    }
  }

  async function loadSavedEvents() {
    try {
      const response = await fetch('/api/saved-events')
      const data = await response.json()
      setSavedEvents(data)
    } catch (error) {
      console.error(error)
    }
  }

  async function loadWeather(event) {
    if (!event) return

    try {
      const response = await fetch(
        `/api/weather?lat=${event.latitude}&lon=${event.longitude}`
      )
      const data = await response.json()
      setWeather(data)
    } catch (error) {
      console.error(error)
      setWeather(null)
    }
  }

  async function saveEvent() {
    if (!selectedEvent) return

    try {
      const response = await fetch('/api/save-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedEvent),
      })

      if (!response.ok) {
        throw new Error('Failed to save event')
      }

      setMessage('Event saved successfully.')
      loadSavedEvents()
    } catch (error) {
      console.error(error)
      setMessage('Unable to save event. Supabase may not be configured yet.')
    }
  }

  useEffect(() => {
    loadEvents()
    loadSavedEvents()
  }, [])

  useEffect(() => {
    loadWeather(selectedEvent)
  }, [selectedEvent])

  return (
    <div>
      <section className="hero">
        <h1>Global Risk & Crisis Intelligence Dashboard</h1>
        <p>
          This dashboard aggregates public crisis and environmental risk data
          from multiple APIs and presents events through maps, charts, and
          structured summaries.
        </p>
      </section>

      {loading && <p>Loading crisis event data...</p>}
      {message && <p className="message">{message}</p>}

      <div className="dashboard-grid">
        <EventMap events={events} onSelect={setSelectedEvent} />
        <EventChart events={events} />
      </div>

      <div className="dashboard-grid">
        <section className="card">
          <h2>Selected Event Detail</h2>
          {selectedEvent ? (
            <>
              <h3>{selectedEvent.title}</h3>
              <p><strong>Type:</strong> {selectedEvent.type}</p>
              <p><strong>Source:</strong> {selectedEvent.source}</p>
              <p><strong>Severity:</strong> {selectedEvent.severity}</p>
              <p><strong>Latitude:</strong> {selectedEvent.latitude}</p>
              <p><strong>Longitude:</strong> {selectedEvent.longitude}</p>
              <p><strong>Time:</strong> {selectedEvent.time}</p>

              {weather && (
                <div className="weather-box">
                  <h4>Weather Context</h4>
                  <p><strong>Temperature:</strong> {weather.temperature} °C</p>
                  <p><strong>Wind Speed:</strong> {weather.windSpeed} km/h</p>
                </div>
              )}

              <button onClick={saveEvent}>Save Event to Database</button>
            </>
          ) : (
            <p>Select an event from the map.</p>
          )}
        </section>

        <section className="card">
          <h2>Saved Events from Supabase</h2>
          {savedEvents.length === 0 ? (
            <p>No saved events yet.</p>
          ) : (
            <ul className="event-list">
              {savedEvents.map((event) => (
                <li key={event.id}>
                  <strong>{event.title}</strong>
                  <br />
                  {event.event_type} | {event.source}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
