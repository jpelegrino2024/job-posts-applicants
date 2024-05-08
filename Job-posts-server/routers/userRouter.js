const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.route('/signUp').post(userController.signUp);

router.route('/:id').get(userController.getUser);

module.exports = router;
