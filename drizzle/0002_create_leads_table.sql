CREATE TABLE "leads" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "company" TEXT NOT NULL,
  "score" INTEGER DEFAULT 0,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "user_id" UUID NOT NULL
);