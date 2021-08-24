'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserSicknesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id',
          onUpdate: `CASCADE`,
          onDelete: `CASCADE`
        }
      },
      SicknessId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Sicknesses'
          },
          key: 'id',
          onUpdate: `CASCADE`,
          onDelete: `CASCADE`
        },
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
    await queryInterface.dropTable('UserSicknesses');
  }
};