const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const cors = require("cors");
router.use(cors());
const mysqlConnection = mysql.createConnection({
    host: '104.199.232.15',
    user:'root',
    password: 'Palkia786',
    database: 'wegcdb'
  });

  
  router.post('/onbaught' , function(req, res){
    var product = req.body;
    
       mysqlConnection.query("insert into baught ( `productID`,`user_id`) values('"+ req.body.productID +"', '"+req.body.UserID +"');"
        ,function(err2,result){
                if(err2)  console.log(err2);
                console.log(req.body , "data is saved");
                res.send({ status: req.body.productID + ' registered!' })
            });
        
            
})



module.exports = router;
