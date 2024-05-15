const { sequelize } = require('./../database');
const { DataTypes, Model } = require('sequelize');

class JobPost extends Model {}
JobPost.init(
  {
    title: {
      type: DataTypes.STRING
    },

    description: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: new Date()
    },

    createdBy: {
      type: DataTypes.STRING,
      field: 'created_by'
    }
  },
  {
    sequelize,
    modelName: 'job_posts'
  }
);

module.exports = JobPost;
