import { MessageEntity } from 'src/modules/message/domain/entities/MessageEntity';
export interface UserEntityProps {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    send?: MessageEntity[];
    received?: MessageEntity[];
    isActive?: boolean;
    isAmbassador?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    send?: MessageEntity[];
    received?: MessageEntity[];
    isActive?: boolean;
    isAmbassador?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
