import { AuthValidator } from './auth.validator';

export class UserValidatorFactory {
  static create(): AuthValidator {
    return new AuthValidator();
  }
}
