import Sequelize, { Model } from 'sequelize';

export default class Partner extends Model {
  static init(sequelize){
    super.init({
      api_key: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
    }, {
      sequelize,
    })

    return this
  }

  static associations(models){
    this.belongsToMany(models.Marketplace, {
      through: 'marketplaces_partners',
      as: 'marketplaces',
      foreignKey: 'partner_id'
    })
  }
}

