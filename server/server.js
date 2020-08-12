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
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


app.get('/',(req,res)=>{
    res.send('Hello from the product server');
})
app.use('/users', Users)//esa koi path hai hamara?????????? nhi ye server ka path hai user ko access k liye



app.listen(4000, () =>{
    console.log("sdsad");
})



const db = require("./models/role");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}