
import mysql from 'mysql';

export const searchName = async (name) => {
    const conn = await dbConnect();
    return new Promise((resolve, reject) => {
        const sql = `SELECT Target FROM book_gabungan WHERE Source LIKE '%${name}%'`;
        conn.query(sql, name, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        conn.release();
    });
};