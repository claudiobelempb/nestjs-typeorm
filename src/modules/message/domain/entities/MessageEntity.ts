import { IsBoolean, IsDate, IsString, IsUUID } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  text: string;

  @Column({ type: 'varchar', length: 64 })
  @IsString()
  from: string;

  @Column({ type: 'varchar', length: 64 })
  @IsString()
  to: string;

  @Column({ default: false })
  @IsBoolean()
  isRead?: boolean;

  @Column({ default: true })
  @IsBoolean()
  isActive?: boolean;

  @CreateDateColumn()
  @IsDate()
  createdAt?: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt?: Date;
}
