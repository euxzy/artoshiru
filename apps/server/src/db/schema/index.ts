import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { user } from './auth'

export const pocket = sqliteTable('pocket', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  purpose: text('purpose').notNull(),
  type: text('type', { enum: ['SPENDING', 'SAVING'] }).notNull(),
  targetAmount: integer('target_amount'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),

  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  sourceId: text('source_id')
    .notNull()
    .references(() => source.id),
})

export const source = sqliteTable('source', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type', { enum: ['CASH', 'BANK', 'E-WALLET'] }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),

  userId: text('user_id')
    .notNull()
    .references(() => user.id),
})

export const category = sqliteTable('category', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type', { enum: ['EXPENSE', 'INCOME'] }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const trainsaction = sqliteTable('transaction', {
  id: text('id').primaryKey(),
  amount: integer('amount').notNull(),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  type: text('type', { enum: ['EXPENSE', 'INCOME'] }).notNull(),
  note: text('note'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),

  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  pocketId: text('pocket_id').references(() => pocket.id),
  sourceId: text('source_id')
    .notNull()
    .references(() => source.id),
  categoryId: text('category_id').references(() => category.id),
})
