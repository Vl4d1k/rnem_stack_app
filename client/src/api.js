import axios from "axios";

const instance = axios.create({
    headers: { "Access-Control-Allow-Origin": "*" },
    withCredentials: false,
    baseURL: process.env.API_URL,
});

export async function registerUser(name, email, password) {
    return instance.post(`/api/register`, { name, email, password });
}

export default instance;