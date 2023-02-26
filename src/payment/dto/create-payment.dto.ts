export class CreatePaymentDto {
  amount: number;
  payment_method: string;
  customer: string;
  currency: 'USD';
}
