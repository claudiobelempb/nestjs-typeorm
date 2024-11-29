import { MessageEntity } from 'src/modules/message/domain/entities/MessageEntity';
import { UserEntityProps } from '../../domain/entities/use.entity';
export declare namespace UserResponse {
    class User implements Omit<UserEntityProps, 'password'> {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly send: MessageEntity[];
        readonly received: MessageEntity[];
        readonly isActive?: boolean;
        readonly isAmbassador?: boolean;
        readonly createdAt?: Date;
        readonly updatedAt?: Date;
        constructor(id: string, firstName: string, lastName: string, email: string, send: MessageEntity[], received: MessageEntity[], isActive: boolean, isAmbassador: boolean, createdAt: Date, updatedAt: Date);
    }
    class UserMessage implements Omit<UserEntityProps, 'password'> {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly send: MessageEntity[];
        readonly received: MessageEntity[];
        constructor(id: string, firstName: string, lastName: string, email: string);
    }
}
