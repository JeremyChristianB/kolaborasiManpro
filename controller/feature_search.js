import express, { text } from "express";
import { dbConnect } from '../controller/database.js';

const router = express.Router();

const getNama1 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT * from book1`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getNama = (conn) => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT * FROM book1`,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getAutoComplete1 = (conn,nama,search_query) => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT Target,Source,weight FROM ${search_query} WHERE Source LIKE '%${nama}%' LIMIT 10 `,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getAutoComplete2 = (conn,nama) => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT Target,Source,weight FROM book1 WHERE Source LIKE '%${nama}%' LIMIT 10 `,(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

// router.get('/',(req,res)=>{
//     res.render('feature_search');
// });

// router.post('/searchNama',express.urlencoded(),async(req,res)=>{
//     const nama = req.body.nama;

//     const conn = await dbConnect();
//     const result = await getNama1(conn,nama);
//     conn.release();

// });

router.get('/',express.urlencoded(),async(req, res) =>{
    const conn = await dbConnect();
    const search_query = req.body.search;
    let result = await getAutoComplete2(conn);
    console.log(result);
    // var query = `
    // SELECT country_name FROM apps_countries 
    // WHERE country_name LIKE '%${search_query}%' 
    // LIMIT 10
    // `;

    // conn.query(query, function(error, data){
    //     console.log(data);
    //     response.json(data);

    // });
    // res.json(await getNama1(conn,search_query)); 
    // res.redirect('/feature_search');

    res.render('feature_search',{
        result
    });

});

router.post('/',express.urlencoded(),async(req, res) =>{
    const conn = await dbConnect();
    const search_query = req.body.search;
    const book = req.body.book;
    let result = await getAutoComplete1(conn,search_query,book);
    console.log(result);
    // var query = `
    // SELECT country_name FROM apps_countries 
    // WHERE country_name LIKE '%${search_query}%' 
    // LIMIT 10
    // `;

    // conn.query(query, function(error, data){
    //     console.log(data);
    //     response.json(data);

    // });
    // res.json(await getNama1(conn,search_query)); 
    // res.redirect('/feature_search');

    res.render('feature_search',{
        result
    });

});

export {router as search};