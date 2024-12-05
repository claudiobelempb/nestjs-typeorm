import { APP_GUARD } from '@nestjs/core';
import { AdminGuard } from './shared/common/guards/Admin.guard';

export const ConfigGuard = {
  provide: APP_GUARD,
  useClass: AdminGuard,
};
