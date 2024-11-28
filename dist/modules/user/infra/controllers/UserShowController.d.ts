import { UserShowService } from '../../application/services/UserShowService';
export declare class UserShowController {
    private readonly userShowService;
    constructor(userShowService: UserShowService);
    handle(id: string): Promise<import("../../domain/entities/use.entity").UserEntity>;
}
