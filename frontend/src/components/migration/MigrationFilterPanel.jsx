import React from 'react';

const MigrationFilterPanel = () => {
    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-uidai-text mb-6">Filters</h3>

            <div className="space-y-6">
                {/* State Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select State</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>All States</option>
                        <option>Uttarakhand</option>
                        <option>Karnataka</option>
                        <option>Haryana</option>
                        <option>Maharashtra</option>
                    </select>
                </div>

                {/* Forecast Horizon */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Forecast Horizon</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>3 Months</option>
                        <option>6 Months</option>
                        <option>12 Months</option>
                    </select>
                </div>

                {/* Scenario */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Scenario</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>Base Case</option>
                        <option>+10% Buffer</option>
                        <option>+20% Buffer</option>
                        <option>Worst Case</option>
                    </select>
                </div>

                <button className="w-full bg-uidai-blue text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4">
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default MigrationFilterPanel;
