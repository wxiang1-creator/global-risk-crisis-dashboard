import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function EventChart({ events }) {
  const counts = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1
    return acc
  }, {})

  const data = Object.entries(counts).map(([type, count]) => ({
    type,
    count,
  }))

  return (
    <section className="card">
      <h2>Event Category Summary</h2>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <XAxis dataKey="type" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default EventChart
