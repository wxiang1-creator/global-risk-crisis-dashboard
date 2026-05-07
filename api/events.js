export default async function handler(req, res) {
  try {
    const usgsUrl =
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson'

    const eonetUrl =
      'https://eonet.gsfc.nasa.gov/api/v3/events?limit=20&status=open'

    const [usgsResponse, eonetResponse] = await Promise.all([
      fetch(usgsUrl),
      fetch(eonetUrl),
    ])

    const usgsData = await usgsResponse.json()
    const eonetData = await eonetResponse.json()

    const earthquakeEvents = usgsData.features.slice(0, 20).map((item) => ({
      id: item.id,
      title: item.properties.title,
      type: 'earthquake',
      source: 'USGS',
      latitude: item.geometry.coordinates[1],
      longitude: item.geometry.coordinates[0],
      severity: item.properties.mag,
      time: new Date(item.properties.time).toISOString(),
      description: item.properties.place,
    }))

    const naturalEvents = eonetData.events.slice(0, 20).map((item) => {
      const geometry = item.geometry?.[0]
      const coordinates = geometry?.coordinates || [0, 0]

      return {
        id: item.id,
        title: item.title,
        type: item.categories?.[0]?.title || 'natural event',
        source: 'NASA EONET',
        latitude: coordinates[1],
        longitude: coordinates[0],
        severity: 1,
        time: geometry?.date || 'Unknown',
        description: item.description || item.title,
      }
    })

    res.status(200).json([...earthquakeEvents, ...naturalEvents])
  } catch (error) {
    res.status(500).json({ error: 'Failed to load event data' })
  }
}
