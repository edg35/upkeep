-- AlterTable: add invite_code as nullable first so existing rows don't violate NOT NULL
ALTER TABLE "Household" ADD COLUMN "invite_code" TEXT;

-- Backfill existing rows with a unique placeholder code (format similar to generated codes: XXX-XXXX)
UPDATE "Household"
SET "invite_code" = 'HH' || upper(substr(md5(random()::text || household_id), 1, 1)) || '-' || upper(substr(md5(random()::text || household_id || 'x'), 1, 4))
WHERE "invite_code" IS NULL;

-- Enforce NOT NULL now that all rows have a value
ALTER TABLE "Household" ALTER COLUMN "invite_code" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Household_invite_code_key" ON "Household"("invite_code");
