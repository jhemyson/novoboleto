import Sequelize from 'sequelize';

class Database {
  constructor(){
    this.models = [];
    this._connection = new Sequelize()
  }

  start(){
    this.models
      .map(model => model.start(this._connection))
      .map(model => model.associate && model.associate(this._connection.models));
  }

  bootstrap(models){

  }
}

export default new Database();
