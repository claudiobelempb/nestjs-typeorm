import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { ClassValidatorFields } from 'src/shared/application/validation/validator-fields';
import { AuthRules } from './auth.rules';

export class AuthValidator extends ClassValidatorFields<AuthRules> {
  validate(data: UserEntity): boolean {
    return super.validate(new AuthRules(data ?? ({} as UserEntity)));
  }
}
