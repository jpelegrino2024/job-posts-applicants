import express from 'express';
import userRouter from './routers/userRouter.js';
import jobRouter from './routers/jobRouter.js';

const app = express();

app.use(express.json());

// Routers
//:TODO move api/v1
app.use('/api/v1/users', userRouter);
app.use('/api/v1/jobs', jobRouter);

export default app;
