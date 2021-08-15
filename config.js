const dotenv = require("dotenv");
//load config
dotenv.config();

module.exports = {
  port: process.env.PORT,
  productionURI: process.env.productionURI
}
