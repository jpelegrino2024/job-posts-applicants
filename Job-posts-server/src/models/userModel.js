import sequelize from './../database.js';
import { DataTypes, Model } from 'sequelize';

class User extends Model {}
User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },

    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
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
    modelName: 'users'
  }
);

export default User;
