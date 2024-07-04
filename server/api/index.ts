import { Hono } from "hono";
import { v1Routes } from "./v1";

export const apiRoutes = new Hono().route("/v1", v1Routes);

export type AppType = typeof apiRoutes;
