import Sequelize, { Model } from 'sequelize';

export class Partner extends Model {
  static init(sequelize){
    super.init({
      number: Sequelize.NUMBER,
      active: Sequelize.BOOLEAN,
    }, {
      sequelize,
    })

    return this
  }
}
