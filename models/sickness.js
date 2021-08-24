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
      Sickness.belongsTo(models.User)
      // define association here
    }
  };
  Sickness.init({
    name: DataTypes.STRING,
    profName: DataTypes.STRING,
    icdName: DataTypes.STRING,
    accuracy: DataTypes.INTEGER,
    ranking: DataTypes.INTEGER,
    specialisation: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sickness',
  });
  return Sickness;
};