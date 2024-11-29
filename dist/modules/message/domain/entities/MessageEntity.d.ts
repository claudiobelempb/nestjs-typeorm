import { UserResponse } from 'src/modules/user/application/response/user.response';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
export interface MessageProps {
    id: string;
    text: string;
    from: UserResponse.UserMessage;
    to: UserResponse.UserMessage;
    isRead: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class MessageEntity {
    id: string;
    text: string;
    from: UserEntity;
    to: UserEntity;
    isRead?: boolean;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    entity: UserResponse.UserMessage;
}
