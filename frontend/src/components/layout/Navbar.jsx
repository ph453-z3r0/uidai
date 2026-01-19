import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Dashboard', path: '/' },
        { name: 'MBU Risk', path: '/mbu-risk' },
        { name: 'Fraud Radar', path: '/fraud-radar' },
        { name: 'Migration', path: '/migration-planner' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            {/* Placeholder for Aadhaar Logo - using text for now if image missing */}
                            <div className="h-10 w-10 bg-uidai-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                                A
                            </div>
                            <div className="flex flex-col">
                                <span className="text-uidai-blue font-bold text-lg leading-tight">AADHAAR</span>
                                <span className="text-gray-500 text-xs font-medium tracking-wider">EARLY WARNING SYSTEM</span>
                            </div>
                        </div>
                        <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={clsx(
                                        isActive(link.path)
                                            ? 'border-uidai-blue text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <span className="h-5 w-8 bg-orange-500 rounded-sm block" title="India Flag"></span>
                            <span>GOVERNMENT OF INDIA</span>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-uidai-blue"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={clsx('sm:hidden', isOpen ? 'block' : 'hidden')}>
                <div className="pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                isActive(link.path)
                                    ? 'bg-blue-50 border-uidai-blue text-uidai-blue'
                                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                                'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
