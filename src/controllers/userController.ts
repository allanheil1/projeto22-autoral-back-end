import userService from '@/services/userService';
import { Request, Response, NextFunction } from 'express';
import { Users } from '@prisma/client'

async function create(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err) {
    next(err);
  }
}

async function signin(req: Request, res: Response, next: NextFunction) {

}

const userController = {
  create,
  signin,
}

export default userController;

