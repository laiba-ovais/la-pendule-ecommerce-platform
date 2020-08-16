const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Palkia786',
    database: 'mydb'
  });

  mysqlConnection.connect((err) =>{
    if(!err){
    console.log('DB connection successful');
    var sql = "CREATE TABLE IF NOT EXISTS courses (ID INT(4),title VARCHAR(255), instructor VARCHAR(255), upload_date DATE , price FLOAT(24), author_initial VARCHAR(1), image VARCHAR(255), img_title VARCHAR(255), info VARCHAR(1000))";
    mysqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Course table created");
    })
}})