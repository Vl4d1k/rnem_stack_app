import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required',
    },
    description: {
        type: String,
        required: 'Description is required',
        maxlength: 2000,
    },
    location: {
        type: String,
        required: 'Location is required'
    },
    price: {
        type: Number,
        required: 'Price is required'
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    bedCount: {
        type: Number,
        required: 'Bed count is required'
    }
}, 
{
    timestamps: true
});

export default mongoose.model("Hotel", hotelSchema);