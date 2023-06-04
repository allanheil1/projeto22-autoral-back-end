import { Request, Response, NextFunction } from 'express';
import {unauthorizedError} from '@/errors';
import userRepositories from "../repositories/userRepository.js";

async function authValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) throw unauthorizedError();

  try {
    //res.locals.user = user;
    next();
  } catch (err) {

    next(err);
  }
}

export default { authValidation };
