import { Module } from '@nestjs/common';
import { MessageController } from './controllers/MessageController';
import { MessageService } from '../application/services/message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from '../domain/entities/MessageEntity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}