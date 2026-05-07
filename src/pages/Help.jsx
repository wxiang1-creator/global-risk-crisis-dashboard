function Help() {
  return (
    <div className="card">
      <h1>Help & User Guide</h1>

      <h2>How to Use the Dashboard</h2>
      <p>
        The Home page displays recent crisis and environmental events. Users can
        click map markers to inspect an event and view related weather context.
      </p>

      <h2>Map</h2>
      <p>
        The map shows the geographic distribution of recent events. Each marker
        represents one earthquake or natural hazard event.
      </p>

      <h2>Chart</h2>
      <p>
        The chart summarizes the number of events by category. This helps users
        quickly compare event types.
      </p>

      <h2>Saving Events</h2>
      <p>
        Users can save selected events to the Supabase database. Saved events
        are displayed in the Saved Events section.
      </p>

      <h2>Known Limitations</h2>
      <p>
        The dashboard depends on public API availability. Some event locations
        may be approximate, and the severity score is simplified for class
        project purposes.
      </p>
    </div>
  )
}

export default Help
