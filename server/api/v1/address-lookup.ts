import { Hono } from "hono";
import { addresses } from "../../data/addresses";
import { findTopMatches } from "../../utils/addresses";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const addressLookupRoutes = new Hono().get(
  "/",
  zValidator(
    "query",
    z.object({
      q: z.string(),
    })
  ),
  (c) => {
    const { q } = c.req.valid("query");

    const results = findTopMatches(q, addresses, 5);
    return c.json(results);
  }
);
