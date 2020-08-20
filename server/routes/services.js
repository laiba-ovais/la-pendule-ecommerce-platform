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
    password: 'Palkia786',
    database: 'mydb'
  });
  mysqlConnection.connect((err) =>{
    if(!err){
    console.log('DB connection successful');
    var sql = "CREATE TABLE IF NOT EXISTS products (productID INT NOT NULL AUTO_INCREMENT, product_name VARCHAR(255), company VARCHAR(255), info VARCHAR(1000), price DECIMAL(7,2), stock INT(100), PRIMARY KEY(productID))";
    mysqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("product table created");
    //   var sql ="INSERT INTO `users` (`ID`, `first_name`,`last_name`, `password`, `email`) VALUES (1, 'test', 'test','test', 'test@test.com');";
        mysqlConnection.query(sql,function(err,result){if (err) throw err;
            console.log("ban gya table");})
    });}
    else
    console.log('connection failed \n Error: '+JSON.stringify(err, undefined, 2));
    
  
}); 

process.on('uncaughtException', function (err) {
    console.log(err);
  }); 
  
  
  router.post('/productAdded' , function(req, res){
        var user = req.body;
        
        // var Oneuser={
        //     email: user.email,
        //     password:user.password,
        //     first_name: user.firstname,
        //     last_name: user.lastname,
        //     time: Date.now()
        // }
        
                mysqlConnection.query("insert into products ( `product_name`,`company`, `info`, `price`, `stock`) values('"+ req.body.product_name +"', '"+req.body.comany +"', '"+ req.body.info +"', '"+ req.body.price+"', '"+ req.body.stock+"');"
                ,function(err2,result){
                    if(err2)  console.log(err2);
                    console.log(req.body , "data is saved");
                    res.json({ status: req.body.product_name + ' Registered!' })
                });
            
                
  })

  module.exports = router;
  
  
  