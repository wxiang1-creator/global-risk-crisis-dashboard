import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function EventMap({ events, onSelect }) {
  const validEvents = events.filter(
    (event) =>
      typeof event.latitude === 'number' &&
      typeof event.longitude === 'number'
  )

  return (
    <section className="card">
      <h2>Global Event Map</h2>
      <div className="map-box">
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {validEvents.map((event) => (
            <Marker
              key={event.id}
              position={[event.latitude, event.longitude]}
              eventHandlers={{
                click: () => onSelect(event),
              }}
            >
              <Popup>
                <strong>{event.title}</strong>
                <br />
                Type: {event.type}
                <br />
                Severity: {event.severity}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}

export default EventMap
