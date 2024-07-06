DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('not-shipped', 'shipped', 'in-transit', 'delivered');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shipments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"contents" text NOT NULL,
	"status" "status" DEFAULT 'not-shipped' NOT NULL,
	"date_shipped" text NOT NULL,
	"name" text,
	"address_line1" text,
	"address_line2" text,
	"city" text,
	"postcode" text,
	"courier" text
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "shipments" USING btree ("user_id");