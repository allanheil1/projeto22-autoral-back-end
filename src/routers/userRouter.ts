import { Router } from "express";
import { create, signin } from "@/controllers";
import { validateSchema } from '@/middlewares';
import { userSchema } from '@/schemas';

const userRouter = Router();

userRouter.post('/signup', validateSchema(userSchema) , create)
userRouter.post('/signin', signin)

export { userRouter };
