const express = require("express");
const router = express.Router();
const fs = require("fs");
// const bodyParser = require("body-parser")

// router.use()
// router.

router.get('/',(req,res,next)=>{
    let text = fs.readFileSync('./routes/message.txt').toString();
    text = text.trim() ===""?"No text":text;
    res.send(`<p>${text}<p><br><form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <input type="text" name="message" id="message" placeHolder="message">
    <input type="hidden" name="username" id="username">
    <br><input type="submit"></form>`)

});
router.post('/',(req,res,next)=>{
    let text = fs.readFileSync('./routes/message.txt');
    console.log(req.body);
    const {message, username}=req.body;
    text =text + "\n"+ username+":"+message;
    fs.writeFileSync('./routes/message.txt',text);
    res.send(`<p>${text}<p><br><form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <input type="text" name="message" id="message" placeHolder="message">
    <input type="hidden" name="username" id="username">
    <br><input type="submit"></form>`)
})


module.exports = router;
