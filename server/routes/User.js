const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');

const router = express.Router();
const {encryptPWD,comparePWD} = require('../config/passwordCompare');

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
  var sql = "CREATE TABLE IF NOT EXISTS users (ID INT(4),first_name VARCHAR(255), last_name VARCHAR(255), password VARCHAR(255) , email VARCHAR(255))";
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
      
      const hashedpassword = encryptPWD(user.password);
      
      var Oneuser={
          email: user.email,
          password:user.password,
          first_name: user.firstname,
          last_name: user.lastname,
          time: Date.now()
      }
      mysqlConnection.query("SELECT * FROM users WHERE email = ?", [Oneuser.email], function(err,rows){
          if (err) {
              mysqlConnection.end();
              console.log(err);
          }
          if (!rows.length){
              mysqlConnection.query("insert into users ( `first_name`,`last_name`, `password`, `email`, `time`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ hashedpassword +"', '"+ req.body.email+"', '"+ Oneuser.time+"');",function(err2,result){
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



router.post('/auth', (req, res) => {
  var user = req.body;
  var Oneuser={
    email: user.email,
    password:user.password,
    first_name: user.firstname,
    last_name: user.lastname

} 
  console.log(req.body);
// var passdb = [];

  mysqlConnection.query("SELECT password FROM users WHERE email=?",[req.email],function(err, rows,fields){
    if(err)throw err;

    if(rows.length==0){
      res.json('email not found');
    }
    else{
    console.log(rows);
    var password=rows.password;
    console.log(rows);
    
    if(comparePWD(req.password,password)) // ye function hai jo encrypted password ko normal se compare krta hai or true bata ta hai agr encrypted = encrypted(normal)
    {
    mysqlConnection.query('SELECT email, password FROM users WHERE email = ? AND password = ?', [Oneuser.email, Oneuser.password], 
    function(err, results)
    {

      if (err)throw err;
      if(results) {
      
        res.json({ status: req.body.email + ' is logged in!' }) 
      } else {
            res.json('user not found');
          }
        });}
        else{
          res.json('user not found');
        }
  
}
  });

//   function setValue(value) {
//     passdb = value;
//     console.log(passdb[0].password)
//   }
//   console.log(passdb[0].password);
//  if(comparePWD(passdb[0].password,Oneuser.password)) // ye function hai jo encrypted password ko normal se compare krta hai or true bata ta hai agr encrypted = encrypted(normal)
//     {mysqlConnection.query('SELECT email, password FROM users WHERE email = ? AND password = ?', [Oneuser.email, Oneuser.password], 
//     function(err, results)
//     {

//       if (err)throw err;
//       if(results) {
      
//         res.json({ status: req.body.email + ' is logged in!' }) 
//       } else {
//             res.json('user not found');
//           }
//         });}
//         else{
//           res.json('user not found');
//         }
  
// /*
// mysqlConnection.connect((err) =>{ //pehle isje baghair hi chala k dekha tha :) tb b nhi chala


// mysqlConnection.query("SELECT * FROM users WHERE email = '"+ Oneuser.email +"' ", function(err, rows, fields){
//   if(err){
//       console.log(err);
//   }
//   else{
//       if(rows.length === 0){
//               res.json({ msg: 'Wrong Email' });
//       }
//       else{
//           var hash = "SELECT password FROM users WHERE email = '"+ Oneuser.email + "' ";
//           mysqlConnection.query(hash, function(err, result){
//               if(err){
//                   console.log(err);
//               }
//               bcryptjs.compare(Oneuser.password , hash, function(err, result) {
//                   if (err) { throw (err); }
//                   console.log(result);
//               });
//           });
//       }
//   }
//   if(err){
//       res.render('login',{
//           err,
//           email,
//           password
//       });}
   
  //else{
  //     res.render('Home', { name: name});
//   // }
// })
})

module.exports = router;
