import { UserResponse } from 'src/modules/user/application/response/user.response';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageResponse } from '../response/MessageResponse';

export class MessageMapper {
  static toEntity(response: MessageResponse.Message) {
    const entity = new MessageEntity();
    entity.id = response.id;
    entity.text = response.text;
    entity.from = new UserResponse.UserMessage(
      response.from.id,
      response.from.firstName,
      response.from.lastName,
      response.from.email,
    );
    entity.to = new UserResponse.UserMessage(
      response.to.id,
      response.to.firstName,
      response.to.lastName,
      response.to.email,
    );
    entity.isRead = response.isRead;
    entity.isActive = response.isActive;
    entity.createdAt = response.createdAt;
    entity.updatedAt = response.updatedAt;
    return entity;
  }

  static toResponse(entity: MessageEntity) {
    const response = new MessageResponse.Message(
      entity.id,
      entity.text,
      new UserResponse.UserMessage(
        entity.from.id,
        entity.from.firstName,
        entity.from.lastName,
        entity.from.email,
      ),
      new UserResponse.UserMessage(
        entity.to.id,
        entity.to.firstName,
        entity.to.lastName,
        entity.to.email,
      ),
      entity.isRead,
      entity.isActive,
      entity.createdAt,
      entity.updatedAt,
    );

    return response;
  }
}
