import userService from '@/services/userService';
import { Request, Response, NextFunction } from 'express';
import { Users } from '@prisma/client'

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err) {
    next(err);
  }
}

export async function signin(req: Request, res: Response, next: NextFunction) {

}

