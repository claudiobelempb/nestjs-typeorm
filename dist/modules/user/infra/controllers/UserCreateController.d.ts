import { UserCreateService } from '../../application/services/UserCreateService';
import { UserEntity } from '../../domain/entities/use.entity';
import { UserRequest } from '../request/user.request';
export declare class UserCreateController {
    private readonly userCreateService;
    constructor(userCreateService: UserCreateService);
    handle(request: UserRequest.Create): Promise<UserEntity>;
}
