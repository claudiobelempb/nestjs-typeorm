import { UserDeleteService } from '../../application/services/UserDeleteService';
export declare class UserDeleteController {
    private readonly userDeleteService;
    constructor(userDeleteService: UserDeleteService);
    handle(id: string): Promise<void>;
}
