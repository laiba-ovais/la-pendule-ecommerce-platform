// // const Sequelize = require('sequelize')
// // const DB = {}
// // const sequelize = new Sequelize('mydb', 'root', 'Palkia786', {
// //   host: 'localhost',
// //   dialect: 'mysql',
// //   operatorsAliases: false,

// //   pool: {
// //     max: 5,
// //     min: 0,
// //     acquire: 30000,
// //     idle: 10000
// //   }
// // })                          //CONNECTION BAN RAHA HAI YEH KAISAY PATA CHALAY GA
// // DB.sequelize = sequelize
// // DB.Sequelize = Sequelize

// // module.exports = DB;
// // // var con = mysql.createConnection({
// // //     host: "localhost",
// // //     user: "root",
// // //     password: "chikorita1191",
// // //     database: 'mydatabase1',
// // //     insecureAuth : true 
// // //   });
// const mysql = require('mysql');

// // Database Connection for Production

// // let config = {
// //     user: process.env.SQL_USER,
// //     database: process.env.SQL_DATABASE,
// //     password: process.env.SQL_PASSWORD,
// // }

// // if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
// //   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// // }

// // let connection = mysql.createConnection(config);

// // Database Connection for Development
// const createUnixSocketPool = async (config) => {
//   const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql"

//   // Establish a connection to the database
//   return await mysql.createPool({
//     user: process.env.DB_USER, // e.g. 'my-db-user'
//     password: process.env.DB_PASS, // e.g. 'my-db-password'
//     database: process.env.DB_NAME, // e.g. 'my-database'
//     // If connecting via unix domain socket, specify the path
//     socketPath: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
//     // Specify additional properties here.
//     ...config
//   });
// }
// createUnixSocketPool.connect(function(err) {
//     if (err) {
//       console.error('Error connecting: ' + err.stack);
//       return;
//     }
//     console.log('Connected as thread id: ' + connection.threadId);
//   });

//   module.exports = createUnixSocketPool;

