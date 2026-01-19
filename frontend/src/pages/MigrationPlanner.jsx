import React, { useState, useEffect } from 'react';
import MigrationFilterPanel from '../components/migration/MigrationFilterPanel';
import SurgeTable from '../components/migration/SurgeTable';
import ForecastChart from '../components/migration/ForecastChart';
import CapacityCard from '../components/migration/CapacityCard';
import { useData } from '../hooks/useData';

const MigrationPlanner = () => {
    const [selectedPincode, setSelectedPincode] = useState(null);
    const [filters, setFilters] = useState({ state: 'All States' });

    const { data: migrationData, loading, error } = useData('migration', filters);

    // Select the first item by default
    useEffect(() => {
        if (migrationData && migrationData.length > 0) {
            setSelectedPincode(migrationData[0]);
        }
    }, [migrationData]);

    const handlePincodeSelect = (pincodeData) => {
        setSelectedPincode(pincodeData);
    };

    if (loading) return (
        <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-uidai-blue"></div>
        </div>
    );

    if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Migration Planner</h2>
                    <p className="text-sm text-gray-500">Predictive capacity planning.</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-100">
                        Forecast Horizon: 6 Months
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)] min-h-[600px]">
                {/* Left Panel: Filters (20%) */}
                <div className="lg:col-span-3 h-full overflow-y-auto">
                    <MigrationFilterPanel filters={filters} setFilters={setFilters} />
                </div>

                {/* Center Panel: Dual View (50%) */}
                <div className="lg:col-span-6 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 overflow-y-auto">
                    <div className="h-full min-h-[300px]">
                        <SurgeTable
                            data={migrationData}
                            onRowClick={handlePincodeSelect}
                            selectedPincode={selectedPincode}
                        />
                    </div>
                    <div className="h-full min-h-[300px]">
                        <ForecastChart selectedPincode={selectedPincode} />
                    </div>
                </div>

                {/* Right Panel: Capacity Recommendations (30%) */}
                <div className="lg:col-span-3 h-full overflow-y-auto">
                    <CapacityCard selectedPincode={selectedPincode} />
                </div>
            </div>
        </div>
    );
};

export default MigrationPlanner;
