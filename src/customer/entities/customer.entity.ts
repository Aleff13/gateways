import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class customer {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  address: string;

  @Column('text')
  strip_id?: string;
}
