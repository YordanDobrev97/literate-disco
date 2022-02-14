import { API } from '../utils/api'

const register = async (email: string, password: string): Promise<boolean> => {
    const response = await fetch(`${API}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            email, password
        }),
    });
    const res = await response.json();
    return res.success;
}

const login = async (email: string, password: string): Promise<any> => {
    const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            email, password
        }),
    });
    const res = await response.json();
    return res;
}

export default {
    register,
    login
}