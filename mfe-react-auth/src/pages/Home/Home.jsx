import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] text-white">
        <div className="text-center max-w-lg p-8">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6 tracking-tight">
                WebGen Studio
            </h1>
            <p className="text-gray-400 mb-10 text-lg">Secure Authentication Gateway</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    Access Portal
                </Link>
                <Link to="/signup" className="px-8 py-3 bg-gray-800 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all">
                    Create Account
                </Link>
            </div>
        </div>
    </div>
);

export default Home;