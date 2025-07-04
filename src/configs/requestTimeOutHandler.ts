import timeout from "connect-timeout";
import { Request, Response, NextFunction } from "express";
export const requestTimeout = timeout("10s");
export const haltOnTimeout = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.timedout) next();
};
