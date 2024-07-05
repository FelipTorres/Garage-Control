'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle', [
      {
        model: 'Onix',
        brand: 'Chevrolet',
        plate: 'HOX-5430',
        year: '2021',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Civic',
        brand: 'Honda',
        plate: 'NAP-1640',
        year: '2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Renegade',
        brand: 'Jeep',
        plate: 'FOP-8449',
        year: '2019',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicle', null, {});
  }
};