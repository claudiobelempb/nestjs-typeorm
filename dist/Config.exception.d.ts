import { AdminGuard } from './shared/common/guards/Admin.guard';
export declare const ConfiGException: {
    provide: string;
    useClass: typeof AdminGuard;
};
