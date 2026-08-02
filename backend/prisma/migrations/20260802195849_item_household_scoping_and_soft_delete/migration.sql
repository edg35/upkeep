/*
  Warnings:

  - Added the required column `household_id` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "household_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Item_household_id_deleted_at_idx" ON "Item"("household_id", "deleted_at");

-- CreateIndex
CREATE INDEX "ItemHistory_item_id_idx" ON "ItemHistory"("item_id");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_household_id_fkey" FOREIGN KEY ("household_id") REFERENCES "Household"("household_id") ON DELETE RESTRICT ON UPDATE CASCADE;
