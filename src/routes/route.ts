import { defaultHandler } from "@/handlers/handler";
import { Router, Request, Response, NextFunction } from "express";
import timeout from "connect-timeout";
const routes = Router();
routes.get("/", defaultHandler);
routes.get(
  "/slow",
  timeout("5s"),
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.timedout) next();
  },
  async (req: Request, res: Response) => {
    // Simulate a long delay (6 seconds > 5s timeout)
    await new Promise((resolve) => setTimeout(resolve, 6000));

    // This line will never run if timeout is triggered
    res.json({ message: "Finished slow operation" });
  },
);
export default routes;
