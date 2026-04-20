import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import AuthLayout from '../../components/AuthLayout';
import CustomInput from '../../components/CustomInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate(); // Navigation ke liye ready

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const data = await loginUser({ email, password });

            if (data.token) {
                localStorage.setItem('webgen_token', data.token);
                localStorage.setItem('webgen_user', JSON.stringify(data));
                alert(`Login Successful! Welcome to the Studio, ${data.name}.`);
                // navigate('/dashboard'); // MFE Host ko trigger karega
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Server disconnected. Check backend terminal.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout title="Welcome Back" subtitle="Initialize your secure session">
            <form onSubmit={handleSubmit} className="flex flex-col">
                {error && <div className="p-3 mb-4 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg">{error}</div>}

                <CustomInput type="email" placeholder="System Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <CustomInput type="password" placeholder="Passkey" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 mt-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all"
                >
                    {isLoading ? 'Authenticating...' : 'Sign In'}
                </button>
            </form>
        </AuthLayout>
    );
};

export default Login;