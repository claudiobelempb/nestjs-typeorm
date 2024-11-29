import { MessageProps } from '../../domain/entities/MessageEntity';
import { UserResponse } from 'src/modules/user/application/response/user.response';
export declare namespace MessageResponse {
    class Message implements MessageProps {
        readonly id: string;
        readonly text: string;
        readonly from: UserResponse.UserMessage;
        readonly to: UserResponse.UserMessage;
        readonly isRead: boolean;
        readonly isActive: boolean;
        readonly createdAt: Date;
        readonly updatedAt: Date;
        constructor(id: string, text: string, from: UserResponse.UserMessage, to: UserResponse.UserMessage, isRead: boolean, isActive: boolean, createdAt: Date, updatedAt: Date);
    }
    class Create implements Omit<MessageProps, 'id' | 'isRead' | 'isActive' | 'createdAt' | 'updatedAt'> {
        readonly text: string;
        readonly from: UserResponse.UserMessage;
        readonly to: UserResponse.UserMessage;
        constructor(text: string, from: UserResponse.UserMessage, to: UserResponse.UserMessage);
    }
    class Update implements Omit<MessageProps, 'id' | 'isRead' | 'isActive' | 'createdAt' | 'updatedAt'> {
        readonly text: string;
        readonly from: UserResponse.UserMessage;
        readonly to: UserResponse.UserMessage;
        constructor(text: string, from: UserResponse.UserMessage, to: UserResponse.UserMessage);
    }
}
