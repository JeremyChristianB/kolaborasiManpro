import express from "express";
import { dbConnect } from '../controller/database.js';
import Chart from 'chart.js/auto';

const router = express.Router();
const queryGraphBar1 = `SELECT Distinct Source,Count(Source) AS jumlahChar FROM book_gabungan WHERE book LIKE 'book1' ORDER BY Count(Source) DESC Limit 10`;

const getGraphBar1 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT *,Count(Source) AS jumlahNama FROM book1 Group By Source ORDER BY Count(Source) DESC Limit 10`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getGraphBar2 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT *,Count(Source) AS jumlahNama FROM book2 Group By Source ORDER BY Count(Source) DESC Limit 10`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getGraphBar3 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT *,Count(Source) AS jumlahNama FROM book3 Group By Source ORDER BY Count(Source) DESC Limit 10`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getGraphBar4 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT *,Count(Source) AS jumlahNama FROM book4 Group By Source ORDER BY Count(Source) DESC Limit 10`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getGraphBar5 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT *,Count(Source) AS jumlahNama FROM book5 Group By Source ORDER BY Count(Source) DESC Limit 10`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

router.get('/',express.urlencoded(),(req,res)=>{
    res.render('feature_graphbar');
});

router.post('/show',express.urlencoded(),async(req,res)=>{
    const conn = await dbConnect();
    const result = await getGraphBar1(conn);
    const xValues = [];
    const yValues = [];


    conn.release();
    // console.log(result);
    let i = 0;
    for(let data of result){
        xValues[i] = data.Source;
        yValues[i] = data.jumlahNama;
        // console.log(xValues[i]);
        // console.log(yValues[i]);
        i++;
    }
    const obj={
        Labels : xValues,
        Data : yValues
      };

    res.json(obj);

});

router.post('/show2',express.urlencoded(),async(req,res)=>{
    const conn = await dbConnect();
    const result = await getGraphBar2(conn);
    const xValues = [];
    const yValues = [];


    conn.release();
    // console.log(result);
    let i = 0;
    for(let data of result){
        xValues[i] = data.Source;
        yValues[i] = data.jumlahNama;
        // console.log(xValues[i]);
        // console.log(yValues[i]);
        i++;
    }
    const obj={
        Labels : xValues,
        Data : yValues
      };

    res.json(obj);

});

router.post('/show3',express.urlencoded(),async(req,res)=>{
    const conn = await dbConnect();
    const result = await getGraphBar3(conn);
    const xValues3 = [];
    const yValues3 = [];


    conn.release();
    // console.log(result);
    let i = 0;
    for(let data of result){
        xValues3[i] = data.Source;
        yValues3[i] = data.jumlahNama;
        console.log(xValues3[i]);
        console.log(yValues3[i]);
        i++;
    }
    const obj={
        Labels : xValues3,
        Data : yValues3
      };

    res.json(obj);

});

router.post('/show4',express.urlencoded(),async(req,res)=>{
    const conn = await dbConnect();
    const result = await getGraphBar4(conn);
    const xValues = [];
    const yValues = [];


    conn.release();
    // console.log(result);
    let i = 0;
    for(let data of result){
        xValues[i] = data.Source;
        yValues[i] = data.jumlahNama;
        // console.log(xValues[i]);
        // console.log(yValues[i]);
        i++;
    }
    const obj={
        Labels : xValues,
        Data : yValues
      };

    res.json(obj);

});

router.post('/show5',express.urlencoded(),async(req,res)=>{
    const conn = await dbConnect();
    const result = await getGraphBar5(conn);
    const xValues = [];
    const yValues = [];


    conn.release();
    // console.log(result);
    let i = 0;
    for(let data of result){
        xValues[i] = data.Source;
        yValues[i] = data.jumlahNama;
        // console.log(xValues[i]);
        // console.log(yValues[i]);
        i++;
    }
    const obj={
        Labels : xValues,
        Data : yValues
      };

    res.json(obj);

});


export {router as graphbar};