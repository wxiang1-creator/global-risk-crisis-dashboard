import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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
        <ResponsiveContainer width="100%" height={290}>
          <BarChart data={data} margin={{ top: 10, right: 12, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dbe4f0" />
            <XAxis dataKey="type" tick={{ fill: '#475569', fontSize: 13 }} />
            <YAxis allowDecimals={false} tick={{ fill: '#475569', fontSize: 13 }} />
            <Tooltip
              contentStyle={{
                borderRadius: '14px',
                border: '1px solid #dbe4f0',
                boxShadow: '0 12px 24px rgba(15,23,42,0.08)',
              }}
            />
            <Bar dataKey="count" fill="#2563eb" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default EventChart
