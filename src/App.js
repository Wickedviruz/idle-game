import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import Village from './components/Village';

const App = () => {
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [page, setPage] = useState(token ? "village" : "landing");

    const handleLogin = (userId, token) => {
        setUserId(userId);
        setToken(token);
        localStorage.setItem("token", token);
        setPage("village");
    };

    const handleLogout = () => {
        setUserId(null);
        setToken(null);
        localStorage.removeItem("token");
        setPage("landing");
    };

    const renderPage = () => {
        if (page === "register") return <Register onRegister={(id) => handleLogin(id, token)} />;
        if (page === "login") return <Login onLogin={(id, token) => handleLogin(id, token)} />;
        if (page === "village") return <Village userId={userId} onLogout={handleLogout} />;
        return <LandingPage onPageChange={setPage} />;
    };

    return <div className="App">{renderPage()}</div>;
};

export default App;
