import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';
export declare class EnvConfigModule extends ConfigModule {
    static forRoot(options?: ConfigModuleOptions): Promise<DynamicModule>;
}
