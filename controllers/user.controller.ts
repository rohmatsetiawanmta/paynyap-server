import { Request, Response } from 'express';
import user from '../db/user';

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

export default { getAll };
