import express from "express";
import formidable from 'express-formidable';

import {create, deleteHotel, getHotels, getImage, getUserHotels} from "../controllers/HotelController";
import { requireSignin, hotelOwner } from "../middlewares";

const router = express.Router();

router.post("/create-hotel", requireSignin, formidable(), create);

router.get('/hotels', getHotels);

router.get('/hotel/image/:hotelId', getImage);

router.get('/hotel/hotels-seller', requireSignin, getUserHotels);

router.delete('/delete-hotel/:hotelId', requireSignin, hotelOwner, deleteHotel);

module.exports = router;
