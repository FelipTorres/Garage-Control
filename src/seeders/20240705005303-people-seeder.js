'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('people', [
      {
        name: 'Felipe Torres',
        cpf: '12345678900',
        phone: '31999999999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'João Romanel',
        cpf: '31232132132',
        phone: '31988888888',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gabriel Milito',
        cpf: '92835158221',
        phone: '31977777777',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
  }
};
