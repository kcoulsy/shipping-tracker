import { Hono } from "hono";
import { apiRoutes } from "./api";

const app = new Hono();
app.route("/api", apiRoutes);

export default app;
