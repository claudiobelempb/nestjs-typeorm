import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { DataSourceOptions } from 'typeorm';

export const dataSourceOption: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'admin',
  migrations: [],
  entities: [],
  synchronize: true /*Carrega entidades sem precisar especificar-las*/,
  autoLoadEntities:
    true /*Sincroniza com o DB. não deve ser usado em produção */,
};
