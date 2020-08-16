const {Connection}  = require('./index');

 const all = async() => {
    return new Promise((resolve, reject)=>{
        Connection.query('SELECT * FROM courses',(err, results)=>{
            if(err){
                return reject(err);
                
            }
            resolve(results);
        });
    });
}
module.exports=all;