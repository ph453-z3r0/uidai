import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FraudMap = ({ data }) => {
    // Center of India
    const center = [20.5937, 78.9629];

    // If we don't have real lat/long in data, we mock it for visualization
    // Assuming data has 'pincode', 'anomaly_score', 'type'
    const markers = data.slice(0, 50).map((item, index) => ({
        ...item,
        lat: 20 + (Math.random() * 10 - 5),
        lng: 78 + (Math.random() * 10 - 5)
    }));

    return (
        <div className="h-[500px] w-full rounded-xl overflow-hidden border border-gray-200 z-0 relative">
            <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => (
                    <CircleMarker
                        key={index}
                        center={[marker.lat, marker.lng]}
                        pathOptions={{
                            color: '#B91C1C',
                            fillColor: '#EF4444',
                            fillOpacity: 0.6,
                            weight: 1
                        }}
                        radius={marker.anomaly_score * 10} // Size based on score
                    >
                        <Popup>
                            <div className="p-2">
                                <h3 className="font-bold text-gray-900">Pincode: {marker.pincode}</h3>
                                <p className="text-sm text-gray-600">Type: {marker.type}</p>
                                <p className="text-sm font-semibold text-red-600">Score: {marker.anomaly_score}</p>
                            </div>
                        </Popup>
                        <Tooltip>{marker.pincode} (Score: {marker.anomaly_score})</Tooltip>
                    </CircleMarker>
                ))}
            </MapContainer>

            {/* Legend Overlay */}
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md border border-gray-200 text-xs shadow-md z-[1000]">
                <div className="font-semibold mb-2">Anomaly Severity</div>
                <div className="flex items-center mb-1">
                    <span className="w-4 h-4 rounded-full bg-red-500 opacity-60 mr-2"></span> High Score (Larger)
                </div>
                <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 opacity-60 mr-2"></span> Low Score (Smaller)
                </div>
            </div>
        </div>
    );
};

export default FraudMap;
