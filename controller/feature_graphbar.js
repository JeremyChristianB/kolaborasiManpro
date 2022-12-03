import express from "express";
import { countCharacter } from "../query/graphbarQuery.js";
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('feature_graphbar');
});

export {router as graphbar};