import { IsBoolean, IsDate, IsEmail, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column({ unique: true })
  @IsString()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password?: string;

  @Column({ default: true })
  @IsBoolean()
  isActive?: boolean;

  @Column({ default: true })
  @IsBoolean()
  isAmbassador?: boolean;

  @CreateDateColumn()
  @IsDate()
  createdAt?: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt?: Date;
}
