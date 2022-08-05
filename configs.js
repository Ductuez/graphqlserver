require('dotenv').config()

module.exports = {
  env: process.env.NODE_ENV,
  tokenSecret: process.env.TOKEN_SECRET,
  port: process.env.PORT,
  urlMONGODB: process.env.MONGODB,
}
