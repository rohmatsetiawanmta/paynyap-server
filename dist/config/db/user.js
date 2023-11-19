"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const selectAll = () => {
    return new Promise((resolve, reject) => {
        db_1.connection.getConnection((err, conn) => {
            conn.query('SELECT * FROM user', (err, resultSet) => {
                conn.release();
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(resultSet);
                }
            });
        });
    });
};
exports.default = { selectAll };
