import Sequelize, { Model } from 'sequelize';

export class Marketplace extends Model {
  static init(sequelize){
    super.init({
      api_key: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });

    return this;
  }


}
