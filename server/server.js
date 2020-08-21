const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
var session = require('express-session');
const pageRouter = require('./routes/User');
const pageRouter2 = require('./routes/Checkout');
const pageRouter3 = require('./routes/services');
const pageRouter4 = require('./routes/uploadFile');
const pageRouter5 = require('./routes/getimg');

//const pageRouter4 = require('./routes/Courses')

app.use(cors(corsOptions));
var corsOptions = {
    origin: "http://localhost:4000"
  };

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

app.use('/static', express.static('public'))
app.use('/', pageRouter);
app.use('/', pageRouter2);
app.use('/', pageRouter3);
app.use('/', pageRouter4);


// app.set('view engine', 'handlebars');//// yiya hai pehle wale error ka solution lekin usse doosra error generate hogya

// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: 'Palkia786',
//     database: 'mydb'
// });
// mysqlConnection.connect((err) =>{
//     if(!err){
//     console.log('DB connection successful');
//     var sql = "CREATE TABLE IF NOT EXISTS users (id INT(4),fname VARCHAR(255), lname VARCHAR(255) , email VARCHAR(255) ,password VARCHAR(255))  ";
//     mysqlConnection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     //   var sql ="INSERT INTO `users` (`ID`, `first_name`,`last_name`, `password`, `email`) VALUES (1, 'test', 'test','test', 'test@test.com');";
//         mysqlConnection.query(sql,function(err,result){if (err) throw err;
//             console.log("values inserted");})
//     });}
//     else
//     console.log('connection failed \n Error: '+JSON.stringify(err, undefined, 2));
    
// });
// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 


// app.post('/submit' , function(req, res){
//         var user = req.body;
        
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(req.body.password, salt, (err, hash) => {
//               user.password=hash;
//             });
//         });
//         console.log(user.password);
        
//         var Oneuser={
//             email: user.email,
//             password:user.password,
//             first_name: user.firstname,
//             last_name: user.lastname
//         }
//         mysqlConnection.query("SELECT * FROM users WHERE email = ?", [Oneuser.email], function(err,rows){
//             if (err) {
//                 mysqlConnection.end();
//                 console.log(err);
//             }
//             if (!rows.length){
//                 mysqlConnection.query("insert into users ( `first_name`,`last_name`, `password`, `email`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ passwordHashed +"', '"+ req.body.email+"');",function(err2,result){
//                     if(err2)  console.log(err2);
//                     console.log(res.body , "data is saved");
//                     res.json({ status: req.body.email + ' Registered!' }) });
//             }
//             else{
//                 console.log("email already exist");
//                 res.json("email exist");

//             }
// })

    //     var sql11 = "SELECT email from users where email = '"+req.body.email+"'; ";
    //     var check = mysqlConnection.query (sql11 ,(err)=>
    //    { if(err) throw err;
    //     console.log("value is checked");})
    //     console.log(check)
    //     if(check===null){console.log("value dont exist")}
    // console.log(req.body);
    // var sql = "insert into users ( `first_name`,`last_name`, `password`, `email`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ req.body.password +"', '"+ req.body.email+"')";
    // mysqlConnection.query(sql, function (err){
    //     if(err) throw err;
    //     console.log(res.body , "data is saved");
    //     res.json({ status: req.body.email + ' Registered!' })
    //     // res.render('index', {title: ' data saved',
    //     // message : 'Data saved successfully'  })

    //     //console.log(' solution is ', rows[0].solution)
    // })
    
    // mysqlConnection.end();
// })


var Users = require('./routes/User')
//var services = require('./routes/services')
//newcode
// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);


app.get('/',(req,res)=>{
    res.send('Hello from the product server');
})
// app.use('/users', Users)//esa koi path hai hamara?????????? nhi ye server ka path hai user ko access k liye



app.listen(4000, () =>{
    console.log("sdsad");
})

// tum dekho aya 5 min mei

module.exports = app;