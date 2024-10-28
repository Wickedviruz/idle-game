import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceView = ({ playerId }) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await axios.get(`http://localhost:5000/api/resources/${playerId}`);
            setResources(response.data);
        };
        if (playerId) fetchResources();
    }, [playerId]);

    return (
        <div>
            <h3>Resources</h3>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>
                        {resource.name}: {resource.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceView;
