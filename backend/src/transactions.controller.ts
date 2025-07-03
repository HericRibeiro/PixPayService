import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity';

@Controller(process.env.TRANSACTIONS_BASE_PATH || 'transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('webhook')
  async createTransaction(@Body() payload: any): Promise<Transaction> {
    return this.transactionsService.create(payload);
  }

  @Get()
  async findAll(@Query() filters: any): Promise<Transaction[]> {
    return this.transactionsService.findAll(filters);
  }
}
