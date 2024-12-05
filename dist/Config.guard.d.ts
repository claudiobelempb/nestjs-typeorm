import { AdminGuard } from './shared/common/guards/Admin.guard';
export declare const ConfigGuard: {
    provide: string;
    useClass: typeof AdminGuard;
};
