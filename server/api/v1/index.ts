import { Hono } from "hono";
import shipments from "./shipments";

const app = new Hono();

app.route("/shipments", shipments);

export default app;
