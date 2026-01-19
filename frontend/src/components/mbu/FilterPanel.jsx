import React from 'react';

const FilterPanel = () => {
    return (
        <div className="bg-white border border-uidai-border rounded-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-uidai-text mb-6">Filters</h3>

            <div className="space-y-6">
                {/* State Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select State</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>All States</option>
                        <option>Uttar Pradesh</option>
                        <option>Bihar</option>
                        <option>Maharashtra</option>
                    </select>
                </div>

                {/* Risk Level */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Risk Level</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-3 border">
                        <option>All Levels</option>
                        <option>Critical (Red)</option>
                        <option>Moderate (Yellow)</option>
                        <option>Low (Green)</option>
                    </select>
                </div>

                {/* Date Range */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                    <div className="flex items-center space-x-2">
                        <input type="month" className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-2 border" defaultValue="2025-01" />
                        <span className="text-gray-500">to</span>
                        <input type="month" className="w-full border-gray-300 rounded-md shadow-sm focus:border-uidai-blue focus:ring-uidai-blue text-sm py-2 px-2 border" defaultValue="2026-01" />
                    </div>
                </div>

                <button className="w-full bg-uidai-blue text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4">
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default FilterPanel;
