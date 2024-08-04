import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

/* export class Coffee {
  id: number;
  name: string;
  brand: string;
  flavors: string[];
} */

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // auto-incrementing primary key
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  /*   @Column('json', { nullable: true })
  flavors: string[]; */

  @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // ['insert']
  })
  // flavors: string[];
  flavors: Flavor[];
}
