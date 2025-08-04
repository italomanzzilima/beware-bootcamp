import { relations } from "drizzle-orm";
import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";

// user table definition
export const userTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
});

// category table definition and relations
export const categoryTable = pgTable("categories", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  createdAt: timestamp().notNull().defaultNow(),
});

// category definition: one category can have many products
export const categoryRelations = relations(categoryTable, ({ many }) => ({
  products: many(productTable),
}));

// product table definition
export const productTable = pgTable("products", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  categoryId: uuid()
    .references(() => categoryTable.id)
    .notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

// product relations definition: one product belongs to one category and can have many variants
export const productRelations = relations(productTable, ({ one, many }) => ({
  category: one(categoryTable, {
    fields: [productTable.categoryId],
    references: [categoryTable.id],
  }),
  variants: many(productVariantTable),
}));

// product variant table definition
export const productVariantTable = pgTable("product_variant", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .references(() => productTable.id)
    .notNull(),
  name: text().notNull(),
  color: text().notNull(),
  slug: text().notNull().unique(),
  priceInCents: integer().notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

// product variant relations definition: one product variant belongs to one product
export const productVariantRelations = relations(
  productVariantTable,
  ({ one }) => ({
    product: one(productTable, {
      fields: [productVariantTable.productId],
      references: [productTable.id],
    }),
  }),
);
