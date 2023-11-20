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
const addUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    user_1.default
        .createUser(firstName, lastName, username, phoneNumber, password)
        .then((users) => {
        res.status(201).send({
            isError: false,
            message: 'Created',
            result: users,
        });
    })
        .catch((err) => {
        res.status(500).send({
            isError: true,
            message: 'Error',
            error: err,
        });
    });
};
exports.default = { getAll, addUser };
