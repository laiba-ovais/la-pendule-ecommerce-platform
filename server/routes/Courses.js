const DB = require('../database/database');
//import DB from '../database';
const express = require('express');
const router = express.Router();
const courses = require("../models/Courses")
router.get('/api/courses',async(req,res)=>{

    courses.findAll({
      
    }).then(courses=>{
      if (courses) {
              res.json(courses)
              } else {
                 res.send('courses does not exist')
            }
    })
  // try
  // {
  //   let courses = await DB.courses.all();
  //   res.json(courses);
  // }
  // catch(e){
  //   console.log(e);
  //   res.sendStatus(500);
  // }
  
})

// users.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//   User.findOne({
//     where: {
//       id: decoded.id
//     }
//   })
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

// module.exports = users

//export default courses;

module.exports = router;
// const express = require('express');
// const router = express.Router();

// // router.get('/api/courses',async(req,res)=>{
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Palkia786",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM courses", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

