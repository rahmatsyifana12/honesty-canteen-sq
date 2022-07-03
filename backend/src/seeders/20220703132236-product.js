'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          studentId: '33309',
          name: 'Ciki Jetz',
          image: 'url_img',
          description: 'Ciki enak',
          price: 3000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: '22307',
          name: 'Aqua botol',
          image: 'url_img',
          description: 'Segar',
          price: 2500,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: '55111',
          name: 'Cireng',
          image: 'url_img',
          description: 'Masih panas',
          price: 3000,
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
