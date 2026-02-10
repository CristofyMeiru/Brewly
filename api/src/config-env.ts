import { plainToClass } from 'class-transformer';
import { IsEnum, IsInt, IsString, Max, Min, validateSync } from 'class-validator';

export class EnvSchema {
  @IsInt()
  @Min(0)
  @Max(65535)
  PORT: number;

  @IsEnum(['development', 'production', 'test'])
  @IsString()
  NODE_ENV: 'development' | 'production' | 'test';

  @IsString()
  DATABASE_URL: string;
}


export function validate(env: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvSchema, env, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

