const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('workinggg');
})
app.listen(3000, () =>{
    console.log("sdsad");
})