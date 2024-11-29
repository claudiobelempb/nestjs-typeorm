import { UserEntity } from '../../domain/entities/use.entity';
import { UserResponse } from '../response/user.response';
export declare class UserMapper {
    static toEntity(response: UserResponse.User): UserEntity;
    static toResponse(entity: UserEntity): UserResponse.User;
}
