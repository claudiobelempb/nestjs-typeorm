import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';

export class AuthRules {
  @MaxLength(32)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @MaxLength(32)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;

  constructor({
    firstName,
    lastName,
    email,
    password,
    createdAt,
    updatedAt,
  }: UserEntity) {
    Object.assign(this, {
      firstName,
      lastName,
      email,
      password,
      createdAt,
      updatedAt,
    });
  }
}
