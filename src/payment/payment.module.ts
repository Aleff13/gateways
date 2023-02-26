import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customer } from 'src/customer/entities/customer.entity';
import { payment } from './entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([customer, payment])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
