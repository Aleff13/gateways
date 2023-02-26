import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
import Stripe from 'stripe';

class CustomerSvc {
  static async createCustomer(customer: CreateCustomerDto) {
    const stripe = new Stripe('sk_test_...', {
      apiVersion: '2022-11-15',
      host: '127.0.0.1',
      port: '12111',
      protocol: 'http',
    });

    const params: Stripe.CustomerCreateParams = {
      name: customer.name,
      email: customer.email,
    };

    const customerStripe: Stripe.Customer = await stripe.customers.create(
      params,
    );

    console.log(customerStripe);
    return customerStripe;
  }
}

export default CustomerSvc;
