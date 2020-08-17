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
  
})


module.exports = router;
