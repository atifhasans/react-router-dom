import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-green-500 shadow-md p-4 sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="text-3xl font-bold text-white">ATIF</div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10">
                    <Link to="/" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Home</Link>
                    <Link to="/about" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">About</Link>
                    <Link to="/contact" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Contact</Link>
                    <Link to="/service" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Service</Link>
                    <Link to="/product" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Product</Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4">
                    <Link to="/" className="text-gray-100 text-lg hover:text-green-300 transition duration-300">Home</Link>
                    <Link to="/about" className="text-gray-100 text-lg hover:text-green-300 transition duration-300">About</Link>
                    <Link to="/contact" className="text-gray-100 text-lg hover:text-green-300 transition duration-300">Contact</Link>
                    <Link to="/service" className="text-gray-100 text-lg hover:text-green-300 transition duration-300">Service</Link>
                    <Link to="/product" className="text-gray-100 text-lg hover:text-green-300 transition duration-300">Product</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
