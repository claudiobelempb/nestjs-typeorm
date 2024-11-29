import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ConstantValidator } from 'src/shared/utils/constants/ConstantValidator';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { Type } from 'class-transformer';

export interface MessageRequestProps {
  readonly text: string;
  readonly fromId: string;
  readonly toId: string;
}
export namespace MessageRequest {
  export class Create implements MessageRequestProps {
    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly text: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly fromId: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly toId: string;
  }

  export class Update implements Omit<MessageRequestProps, 'fromId' | 'toId'> {
    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly text: string;

    // @IsString({ message: ConstantValidator.INVALID })
    // @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // readonly fromId: string;

    // @IsString({ message: ConstantValidator.INVALID })
    // @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // readonly toId: string;
  }

  export class IsActive extends OmitType(MessageEntity, [
    'id',
    'text',
    'to',
    'from',
    'isRead',
    'createdAt',
    'updatedAt',
  ] as const) {
    @IsBoolean({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly isActive: boolean;
  }

  export class IsRead extends OmitType(MessageEntity, [
    'id',
    'text',
    'to',
    'from',
    'isActive',
    'createdAt',
    'updatedAt',
  ] as const) {
    @IsBoolean({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly isRead: boolean;
  }

  export class Pagination {
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(50)
    @Type(() => Number)
    limit: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    offset: number;
  }
}
