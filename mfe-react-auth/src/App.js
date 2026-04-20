import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

// --- TEMPORARY INLINE PAGES ---
// (Baad mein aap in components ko cut karke 'src/pages/' wale folders mein paste kar sakte hain)

const Home = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">WebGen Auth Portal</h1>
        <p className="text-gray-500 mb-8">Please choose an option to continue.</p>
        <div className="space-x-4">
            <Link to="/in" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
                Login
            </Link>
            <Link to="/up" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
                Sign Up
            </Link>
        </div>
    </div>
);

const Login = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
        <div className="p-8 bg-white rounded-xl shadow-lg text-center w-96">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Welcome Back</h2>
            <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
                Login
            </button>
            <Link to="/" className="block mt-6 text-sm text-gray-500 hover:text-blue-600 hover:underline">
                &larr; Back to Home
            </Link>
        </div>
    </div>
);

const Signup = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <div className="p-8 bg-white rounded-xl shadow-lg text-center w-96">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Create Account</h2>
            <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
            <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
            <input type="password" placeholder="Password" className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition">
                Sign Up
            </button>
            <Link to="/" className="block mt-6 text-sm text-gray-500 hover:text-green-600 hover:underline">
                &larr; Back to Home
            </Link>
        </div>
    </div>
);


// --- MAIN APP COMPONENT ---
export default function App() {
    return (
        // basename="/login" set karna zaroori hai kyunki MFE isi path par active hota hai
        <BrowserRouter basename="/login">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/in" element={<Login />} />
                <Route path="/up" element={<Signup />} />

                {/* Agar user koi aisi URL daale jo exist nahi karti, toh use Home par redirect karein */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}