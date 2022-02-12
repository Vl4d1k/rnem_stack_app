import DashboardNav from "./DashboardNav";
import ConnectNav from "./ConnectNav";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getSellerHotels, deleteSellerHotel} from "../actions/hotel";
import {toast} from "react-toastify";

const Dashboard = () => {
    const {auth} = useSelector((state) => ({...state}));
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        loadSellersHotels();
    }, []);

    const loadSellersHotels = async () => {
        let {data} = await getSellerHotels(auth.token);
        setHotels(data);
        console.log("own hotels:", data);
    };

    const handleHotelDelete = async (hotelId) => {
        if (!window.confirm('Are you sure to delete hotel?')) return;
        deleteSellerHotel(auth.token, hotelId)
            .then( (res) => {
                toast.success(`Hotel deleted.`);
                loadSellersHotels();
            });
    }

    return (
        <>
            <ConnectNav/>

            <DashboardNav/>

            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Your Hotels
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            You can add new hotel.
                        </p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                        <Link
                            to="/hotels/new"
                            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add New Hotel
                        </Link>
                    </div>
                </div>
            </div>

            {hotels.length > 0
                ? hotels.map((hotel) => (
                    <div className="bg-white p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex sm:space-x-5">
                                <div className="flex-shrink-0">
                                    <img
                                        className="mx-auto h-48 w-48 rounded-md"
                                        src={`${process.env.REACT_APP_API}/hotel/image/${hotel._id}`}
                                        alt="Preview"
                                    />
                                </div>
                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <div className="flex items-center text-gray-500">
                                            <svg
                                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                                            </svg>
                                            {hotel.location}
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                                        {hotel.title}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center sm:mt-0">
                                <a
                                    href="#"
                                    className="flex justify-center items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700"
                                >
                                    Edit
                                </a>

                                <a
                                    onClick={() => handleHotelDelete(hotel._id)}
                                    href="#"
                                    className="flex justify-center items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-red-600 hover:bg-red-700 ml-2"
                                >
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                ))
                : null}
        </>
    );
};

export default Dashboard;
