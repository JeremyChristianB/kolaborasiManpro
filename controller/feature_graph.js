import express from "express";
import { dbConnect } from '../controller/database.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('feature_graf');
});

export {router as graph};