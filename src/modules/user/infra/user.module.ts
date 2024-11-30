import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../domain/entities/use.entity';
import { UserIndexController } from './controllers/UserIndexController';
import { UserIndexService } from '../application/services/UserIndexService';
import { UserRepository } from '../domain/repositories/UserRepository';
import { Repository } from 'typeorm';
import { UserCreateController } from './controllers/UserCreateController';
import { UserCreateService } from '../application/services/UserCreateService';
import { HashProvider } from 'src/shared/common/interfaces/hash.interface';
import { UserDeleteController } from './controllers/UserDeleteController';
import { UserDeleteService } from '../application/services/UserDeleteService';
import { UserShowService } from '../application/services/UserShowService';
import { UserShowController } from './controllers/UserShowController';

import { UserUpdateService } from '../application/services/UserUpdateService';
import { UserUpdateController } from './controllers/UserUpdateController';
import { UserActiveService } from '../application/services/UserActiveService';
import { UserDeactiveService } from '../application/services/UserDeactiveService';
import { UserActiveController } from './controllers/UserActiveController';
import { UserDeactiveController } from './controllers/UserDeactiveController';
import { UserUpdatePasswordService } from '../application/services/UserUpdatePasswordService';
import { UserUpdatePasswordController } from './controllers/UserUpdatePasswordController';
import { BcryptjsHashProvider } from 'src/shared/common/providers/BcryptjsHashProvider';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [
    UserIndexController,
    UserShowController,
    UserCreateController,
    UserUpdateController,
    UserDeleteController,
    UserActiveController,
    UserDeactiveController,
    UserUpdatePasswordController,
  ],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'HashProvider',
      useClass: BcryptjsHashProvider,
    },
    {
      provide: UserRepository,
      useFactory: (userRepository: Repository<UserEntity>) => {
        return new UserRepository(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserIndexService,
      useFactory: (userRepository: UserRepository) => {
        return new UserIndexService(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserCreateService,
      useFactory: (
        userRepository: UserRepository,
        hashProvider: HashProvider,
      ) => {
        return new UserCreateService(userRepository, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: UserShowService,
      useFactory: (userRepository: UserRepository) => {
        return new UserShowService(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserDeleteService,
      useFactory: (userRepository: UserRepository) => {
        return new UserDeleteService(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserUpdateService,
      useFactory: (userRepository: UserRepository) => {
        return new UserUpdateService(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserActiveService,
      useFactory: (userRepository: UserRepository) => {
        return new UserActiveService(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserDeactiveService,
      useFactory: (userRepository: UserRepository) => {
        return new UserDeactiveService(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UserUpdatePasswordService,
      useFactory: (
        userRepository: UserRepository,
        hashProvider: HashProvider,
      ) => {
        return new UserUpdatePasswordService(userRepository, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
  ],
  exports: [UserShowService],
})
export class UserModule {}
