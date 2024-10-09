import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
    const { handleLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin({ email, password });
    };

    return (
        <div className='bg-white w-screen h-auto flex flex-col items-center justify-center p-8'>
            <h2 className='text-white text-2xl mb-4'>Welcome Back</h2>
            <form onSubmit={handleSubmit} className='w-full max-w-sm'>
                <div className='mb-4'>
                    <label htmlFor="email" className='text-white'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full p-2 rounded bg-gray-800 text-white border border-gray-600'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='text-white'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='w-full p-2 rounded bg-gray-800 text-white border border-gray-600'
                    />
                </div>
                <button type="submit" className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700'>
                    Login
                </button>
            </form>
            <a href="/forgot-password" className='text-white mt-2'>Forgot Password?</a>
            <div className='my-4 text-white'>or</div>
            <button className='w-full bg-red-600 text-white p-2 rounded hover:bg-red-700'>
                Continue using Google
            </button>
            <p className='text-white mt-4'>
                Don't have an account? <a href="/register" className='text-blue-400'>Register</a>
            </p>
        </div>
    );
};

export default Login;
