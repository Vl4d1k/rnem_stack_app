import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from '../logo.svg';

const Navbar = () => {
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Dashboard", href: "/dashboard" }
    ];

    const { auth } = useSelector((state) => ({ ...state }));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        window.localStorage.removeItem("auth");
        navigate("/login");
    };

    return (
        <header className="bg-indigo-600">
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Top"
            >
                <div className="w-full py-2 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <Link to="/">
                            <img className="h-10 w-auto" src={logo} alt="" />
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-base font-medium text-white hover:text-indigo-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        {auth === null ? (
                            <>
                                <Link
                                    to="/login"
                                    className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                onClick={logout}
                                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                                Logout
                            </Link>
                        )}
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-base font-medium text-white hover:text-indigo-50"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
