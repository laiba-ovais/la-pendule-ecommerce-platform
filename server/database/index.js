const mysql = require('mysql');
const config = require('../config');

const courses = require('./courses') ;

 const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err) console.log(err);
    
})

module.exports= {courses, Connection};
