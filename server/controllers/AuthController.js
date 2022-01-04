const { validationResult } = require('express-validator');

import User from "../models/User";

import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email} = req.body;
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

export const login = async (req, res) => {
    console.log('login request: ', req.body);
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email}).exec();
        console.log('User exists: ', user);
        if (!user) {
            res.status(400).send('User with this email not found.')
        }
        user.comparePassword(password, (err, match) => {
            console.log('compare password in login request');
            if (!match || err) {
                return res.status(400).send('Wrond password');
            }
        });
        console.log('Generate token for client');
        let token = jwt.sign({_id: user.id }, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.json({
            token, 
            user: {
                id: user._id,
                name: user.name, 
                email: user.email,
                updated_at: user.updatedAt,
                created_at: user.created_at
            }
        });
    } catch (err) {
        console.log('Login error: ', err);
        res.status(400).send('Login failed.');
    }
}