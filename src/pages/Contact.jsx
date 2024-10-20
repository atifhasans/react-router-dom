import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 px-4">
            <h1 className="text-center text-4xl md:text-[50px] font-bold text-white shadow-lg mb-10">
                Contact Us
            </h1>
            <p className="text-lg text-white mb-6 text-center">We would love to hear from you!</p>
            <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Your Message"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:border-blue-500 transition duration-300"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg p-3 w-full hover:bg-blue-600 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
