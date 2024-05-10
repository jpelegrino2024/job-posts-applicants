const express = require('express');
const userRouter = require('./routers/userRouter');
const jobRouter = require('./routers/jobRouter');

const app = express();

app.use(express.json());

// Routers
//:TODO move api/v1
app.use('/api/v1/users', userRouter);
app.use('/api/v1/jobs', jobRouter);

module.exports = app;
