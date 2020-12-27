'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alloNull: false,
      },
      discord_id: {
        type: Sequelize.STRING,
        alloNull: false,
      },
      username: {
        type: Sequelize.STRING,
        alloNull: false,
      },
      discriminator: {
        type: Sequelize.STRING,
        alloNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
        alloNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        alloNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        alloNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
