const mysql = require('mysql2');

const dbPool = mysql
  .createPool({
    host: 'job-posts.cub1cwlhadea.us-east-1.rds.amazonaws.com', //process.env.DB_HOST,
    port: '3306', //process.env.DB_PORT,
    user: 'admin', //process.env.DB_USER,
    password: 'pass123456', //process.env.DB_PASSWORD,
    database: 'job_posts_db' //process.env.DB_DATABASE
  })
  .promise();

module.exports = dbPool;
