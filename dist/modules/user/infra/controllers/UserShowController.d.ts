import { UserShowService } from '../../application/services/UserShowService';
import { UserResponse } from '../../application/response/user.response';
export declare class UserShowController {
    private readonly userShowService;
    constructor(userShowService: UserShowService);
    handle(id: string): Promise<UserResponse.User>;
}
