const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const {encryptPWD,comparePWD} = require('../config/passwordCompare');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: 'Palkia786',
  database: 'mydb'
});
mysqlConnection.connect((err) =>{
  if(!err){
  console.log('DB connection successful');
  var sql = "CREATE TABLE IF NOT EXISTS users (id INT(4),fname VARCHAR(255), lname VARCHAR(255) , email VARCHAR(255) ,password VARCHAR(255))  ";
  mysqlConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  //   var sql ="INSERT INTO `users` (`ID`, `first_name`,`last_name`, `password`, `email`) VALUES (1, 'test', 'test','test', 'test@test.com');";
      mysqlConnection.query(sql,function(err,result){if (err) throw err;
          console.log("values inserted");})
  });}
  else
  console.log('connection failed \n Error: '+JSON.stringify(err, undefined, 2));
  
});
process.on('uncaughtException', function (err) {
  console.log(err);
}); 


router.post('/submit' , function(req, res){
      var user = req.body;
      
      const hashedpassword = encryptPWD(user.password)
      console.log(hashedpassword);
      
      var Oneuser={
          email: user.email,
          password:user.password,
          first_name: user.firstname,
          last_name: user.lastname
      }
      mysqlConnection.query("SELECT * FROM users WHERE email = ?", [Oneuser.email], function(err,rows){
          if (err) {
              mysqlConnection.end();
              console.log(err);
          }
          if (!rows.length){
              mysqlConnection.query("insert into users ( `first_name`,`last_name`, `password`, `email`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ hashedpassword +"', '"+ req.body.email+"');",function(err2,result){
                  if(err2)  console.log(err2);
                  console.log(res.body , "data is saved");
                  res.json({ status: req.body.email + ' Registered!' }) });
          }
          else{
              console.log("email already exist");
              res.json("email exist");

          }
})

})



router.post('/auth', (req, res, next) => {
  var user = req.body;
  var Oneuser={
    email: user.email,
    password:user.password,
    first_name: user.firstname,
    last_name: user.lastname
}
    mysqlConnection.query('SELECT email, password FROM users WHERE email = ? AND password = ?', [Oneuser.email, Oneuser.password], 
    function(err, results)
    {
      if (err)throw err;
      if(results) {
      
        res.json({ status: req.body.email + ' is logined' }) 
      } else {
            res.json('user not found');
          }
        });
  

});

module.exports = router;