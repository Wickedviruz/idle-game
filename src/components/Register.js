import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [villageName, setVillageName] = useState('');

    const handleRegister = async () => {
        const response = await axios.post('http://localhost:5000/register', {
            email,
            password,
            username,
            village_name: villageName || "My Village"
        });
        if (response.data.user_id) onRegister(response.data.user_id);
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Village Name" value={villageName} onChange={(e) => setVillageName(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
