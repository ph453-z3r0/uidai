import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ForecastChart = ({ selectedPincode }) => {
    if (!selectedPincode) {
        return (
            <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex items-center justify-center text-gray-400 text-sm">
                Select a pincode to view forecast
            </div>
        );
    }

    return (
        <div className="bg-white border border-uidai-border rounded-lg p-4 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-uidai-text mb-2">Demand Forecast: {selectedPincode.pincode}</h3>
            <p className="text-xs text-gray-500 mb-4">{selectedPincode.district}, {selectedPincode.state}</p>

            <div className="flex-grow min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={selectedPincode.forecast_data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '4px', fontSize: '12px' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            name="Forecasted Updates"
                            stroke="#0066CC"
                            strokeWidth={2}
                            dot={{ r: 4, fill: '#0066CC' }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ForecastChart;
