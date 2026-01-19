import React from 'react';

const FraudFilterPanel = () => {
    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-uidai-text mb-6">Filters</h3>

            <div className="space-y-6">
                {/* State Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select State</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>All States</option>
                        <option>Odisha</option>
                        <option>Uttarakhand</option>
                        <option>Delhi</option>
                    </select>
                </div>

                {/* Anomaly Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Anomaly Type</label>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-uidai-blue focus:ring-uidai-blue border-gray-300 rounded" />
                            <label className="ml-2 text-sm text-gray-600">Volume Spike</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-uidai-blue focus:ring-uidai-blue border-gray-300 rounded" />
                            <label className="ml-2 text-sm text-gray-600">Mix Anomaly</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-uidai-blue focus:ring-uidai-blue border-gray-300 rounded" />
                            <label className="ml-2 text-sm text-gray-600">Timing Pattern</label>
                        </div>
                    </div>
                </div>

                {/* Severity */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>All Severities</option>
                        <option>Critical</option>
                        <option>High</option>
                        <option>Medium</option>
                    </select>
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                    </select>
                </div>

                <button className="w-full bg-uidai-blue text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4">
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default FraudFilterPanel;
