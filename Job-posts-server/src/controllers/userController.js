import catchAndSync from './../utils/catchAndSync.js';
import User from './../models/userModel.js';

export const getUser = catchAndSync(async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  res.status(200).json({
    status: 'success',
    data: user
  });
});

export const getUsers = catchAndSync(async (req, res, next) => {
  const users = await User.findAll();

  res.status(200).json({
    status: 'success',
    data: users
  });
});

export const signUp = catchAndSync(async (req, res, next) => {
  const userBody = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };

  const user = await User.create(userBody);

  res.status(201).json({
    status: 'success',
    data: user
  });
});

export const updateUser = catchAndSync(async (req, res, next) => {
  const userId = req.params.id;
  await User.update(req.body, { where: { id: userId } });

  const user = await User.findOne({ where: { id: userId } });

  res.status(200).json({
    status: 'success',
    data: user
  });
});
