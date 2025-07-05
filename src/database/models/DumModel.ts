import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dum {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  dum!: string;
}
