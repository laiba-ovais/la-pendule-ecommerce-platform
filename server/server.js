const express = require('express');
const app = express();

var bodyParser = require('body-parser');
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Palkia786',
    database: 'mydb'
});
mysqlConnection.connect((err) =>{
    if(!err)
    console.log('DB connection successful');
    else
    console.log('connection failed \n Error: '+JSON.stringify(err, undefined, 2));
});

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
var Users = require('./routes/User')


app.get('/',(req,res)=>{
    res.send('Hello from the product server');
})
app.use('/users', Users)//esa koi path hai hamara?????????? nhi ye server ka path hai user ko access k liye



app.listen(4000, () =>{
    console.log("sdsad");
})