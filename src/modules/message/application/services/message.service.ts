import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserShowService } from 'src/modules/user/application/services/UserShowService';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { Repository } from 'typeorm';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageRequest } from '../../infra/requests/MessageRequest';
import { MessageMapper } from '../mapper/MessageMapper';
import { MessageResponse } from '../response/MessageResponse';
import { PaginationResponse } from 'src/shared/application/response/PagnationResponse';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepositoy: Repository<MessageEntity>,
    private readonly userShowService: UserShowService,
  ) {}

  async findAll(
    pagination?: MessageRequest.Pagination,
  ): Promise<MessageEntity[]> {
    const { limit = 10, offset = 0 } = pagination;
    return await this.messageRepositoy.find({
      take: limit,
      skip: offset,
      relations: ['from', 'to'],
      order: {
        id: 'desc',
      },
      select: {
        from: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
        to: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    });
  }

  async findOne(id: string): Promise<MessageResponse.Message> {
    try {
      const entity = await this.messageRepositoy.findOne({
        where: { id },
        relations: ['from', 'to'],
        select: {
          from: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
          to: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      });
      return MessageMapper.toResponse(entity);
    } catch (error) {
      throw new NotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async create(
    request: MessageRequest.Create,
  ): Promise<MessageResponse.Message> {
    const { text, fromId, toId } = request;

    const from = await this.userShowService.execute(fromId);
    const to = await this.userShowService.execute(toId);

    const newMessage = new MessageEntity();
    newMessage.text = text;
    newMessage.from = from;
    newMessage.to = to;

    const entity = this.messageRepositoy.create(newMessage);
    const response = await this.messageRepositoy.save(entity);
    console.log(MessageMapper.toResponse(response));
    return MessageMapper.toResponse(response);
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
