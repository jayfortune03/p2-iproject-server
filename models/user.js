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
      User.belongsToMany(models.UserSickness, {through: models.UserSickness})
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance, _) {
        if (instance.last_name === ``) {
          instance.last_name = instance.first_name
        }
        instance.password = hashPassword(instance.password)
      }
    }
  });
  return User;
};