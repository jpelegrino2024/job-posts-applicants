import JobPost from './../models/jobModel.js';
import catchAndSync from './../utils/catchAndSync.js';

export const getJob = catchAndSync(async (req, res, next) => {
  const jobPost = await JobPost.findByPk(req.params.id);
  res.status(200).json({
    status: 'success',
    data: jobPost
  });
});

export const getAllJobs = catchAndSync(async (req, res, next) => {
  const jobs = await JobPost.findAll();
  res.status(200).json({
    status: 'success',
    data: jobs
  });
});

export const createJobPost = catchAndSync(async (req, res, next) => {
  const job = await JobPost.create(req.body);

  res.status(201).json({
    status: 'success',
    data: job
  });
});
