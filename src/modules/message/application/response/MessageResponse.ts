import { MessageEntity } from '../../domain/entities/MessageEntity';

export namespace MessageRespose {
  export class Create
    implements
      Omit<
        MessageEntity,
        'id' | 'isRead' | 'isActive' | 'createdAt' | 'updatedAt'
      >
  {
    readonly text: string;
    readonly from: string;
    readonly to: string;
  }

  export class Update
    implements
      Omit<
        MessageEntity,
        'id' | 'isRead' | 'isActive' | 'createdAt' | 'updatedAt'
      >
  {
    readonly text: string | null;
    readonly from: string | null;
    readonly to: string | null;
  }
}
