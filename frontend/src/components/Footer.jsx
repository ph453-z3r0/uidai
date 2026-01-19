import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-uidai-border mt-auto">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} UIDAI Hackathon. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    <a href="#" className="text-sm text-gray-500 hover:text-uidai-blue transition-colors">Privacy Policy</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-uidai-blue transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
