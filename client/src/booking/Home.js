import { useEffect, useState } from "react";
import { getAllHotels } from "./../actions/hotel";

import HotelCard from "./HotelCard";

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        loadAllHotels();
    }, []);

    const loadAllHotels = async () => {
        let res = await getAllHotels();
        console.log("resp: ", res.data);
        setHotels(res.data);
    };

    return (
        <div>
            <h1 className="container-fluid h1">
                <div className="flex flex-col h-screen">
                    {hotels
                        ? hotels.map((item, idx) => (
                              <HotelCard key={idx} hotel={item} />
                          ))
                        : null}
                </div>
            </h1>
        </div>
    );
};

export default Home;
