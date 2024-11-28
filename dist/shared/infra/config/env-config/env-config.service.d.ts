import { EnvConfigInterface } from './env-config.interface';
import { ConfigService } from '@nestjs/config';
export declare class EnvConfigService implements EnvConfigInterface {
    private readonly configService;
    constructor(configService: ConfigService);
    getAppPort(): number;
    getNodeEnv(): string;
    getJwtSecret(): string;
    getJwtExpiresInSeconds(): number;
}
