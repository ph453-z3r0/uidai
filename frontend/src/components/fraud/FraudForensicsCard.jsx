import React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { downloadCSV } from '../../utils/exportUtils';

const FraudForensicsCard = ({ selectedPincode }) => {
    if (!selectedPincode) {
        return (
            <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex items-center justify-center text-gray-400 text-sm">
                Select a hotspot to view forensics
            </div>
        );
    }

    const handleExport = () => {
        const exportData = [{
            pincode: selectedPincode.pincode,
            anomaly_score: selectedPincode.anomaly_score,
            type: selectedPincode.type,
            severity: selectedPincode.priority,
            first_action: selectedPincode.forensics.action,
            effort_hours: 4, // Example
            priority: selectedPincode.priority
        }];
        downloadCSV(exportData, `audit_playbook_${selectedPincode.pincode}.csv`);
    };

    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full flex flex-col">
            <div className="mb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-uidai-text">AUDIT FORENSICS: {selectedPincode.pincode}</h3>
                        <p className="text-sm text-gray-500">{selectedPincode.district}, {selectedPincode.state}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide bg-gray-100 text-gray-700`}>
                        {selectedPincode.status}
                    </span>
                </div>
            </div>

            <div className="space-y-4 mb-6">
                <div className="flex items-start">
                    <ExclamationCircleIcon className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">Volume Z-Score: {selectedPincode.forensics.volume_zscore}x</p>
                        <p className="text-xs text-gray-500">Significantly higher than district average</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <ExclamationCircleIcon className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">Bio/Demo Ratio: {selectedPincode.forensics.bio_to_demo_ratio}</p>
                        <p className="text-xs text-gray-500">vs {selectedPincode.forensics.avg_bio_to_demo} average</p>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <p className="text-xs font-semibold text-gray-700 mb-2">RECOMMENDED ACTION</p>
                <div className="bg-blue-50 p-3 rounded border border-blue-100 flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-uidai-blue mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700 font-medium">
                        {selectedPincode.forensics.action}
                    </p>
                </div>
                <button
                    onClick={handleExport}
                    className="w-full mt-4 border border-uidai-blue text-uidai-blue font-medium py-2 px-4 rounded-md hover:bg-blue-50 transition-colors text-sm"
                >
                    Export Audit Playbook CSV
                </button>
            </div>
        </div>
    );
};

export default FraudForensicsCard;
