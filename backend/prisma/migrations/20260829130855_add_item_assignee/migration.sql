-- CreateTable
CREATE TABLE "ItemAssignee" (
    "item_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemAssignee_pkey" PRIMARY KEY ("item_id","user_id")
);

-- CreateIndex
CREATE INDEX "ItemAssignee_user_id_idx" ON "ItemAssignee"("user_id");

-- AddForeignKey
ALTER TABLE "ItemAssignee" ADD CONSTRAINT "ItemAssignee_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemAssignee" ADD CONSTRAINT "ItemAssignee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
