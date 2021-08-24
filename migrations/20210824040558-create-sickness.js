'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sicknesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      profName: {
        allowNull:false,
        type: Sequelize.STRING
      },
      icdName: {
        allowNull:false,
        type: Sequelize.STRING
      },
      accuracy: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      specialisation: {
        allowNull:false,
        type: Sequelize.STRING
      },
      ranking: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: `Users`
          },
          key: `id`,
          onUpdate: `CASCADE`,
          onDelete: `CASCADE`
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sicknesses');
  }
};