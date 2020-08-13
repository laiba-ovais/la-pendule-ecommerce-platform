const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();


app.use(cors(corsOptions));
var corsOptions = {
    origin: "http://localhost:4000"
  };

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
    });}
    else
    console.log('connection failed \n Error: '+JSON.stringify(err, undefined, 2));
    
});


// mysqlConnection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");//ISE PRIMARY KEY BANAO
//     var sql = "CREATE TABLE IF NOT EXISTS users (id INT(4),fname VARCHAR(255), lname VARCHAR(255) , email VARCHAR(255) ,password VARCHAR(255))  ";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//   });
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
var Users = require('./routes/User')
//newcode
// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);


app.get('/',(req,res)=>{
    res.send('Hello from the product server');
})
app.use('/users', Users)//esa koi path hai hamara?????????? nhi ye server ka path hai user ko access k liye



app.listen(4000, () =>{
    console.log("sdsad");
})


//newcode 
// const db = require("./models/role");
// const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });


// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }