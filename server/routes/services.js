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



var mysql_pool  = mysql.createPool({
  connectionLimit : 100,
  host: 'localhost',
  user:'root',
  password: 'Palkia786',
  database: 'mydb'
});
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: 'Palkia786',
  database: 'mydb'
  });
  mysql_pool.getConnection((err) =>{
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
        
     
                mysqlConnection.query("insert into products ( `product_name`,`company`, `info`, `price`, `stock`) values('"+ req.body.product_name +"', '"+req.body.company +"', '"+ req.body.info +"', '"+ req.body.price+"', '"+ req.body.stock+"');"
                ,function(err2,result){
                    if(err2)  console.log(err2);
                    console.log(req.body , "data is saved");
                    res.json({ status: req.body.product_name + ' Registered!' })
                });
            
                
  })
  router.get('/getproduct', (req, res) => {
    
    // var passdb = [];
     mysqlConnection.query("SELECT * FROM products",function(err, results,fields){
        if(err)throw err;
        if(results){
          res.json({results:results});
        }
        
      });})

  module.exports = router;
  
  
  