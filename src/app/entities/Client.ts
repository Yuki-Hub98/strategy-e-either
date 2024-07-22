import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {length: 255})
  name: string;

  @Column('varchar', {length: 14, unique: true })
  cpf: string;

  @Column('varchar', { length: 18, nullable: true })
  cnpj: string;

  @Column('varchar', {length: 15})
  numberPhone: string;

  @Column('varchar', {length: 320, unique: true })
  email: string;

}