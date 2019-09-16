require('../dotenv')

/**
 * Manter o module.export para que o Sequelize consiga entender
 */
module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  //Usado para o banco SQLITE em ambiente de test
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}
