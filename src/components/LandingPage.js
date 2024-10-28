import React from 'react';

const LandingPage = ({ onPageChange }) => {
    return (
        <div>
            <h1>Welcome to Idle Automation Game</h1>
            <p>Manage your village, gather resources, and build an empire!</p>
            <button onClick={() => onPageChange("register")}>Register</button>
            <button onClick={() => onPageChange("login")}>Login</button>
        </div>
    );
};

export default LandingPage;
