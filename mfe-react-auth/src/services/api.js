const API_BASE_URL = 'http://localhost:5000/api/auth';

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    return response.json();
};

export const signupUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
};