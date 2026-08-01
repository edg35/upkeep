/*
  Warnings:

  - The primary key for the `HouseholdMember` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "HouseholdMember" DROP CONSTRAINT "HouseholdMember_pkey",
ADD CONSTRAINT "HouseholdMember_pkey" PRIMARY KEY ("user_id");

-- CreateIndex
CREATE INDEX "HouseholdMember_household_id_idx" ON "HouseholdMember"("household_id");
