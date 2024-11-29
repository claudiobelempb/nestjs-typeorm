import { IsBoolean, IsDate, IsString, IsUUID } from 'class-validator';
import { UserResponse } from 'src/modules/user/application/response/user.response';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface MessageProps {
  id: string;
  text: string;
  from: UserResponse.UserMessage;
  to: UserResponse.UserMessage;
  isRead: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  text: string;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'from' })
  from: UserEntity; /*de*/

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'to' })
  to: UserEntity; /*para*/

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
  entity: UserResponse.UserMessage;
}
