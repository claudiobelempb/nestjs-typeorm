import { UserActiveService } from '../../application/services/UserActiveService';
export declare class UserActiveController {
    private readonly userActiveService;
    constructor(userActiveService: UserActiveService);
    handle(id: string): Promise<void>;
}
