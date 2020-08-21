const express = require('express');
const router = express.Router();

const fs = require('fs')
const stream = require('stream')
// ek pipeline response hai jisse files ko stream mein daal kr bhej rhy
router.get('/getimg',(req, res) => {
  const r = fs.createReadStream(`../public/${req.id}`) // or any other way to get a readable stream
  const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
  stream.pipeline(
   r,
   ps, // <---- this makes a trick with stream error handling
   (err) => {
    if (err) {
      console.log(err) // No such file or any other kind of error
      return res.sendStatus(400); 
    }
  })
  ps.pipe(res) // <---- this makes a trick with stream error handling
})

module.exports = router;
