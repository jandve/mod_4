import { Response } from 'express';
import Logger from '../logger';

function errorHandler(error: Error, res: Response) {
  if (!res || !error) {
    Logger.error('Something went wrong', error);
    return;
  }
  Logger.error('An error just happened =(,...', error.message);
  res.status(500).send({ message: error.message });
}

export { errorHandler };
