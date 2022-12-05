
import mysql from 'mysql';
import express, { query } from 'express';
import { db } from '../controller/database.js';

export const countCharacter1 = async () => {
    const conn = await db();
    return new Promise((resolve, reject) => {
        const sql = `SELECT distinct Source,Count(Source) AS jumlahNama FROM book_gabungan WHERE book LIKE 'book1' ORDER BY Count(Source) DESC limit 10`;
        conn.query(sql,(err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        conn.release();
    });
};