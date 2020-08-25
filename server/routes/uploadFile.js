const express = require("express");
var bodyParser = require('body-parser');
const router = express.Router();
var multer = require('multer')

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const cors = require("cors");
router.use(cors());

router.get('/upload',function(req,res){
    return res.send('Hello Server upload')
})
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname )
    }
  })
  
var upload = multer({ storage: storage }).array('file')
  


router.post('/upload',function(req, res) {
    
    upload(req, res, function (err) {
        console.log(err)
        if (err instanceof multer.MulterError) {
          
            return res.status(500).json(err)
          // A Multer error occurred when uploading.
          
        } else if (err) {
            return res.status(500).json(err)
          // An unknown error occurred when uploading.
        } 
        
        return res.status(200).send(req.file)
        // Everything went fine.
      })
});

module.exports = router;