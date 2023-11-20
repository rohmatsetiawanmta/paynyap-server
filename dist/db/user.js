"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
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
const createUser = (firstName, lastName, username, phoneNumber, password) => {
    return new Promise((resolve, reject) => {
        db_1.connection.getConnection((err, conn) => {
            conn.query(`INSERT INTO user (firstName, lastName, username, phoneNumber, password) VALUES ('${firstName}', '${lastName}', '${username}', '${phoneNumber}', '${password}')`, (err, resultSet) => {
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
exports.default = { selectAll, createUser };
