const Sequelize = require('sequelize')
const DB = require('../database/database')

module.exports = DB.sequelize.define(
  'courses',
  {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING
    },
    instructor: {
      type: Sequelize.STRING
    },
    upload_date: {
      type: Sequelize.DATE
      ,defaultValue: Sequelize.NOW

    },
    price: {
      type: Sequelize.STRING
    },
    author_initial: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    image: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
    ,
    img_title: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)
