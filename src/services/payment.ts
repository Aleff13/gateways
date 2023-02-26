import { customer } from 'src/customer/entities/customer.entity';
import { CreatePaymentDto } from 'src/payment/dto/create-payment.dto';
import Stripe from 'stripe';

class PaymentSvc {
  static async createPayment(
    customer: customer,
    createPaymentDto: CreatePaymentDto,
  ) {
    const stripe = new Stripe('sk_test_...', {
      apiVersion: '2022-11-15',
      host: '127.0.0.1',
      port: '12111',
      protocol: 'http',
    });

    const paymentMethodMock = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 8,
        exp_year: 2023,
        cvc: '314',
      },
    });

    const params: Stripe.PaymentIntentCreateParams = {
      amount: createPaymentDto.amount,
      payment_method: paymentMethodMock.id,
      customer: customer.strip_id,
      currency: 'USD',
    };

    const payment = await stripe.paymentIntents.create(params);
    const confirm = await stripe.paymentIntents.confirm(payment.id);
    return confirm;
  }
}

export default PaymentSvc;
