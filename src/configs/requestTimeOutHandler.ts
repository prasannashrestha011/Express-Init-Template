import timeout from "connect-timeout";
import { Request, Response, NextFunction } from "express";
export const requestTimeout = timeout("10s", { respond: false });
export const haltOnTimeout = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.timedout) {
    res.status(503).json({ error: "Request time out" });
  }
  next();
};
