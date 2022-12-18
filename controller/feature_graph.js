import express from "express";
import { dbConnect } from '../controller/database.js';

const router = express.Router();

const getResults = (conn,book) => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT source,weight,target FROM ${book} ORDER BY weight DESC LIMIT 10`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

router.get('/',(req,res)=>{
    res.render('feature_graf');
});

router.post('/graf',async (req,res)=>{
    const conn = await dbConnect();
    const buku = req.body.book;
    const results = await getResults(conn,buku);

        let arrSource = [];
        let arrWeight = [];
        let arrTarget = [];
        for (let i = 0; i < results.length; i++) {
            arrSource[i] = results[i].source;
            arrWeight[i] = results[i].weight;
            arrTarget[i] = results[i].target;
        }

        res.send({status:'success', url:'/graf', arrSource: arrSource, arrWeight: arrWeight, arrTarget:arrTarget});
    
    
});

export {router as graph};