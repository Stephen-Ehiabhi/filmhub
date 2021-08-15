const dotenv = require("dotenv");
//load config
dotenv.config({
  path : "./config.env"
});

module.exports = {
  PORT: process.env.PORT,
  productionURI: process.env.productionURI
}
