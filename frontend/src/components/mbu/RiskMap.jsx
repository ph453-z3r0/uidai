import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { scaleLinear } from 'd3-scale';

// Using a hosted TopoJSON for India
const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-districts.json";

const RiskMap = ({ data }) => {
    const [tooltipContent, setTooltipContent] = useState("");

    // Process data to map pincodes/districts to coordinates (Mocking this for now as we don't have a pincode DB)
    // In a real app, we'd join this with a geo-database.
    // For this demo, we'll project some random points on the map or use the district centers if available.
    // Since we can't easily map pincodes to lat/long without a massive DB, we will visualize the "State" level risk
    // or just show some sample markers for the demo.

    // Let's assume 'data' contains items with 'state', 'pincode', 'risk_score'.
    // We'll aggregate by state for the choropleth or just show markers.

    // For the purpose of this "Production Ready" demo, let's show markers for high risk areas.
    // We'll generate some random coordinates within India's bounding box for visualization if we don't have real lat/long.
    // India Bounding Box: 8.4 - 37.6 N, 68.7 - 97.25 E

    const markers = data.slice(0, 50).map((item, index) => ({
        name: item.pincode,
        coordinates: [
            77 + (Math.random() * 10 - 5), // Random longitude around center
            20 + (Math.random() * 10 - 5)  // Random latitude around center
        ],
        risk_score: item.risk_score,
        risk_category: item.risk_category
    }));

    return (
        <div className="relative w-full h-[500px] bg-blue-50 rounded-xl overflow-hidden border border-gray-200">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [78.9629, 22.5937] // Center of India
                }}
                className="w-full h-full"
            >
                <ZoomableGroup>
                    <Geographies geography={INDIA_TOPO_JSON}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#E5E7EB"
                                    stroke="#D1D5DB"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#D1D5DB", outline: "none" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {markers.map((point, index) => (
                        <Marker
                            key={index}
                            coordinates={point.coordinates}
                            onMouseEnter={() => {
                                setTooltipContent(`Pincode: ${point.name} | Risk: ${point.risk_score}`);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                            data-tooltip-id="map-tooltip"
                            data-tooltip-content={`Pincode: ${point.name} | Risk: ${point.risk_score}`}
                            className="cursor-pointer"
                        >
                            <circle
                                r={point.risk_category === 'Red' ? 6 : 4}
                                fill={point.risk_category === 'Red' ? '#EF4444' : point.risk_category === 'Yellow' ? '#F59E0B' : '#10B981'}
                                stroke="#fff"
                                strokeWidth={1.5}
                                className="hover:scale-125 transition-transform duration-200"
                            />
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip id="map-tooltip" className="z-50" />

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md border border-gray-200 text-xs shadow-sm">
                <div className="flex items-center mb-1"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Critical Risk</div>
                <div className="flex items-center mb-1"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> Moderate Risk</div>
                <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span> Low Risk</div>
            </div>
        </div>
    );
};

export default RiskMap;
