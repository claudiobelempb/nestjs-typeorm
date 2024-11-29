import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageRequest } from './MessageRequest';
export declare class MessageRequestMapper {
    static toEntity(request: MessageRequest.Create): MessageEntity;
}
