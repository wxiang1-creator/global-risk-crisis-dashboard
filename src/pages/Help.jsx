function Help() {
  return (
    <div>
      <section className="sub-hero">
        <span className="eyebrow">User Guide</span>
        <h1>Help & Dashboard Guide</h1>
        <p>
          Use this guide to understand how to read the dashboard, interpret
          event data, and save important events to the database.
        </p>
      </section>

      <section className="help-grid">
        <div className="card help-card">
          <div className="help-number">01</div>
          <h2>Read the Map</h2>
          <p>
            The global map displays recent crisis and environmental events.
            Each marker represents one earthquake or natural hazard event.
          </p>
        </div>

        <div className="card help-card">
          <div className="help-number">02</div>
          <h2>Check Event Categories</h2>
          <p>
            The bar chart summarizes events by category, helping users compare
            earthquakes, wildfires, storms, and other hazards.
          </p>
        </div>

        <div className="card help-card">
          <div className="help-number">03</div>
          <h2>Select an Event</h2>
          <p>
            Click a map marker to inspect an event. The detail panel shows its
            title, source, coordinates, severity, and time.
          </p>
        </div>

        <div className="card help-card">
          <div className="help-number">04</div>
          <h2>Review Weather Context</h2>
          <p>
            The dashboard uses Open-Meteo data to show temperature and wind
            speed near the selected event location.
          </p>
        </div>

        <div className="card help-card">
          <div className="help-number">05</div>
          <h2>Save Events</h2>
          <p>
            Users can save selected events to Supabase. Saved records appear in
            the Saved Events section on the dashboard.
          </p>
        </div>

        <div className="card help-card">
          <div className="help-number">06</div>
          <h2>Understand Limitations</h2>
          <p>
            Public APIs may change or become temporarily unavailable. Event
            locations and severity scores are simplified for class project use.
          </p>
        </div>
      </section>

      <section className="card tip-card">
        <h2>Quick Interpretation Tips</h2>
        <ul>
          <li>Higher earthquake magnitude generally means stronger seismic activity.</li>
          <li>Wildfire and storm records depend on NASA EONET availability.</li>
          <li>Weather context is based on the event coordinates, not a full local forecast.</li>
          <li>Saved events are stored in the database for later review.</li>
        </ul>
      </section>
    </div>
  )
}

export default Help
