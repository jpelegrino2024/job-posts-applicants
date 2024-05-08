const database = require('./../database');

exports.getUserById = async (userId) => {
  const [user] = await database.query('SELECT * FROM users WHERE id=?', [
    userId
  ]);

  return user[0];
};

exports.createUser = async (user) => {
  const [newUser] = await database.query(
    'INSERT INTO users(first_name,last_name,email,password) VALUES(?,?,?,?)',
    [...Object.values(user)]
  );

  return newUser.insertId;
};
