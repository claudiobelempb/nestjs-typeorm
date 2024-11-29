import { MessageService } from '../../application/services/message.service';
import { MessageRequest } from '../requests/MessageRequest';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageResponse } from '../../application/response/MessageResponse';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(pagination: MessageRequest.Pagination): Promise<MessageEntity[]>;
    findOne(id: string): Promise<MessageResponse.Message>;
    create(request: MessageRequest.Create): Promise<MessageResponse.Message>;
    update(id: string, request: MessageRequest.Update): Promise<MessageEntity>;
    updateIsActive(id: string, request: boolean): Promise<void>;
    updateIsDeactive(id: string, request: boolean): Promise<void>;
    updateIsRead(id: string, request: boolean): Promise<void>;
    updateIsReadUnread(id: string, request: boolean): Promise<void>;
    remove(id: string): Promise<void>;
}
