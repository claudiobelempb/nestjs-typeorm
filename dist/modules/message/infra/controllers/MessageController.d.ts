import { MessageService } from '../../application/services/message.service';
import { MessageRequest } from '../requests/MessageRequest';
import { MessageEntity } from '../../domain/entities/MessageEntity';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(pagination: any): Promise<MessageEntity[]>;
    findOne(id: string): Promise<MessageEntity>;
    create(request: MessageRequest.Create): Promise<MessageEntity>;
    update(id: string, request: MessageRequest.Update): Promise<MessageEntity>;
    updateIsActive(id: string, request: boolean): Promise<void>;
    updateIsDeactive(id: string, request: boolean): Promise<void>;
    updateIsRead(id: string, request: boolean): Promise<void>;
    updateIsReadUnread(id: string, request: boolean): Promise<void>;
    remove(id: string): Promise<void>;
}
