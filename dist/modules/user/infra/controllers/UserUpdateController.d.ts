import { UserUpdateService } from '../../application/services/UserUpdateService';
import { UserRequest } from '../request/user.request';
export declare class UserUpdateController {
    private readonly userUpdateService;
    constructor(userUpdateService: UserUpdateService);
    handle(id: string, request: UserRequest.Update): Promise<void>;
}
