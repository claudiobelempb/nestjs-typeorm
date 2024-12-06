import { UserCreateService } from '../../application/services/UserCreateService';
import { UserRequest } from '../request/user.request';
export declare class UserCreateController {
    private readonly userCreateService;
    constructor(userCreateService: UserCreateService);
    handle(request: UserRequest.Create): Promise<import("../../domain/entities/use.entity").UserEntity>;
}
