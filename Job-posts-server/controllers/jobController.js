const JobPost = require('./../models/jobModel');
const catchAndSync = require('./../utils/catchAndSync');

exports.getJob = catchAndSync(async (req, res, next) => {
  const jobPost = await JobPost.getJobPostById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: jobPost
  });
});

exports.createJobPost = catchAndSync(async (req, res, next) => {
  const job = await JobPost.createJobPost(req.body);

  //:TODO Refactor satus
  res.status(201).json({
    status: 'success',
    data: job
  });
});
