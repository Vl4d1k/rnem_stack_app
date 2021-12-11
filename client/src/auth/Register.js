import React, { useState } from "react";

import RegistrationHeader from './../components/auth/registration/Header';
import RegistrationForm from './../components/auth/registration/Form';

import {registerUser} from './../api';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = registerUser(name, email, password);
    };

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            
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
    );
};

export default Register;
