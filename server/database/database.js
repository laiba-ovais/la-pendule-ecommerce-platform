const Sequelize = require('sequelize')
const database = {}
<<<<<<< HEAD
const sequelize = new Sequelize('mydatabse', 'root', 'chikorita1191', {
=======
const sequelize = new Sequelize('mydb', 'root', 'Palkia786', {
>>>>>>> 20ee67a2d02f2c4b93cf41c1ac33c56e57ccbada
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
database.sequelize = sequelize
database.Sequelize = Sequelize

module.exports = database;
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "chikorita1191",
//     database: 'mydatabase1',
//     insecureAuth : true 
//   });