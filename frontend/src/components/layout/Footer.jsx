import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            Terms of Use
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            Contact Us
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; {new Date().getFullYear()} Unique Identification Authority of India. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
