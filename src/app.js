const express = require("express");
const routes = require("./routes");
class App {
  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.routes();
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
