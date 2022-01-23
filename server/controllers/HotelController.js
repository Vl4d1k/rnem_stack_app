import fs from 'fs';

import Hotel from "../models/hotel";

export const create = async (req, res) => {
    try {
        let hotel = new Hotel(req.fields); 
        hotel.postedBy = req.user._id;
        let files = req.files;
        if (files.image) {
            hotel.image.data = fs.readFileSync(files.image.path);
            hotel.image.contentType = files.image.type;
        } 
        hotel.save( (err, result) => {
            if (err) {
                console.log('saving hotel error: ', err);
                res.status(400).send("Error saving");
            }
            res.json(result);
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            err: err.message,
        });
    }
};

export const getHotels = async (req, res) => {
    let allHotels = await Hotel.find({})
      .limit(24)
      .select('-image.data')
      .populate('postedBy', '_id name')
      .exec();
    res.json(allHotels);
}

export const getImage = async (req, res) => {
    let hotel = await Hotel.findById(req.params.hotelId).exec();
    if (hotel && hotel.image && hotel.image.data) {
        res.set('Content-Type', hotel.image.contentType);
        return res.send(hotel.image.data);
    }
}

export const getUserHotels = async (req, res) => {
    let hotels = await Hotel.find({ postedBy: req.user._id})
        .select('-image.data')
        .populate('postedBy', '_id name')
        .exec();
    res.send(hotels);
}