import express from 'express';
import morgarn from 'morgan';
import cors from 'cors';
import routes from './routes';
import  dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
})

class App {
  constructor(){
    this._app = express();

    this._middlewares();
    this._routes();
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

}

export default new App();
