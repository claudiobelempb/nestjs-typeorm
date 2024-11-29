import { IsBoolean, IsDate, IsEmail, IsString } from 'class-validator';
import { MessageEntity } from 'src/modules/message/domain/entities/MessageEntity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface UserEntityProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  send?: MessageEntity[];
  received?: MessageEntity[];
  isActive?: boolean;
  isAmbassador?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

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

  @OneToMany(() => MessageEntity, (message) => message.from)
  send?: MessageEntity[];

  @OneToMany(() => MessageEntity, (message) => message.to)
  received?: MessageEntity[];

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
