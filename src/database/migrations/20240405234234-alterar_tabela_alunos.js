'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // await queryInterface.addColumn('alunos', 'celular', {
    //   type: Sequelize.STRING,
    //   allowNull: true
    // });

    await queryInterface.addColumn('alunos', 'celular', {
      type: Sequelize.STRING,
      allowNull: true
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('alunos', 'celular');

  }
};
