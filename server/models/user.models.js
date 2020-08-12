// const Sequelize = require('sequelize')
// const database = require('../database/database.js')

// module.exports = database.sequelize.define(
//   'users',
//   {
//     ID: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     first_name: {
//       type: Sequelize.STRING
//     },
//     last_name: {
//       type: Sequelize.STRING
//     },
//     email: {
//       type: Sequelize.STRING
//     },
//     password: {
//       type: Sequelize.STRING
//     },
//     date: {
//       type: Sequelize.DATE,
//       defaultValue: Sequelize.NOW
//     }
//   },
//   {
//     timestamps: false
//   }
// )

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    ID: {
       type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          first_name: {
            type: Sequelize.STRING
          },
          last_name: {
            type: Sequelize.STRING
          },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
          }

  },{
        timestamps: false
      }
  );

  return User;
};