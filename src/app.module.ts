import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigGuard } from './Config.guard';
import { AuthModule } from './modules/auth/infra/auth.module';
import { MessageModule } from './modules/message/infra/MessageModule';
import { UserModule } from './modules/user/infra/user.module';
import { dataSourceOption } from './shared/infra/database/type-orm.config';
import { Simplemiddleware } from './shared/common/middlewares/Simple.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOption,
    }),
    UserModule,
    AuthModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigGuard],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Simplemiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
