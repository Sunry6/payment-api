import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import { Modal } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModal: Modal<TransactionDocument>,
  ) {}

  async createTransaction(
    userId: string,
    amount: number,
  ): Promise<Transaction> {
    const transaction = new this.transactionModal({
      userId,
      amount,
      date: new Date(),
    });
    return transaction.save();
  }

  async getTransactionHistory(userId: string): Promise<Transaction[]> {
    return this.transactionModal.find({ userId }).exec();
  }
}
