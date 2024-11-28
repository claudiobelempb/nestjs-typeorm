import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { Repository } from 'typeorm';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageRequest } from '../../infra/requests/MessageRequest';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepositoy: Repository<MessageEntity>,
  ) {}

  async findAll(): Promise<MessageEntity[]> {
    return await this.messageRepositoy.find();
  }

  async findOne(id: string): Promise<MessageEntity> {
    try {
      const entity = await this.messageRepositoy.findOne({ where: { id } });
      return entity;
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async create(request: MessageRequest.Create): Promise<MessageEntity> {
    const newMessage: MessageRequest.Create = {
      ...request,
    };
    const entity = this.messageRepositoy.create(newMessage);
    return await this.messageRepositoy.save(entity);
  }

  async update(
    id: string,
    request: MessageRequest.Update,
  ): Promise<MessageEntity> {
    try {
      const entity = await this.messageRepositoy.preload({ id, ...request });
      return await this.messageRepositoy.save(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async updateIsActive(id: string): Promise<void> {
    try {
      const entity = await this.messageRepositoy.preload({
        id,
        isActive: true,
      });
      await this.messageRepositoy.save(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async updateIsDeactive(id: string): Promise<void> {
    try {
      const entity = await this.messageRepositoy.preload({
        id,
        isActive: false,
      });
      await this.messageRepositoy.save(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async updateIsRead(id: string): Promise<void> {
    try {
      const entity = await this.messageRepositoy.preload({
        id,
        isRead: true,
      });
      await this.messageRepositoy.save(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async updateIsUnread(id: string): Promise<void> {
    try {
      const entity = await this.messageRepositoy.preload({
        id,
        isRead: false,
      });
      await this.messageRepositoy.save(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const entity = await this.messageRepositoy.findOneBy({ id });
      await this.messageRepositoy.remove(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }
}
