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
    var sql = "CREATE TABLE IF NOT EXISTS services (serviceID INT NOT NULL AUTO_INCREMENT,first_name VARCHAR(255), last_name VARCHAR(255), service VARCHAR(255) , tel VARCHAR(12), age INT(3), sex VARCHAR(10), additional_details VARCHAR(1000), userID INT(4), PRIMARY KEY(serviceID), FOREIGN KEY(userID) REFERENCES users(ID))";
    mysqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Services table created");
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
  
  
  router.post('/serviceRegistered' , function(req, res){
        var user = req.body;
        
        // var Oneuser={
        //     email: user.email,
        //     password:user.password,
        //     first_name: user.firstname,
        //     last_name: user.lastname,
        //     time: Date.now()
        // }
        
                mysqlConnection.query("insert into services ( `first_name`,`last_name`, `service`, `tel`, `age`, `sex`, `additional_details`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ req.body.service +"', '"+ req.body.tel+"', '"+ req.body.age+"','"+req.body.sex+"','"+req.body.additional_details+"');"
                ,function(err2,result){
                    if(err2)  console.log(err2);
                    console.log(req.body , "data is saved");
                    res.json({ status: req.body.first_name + ' Registered!' })
                });
            
                
  })

  module.exports = router;
  
  
  