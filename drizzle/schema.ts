import { pgTable, unique, uuid, varchar, foreignKey, serial, integer, jsonb, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const digitalAssetPrices = pgTable("digital_asset_prices", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	petitionPrice: varchar("petition_price", { length: 255 }),
	type: varchar("type", { length: 255 }),
	snapshotLatest: varchar("snapshot_latest", { length: 255 }),
},
(table) => {
	return {
		digitalAssetPricesNameKey: unique("digital_asset_prices_name_key").on(table.name),
	}
});

export const claims = pgTable("claims", {
	id: serial("id").primaryKey().notNull(),
	customerId: integer("customer_id").references(() => customers.id),
	customerCode: varchar("customer_code", { length: 8 }).notNull(),
	contingentIndicator: jsonb("contingent_indicator"),
	tokenFiatNftBalance: jsonb("token_fiat_nft_balance"),
	earnIndicator: boolean("earn_indicator").notNull(),
	tokenFiatLend: jsonb("token_fiat_lend"),
	uuid: uuid("uuid").default(sql`uuid_generate_v4()`),
});

export const customers = pgTable("customers", {
	id: serial("id").primaryKey().notNull(),
	customerCode: varchar("customer_code", { length: 8 }).notNull(),
	customerCategory: varchar("customer_category", { length: 255 }).notNull(),
	uuid: uuid("uuid").default(sql`uuid_generate_v4()`),
},
(table) => {
	return {
		customersCustomerCodeKey: unique("customers_customer_code_key").on(table.customerCode),
	}
});