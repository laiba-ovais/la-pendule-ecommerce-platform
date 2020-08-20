const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken')
// process.env.SECRET_KEY = 'secret'

const router = express.Router();
const {encryptPWD,comparePWD} = require('../config/passwordCompare');

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const createUnixSocketPool = async (config) => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql"

  // Establish a connection to the database
  return await mysql.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
    // Specify additional properties here.
    ...config
  });
}
const mysqlConnection = mysql.createConnection({
  host: '34.93.86.122:graphite-sphere-286919:asia-south1:weprojectdb',
  user:'root',
  password: '28082000',
  database: 'mydb'
});
mysqlConnection.connect((err) =>{
  if(!err){
  console.log('DB connection successful');
  var sql = "CREATE TABLE IF NOT EXISTS users (ID INT(4),first_name VARCHAR(255), last_name VARCHAR(255), password VARCHAR(255) , email VARCHAR(255), PRIMARY KEY(ID))";
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
              mysqlConnection.query("insert into users ( `first_name`,`last_name`, `password`, `email`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ hashedpassword +"', '"+ req.body.email+"');",function(err2,result){
                  if(err2)  console.log(err2);
                  console.log(res.body , "data is saved");
                  res.send({email:req.body.email}) });
          }
          else{
              console.log("email already exist");
              res.send({exist:req.body.email});

          }
})

})



router.post('/signin', (req, res) => {
  var user = req.body;
  var Oneuser={
    email: user.email,
    password:user.password,
    first_name: user.firstname,
    last_name: user.lastname

} 
  console.log(req.body);
// var passdb = [];

  mysqlConnection.query("SELECT password FROM users WHERE email='"+req.body.email +"'",function(err, results,fields){
    if(err)throw err;
    
    if(results.length===0){
      res.send({error:req.body.email});
    }
    else{
    var password=results[0].password;
    console.log(password);
    
    if(comparePWD(req.body.password,password)) // ye function hai jo encrypted password ko normal se compare krta hai or true bata ta hai agr encrypted = encrypted(normal)
    {
    mysqlConnection.query('SELECT email, password FROM users WHERE email = ? AND password = ?', [Oneuser.email, Oneuser.password], 
    function(err, results)
    {

      if (err)throw err;
      if(results) {
        // let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        //   expiresIn: 1440
        // })
       res.send({email:req.body.email})
        
       
      } else {
           res.send({error2:req.body.email})
          }
        });}
        else{
          res.json('user not found');
        }
  
}
  });})

router.get('/getuser', (req, res) => {
    
  // var passdb = [];
   mysqlConnection.query("SELECT * FROM users",function(err, results,fields){
      if(err)throw err;
      if(results){
        res.send({results});
      }
      
    });})
  
module.exports = router;
