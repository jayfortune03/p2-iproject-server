'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSickness extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserSickness.belongsTo(models.User)
      UserSickness.belongsTo(models.Sickness)
    }
  };
  UserSickness.init({
    UserId: DataTypes.INTEGER,
    SicknessId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserSickness',
  });
  return UserSickness;
};