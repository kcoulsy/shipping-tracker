import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { requireAuth, type AuthedRoutes } from "../../middleware/auth";
import { db } from "../../db";
import { shipmentsTable } from "../../db/schema";
import { shipmentSchema, type Shipment } from "../../schemas/shipment";
import { eq } from "drizzle-orm";

export const shipmentsRoutes = new Hono<AuthedRoutes>()
  .get("/:id{\\d+}", async (c) => {
    const id = parseInt(c.req.param("id"));

    const [shipment] = await db
      .select()
      .from(shipmentsTable)
      .where(eq(shipmentsTable.id, id));

    if (!shipment) {
      return c.notFound();
    }

    return c.json(shipment);
  })
  .use(requireAuth)
  .get("/", async (c) => {
    const shipments = await db.select().from(shipmentsTable);
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
      const shipment = c.req.valid("json");

      const [lastInsert] = await db
        .insert(shipmentsTable)
        .values({ ...shipment, userId: c.get("user")! })
        .returning();

      return c.json({ ...lastInsert });
    }
  )
  .put("/", zValidator("json", shipmentSchema), async (c) => {
    const shipment = c.req.valid("json");

    const [existing] = await db
      .select()
      .from(shipmentsTable)
      .where(eq(shipmentsTable.id, shipment.id));

    if (!existing) {
      return c.notFound();
    }

    const [updated] = await db
      .update(shipmentsTable)
      .set(shipment)
      .where(eq(shipmentsTable.id, shipment.id))
      .returning();

    return c.json({ shipment: updated });
  })
  .delete("/:id{\\d+}", async (c) => {
    const id = parseInt(c.req.param("id"));

    const [existing] = await db
      .select()
      .from(shipmentsTable)
      .where(eq(shipmentsTable.id, id));

    if (!existing) {
      return c.notFound();
    }

    await db.delete(shipmentsTable).where(eq(shipmentsTable.id, id));

    return c.json({ id });
  });
