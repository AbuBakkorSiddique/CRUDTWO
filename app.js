const express = require('express') ; 
const app= express() ;
const api=require('./src/Router/api')
const mongoose=require('mongoose') ; 
const cors=require('cors') ; 
const bodyParser = require('body-parser') ; 
const path=require('path') ;



//enable cors
app.use(cors()) ;

// moongose connection 

mongoose.connect('mongodb+srv://smd994753:En6UUodCE3sYDSTH@fullstackone.pjfqmmv.mongodb.net')
.then(()=>{
    console.log('Mongo DB  Connect Successfully ........')
})
.catch((err)=>{
    console.log(`There has a error in MongoDb connection ${err}`)
})

// elnable body parser 

app.use(bodyParser.json())

// routing connection 

app.use(api)

// then all routing for frontend 
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})















// exportiong the app 
module.exports= app ; 








