import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 px-4">
            <h1 className="text-center text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 shadow-xl mb-8">
                About Us
            </h1>
            <p className="text-base md:text-lg text-white max-w-2xl text-center leading-relaxed mb-6">
                We are dedicated to providing the best services to our clients. Our team is passionate about delivering quality and ensuring customer satisfaction.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl text-center leading-relaxed">
                Join us on this journey and let us help you achieve your goals.
            </p>
        </div>
    );
};

export default About;
