import { UserEntity } from '../../domain/entities/use.entity';
import { UserResponse } from '../response/user.response';

export class UserMapper {
  static toEntity(response: UserResponse.User) {
    const entity = new UserEntity();
    entity.id = response.id;
    entity.firstName = response.firstName;
    entity.lastName = response.lastName;
    entity.email = response.email;
    entity.send = response.send;
    entity.received = response.received;
    entity.isActive = response.isActive;
    entity.createdAt = response.createdAt;
    entity.updatedAt = response.updatedAt;
    return entity;
  }

  static toResponse(entity: UserEntity) {
    const response = new UserResponse.User(
      entity.id,
      entity.firstName,
      entity.lastName,
      entity.email,
      entity.send,
      entity.received,
      entity.isActive,
      entity.isAmbassador,
      entity.createdAt,
      entity.updatedAt,
    );

    return response;
  }
}
