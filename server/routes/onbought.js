 const express = require('express');
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

  
  router.post('/productAdded' , function(req, res){
    var user = req.body;
    
 
         mysqlConnection.query("insert into baught ( `product_name`,`company`, `info`, `price`, `stock`) values('"+ req.body.product_name +"', '"+req.body.company +"', '"+ req.body.info +"', '"+ req.body.price+"', '"+ req.body.stock+"');"
        ,function(err2,result){
                if(err2)  console.log(err2);
                console.log(req.body , "data is saved");
                res.json({ status: req.body.product_name + ' Registered!' })
            });
        
            
})