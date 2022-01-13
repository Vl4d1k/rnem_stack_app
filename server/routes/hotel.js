import express from "express";
import formidable from 'express-formidable';

import { create, getHotels, getImage } from "../controllers/HotelController";
import { requireSignin } from "../middlewares";

const router = express.Router();

router.post("/create-hotel", requireSignin, formidable(), create);

router.get('/hotels', getHotels);

router.get('/hotel/image/:hotelId', getImage);

module.exports = router;
