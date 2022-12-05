import express from "express";
import { dbConnect } from '../controller/database.js';
import Chart from 'chart.js/auto';

const router = express.Router();
const queryGraphBar1 = `SELECT Distinct Source,Count(Source) AS jumlahChar FROM book_gabungan WHERE book LIKE 'book1' ORDER BY Count(Source) DESC Limit 10`;

const getGraphBar1 = conn => {
    return new Promise((resolve,reject) => {
        conn.query(`SELECT Distinct Source,Count(Source) AS jumlahChar FROM book_gabungan WHERE book LIKE 'book1' ORDER BY Count(Source) DESC Limit 10`,(err,result) => {
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

router.post('/cariGraphBar1',express.urlencoded(),async(req,res)=>{
    const conn = await dbConnect();
    const xValues = await getGraphBar1(conn);
    
    console.log(xValues);
    conn.release();

    res.render('../Views/feature_graphbar');
    console.log(xValues);
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green","blue","orange","brown"];

    // new Chart("myChart", {
    //     type: "bar",
    //     data: {
    //       labels: xValues,
    //       datasets: [{
    //         backgroundColor: barColors,
    //         data: yValues
    //       }]
    //     },
    //     options: {...}
    //   });

});


export {router as graphbar};