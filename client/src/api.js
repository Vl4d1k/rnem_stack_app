import axios from "axios";

require("dotenv").config();

const instance = axios.create({
    headers: {"Access-Control-Allow-Origin": "*"},
    withCredentials: false,
    baseURL: 'http://localhost:8080',
});

export const registerUser = (name, email, password) => {
    return instance
        .post(`/api/register`, { name, email, password })
        .then((response) => {
            console.log("Register result: ", response);
            return response.data;
        });
};
