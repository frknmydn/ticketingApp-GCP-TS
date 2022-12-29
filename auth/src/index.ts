import express from 'express';

import { json } from 'body-parser'
import mongoose from 'mongoose';
import { currentuserRouter } from './current-user';
import { signinRouter } from './signin';
import { signoutRouter } from './signout';
import { signupRouter } from './signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res, next) => {
    next(new NotFoundError());
});

app.use(errorHandler);


const start = async () =>{
    try{
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth'); //yamlda belirtilen isim
        console.log('connected to mongodb');
    }
    catch (err){
        console.log(err)
    }
}


app.listen(3000,() =>{
    console.log('listening on port 3000');
});

start();