import express from 'express';
import {
  createJobPost,
  getAllJobs,
  getJob
} from '../controllers/jobController.js';

const router = express.Router();

router.route('/').post(createJobPost).get(getAllJobs);
router.route('/:id').get(getJob);

export default router;
