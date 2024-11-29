import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import {
  MessageEntity,
  MessageProps,
} from '../../domain/entities/MessageEntity';
import { UserResponse } from 'src/modules/user/application/response/user.response';
export namespace MessageResponse {
  export class Message implements MessageProps {
    readonly id: string;
    readonly text: string;
    readonly from: UserResponse.UserMessage;
    readonly to: UserResponse.UserMessage;
    readonly isRead: boolean;
    readonly isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(
      id: string,
      text: string,
      from: UserResponse.UserMessage,
      to: UserResponse.UserMessage,
      isRead: boolean,
      isActive: boolean,
      createdAt: Date,
      updatedAt: Date,
    ) {
      this.id = id;
      this.text = text;
      this.from = from;
      this.to = to;
      this.isRead = isRead;
      this.isActive = isActive;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  export class Create
    implements
      Omit<
        MessageProps,
        'id' | 'isRead' | 'isActive' | 'createdAt' | 'updatedAt'
      >
  {
    readonly text: string;
    readonly from: UserResponse.UserMessage;
    readonly to: UserResponse.UserMessage;

    constructor(
      text: string,
      from: UserResponse.UserMessage,
      to: UserResponse.UserMessage,
    ) {
      this.text = text;
      this.from = from;
      this.to = to;
    }
  }

  export class Update
    implements
      Omit<
        MessageProps,
        'id' | 'isRead' | 'isActive' | 'createdAt' | 'updatedAt'
      >
  {
    readonly text: string;
    readonly from: UserResponse.UserMessage;
    readonly to: UserResponse.UserMessage;

    constructor(
      text: string,
      from: UserResponse.UserMessage,
      to: UserResponse.UserMessage,
    ) {
      this.text = text;
      this.from = from;
      this.to = to;
    }
  }
}
