import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { requireAuth, type AuthedRoutes } from "../../middleware/auth";

const shipmentSchema = z.object({
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
  },
];

export const shipmentsRoutes = new Hono<AuthedRoutes>()
  .get("/:id{\\d+}", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = parseInt(c.req.param("id"));
    const shipment = shipments.find((s) => s.id === id);

    if (!shipment) {
      return c.notFound();
    }

    return c.json(shipment);
  })
  .use(requireAuth)
  .get("/", async (c) => {
    console.log(c.get("user"));
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
    async (c) => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const shipment = c.req.valid("json");
      const id = shipments.length + 1;
      shipments.push({ ...shipment, id });
      return c.json({ ...shipment, id });
    }
  )
  .put("/", zValidator("json", shipmentSchema), (c) => {
    const shipment = c.req.valid("json");
    const index = shipments.findIndex((s) => s.id === shipment.id);

    if (index === -1) {
      return c.notFound();
    }

    shipments[index] = shipment;

    return c.json({ shipment });
  })
  .delete("/:id{\\d+}", (c) => {
    const id = parseInt(c.req.param("id"));
    const index = shipments.findIndex((s) => s.id === id);

    if (index === -1) {
      return c.notFound();
    }

    shipments.splice(index, 1);

    return c.json({ id });
  });
