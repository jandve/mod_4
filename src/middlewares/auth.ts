import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authenticationRequiredError } from '../common/errorHandler';

async function authRequired(req: Request, res: Response, next: NextFunction) {
  if (!req.header('authorization')) {
    return authenticationRequiredError(res);
  }
  const [_, token] = req.header('authorization')?.split(' ') as string[];
  if (!token) {
    return authenticationRequiredError(res);
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (e) {
    return authenticationRequiredError(res);
  }
}

export { authRequired };
