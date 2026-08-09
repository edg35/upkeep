// reminder/reminder.util.ts
export function computeRemindAt(nextDueDate: Date, leadTimeDays: number): Date {
  const result = new Date(nextDueDate);
  result.setUTCDate(result.getUTCDate() - leadTimeDays);
  return result;
}
