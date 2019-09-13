'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partners', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      api_key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValune: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('partners');
  }
};
