import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CustomerSvc from 'src/services/customer';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(customer)
    private customerRepository: Repository<customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const { id } = await CustomerSvc.createCustomer(createCustomerDto);
      createCustomerDto.strip_id = id;

      this.customerRepository.save(
        this.customerRepository.create(createCustomerDto),
      );

      return createCustomerDto;
    } catch (err) {
      console.error(err);
    }
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: string) {
    return this.customerRepository.findOneBy({ id });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
