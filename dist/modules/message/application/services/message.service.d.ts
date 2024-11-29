import { UserShowService } from 'src/modules/user/application/services/UserShowService';
import { Repository } from 'typeorm';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageRequest } from '../../infra/requests/MessageRequest';
import { MessageResponse } from '../response/MessageResponse';
export declare class MessageService {
    private readonly messageRepositoy;
    private readonly userShowService;
    constructor(messageRepositoy: Repository<MessageEntity>, userShowService: UserShowService);
    findAll(pagination?: MessageRequest.Pagination): Promise<MessageEntity[]>;
    findOne(id: string): Promise<MessageResponse.Message>;
    create(request: MessageRequest.Create): Promise<MessageResponse.Message>;
    update(id: string, request: MessageRequest.Update): Promise<MessageEntity>;
    updateIsActive(id: string): Promise<void>;
    updateIsDeactive(id: string): Promise<void>;
    updateIsRead(id: string): Promise<void>;
    updateIsUnread(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
