import Sequelize from 'sequelize';
import Marketplace from '../app/models/marketplace';
import Partner from '../app/models/partner'
import databaseConfig from '../config/database.config'


class Database {
  constructor(){
    this.models = [Marketplace, Partner];
    this._connection = new Sequelize(databaseConfig)
  }

  start(){
    this.models
      .map(model => model.init(this._connection))
      .map(model => model.associate && model.associate(this._connection.models));
  }
}

export default new Database();
