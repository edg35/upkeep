-- AlterTable
ALTER TABLE "Reminder" ADD COLUMN     "sent_at" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Reminder_remind_at_sent_at_idx" ON "Reminder"("remind_at", "sent_at");
