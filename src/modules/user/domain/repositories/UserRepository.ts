import { InjectRepository } from '@nestjs/typeorm';
import { AppConflictException } from 'src/shared/domain/exceptions/AppConflictException';
import { AppNotFoundException } from 'src/shared/domain/exceptions/AppNotFoundException';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/use.entity';
import { IUserRepository } from './user.interface';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string): Promise<UserEntity> {
    try {
      const entity = await this.userRepository.findOneBy({
        email,
      });
      return entity;
    } catch (error) {
      throw new AppNotFoundException(
        `${ConstantException.EMAIL_NOT_FOUND} ${email}`,
      );
    }
  }

  async emailExists(email: string): Promise<void> {
    const emailExists = await this.userRepository.findOneBy({
      email,
    });

    if (emailExists) {
      throw new AppConflictException(ConstantException.CONFICT_EMAIL);
    }
  }

  async create(request: UserEntity): Promise<UserEntity> {
    const entity = this.userRepository.create(request);
    return this.userRepository.save(entity);
  }

  async show(id: string): Promise<UserEntity> {
    try {
      const entity = await this.userRepository.findOneBy({
        id,
      });
      return entity;
    } catch (error) {
      throw new AppNotFoundException(
        `${ConstantException.ENTITY_NOT_FOUND} ${id}`,
      );
    }
  }

  async index(): Promise<UserEntity[]> {
    const entity = await this.userRepository.find({
      order: {
        firstName: 'ASC',
      },
    });
    return entity;
  }

  async update(id: string, request: UserEntity): Promise<UserEntity> {
    try {
      const entity = await this.userRepository.preload({ id, ...request });
      return this.userRepository.save(entity);
    } catch (error) {
      throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const entity = await this.userRepository.findOne({ where: { id } });
      if (!entity) {
        throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND);
      }
      await this.userRepository.remove(entity);
    } catch (error) {
      throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async active(id: string): Promise<void> {
    try {
      const entity = await this.userRepository.preload({
        id,
        isActive: true,
      });
      await this.userRepository.save(entity);
    } catch (error) {
      throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async deactive(id: string): Promise<void> {
    try {
      const entity = await this.userRepository.preload({
        id,
        isActive: false,
      });

      await this.userRepository.save(entity);
    } catch (error) {
      throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }

  async updatePassword(id: string, password: string): Promise<void> {
    try {
      const entity = await this.userRepository.preload({
        id,
        password,
      });

      await this.userRepository.save(entity);
    } catch (error) {
      throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND);
    }
  }
}

/*
  01 tela do samsung a03
  01 tela do samsung a30s
  01 tela do samsung a31 A315F
  01 bateria do redmi not 7 BN4A
  01 bateria do motorola g30 JK50
  01 tampa traseira do samsung a01 core
*/
