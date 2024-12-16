import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type TransactionDocument = Transaction & Document;

export class Transaction {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
