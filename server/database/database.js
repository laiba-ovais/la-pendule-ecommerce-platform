// const Sequelize = require('sequelize')
// const DB = {}
// const sequelize = new Sequelize('mydb', 'root', 'Palkia786', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })                          //CONNECTION BAN RAHA HAI YEH KAISAY PATA CHALAY GA
// DB.sequelize = sequelize
// DB.Sequelize = Sequelize

// module.exports = DB;
// // var con = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "chikorita1191",
// //     database: 'mydatabase1',
// //     insecureAuth : true 
// //   });
const mysql = require('mysql');

// Database Connection for Production

// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

// let connection = mysql.createConnection(config);

// Database Connection for Development

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
});

  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });

  module.exports = connection;

