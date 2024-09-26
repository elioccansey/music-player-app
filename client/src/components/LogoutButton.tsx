import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('username');
        navigate('/');
    };

    return (
        <button
            style={{
                backgroundColor: '#ff4c4c',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                cursor: 'pointer',
                color: 'white',
                marginTop: '20px',
                transition: 'background-color 0.3s',
            }}
            onClick={handleLogout}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
