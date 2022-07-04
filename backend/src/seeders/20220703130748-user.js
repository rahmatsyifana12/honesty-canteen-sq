'use strict';
const bcrypt = require('bcrypt');
const config = require('../config/config');

function getHashedPassword(password) {
  const hashedPassword = bcrypt.hashSync(
    password,
    config.hashRounds
  );

  return hashedPassword;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          studentId: '33309',
          password: getHashedPassword('Password3'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: '22307',
          password: getHashedPassword('Password2'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: '55111',
          password: getHashedPassword('Password5'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
