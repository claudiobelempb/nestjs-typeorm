import { UserEntity } from 'src/modules/user/domain/entities/use.entity';

export class AuthMapper {
  static toResponse(entity: UserEntity) {}

  static toRequest(entiry: UserEntity) {
    // return new AuthRequest.Signup();
  }
}
