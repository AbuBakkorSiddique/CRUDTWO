const express = require('express') ; 
const app= express() ;
const api=require('./src/Router/api')

app.use(api)











// exportiong the app 
module.exports= app ; 








