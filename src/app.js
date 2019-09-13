import express from 'express';
import morgarn from 'morgan';
import cors from 'cors';
import routes from './routes';
import database from './database/database'

class App {
  constructor(){
    this._app = express();

    this._middlewares();
    this._routes();
    this._databases();
  }

  start(port){
    this._app.listen(port, () => {
      console.log(`Servidor iniciado na porta: ${port}`);
    });
  }

  _middlewares(){
    this._app.use(morgarn("dev"));
    this._app.use(cors());
  }

  _routes(){
    this._app.use(routes);
  }

  _databases(){
    database.start()
  }

}

export default new App();
