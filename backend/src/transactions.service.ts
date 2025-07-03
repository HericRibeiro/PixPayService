import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Transaction } from './transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction, process.env.TRANSACTIONS_TABLE)
    private repo: Repository<Transaction>
  ) {}

  async create(payload: Partial<Transaction>): Promise<Transaction> {
    const transaction = this.repo.create(payload);
    return await this.repo.save(transaction);
  }

  async findAll(filters: any) {
    const where: Record<string, any> = {};
    for (const [key, value] of Object.entries(filters)) {
      where[key] = ILike(`%${value}%`);
    }
    return await this.repo.find({ where });
  }
}
