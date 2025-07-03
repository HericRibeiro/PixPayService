import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [
    // Importa e disponibiliza variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexão com o banco PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities: [Transaction],
    }),

    // Registra a entidade
    TypeOrmModule.forFeature([Transaction]),
  ],
  controllers: [TransactionsController, PaymentsController],
  providers: [TransactionsService],
})
export class AppModule {}
