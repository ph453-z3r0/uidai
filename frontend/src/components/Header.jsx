import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b border-uidai-border sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Placeholder for Logo */}
                    <div className="w-10 h-10 bg-uidai-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                        A
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-uidai-text tracking-tight">
                            AADHAAR EARLY WARNING SYSTEM
                        </h1>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">
                            UNIQUE IDENTIFICATION AUTHORITY OF INDIA
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium text-gray-600">
                        {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </div>
            </div>
            {/* Subtle India Map Pattern Overlay (CSS background would be ideal here) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bv/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png')] bg-no-repeat bg-center bg-contain"></div>
        </header>
    );
};

export default Header;
