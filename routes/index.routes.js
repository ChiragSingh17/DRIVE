const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router();

router.get('/home', authMiddleware,(req,res)=>{
    res.render('home')
})

// router.post('/upload',upload.single('file'),(req,res)=>{
//     res.send(req.file)
// })



module.exports=router;