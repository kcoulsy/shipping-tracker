import { type AppType } from "@server/api/index";
import { hc } from "hono/client";

export const client = hc<AppType>("http://localhost:5173/api");
