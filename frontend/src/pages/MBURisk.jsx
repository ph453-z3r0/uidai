import React, { useState } from 'react';
import FilterPanel from '../components/mbu/FilterPanel';
import RiskMap from '../components/mbu/RiskMap';
import RiskTable from '../components/mbu/RiskTable';
import RiskDetailCard from '../components/mbu/RiskDetailCard';
import { useData } from '../hooks/useData';

const MBURisk = () => {
    const [selectedPincode, setSelectedPincode] = useState(null);
    const [filters, setFilters] = useState({ state: 'All States', risk_level: 'All Levels' });

    const { data: mbuData, loading, error } = useData('mbu-risk', filters);

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
                    <h2 className="text-2xl font-bold text-gray-900">MBU Risk Command Centre</h2>
                    <p className="text-sm text-gray-500">Monitor and mitigate biometric update risks.</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Live Data
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)] min-h-[600px]">
                {/* Left Panel: Filters (20%) */}
                <div className="lg:col-span-3 h-full overflow-y-auto">
                    <FilterPanel filters={filters} setFilters={setFilters} />
                </div>

                {/* Center Panel: Map (50%) */}
                <div className="lg:col-span-6 h-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <RiskMap data={mbuData} onPincodeSelect={handlePincodeSelect} />
                </div>

                {/* Right Panel: Table & Details (30%) */}
                <div className="lg:col-span-3 h-full flex flex-col gap-4 overflow-hidden">
                    <div className="flex-1 overflow-hidden">
                        <RiskTable data={mbuData} onRowClick={handlePincodeSelect} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <RiskDetailCard selectedPincode={selectedPincode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MBURisk;
