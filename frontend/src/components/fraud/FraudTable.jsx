import React from 'react';

const FraudTable = ({ data, onRowClick }) => {
    const sortedData = [...data].sort((a, b) => b.anomaly_score - a.anomaly_score).slice(0, 10);

    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-uidai-text">Top Audit Hotspots</h3>
                <button className="text-sm text-uidai-blue hover:underline font-medium">Export CSV</button>
            </div>

            <div className="overflow-auto flex-grow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pincode</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedData.map((row) => (
                            <tr
                                key={row.pincode}
                                onClick={() => onRowClick(row)}
                                className="hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{row.pincode}</td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">{row.anomaly_score}</td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{row.type}</td>
                                <td className="px-3 py-3 whitespace-nowrap text-xs font-medium">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${row.priority === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                                            row.priority === 'HIGH' ? 'bg-orange-100 text-orange-800' :
                                                'bg-yellow-100 text-yellow-800'}`}>
                                        {row.priority}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FraudTable;
