'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sickness extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sickness.belongsToMany(models.User, {through: models.UserSickness})
      // define association here
    }
  };
  Sickness.init({
    name: DataTypes.STRING,
    profName: DataTypes.STRING,
    icdName: DataTypes.STRING,
    accuracy: DataTypes.NUMBER,
    specialisation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sickness',
  });
  return Sickness;
};