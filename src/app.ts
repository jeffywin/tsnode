import createError from "http-errors";
import express, { Request, Response, Express, NextFunction } from "express";
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from "http-status-codes";
import indexRouter from './routes/index';
import userRouter from './routes/user';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createError(NOT_FOUND));
});

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status || INTERNAL_SERVER_ERROR);
  res.json({
    success: false,
    error
  });
});

export default app;
