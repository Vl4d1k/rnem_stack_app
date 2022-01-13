import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>

                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register/>}/>

                <Route
                    exact
                    path="/dashboard"
                    element={<PrivateRoute component={Dashboard} />}
                />

                <Route
                    exact 
                    path="/dashboard/seller"
                    element={<PrivateRoute component={DashboardSeller} />}
                />
                <Route
                    exact 
                    path="/hotels/new"
                    element={<PrivateRoute component={NewHotel} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
