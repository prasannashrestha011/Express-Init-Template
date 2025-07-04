import { defaultHandler } from "@/handlers/handler";
import { Router } from "express";

const routes = Router();
routes.get("/", defaultHandler);
export default routes;
