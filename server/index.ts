import { Hono } from "hono";
import { apiRoutes } from "./api";
import { serveStatic } from "hono/bun";

const app = new Hono();
app.route("/api", apiRoutes);

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
