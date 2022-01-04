import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { register } from "../actions/auth";

import RegistrationHeader from "./../components/auth/registration/Header";
import RegistrationForm from "./../components/auth/registration/Form";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await register({ 
                name, 
                email, 
                password 
            });
            toast.success("Register success. Please login.");
        } catch (err) {
            toast.error(`Error occurred.\n${err.response.data}`);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-full flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
                <RegistrationHeader />

                <RegistrationForm
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                />
            </div>
        </>
    );
};

export default Register;
