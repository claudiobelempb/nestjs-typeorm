import { UserDeactiveService } from '../../application/services/UserDeactiveService';
export declare class UserDeactiveController {
    private readonly userDeactiveService;
    constructor(userDeactiveService: UserDeactiveService);
    handle(id: string): Promise<void>;
}
