import React from 'react';

const Home = () => {
    const messages = ["Welcome", "Hello Home", "Enjoy Your Stay"];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-teal-400 to-green-500 p-6 md:p-10 shadow-inner">

            {messages.map((message, index) => (
                <h1
                    key={index}
                    className="text-center text-3xl sm:text-4xl md:text-7xl font-extrabold text-transparent 
           bg-clip-text bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-600 
           shadow-md mb-8 animate-fadeInUp transition-transform transform-gpu duration-700 ease-out"
                >
                    {message}
                </h1>
            ))}
        </div>
    );
};

export default Home;
