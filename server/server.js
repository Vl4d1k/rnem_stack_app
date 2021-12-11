import express from 'express';
import {readdirSync} from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';

const morgan = require("morgan");
require('dotenv').config();

const app = express();

//db connection
mongoose
    .connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Connected to Mongo DB.'))
    .catch( (error) => console.log('DB connection error.', error))

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route middleware
readdirSync('./routes').map( (r) => app.use('/api', require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server's running on port ${port}.`));