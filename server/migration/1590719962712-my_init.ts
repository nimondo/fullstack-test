import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1590719962712 implements MigrationInterface {
    name = 'myInit1590719962712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "fulname" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fulname"`);
    }

}
