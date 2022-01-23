const HotelCard = ({ hotel }) => {
    return (
        <>
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 md:max-w-7xl mx-auto border border-white bg-white mt-4">
                <div className="w-full md:w-1/5 bg-white grid place-items-center">
                    <img
                        src={`${process.env.REACT_APP_API}/hotel/image/${hotel._id}`}
                        alt="tailwind logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                        <div className="flex items-center text-gray-500">
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                x-description="Heroicon name: solid/location-marker"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                ></path>
                            </svg>
                            {hotel.location}
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p className="text-gray-600 font-bold text-sm ml-1">
                                4.96&nbsp;
                                <span className="text-gray-500 font-normal">
                                    (76 reviews)
                                </span>
                            </p>
                        </div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                        {hotel.title}
                    </h3>
                    <p className="md:text-lg text-gray-500 text-base">
                        {hotel.description}
                    </p>
                    <p className="text-xl font-black text-gray-800">
                        ${hotel.price}
                        <span className="font-normal text-gray-600 text-base">
                            /night
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default HotelCard;
