import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  score: serial('score').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  userId: uuid('user_id').notNull(),
});