import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
