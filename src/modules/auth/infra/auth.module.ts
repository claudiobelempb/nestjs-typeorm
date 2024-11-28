import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { AuthSignupService } from '../application/services/auth-signup.service';
import { AuthSignupController } from './controllers/auth-signup.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthSignupController],
  providers: [AuthSignupService],
})
export class AuthModule {}
