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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Name cannot be empty`
        }
      }
    },
    profName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `profName cannot be empty`
        }
      }
    },
    icdName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Icd Name cannot be empty`
        }
      }
    },
    accuracy: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Accuracy cannot be empty`
        }
      }
    },
    ranking: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Ranking cannot be empty`
        }
      }
    },
    specialisation: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Specialisation cannot be empty`
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `UserId cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Sickness',
  });
  return Sickness;
};