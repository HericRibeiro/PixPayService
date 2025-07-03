import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  amount!: number;

  @Column()
  status!: string;

  @Column({ nullable: true })
  customerName!: string;

  @Column({ nullable: true })
  city!: string;
}
