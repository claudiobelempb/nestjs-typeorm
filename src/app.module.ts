import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/infra/auth.module';
import { MessageModule } from './modules/message/infra/MessageModule';
import { UserModule } from './modules/user/infra/user.module';
import { dataSourceOption } from './shared/infra/database/type-orm.config';

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
  providers: [AppService],
})
export class AppModule {}
