import express from 'express';
import { json } from 'body-parser'

const router = express.Router();

router.get('api/users/currentuser',(req,res) =>{
    res.send('hello there!');
    

});

export {router as currentuserRouter}