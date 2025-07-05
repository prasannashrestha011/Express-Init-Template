import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  username!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}
