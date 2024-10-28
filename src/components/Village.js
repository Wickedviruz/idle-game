import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Village = ({ userId, onLogout }) => {
    const [villageData, setVillageData] = useState({ village_name: '', resources: [] });

    useEffect(() => {
        const fetchVillageData = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:5000/village/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setVillageData(response.data);
        };
        fetchVillageData();
    }, [userId]);

    return (
        <div>
            <h2>Welcome to {villageData.village_name}</h2>
            <h3>Your Resources</h3>
            <ul>
                {villageData.resources.map((resource, index) => (
                    <li key={index}>
                        {resource.name}: {resource.amount}
                    </li>
                ))}
            </ul>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Village;
