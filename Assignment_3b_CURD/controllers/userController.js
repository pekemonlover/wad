const User = require('../models/User');


// CREATE USER
const addUser = async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.status(201).json({
            message: "User Added Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// GET USERS
const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// UPDATE USER
const updateUser = async (req, res) => {

    try {

        await User.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        res.status(200).json({
            message: "User Updated Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// DELETE USER
const deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "User Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
};