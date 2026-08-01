/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// household/decorators/current-household.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentHousehold = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest().household;
  },
);
