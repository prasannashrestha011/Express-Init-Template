import { MigrationInterface, QueryRunner } from "typeorm";

export class Dum1751713130435 implements MigrationInterface {
    name = 'Dum1751713130435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dum" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dum" character varying NOT NULL, CONSTRAINT "PK_c1feb7a947e866c5f1c50aae472" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dum"`);
    }

}
