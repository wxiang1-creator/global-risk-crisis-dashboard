function About() {
  return (
    <div className="card">
      <h1>About This Project</h1>
      <p>
        The Global Risk & Crisis Intelligence Dashboard is a full-stack web
        application designed to centralize public crisis and environmental risk
        information. The project addresses the problem that global disaster data
        is often fragmented across multiple public platforms.
      </p>

      <h2>Target Users</h2>
      <p>
        The target users include students, researchers, journalists, policy
        analysts, and general users who want a quick overview of global natural
        hazard events.
      </p>

      <h2>Data Sources</h2>
      <ul>
        <li>USGS Earthquake API for recent earthquake data</li>
        <li>NASA EONET API for natural hazard events</li>
        <li>Open-Meteo API for weather context by location</li>
        <li>Supabase for saved event records</li>
      </ul>

      <h2>System Goal</h2>
      <p>
        The goal is to combine public API data, normalize it into a consistent
        event structure, and display it through a dashboard with maps, charts,
        and event details.
      </p>
    </div>
  )
}

export default About
