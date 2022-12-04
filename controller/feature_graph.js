import express from "express";
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('feature_graf');
});

export {router as graph};