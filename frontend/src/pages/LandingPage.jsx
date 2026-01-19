import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, ChartBarIcon, MapIcon, ExclamationTriangleIcon, UserGroupIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
    const stats = [
        { name: 'High-Risk Pincodes', value: '1,247', icon: ExclamationTriangleIcon, color: 'text-red-600', bg: 'bg-red-100' },
        { name: 'Audit Hotspots', value: '89', icon: ShieldCheckIcon, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'Migration Surge', value: '2.3x', icon: ArrowTrendingUpIcon, color: 'text-blue-600', bg: 'bg-blue-100' },
    ];

    const modules = [
        {
            name: 'MBU Risk Command Centre',
            description: 'Identify and mitigate biometric update risks across pincodes.',
            icon: MapIcon,
            path: '/mbu-risk',
            color: 'bg-blue-500',
        },
        {
            name: 'Fraud Radar',
            description: 'Detect and analyze anomalous enrollment patterns and hotspots.',
            icon: ShieldCheckIcon,
            path: '/fraud-radar',
            color: 'bg-red-500',
        },
        {
            name: 'Migration Planner',
            description: 'Forecast demographic shifts and plan capacity requirements.',
            icon: ChartBarIcon,
            path: '/migration-planner',
            color: 'bg-green-500',
        },
    ];

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    Aadhaar Early Warning System
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                    Operational Intelligence for Inclusive & Secure Aadhaar
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <div key={item.name} className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className={`flex-shrink-0 rounded-md p-3 ${item.bg}`}>
                                    <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                                        <dd>
                                            <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modules Grid */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Operational Modules</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module) => (
                        <Link
                            key={module.name}
                            to={module.path}
                            className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div className={`h-12 w-12 rounded-lg ${module.color} flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <module.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-uidai-blue transition-colors">
                                {module.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 flex-grow">
                                {module.description}
                            </p>
                            <div className="mt-4 flex items-center text-sm font-medium text-uidai-blue">
                                Access Module <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
