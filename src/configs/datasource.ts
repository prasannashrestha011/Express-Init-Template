import { Dum } from "@/database/models/DumModel";
import { Test } from "@/database/models/TestModel";
import { User } from "@/database/models/UserModel";
import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "9843",
  database: process.env.DB_NAME || "myapp",
  synchronize: process.env.NODE_ENV == "development",
  logging: process.env.NODE_ENV == "development",
  entities: [User, Test, Dum],
  migrations: ["src/database/migrations/*.ts"],
});
