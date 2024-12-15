import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PaymentGatewayService {
  private readonly apiUrl = 'https://api.paypal.com';

  async processPayment(amount: number): Promise<any> {
    const response = await axios.post(`${this.apiUrl}/v1/payment`, { amount });

    return response.data;
  }
}
