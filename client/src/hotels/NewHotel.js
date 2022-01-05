import { useState } from "react";

const NewHotel = () => {
    const {title, setTitle} = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(0);
    const [bed, setBedCount] = useState(0);

    return <h1>New Hotel</h1>;
}

export default NewHotel;