'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('canteenBalanceBox', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      balance: {
        type: DataTypes.REAL,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('canteenBalanceBox');
  }
};