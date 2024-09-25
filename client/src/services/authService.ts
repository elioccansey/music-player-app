const login = async (username: string, password: string) => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data.token; // Save the generated token
};

export default { login }