import React from 'react';

const Services = () => {
    const services = [
        { id: 1, name: "Web Development", description: "Building responsive websites." },
        { id: 2, name: "App Development", description: "Creating mobile applications." },
        { id: 3, name: "SEO Optimization", description: "Improving search engine visibility." },
        { id: 4, name: "Digital Marketing", description: "Marketing services online." },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 px-6 py-10">
            <h1 className="text-center text-4xl md:text-[50px] font-bold text-white shadow-lg mb-10">
                Our Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h2>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
