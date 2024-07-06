import { text, pgEnum, pgTable, serial, index } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "not-shipped",
  "shipped",
  "in-transit",
  "delivered",
]);

export const shipmentsTable = pgTable(
  "shipments",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    contents: text("contents").notNull(),
    status: statusEnum("status").default("not-shipped").notNull(),
    dateShipped: text("date_shipped").notNull(),
    name: text("name"),
    addressLine1: text("address_line1"),
    addressLine2: text("address_line2"),
    city: text("city"),
    postcode: text("postcode"),
    courier: text("courier"),
  },
  (shipments) => {
    return {
      userIdIndex: index("user_id_idx").on(shipments.userId),
    };
  }
);
