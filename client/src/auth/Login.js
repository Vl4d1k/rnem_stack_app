import { useState } from "react";
import { login } from "../actions/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import LoginForm from "./../components/auth/login/Form";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Send login request: ', {email, password})
        try {
            let res = await login({ 
                email, 
                password 
            });
            
            if (res.data) {
                console.log('login response: ', res.data);
                window.localStorage.setItem('auth', JSON.stringify(res.data));
                dispatch({
                    type: "LOGIN",
                    payload: res.data,
                });
                toast.success("Login success.");
                navigate('/');
            }
        } catch (err) {
            console.log(err);
            toast.error(`Error occurred.`);
        }
    };

    return (
        <div className="min-h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            
            <ToastContainer />

            <LoginForm 
                    handleSubmit={handleSubmit} 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
            />

        </div>
    );
};

export default Login;
