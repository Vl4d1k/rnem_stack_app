const { validationResult } = require('express-validator');

import User from "../models/User";

export const register = async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name, email, password} = req.body;
    let userExist = await User.findOne({email}).exec();
    if (userExist) {
        return res.status(400).send('Email is taken');
    }
    
    const user = new User(req.body);
    try {
        await user.save();
        console.log('User created: ', user);
        return res.json({ok: true});
    } catch (err) {
        console.error('User creation error: ', err);
        return res.status(400).send('Error. Try again.');
    }
};