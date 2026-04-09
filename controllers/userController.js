const mongoose = require('mongoose');
const User = require('../models/userModels.js');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    try {

        const hashed_password = await bcrypt.hash(req.body.password, 10);

//create a new user object that excists in memory
const newUser = {
    first_name: req.body.first_name,
    username: req.body.username,
    password: hashed_password,
    email: req.body.email,
};
//create a new user document in the database
const user = new User(newUser);

//save or persist the user document in the database
await user.save();

//send a response back to the client
res.status(201).json({"User created successfully": user});
    } catch (error) {
        res.status(500).json({"Internal Server Error": error.message});
    }
}

module.exports = {createUser};