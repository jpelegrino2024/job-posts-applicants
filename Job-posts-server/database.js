const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

let credentials = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

// if (process.env.NODE_ENV === 'production') {
//   credentials = {
//     ...credentials,
//     host: 'job-posts.cub1cwlhadea.us-east-1.rds.amazonaws.com',
//     port: '3306',
//     user: 'admin',
//     password: 'pass123456',
//     database: 'job_posts_db'
//   };
// }

// const dbPool = mysql.createPool({ ...credentials }).promise();

const sequelize = new Sequelize(
  credentials.database,
  credentials.user,
  credentials.password,
  {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3361',
    define: {
      timestamps: false
    }
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connect successfully');
  } catch (err) {
    console.error('Error trying to connect to db', err);
  }
};

const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connect successfully');
  } catch (err) {
    console.error('Error trying to connect to db', err);
  }
};

module.exports = { sequelize, dbConnection };
