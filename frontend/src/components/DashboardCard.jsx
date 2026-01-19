import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, description, icon: Icon, colorClass, to }) => {
    return (
        <Link
            to={to}
            className={`group block bg-white rounded-lg border border-uidai-border p-6 transition-all duration-200 hover:scale-[1.02] hover:border-${colorClass.replace('text-', '')}`}
        >
            <div className={`w-12 h-12 rounded-lg ${colorClass.replace('text-', 'bg-').replace('600', '100')} flex items-center justify-center mb-4 group-hover:bg-opacity-80 transition-colors`}>
                <Icon className={`w-6 h-6 ${colorClass}`} />
            </div>
            <h3 className="text-lg font-semibold text-uidai-text mb-2 group-hover:text-uidai-blue transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
                {description}
            </p>
        </Link>
    );
};

export default DashboardCard;
