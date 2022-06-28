'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CanteenBalanceBox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CanteenBalanceBox.init({
    balance: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'canteenBalanceBox',
    modelName: 'CanteenBalanceBox',
  });
  return CanteenBalanceBox;
};