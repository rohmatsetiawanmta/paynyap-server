import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.post('/', userController.addUser);

export default userRouter;
