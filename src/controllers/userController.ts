import userService from '@/services/userService';
import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';
import { SignInBody, SignUpBody } from '@/protocols';

async function create(req: Request, res: Response, next: NextFunction) {

  const newUser = req.body as SignUpBody;

  try {
    const createdUser = await userService.create(newUser);
    return res.status(httpStatus.CREATED).send(createdUser);
  } catch (err) {
    next(err);
  }
}

async function signin(req: Request, res: Response, next: NextFunction) {

  const userToLog = req.body as SignInBody;

  try{
    const logInfo = await userService.signIn(userToLog);
    console.log(logInfo);
    return res.status(httpStatus.OK).send(logInfo);
  } catch (err) {
    next(err);
  }

}

const userController = {
  create,
  signin,
}

export default userController;

