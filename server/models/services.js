const Sequelize = require('sequelize')
const db = require('../database/database.js')

module.exports = db.sequelize.define(
  'services',
  {
    serviceID: {
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
    service: {
      type: Sequelize.STRING
    },
    tel: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER,
      
    },
    sex: {
        type: Sequelize.STRING,
        
      },
      additional_details: {
        type: Sequelize.STRING,
        
      },
      userID: {
        type: Sequelize.INTEGER,
        
      }
  },
  services.belongsTo(users), //is type ka hai yeh dekho chal jaye ga?

  {
    timestamps: false
  }
)
