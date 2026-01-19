import React, { useState } from 'react';
import FraudFilterPanel from '../components/fraud/FraudFilterPanel';
import FraudMap from '../components/fraud/FraudMap';
import FraudTable from '../components/fraud/FraudTable';
import FraudForensicsCard from '../components/fraud/FraudForensicsCard';
import { useData } from '../hooks/useData';

const FraudRadar = () => {
    const [selectedPincode, setSelectedPincode] = useState(null);
    const [filters, setFilters] = useState({ state: 'All States', severity: 'All Severities' });

    const { data: fraudData, loading, error } = useData('anomalies', filters);

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
                    <h2 className="text-2xl font-bold text-gray-900">Fraud Radar</h2>
                    <p className="text-sm text-gray-500">Detect and analyze anomalies.</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        {fraudData.length} Anomalies Detected
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)] min-h-[600px]">
                {/* Left Panel: Filters (20%) */}
                <div className="lg:col-span-3 h-full overflow-y-auto">
                    <FraudFilterPanel filters={filters} setFilters={setFilters} />
                </div>

                {/* Center Panel: Map (50%) */}
                <div className="lg:col-span-6 h-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <FraudMap data={fraudData} onPincodeSelect={handlePincodeSelect} />
                </div>

                {/* Right Panel: Table & Details (30%) */}
                <div className="lg:col-span-3 h-full flex flex-col gap-4 overflow-hidden">
                    <div className="flex-1 overflow-hidden">
                        <FraudTable data={fraudData} onRowClick={handlePincodeSelect} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <FraudForensicsCard selectedPincode={selectedPincode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FraudRadar;
