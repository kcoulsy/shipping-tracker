import { z } from "zod";

export const shipmentSchema = z.object({
  id: z.number(),
  contents: z.string().min(1, "Required"),
  dateShipped: z.string().min(1, "Required"),
  status: z.union([
    z.literal("not-shipped"),
    z.literal("shipped"),
    z.literal("in-transit"),
    z.literal("delivered"),
  ]),
  name: z.string().min(1, "Required"),
  addressLine1: z.string().min(1, "Required"),
  addressLine2: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  postcode: z.string().min(1, "Required"),
  courier: z.string().min(1, "Required"),
});

export const insertShipmentSchema = shipmentSchema.omit({
  id: true,
});
export type InsertShipment = z.infer<typeof insertShipmentSchema>;
export type Shipment = z.infer<typeof shipmentSchema>;
