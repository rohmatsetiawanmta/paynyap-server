import { createPool } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const connection = createPool({
  host: process.env.HOST,
  port: Number(process.env.DBPORT),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
