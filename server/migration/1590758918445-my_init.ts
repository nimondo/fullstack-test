import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1590758918445 implements MigrationInterface {
    name = 'myInit1590758918445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "company" character varying NOT NULL, "description" character varying NOT NULL, "country" character varying NOT NULL, "service" character varying NOT NULL, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
