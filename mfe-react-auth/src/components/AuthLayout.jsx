import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] text-gray-100">
        <div className="p-8 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-96">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">{title}</h2>
                {subtitle && <p className="text-gray-400 mt-2 text-sm">{subtitle}</p>}
            </div>

            {children}

            <div className="mt-6 text-center">
                <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                    &larr; Back to Gateway
                </Link>
            </div>
        </div>
    </div>
);

export default AuthLayout;