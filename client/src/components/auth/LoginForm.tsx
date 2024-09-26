import React, { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const token = await authService.login(username, password);
            if (token) {
                sessionStorage.setItem('authToken', token);
                sessionStorage.setItem('username', username);
                navigate('/playlist');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('Error logging in');
        }
    };

    // Inline styles
    const styles: { [key: string]: CSSProperties } = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#282c34',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            color: 'white',
            width: '300px',
            margin: 'auto',
        },
        title: {
            marginBottom: '20px',
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#000',
        },
        button: {
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            width: '100%',
        },
        error: {
            color: 'red',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            {error && <p style={styles.error}>{error}</p>}
            <input
                style={styles.input}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                style={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button style={styles.button} onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
