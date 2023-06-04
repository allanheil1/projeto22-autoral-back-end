import { Router } from "express";
import userController from '@/controllers/userController'
import { validateSchema } from '@/middlewares';
import { userSchema } from '@/schemas';

const userRouter = Router();

userRouter.post('/signup', validateSchema(userSchema) , userController.create)
userRouter.post('/signin', userController.signin)

export { userRouter };
