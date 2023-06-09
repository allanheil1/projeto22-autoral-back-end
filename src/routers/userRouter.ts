import { Router } from "express";
import userController from '@/controllers/userController'
import { validateSchema } from '@/middlewares';
import { userSignUpSchema, userSignInSchema } from '@/schemas';

const userRouter = Router();

userRouter.post('/signup', validateSchema(userSignUpSchema) , userController.create)
userRouter.post('/signin', validateSchema(userSignInSchema), userController.signin)

export { userRouter };
