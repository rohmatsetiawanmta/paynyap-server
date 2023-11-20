import { Request, Response } from 'express';
import User from '../models/user.model';
import { connection } from '../config/db';
import { QueryError, PoolConnection } from 'mysql2';

const selectAll = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query('SELECT * FROM user', (err, resultSet: User[]) => {
        conn.release();

        if (err) {
          return reject(err);
        } else {
          return resolve(resultSet);
        }
      });
    });
  });
};

const createUser = (firstName: string, lastName: string, username: string, phoneNumber: string, password: string): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(
        `INSERT INTO user (firstName, lastName, username, phoneNumber, password) VALUES ('${firstName}', '${lastName}', '${username}', '${phoneNumber}', '${password}')`,
        (err, resultSet: User[]) => {
          conn.release();

          if (err) {
            return reject(err);
          } else {
            return resolve(resultSet);
          }
        }
      );
    });
  });
};

export default { selectAll, createUser };
