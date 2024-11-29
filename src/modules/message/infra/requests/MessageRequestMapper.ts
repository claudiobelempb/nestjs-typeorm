import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageRequest } from './MessageRequest';

export class MessageRequestMapper {
  static toEntity(request: MessageRequest.Create) {
    const entity = new MessageEntity();

    entity.text = request.text;
    entity.from.id = request.fromId;
    entity.to.id = request.toId;

    return entity;
  }
}
