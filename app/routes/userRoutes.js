const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get a user by ID
router.get('/users/:id', userController.getUser);

// Get All
router.get('/users', userController.getAllUsers);

// create user
router.post('/users/create', userController.createUser);

// create user
router.patch('/users/update/:id', userController.updateUser);

module.exports = router;