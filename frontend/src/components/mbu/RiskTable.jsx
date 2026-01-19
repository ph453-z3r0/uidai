import React from 'react';
import { downloadCSV } from '../../utils/exportUtils';

const RiskTable = ({ data, onRowClick }) => {
    const sortedData = [...data].sort((a, b) => b.risk_score - a.risk_score).slice(0, 10);

    const handleExport = () => {
        const exportData = sortedData.map(row => ({
            pincode: row.pincode,
            state: row.state,
            district: row.district,
            risk_score: row.risk_score,
            children_at_risk: row.children_at_risk,
            recommended_action: row.risk_category === 'Red' ? 'Mobile van deployment' : 'Monitor',
            deadline_month: '2026-02-15' // Example deadline
        }));
        downloadCSV(exportData, 'mbu_campaign.csv');
    };

    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-uidai-text">Top 10 At-Risk Pincodes</h3>
                <button
                    onClick={handleExport}
                    className="text-sm text-uidai-blue hover:underline font-medium"
                >
                    Export MBU Campaign CSV
                </button>
            </div>

            <div className="overflow-auto flex-grow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pincode</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
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
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{row.district}</td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${row.risk_category === 'Red' ? 'bg-red-100 text-red-800' :
                                            row.risk_category === 'Yellow' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-green-100 text-green-800'}`}>
                                        {row.risk_score}
                                    </span>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-xs text-uidai-blue font-medium">
                                    {row.risk_category === 'Red' ? 'Deploy Van' : 'Monitor'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiskTable;
