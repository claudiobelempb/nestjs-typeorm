import { UserIndexService } from '../../application/services/UserIndexService';
export declare class UserIndexController {
    private readonly userIndexService;
    constructor(userIndexService: UserIndexService);
    handle(): Promise<import("../../domain/entities/use.entity").UserEntity[]>;
}
