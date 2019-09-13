'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('marketplaces_partners', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      marketplace_id: {
        type: Sequelize.INTEGER,
        references: { model: 'marketplaces', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      partner_id: {
        type: Sequelize.INTEGER,
        references: { model: 'partners', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
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
    return queryInterface.dropTable('marketplaces_partners');
  }
};
