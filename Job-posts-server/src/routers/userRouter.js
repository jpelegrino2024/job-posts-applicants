import express from 'express';
import {
  signUp,
  getUser,
  getUsers,
  updateUser
} from '../controllers/userController.js';

const router = express.Router();

router.route('/signUp').post(signUp);

router.route('/').get(getUsers);

router.route('/:id').get(getUser).patch(updateUser);

export default router;
