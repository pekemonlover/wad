const express = require('express');

const router = express.Router();

const {
    addUser,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/userController');


// CREATE
router.post('/addUser', addUser);


// READ
router.get('/getUsers', getUsers);


// UPDATE
router.put('/updateUser/:id', updateUser);


// DELETE
router.delete('/deleteUser/:id', deleteUser);


module.exports = router;