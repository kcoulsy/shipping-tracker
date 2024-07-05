import { Hono } from "hono";
import { shipmentsRoutes } from "./shipments";
import { addressLookupRoutes } from "./address-lookup";

export const v1Routes = new Hono()
  .route("/shipments", shipmentsRoutes)
  .route("/address-lookup", addressLookupRoutes);
