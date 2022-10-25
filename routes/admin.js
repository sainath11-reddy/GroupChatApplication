const express = require("express");
const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send("<form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action='/storetoLocal' method='POST'><input type='text' id='username' name='username'><br><input type='submit'></form>")
})

router.post('/storetoLocal',(req,res,next)=>{
    // const {username} = req.body;
    // localStorage.setItem("loginId",username);
    res.redirect('/');
})

module.exports = router;