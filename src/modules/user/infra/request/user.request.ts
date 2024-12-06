import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { ConstantValidator } from 'src/shared/utils/constants/ConstantValidator';

type UserRequestProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export namespace UserRequest {
  export class Create implements Omit<UserRequestProps, 'id'> {
    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly firstName: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly lastName: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    readonly email: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly password: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @IsStrongPassword({ minLength: 6 })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly passwordConfirm: string;
  }

  export class Update
    implements
      Omit<
        UserRequestProps,
        'firstName' | 'lastName' | 'email' | 'password' | 'passwordConfirm'
      >
  {
    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly firstName: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly lastName: string;
  }

  export class UpdatePassword
    implements Omit<UserRequestProps, 'firstName' | 'lastName' | 'email'>
  {
    passwordConfirm: string;
    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @IsStrongPassword({ minLength: 6 })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly password: string;

    @IsString({ message: ConstantValidator.INVALID })
    @IsNotEmpty({ message: ConstantValidator.REQUIRED_FIELD })
    // @IsStrongPassword({ minLength: 6 })
    // @MinLength(5, { message: `${ConstantValidator.MIN_LENGTH} 5` })
    readonly oldPassword: string;
  }
}
