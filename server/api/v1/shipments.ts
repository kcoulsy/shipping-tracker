import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const shipmentSchema = z.object({
  id: z.number(),
  contents: z.string(),
  dateShipped: z.string(),
  status: z.union([
    z.literal("not-shipped"),
    z.literal("shipped"),
    z.literal("delivered"),
  ]),
  name: z.string(),
  addressLine1: z.string(),
  addressLine2: z.string(),
  city: z.string(),
  postcode: z.string(),
  courier: z.string(),
  trackingNumber: z.string(),
});

type Shipment = z.infer<typeof shipmentSchema>;

const shipments: Shipment[] = [
  {
    id: 1,
    contents: "Books",
    dateShipped: new Date().toISOString(),
    status: "shipped",
    name: "John Doe",
    addressLine1: "123 Fake St",
    addressLine2: "",
    city: "Springfield",
    postcode: "12345",
    courier: "Royal Mail",
    trackingNumber: "ABC123",
  },
  {
    id: 2,
    contents: "Electronics",
    dateShipped: new Date().toISOString(),
    status: "not-shipped",
    name: "Jane Doe",
    addressLine1: "456 Fake St",
    addressLine2: "",
    city: "Springfield",
    postcode: "12345",
    courier: "UPS",
    trackingNumber: "",
  },
];

const app = new Hono();

app
  .get("/", (c) => {
    return c.json(shipments);
  })
  .post(
    "/",
    zValidator(
      "json",
      shipmentSchema.omit({
        id: true,
      })
    ),
    (c) => {
      const shipment = c.req.valid("json");
      const id = shipments.length + 1;
      shipments.push({ ...shipment, id });
      return c.json({ id });
    }
  );

export default app;
