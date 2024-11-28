import { Repository } from 'typeorm';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageRequest } from '../../infra/requests/MessageRequest';
export declare class MessageService {
    private readonly messageRepositoy;
    constructor(messageRepositoy: Repository<MessageEntity>);
    findAll(): Promise<MessageEntity[]>;
    findOne(id: string): Promise<MessageEntity>;
    create(request: MessageRequest.Create): Promise<MessageEntity>;
    update(id: string, request: MessageRequest.Update): Promise<MessageEntity>;
    updateIsActive(id: string): Promise<void>;
    updateIsDeactive(id: string): Promise<void>;
    updateIsRead(id: string): Promise<void>;
    updateIsUnread(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
