import mongoose from 'mongoose'
import express from "express";
import { json } from "body-parser";
//import {app } from './app'

const app = express();
app.set("trust proxy", true);
app.use(json());

const start = async () =>{
    try{
        //await mongoose.connect('mongodb://auth-mongo-srv:27017/auth'); //yamlda belirtilen isim
        await mongoose.connect('mongodb://auth-mongo-srv:27017/diary');
        console.log('connected to mongodb');
    }
    catch (err){
        console.log(err)
    }
}


app.listen(3001,() =>{
    console.log('listening on port 3001 hehe');
});

start();