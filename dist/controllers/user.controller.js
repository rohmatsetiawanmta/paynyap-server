"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../db/user"));
const getAll = (req, res) => {
    user_1.default
        .selectAll()
        .then((users) => {
        res.status(200).send({
            isError: false,
            message: 'OK',
            result: users,
        });
    })
        .catch((err) => {
        res.status(500).send({
            isError: true,
            message: 'Error',
            error: err.code,
        });
    });
};
exports.default = { getAll };
