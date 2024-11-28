import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { AuthSignupService } from '../../application/services/auth-signup.service';
export declare class AuthSignupController {
    private readonly authSignupService;
    constructor(authSignupService: AuthSignupService);
    handle(request: UserEntity): Promise<UserEntity>;
}
