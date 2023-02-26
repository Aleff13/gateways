import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { customer } from 'src/customer/entities/customer.entity';
import PaymentSvc from 'src/services/payment';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(customer)
    private customerRepository: Repository<customer>,
    @InjectRepository(payment)
    private paymentRepository: Repository<payment>,
  ) {}
  async create(createPaymentDto: CreatePaymentDto) {
    const customerSvc = new CustomerService(this.customerRepository);
    const customer = await customerSvc.findOne(createPaymentDto.customer);
    const payment = await PaymentSvc.createPayment(customer, createPaymentDto);

    const paymentObj = this.paymentRepository.create({
      amount: payment.amount.toString(),
      currency: payment.currency,
      customer_id: customer.id,
      transaction_id: payment.id,
    });

    this.paymentRepository.save(paymentObj);

    return paymentObj;
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
