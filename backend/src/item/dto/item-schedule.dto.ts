// item/dto/item-schedule.dto.ts
import {
  IsEnum,
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  Validate,
  ValidateIf,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { rrulestr } from 'rrule';
import { TrackingMode } from '../../../generated';

@ValidatorConstraint({ name: 'IsValidRRule', async: false })
class IsValidRRuleConstraint implements ValidatorConstraintInterface {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    try {
      rrulestr(value);
      return true;
    } catch {
      return false;
    }
  }

  defaultMessage(): string {
    return 'recurrence_rule must be a valid RRULE string';
  }
}

interface ScheduleShape {
  tracking_mode: TrackingMode;
  interval_days?: number;
  fixed_due_date?: string;
  recurrence_rule?: string;
}

@ValidatorConstraint({ name: 'IsValidScheduleShape', async: false })
class IsValidScheduleShapeConstraint implements ValidatorConstraintInterface {
  validate(_value: unknown, args: ValidationArguments): boolean {
    const obj = args.object as ScheduleShape;
    switch (obj.tracking_mode) {
      case TrackingMode.INTERVAL:
        return obj.fixed_due_date == null && obj.recurrence_rule == null;
      case TrackingMode.FIXED_DATE:
        return obj.interval_days == null && obj.recurrence_rule == null;
      case TrackingMode.RECURRING:
        return obj.interval_days == null && obj.fixed_due_date == null;
      default:
        return true;
    }
  }

  defaultMessage(): string {
    return 'Only the schedule fields matching the selected tracking_mode may be set';
  }
}

function IsValidScheduleShape(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidScheduleShapeConstraint,
    });
  };
}

export class CreateItemScheduleDto {
  @IsEnum(TrackingMode)
  @IsValidScheduleShape()
  tracking_mode: TrackingMode;

  @ValidateIf(
    (o: CreateItemScheduleDto) => o.tracking_mode === TrackingMode.INTERVAL,
  )
  @IsInt()
  @Min(1)
  interval_days?: number;

  @ValidateIf(
    (o: CreateItemScheduleDto) => o.tracking_mode === TrackingMode.FIXED_DATE,
  )
  @IsISO8601()
  fixed_due_date?: string;

  @ValidateIf(
    (o: CreateItemScheduleDto) => o.tracking_mode === TrackingMode.RECURRING,
  )
  @IsString()
  @IsNotEmpty()
  @Validate(IsValidRRuleConstraint)
  recurrence_rule?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  lead_time_days?: number;
}

export class UpdateItemScheduleDto {
  @IsOptional()
  @IsEnum(TrackingMode)
  @IsValidScheduleShape()
  tracking_mode?: TrackingMode;

  @ValidateIf(
    (o: UpdateItemScheduleDto) => o.tracking_mode === TrackingMode.INTERVAL,
  )
  @IsInt()
  @Min(1)
  interval_days?: number;

  @ValidateIf(
    (o: UpdateItemScheduleDto) => o.tracking_mode === TrackingMode.FIXED_DATE,
  )
  @IsISO8601()
  fixed_due_date?: string;

  @ValidateIf(
    (o: UpdateItemScheduleDto) => o.tracking_mode === TrackingMode.RECURRING,
  )
  @IsString()
  @IsNotEmpty()
  @Validate(IsValidRRuleConstraint)
  recurrence_rule?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  lead_time_days?: number;
}
