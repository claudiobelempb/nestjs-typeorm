import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ConstantValidator } from 'src/shared/utils/constants/ConstantValidator';
import { MessageEntity } from '../../domain/entities/MessageEntity';

export namespace MessageRequest {
  export class Create extends OmitType(MessageEntity, [
    'id',
    'isRead',
    'isActive',
    'createdAt',
    'updatedAt',
  ] as const) {
    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly text: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly from: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly to: string;
  }

  export class Update extends PartialType(Create) {}

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
}
