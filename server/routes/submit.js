// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000
// var mysql = require('mysql');
// users.use(cors())
// app.use(express.static('./client/src')) // ye kiya hai?

// app.use(bodyParser.urlencoded({extended: false}))




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
//     const today = new Date();
//     console.log(req.body);
    
//     //     var sql11 = "SELECT email from users where email = '"+req.body.email+"'; ";
//     //     var check = mysqlConnection.query (sql11 ,(err)=>
//     //    { if(err) throw err;
//     //     console.log("value is checked");})
//     //     console.log(check)
//     //     if(check===null){console.log("value dont exist")}

    
    
//     var sql = "insert into users ( `first_name`,`last_name`, `password`, `email`) values('"+ req.body.first_name +"', '"+req.body.last_name +"', '"+ req.body.password +"', '"+ req.body.email+"')";
//     mysqlConnection.query(sql, function (err){
//         if(err) throw err;
//         console.log(res.body , "data is saved");
//         res.json({ status: req.body.email + ' Registered!' })
//         // res.render('index', {title: ' data saved',
//         // message : 'Data saved successfully'  })

//         //console.log(' solution is ', rows[0].solution)
//     })
    
//     // mysqlConnection.end();
// })
