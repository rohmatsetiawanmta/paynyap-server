import { Request, Response } from 'express';
import user from '../db/user';

interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

const getAll = (req: Request, res: Response) => {
  user
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

const addUser = (
  req: TypedRequestBody<{ firstName: string; lastName: string; username: string; phoneNumber: string; password: string }>,
  res: Response
) => {
  const firstName: string = req.body.firstName;
  const lastName: string = req.body.lastName;
  const username: string = req.body.username;
  const phoneNumber: string = req.body.phoneNumber;
  const password: string = req.body.password;
  user
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

export default { getAll, addUser };
