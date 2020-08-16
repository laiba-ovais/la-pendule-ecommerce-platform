// const DB = require('../database');
// //import DB from '../database';
// const express = require('express');
// const router = express.Router();

// router.get('/api/courses',async(req,res)=>{
//   try
//   {
//     let courses = await DB.courses.all();
//     res.json(courses);
//   }
//   catch(e){
//     console.log(e);
//     res.sendStatus(500);
//   }
  
// })

// //export default courses;

// module.exports = router;
const express = require('express');
const router = express.Router();

// router.get('/api/courses',async(req,res)=>{
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "28082000",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM courses", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

