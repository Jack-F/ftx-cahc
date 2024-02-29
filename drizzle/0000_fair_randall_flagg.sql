-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "digital_asset_prices" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255),
	"petition_price" varchar(255),
	"type" varchar(255),
	CONSTRAINT "digital_asset_prices_name_key" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "claims" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" integer,
	"customer_code" varchar(8) NOT NULL,
	"contingent_indicator" jsonb,
	"token_fiat_nft_balance" jsonb,
	"earn_indicator" boolean NOT NULL,
	"token_fiat_lend" jsonb,
	"uuid" uuid DEFAULT uuid_generate_v4()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_code" varchar(8) NOT NULL,
	"customer_category" varchar(255) NOT NULL,
	"uuid" uuid DEFAULT uuid_generate_v4(),
	CONSTRAINT "customers_customer_code_key" UNIQUE("customer_code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT uuid_generate_v4(),
	"full_name" text,
	"phone" varchar(256),
	"email" varchar(256),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "claims" ADD CONSTRAINT "claims_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE EXTENSION IF NOT EXISTS moddatetime;
CREATE TRIGGER update_timestamp BEFORE UPDATE ON users
FOR EACH ROW EXECUTE PROCEDURE moddatetime(updated_at);

*/