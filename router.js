import express, { query } from 'express';
import mysql from 'mysql';
import ejs from 'ejs';

var route = express.Router();

//Buat Database Book Game Of Thrones
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'got'
});

const dbConnect = () => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,conn) => {
            if(err){
                reject(err);
            }
            else{
                resolve(conn);
                
            }
        })
    })
}



export {route};