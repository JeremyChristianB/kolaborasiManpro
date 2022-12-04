
import mysql from 'mysql';

export const countCharacter = async (name) => {
    const conn = await dbConnect();
    return new Promise((resolve, reject) => {
        const sql = `SELECT Source FROM book_gabungan WHERE Source LIKE '%${name}%'`;
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