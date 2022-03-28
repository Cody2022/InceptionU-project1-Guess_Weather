const express=require('express');


const appRouter=express.Router();
module.exports = appRouter;

const path=require('path')

const {weatherOfCity, localWeather, geoLocation}=require('../model/game')


appRouter.get("/weather", localWeather);

appRouter.get("/geoip", geoLocation);

appRouter.get("/weather/q", weatherOfCity); 

appRouter.get("/index", (req,res)=>{
    let indexPath=path.join(__dirname,'..','public','index.html');
    res.sendFile(indexPath);
});