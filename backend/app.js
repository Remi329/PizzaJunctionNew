const express = require('express');//getting the express downloaded

const app = express();

app.use((req,res,next)=>{
    console.log("First middleware");
    next();//use if you are not sendign a response
})

app.use((req,res,next)=>{
    res.send("Hello from express");
})

module.exports = app;//will export all the middlewares