import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageResponse } from '../response/MessageResponse';
export declare class MessageMapper {
    static toEntity(response: MessageResponse.Message): MessageEntity;
    static toResponse(entity: MessageEntity): MessageResponse.Message;
}
