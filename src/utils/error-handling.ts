/* eslint-disable @typescript-eslint/no-explicit-any */
import {NextFunction, Request, Response, Express} from 'express';

const errorHandler = function (app: Express) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode =
      (res.statusCode && (res.statusCode === 200 ? 500 : res.statusCode)) ||
      500;
    res.status(statusCode);
    return res.send({
      error: err.message,
    });
  });
};

export default errorHandler;
