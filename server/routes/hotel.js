import express from "express";
import formidable from 'express-formidable';

import { create, getHotels, getImage, getUserHotels } from "../controllers/HotelController";
import { requireSignin } from "../middlewares";

const router = express.Router();

router.post("/create-hotel", requireSignin, formidable(), create);

router.get('/hotels', getHotels);

router.get('/hotel/image/:hotelId', getImage);

router.get('/hotel/hotels-seller', requireSignin, getUserHotels);

module.exports = router;
