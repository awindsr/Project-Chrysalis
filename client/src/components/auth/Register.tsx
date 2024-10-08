import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Register: React.FC = () => {
    const { handleSignup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'admin' | 'member'>('member');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignup({ email, password, role });
    };

    return (
        <div style={{ backgroundColor: '#09090b', color: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ margin: '10px 0', padding: '8px', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ margin: '10px 0', padding: '8px', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value as 'admin' | 'member')}
                        style={{ margin: '10px 0', padding: '8px', borderRadius: '4px' }}
                    >
                        <option value="member">Member</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" style={{ backgroundColor: '#fff', color: '#09090b', padding: '10px 15px', borderRadius: '4px' }}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
