const express = require('express');
const router = express.Router();

router.get('/api/courses',async(req,res)=>{
var mysql = require('mysql');
const cors = require("cors");
router.use(cors());
var con = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: 'Palkia786',
  database: 'mydb'
});
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: 'Palkia786',
//     database: 'mydb'
// });
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM courses", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
})
