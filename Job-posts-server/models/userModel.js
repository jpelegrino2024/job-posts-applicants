const database = require('./../database');

// MAPPING
exports.mapPropsToFields = (props) => {
  const dbFields = 'first_name,last_name,email,password,created_at,created_by';

  const obj = {
    first_name: props.firstName,
    last_name: props.lastName,
    email: props.email,
    password: props.password,
    created_at: props.createdAt,
    created_by: props.createdBy
  };

  dbFields.split(',').forEach((el) => {
    if (!obj[el]) delete obj[el];
  });

  return obj;
};

exports.mapFieldsToProps = (fields) => {
  const props = 'firstName,lastName,email,password,createdAt,createdBy';

  const obj = {
    id: fields.id,
    firstName: fields.first_name,
    lastName: fields.last_name,
    email: fields.email,
    password: fields.password,
    createdAt: fields.created_at,
    createdBy: fields.created_by
  };

  props.split(',').forEach((el) => {
    if (!obj[el]) delete obj[el];
  });

  return obj;
};

exports.getUserById = async (userId) => {
  let user;
  try {
    const [users] = await database.query('SELECT * FROM users WHERE id=?', [
      userId
    ]);

    user = users[0];
  } catch (err) {}

  return user;
};

exports.createUser = async (user) => {
  let userId;
  try {
    const [newUser] = await database.query(
      'INSERT INTO users(first_name,last_name,email,password) VALUES(?,?,?,?)',
      [...Object.values(user)]
    );

    userId = newUser.insertId;
  } catch (err) {
    console.error(err);
  }

  return userId;
};

exports.updateUser = async (userData, userId) => {
  let updateUser;

  try {
    const [users] = await database.query(
      `UPDATE users SET ? WHERE id=${userId}`,
      [userData]
    );
    updateUser = users;
  } catch (err) {
    console.error(err);
  }

  return updateUser;
};
