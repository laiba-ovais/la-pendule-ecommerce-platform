const express = require('express');
const router = express.Router();


// ek pipeline response hai jisse files ko stream mein daal kr bhej rhy hain
router.get('/getimg', function (req, res) {
    var id = req.params.productID  
    res.sendFile('../public/' + id)
     
    
  })

module.exports = router;
