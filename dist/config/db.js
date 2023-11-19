"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = require("mysql2");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.connection = (0, mysql2_1.createPool)({
    host: process.env.HOST,
    port: Number(process.env.DBPORT),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
