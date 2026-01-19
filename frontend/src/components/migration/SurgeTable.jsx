import React from 'react';

const SurgeTable = ({ data, onRowClick, selectedPincode }) => {
    return (
        <div className="bg-white border border-uidai-border rounded-lg p-4 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-uidai-text mb-4">Top Surge Pincodes</h3>

            <div className="overflow-auto flex-grow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pincode</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surge %</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Forecast</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row) => (
                            <tr
                                key={row.pincode}
                                onClick={() => onRowClick(row)}
                                className={`cursor-pointer transition-colors ${selectedPincode?.pincode === row.pincode ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                            >
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{row.pincode}</td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-red-600 font-bold">+{row.surge_pct}%</td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{row.forecast_monthly}/mo</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SurgeTable;
