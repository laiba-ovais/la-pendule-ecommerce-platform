const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();


app.use(cors(corsOptions));
var corsOptions = {
    origin: "http://localhost:4000"
  };
app.use(bodyParser.json());
app.use(
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
app.post('/submit' , function(req, res){
    console.log(req.body);
    var sql = "insert into users ( `first_name`,`last_name`, `password`, `email`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ req.body.password +"', '"+ req.body.email+"')";
    mysqlConnection.query(sql, function (err){
        if(err) throw err;

        res.render('index', {title: ' data saved',
        message : 'Data saved successfully'  })

        //console.log(' solution is ', rows[0].solution)
    })
    
    mysqlConnection.end();
})


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

