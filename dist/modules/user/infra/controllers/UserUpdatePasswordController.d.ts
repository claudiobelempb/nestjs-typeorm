import { UserUpdatePasswordService } from '../../application/services/UserUpdatePasswordService';
import { UserRequest } from '../request/user.request';
export declare class UserUpdatePasswordController {
    private readonly userUpdateServiceService;
    constructor(userUpdateServiceService: UserUpdatePasswordService);
    handle(id: string, request: UserRequest.UpdatePassword): Promise<void>;
}
