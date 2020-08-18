const Sequelize = require('sequelize')
const DB = {}
const sequelize = new Sequelize('mydb', 'root', '28082000', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})                          //CONNECTION BAN RAHA HAI YEH KAISAY PATA CHALAY GA
DB.sequelize = sequelize
DB.Sequelize = Sequelize

module.exports = DB;
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "chikorita1191",
//     database: 'mydatabase1',
//     insecureAuth : true 
//   });