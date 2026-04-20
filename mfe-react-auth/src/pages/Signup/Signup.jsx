import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../services/api';
import AuthLayout from '../../components/AuthLayout';
import CustomInput from '../../components/CustomInput';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const data = await signupUser({ name, email, password });

            if (data.token) {
                localStorage.setItem('webgen_token', data.token);
                localStorage.setItem('webgen_user', JSON.stringify(data));
                alert('Credentials Registered! You can now log in.');
                navigate('/login');
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('Server disconnected. Check backend terminal.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout title="Create Identity" subtitle="Register for WebGen Studio">
            <form onSubmit={handleSubmit} className="flex flex-col">
                {error && <div className="p-3 mb-4 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg">{error}</div>}

                <CustomInput type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <CustomInput type="email" placeholder="System Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <CustomInput type="password" placeholder="Passkey" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 mt-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-all"
                >
                    {isLoading ? 'Registering...' : 'Initialize Account'}
                </button>
            </form>
        </AuthLayout>
    );
};

export default Signup;