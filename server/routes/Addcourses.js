const express = require('express');
const router = express.Router();

router.get('/api/courses',async(req,res)=>{
var mysql = require('mysql');

var con = mysql.createConnection({
  host: '104.199.232.15',
  user: "root",
  password: "Palkia786",
  database: "wegcdb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM courses", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
})
