import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class payment {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column('text')
  amount: string;

  @Column('text')
  currency: string;

  @Column('text')
  customer_id?: string;

  @Column('text')
  transaction_id?: string;
}
