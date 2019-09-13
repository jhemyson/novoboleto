import Sequelize, { Model } from 'sequelize';

export default class Marketplace extends Model {
  static init(sequelize){
    super.init({
      number: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
    }, {
      sequelize,
    })

    return this;
  }

  static associations(models){
    this.belongsToMany(models.Parterns, {
      through: 'marketplaces_partners',
      as: 'partners',
      foreignKey: 'marketplace_id'
    })
  }
}
