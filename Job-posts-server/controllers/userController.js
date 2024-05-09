const catchAndSync = require('./../utils/catchAndSync');
const User = require('./../models/userModel');

exports.getUser = catchAndSync(async (req, res, next) => {
  const user = await User.getUserById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: User.mapFieldsToProps(user)
  });
});

exports.signUp = catchAndSync(async (req, res, next) => {
  const userBody = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };

  const userId = await User.createUser(userBody);

  const user = await User.getUserById(userId);

  res.status(201).json({
    status: 'success',
    data: user
  });
});

exports.updateUser = catchAndSync(async (req, res, next) => {
  const fields = User.mapPropsToFields(req.body);
  const userUpdated = await User.updateUser(fields, req.params.id);

  res.status(200).json({
    status: 'success',
    data: userUpdated
  });
});
