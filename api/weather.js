export default async function handler(req, res) {
  try {
    const { lat, lon } = req.query

    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required' })
    }

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`

    const response = await fetch(weatherUrl)
    const data = await response.json()

    res.status(200).json({
      temperature: data.current?.temperature_2m,
      windSpeed: data.current?.wind_speed_10m,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to load weather data' })
  }
}
