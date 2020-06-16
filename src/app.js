import express from 'express';
import routes from './routes';
const path = require('path');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(express.static(path.join(__dirname, 'web/build')));
  }
}

export default new App().server;
