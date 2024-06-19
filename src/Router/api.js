const express = require('express' ) ; 

const Router = express.Router() ;
const controller=require('../Controller/Controller')



Router.get('/',controller.Home )






module.exports= Router ; 