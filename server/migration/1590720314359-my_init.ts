import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1590720314359 implements MigrationInterface {
    name = 'myInit1590720314359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "fulname" TO "fullname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "fullname" TO "fulname"`);
    }

}
