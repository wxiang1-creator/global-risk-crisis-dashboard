function About() {
  return (
    <div>
      <section className="sub-hero">
        <span className="eyebrow">Project Overview</span>
        <h1>About This Project</h1>
        <p>
          The Global Risk & Crisis Intelligence Dashboard is a full-stack web
          application that centralizes public crisis and environmental risk data
          into one interactive dashboard.
        </p>
      </section>

      <section className="content-grid">
        <div className="card info-card">
          <h2>Problem Statement</h2>
          <p>
            Global disaster and crisis data is often fragmented across multiple
            public platforms. This makes it harder for users to quickly
            understand event locations, severity, and patterns.
          </p>
        </div>

        <div className="card info-card">
          <h2>Project Goal</h2>
          <p>
            This system combines public API data, normalizes events into a
            consistent structure, and presents them through maps, charts, and
            event detail panels.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Target Users</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <span className="feature-icon">🎓</span>
            <h3>Students & Researchers</h3>
            <p>Analyze environmental and disaster trends using public data.</p>
          </div>

          <div className="feature-item">
            <span className="feature-icon">📰</span>
            <h3>Journalists</h3>
            <p>Monitor recent natural events and crisis-related updates.</p>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🌎</span>
            <h3>General Public</h3>
            <p>Understand where major environmental events are happening.</p>
          </div>

          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <h3>Policy Analysts</h3>
            <p>Explore regional risk distribution and event frequency.</p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Data Sources</h2>
        <div className="source-list">
          <div className="source-pill">
            <strong>USGS Earthquake API</strong>
            <span>Recent earthquake magnitude, location, and time data</span>
          </div>

          <div className="source-pill">
            <strong>NASA EONET API</strong>
            <span>Natural hazard events such as wildfires and storms</span>
          </div>

          <div className="source-pill">
            <strong>Open-Meteo API</strong>
            <span>Weather context based on selected event coordinates</span>
          </div>

          <div className="source-pill">
            <strong>Supabase</strong>
            <span>Database storage for saved crisis events</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
