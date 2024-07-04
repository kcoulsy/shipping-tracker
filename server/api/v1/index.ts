import { Hono } from "hono";
import { shipmentsRoutes } from "./shipments";

export const v1Routes = new Hono().route("/shipments", shipmentsRoutes);
