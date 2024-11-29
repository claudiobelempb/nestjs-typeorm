import { MessageEntity } from '../../domain/entities/MessageEntity';
export interface MessageRequestProps {
    readonly text: string;
    readonly fromId: string;
    readonly toId: string;
}
export declare namespace MessageRequest {
    export class Create implements MessageRequestProps {
        readonly text: string;
        readonly fromId: string;
        readonly toId: string;
    }
    export class Update implements Omit<MessageRequestProps, 'fromId' | 'toId'> {
        readonly text: string;
    }
    const IsActive_base: import("@nestjs/mapped-types").MappedType<Omit<MessageEntity, "id" | "text" | "to" | "from" | "isRead" | "createdAt" | "updatedAt">>;
    export class IsActive extends IsActive_base {
        readonly isActive: boolean;
    }
    const IsRead_base: import("@nestjs/mapped-types").MappedType<Omit<MessageEntity, "id" | "text" | "to" | "from" | "createdAt" | "updatedAt" | "isActive">>;
    export class IsRead extends IsRead_base {
        readonly isRead: boolean;
    }
    export class Pagination {
        limit: number;
        offset: number;
    }
    export {};
}
