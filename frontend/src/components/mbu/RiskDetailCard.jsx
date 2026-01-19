import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RiskDetailCard = ({ selectedPincode }) => {
    if (!selectedPincode) {
        return (
            <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex items-center justify-center text-gray-400 text-sm">
                Select a pincode to view details
            </div>
        );
    }

    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex flex-col">
            <div className="mb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-uidai-text">PINCODE {selectedPincode.pincode}</h3>
                        <p className="text-sm text-gray-500">{selectedPincode.district}, {selectedPincode.state}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide
            ${selectedPincode.risk_category === 'Red' ? 'bg-red-100 text-red-700' :
                            selectedPincode.risk_category === 'Yellow' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'}`}>
                        {selectedPincode.risk_category} Risk
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase">Risk Score</p>
                    <p className={`text-xl font-bold ${selectedPincode.risk_category === 'Red' ? 'text-red-600' : 'text-gray-900'}`}>
                        {selectedPincode.risk_score}
                    </p>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase">Children At Risk</p>
                    <p className="text-xl font-bold text-gray-900">{selectedPincode.children_at_risk}</p>
                </div>
            </div>

            <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-1">RECOMMENDATION</p>
                <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded border border-blue-100">
                    {selectedPincode.risk_category === 'Red'
                        ? "Immediate deployment of Mobile Enrolment Van recommended by Feb 15."
                        : "Continue monitoring. Schedule awareness camp next month."}
                </p>
            </div>

            <div className="flex-grow min-h-[150px]">
                <p className="text-xs font-semibold text-gray-700 mb-2">RISK TREND (LAST 5 MONTHS)</p>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={selectedPincode.trend_data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} />
                        <YAxis hide domain={[0, 1]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '4px', fontSize: '12px' }}
                            itemStyle={{ color: '#0066CC' }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#0066CC" strokeWidth={2} dot={{ r: 3, fill: '#0066CC' }} activeDot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RiskDetailCard;
