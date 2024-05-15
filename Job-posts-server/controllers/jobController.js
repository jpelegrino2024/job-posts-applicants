const JobPost = require('./../models/jobModel');
const catchAndSync = require('./../utils/catchAndSync');

exports.getJob = catchAndSync(async (req, res, next) => {
  const jobPost = await JobPost.findByPk(req.params.id);
  res.status(200).json({
    status: 'success',
    data: jobPost
  });
});

exports.getAllJobs = catchAndSync(async (req, res, next) => {
  const jobs = await JobPost.findAll();
  res.status(200).json({
    status: 'success',
    data: jobs
  });
});

exports.createJobPost = catchAndSync(async (req, res, next) => {
  const job = await JobPost.create(req.body);

  res.status(201).json({
    status: 'success',
    data: job
  });
});
