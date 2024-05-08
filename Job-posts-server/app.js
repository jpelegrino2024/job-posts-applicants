const express = require('express');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.json());

// Routers
app.use('/api/v1/users', userRouter);

module.exports = app;
