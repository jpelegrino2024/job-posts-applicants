const express = require('express');
const jobController = require('./../controllers/jobController');

const router = express.Router();

router.route('/').post(jobController.createJobPost);
router.route('/:id').get(jobController.getJob);

module.exports = router;
