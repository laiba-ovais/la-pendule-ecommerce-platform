const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
var mysql = require('mysql');

app.use(express.static('./client/src'))

app.use(bodyParser.urlencoded({extended: false}))


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "chikorita1191",
    database: 'mydatabase1',
    insecureAuth : true 
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");//ISE PRIMARY KEY BANAO
    var sql = "CREATE TABLE users (id INT(4),fname VARCHAR(255), lname VARCHAR(255) , email VARCHAR(255) ,password VARCHAR(255))  ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

app.post('/submit' , function(req, res){
    console.log(req.body);
    var sql = "insert into users values(null,'"+ req.body.firstName +"', '"+req.body.lastName +"', '"+ req.body.email +"', '"+ req.body.password+"')";
    con.query(sql, function (err){
        if(err) throw err;

        res.render('index', {title: ' data saved',
        message : 'Data saved successfully'  })

        //console.log(' solution is ', rows[0].solution)
    })
    
    con.end();
})


  //net pey copy paste karo error