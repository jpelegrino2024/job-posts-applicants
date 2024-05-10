const database = require('./../database');
const Status = require('./../utils/status');
//:TODO move mapping to a class
// MAPPING
exports.mapPropsToFields = (props) => {
  const dbFields =
    'title,description,emp_user_id,created_at,created_by,status_id';

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
  const props = 'title,description,empUserId,statusId,createdAt,createdBy';

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

exports.getJobPostById = async (jobId) => {
  try {
    const [jobs] = await database.query('SELECT * FROM job_posts WHERE id=?', [
      jobId
    ]);

    return jobs[0];
  } catch (err) {
    console.error(err);
    return;
  }
};

exports.createJobPost = async (jobPost) => {
  try {
    jobPost.statusId = Status.CREATED;
    const [result] = await database.query(
      'INSERT INTO job_posts(title,description,emp_user_id,status_id) VALUES(?,?,?,?)',
      [...Object.values(jobPost)]
    );

    return this.getJobPostById(result.insertId);
  } catch (err) {
    console.error(err);
    return null;
  }
};
