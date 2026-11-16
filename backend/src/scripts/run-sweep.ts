// Manual digest trigger: `npm run build && npm run sweep`.
// No HTTP endpoint exists for this, so nothing is reachable in production.
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ReminderService } from '../reminder/reminder.service';

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    await app.get(ReminderService).sweepDue();
  } finally {
    await app.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
