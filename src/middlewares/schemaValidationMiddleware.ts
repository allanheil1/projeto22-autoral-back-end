import { Request, Response, NextFunction } from 'express';
import errorsList from '@/errors/errors';
import { ObjectSchema } from 'joi';

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      throw errorsList.conflictError(errors);
    }
    next();
  };
}
