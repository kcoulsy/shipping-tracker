import { Hono } from "hono";

interface Shipment {
  id: number;
  contents: string;
  dateShipped: Date;
  status: "not-shipped" | "shipped" | "delivered";
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  courier: string;
  trackingNumber: string;
}

const shipments: Shipment[] = [
  {
    id: 1,
    contents: "Books",
    dateShipped: new Date(),
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
    dateShipped: new Date(),
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

app.get("/", (c) => {
  return c.json(shipments);
});

export default app;
