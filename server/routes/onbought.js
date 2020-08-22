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

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'chikorita1191',
    database: 'mydb'
  });

  
  router.post('/productAdded' , function(req, res){
    var user = req.body;
    
       mysqlConnection.query("insert into baught ( `productID`,`user_id`) values('"+ req.body.productID +"', '"+req.body.UserID +"');"
        ,function(err2,result){
                if(err2)  console.log(err2);
                console.log(req.body , "data is saved");
                res.send({ status: req.body.productID + ' registered!' })
            });
        
            
})
module.exports = router;
