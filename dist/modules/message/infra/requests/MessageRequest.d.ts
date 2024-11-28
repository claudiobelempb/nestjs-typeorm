import { MessageEntity } from '../../domain/entities/MessageEntity';
export declare namespace MessageRequest {
    const Create_base: import("@nestjs/mapped-types").MappedType<Omit<MessageEntity, "id" | "isActive" | "createdAt" | "updatedAt" | "isRead">>;
    export class Create extends Create_base {
        readonly text: string;
        readonly from: string;
        readonly to: string;
    }
    const Update_base: import("@nestjs/mapped-types").MappedType<Partial<Create>>;
    export class Update extends Update_base {
    }
    const IsActive_base: import("@nestjs/mapped-types").MappedType<Omit<MessageEntity, "id" | "createdAt" | "updatedAt" | "text" | "from" | "to" | "isRead">>;
    export class IsActive extends IsActive_base {
        readonly isActive: boolean;
    }
    const IsRead_base: import("@nestjs/mapped-types").MappedType<Omit<MessageEntity, "id" | "isActive" | "createdAt" | "updatedAt" | "text" | "from" | "to">>;
    export class IsRead extends IsRead_base {
        readonly isRead: boolean;
    }
    export {};
}
