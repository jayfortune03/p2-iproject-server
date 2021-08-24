'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require(`../helpers/bcrypt`)
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Sickness, {foreignKey: `UserId`})
      // define association here
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `First Name cannot be empty`
        }
      }
    },
    lastName: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Gender Name cannot be empty`
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: `Date Of Birth cannot be empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Email cannot be empty`
        },
        isEmail: {
          msg: `Email must be in email format!`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Password cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance, _) {
        if (instance.lastName === ``) {
          instance.lastName = instance.firstName
        }
        instance.password = hashPassword(instance.password)
      }
    }
  });
  return User;
};