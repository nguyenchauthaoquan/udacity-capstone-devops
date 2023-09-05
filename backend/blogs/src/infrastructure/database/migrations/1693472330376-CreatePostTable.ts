import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePostTable1693472330376 implements MigrationInterface {
  name = 'CreatePostTable1693472330376';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "content" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying NOT NULL DEFAULT '', "modified_date" TIMESTAMP, "modified_by" character varying, "deleted_date" TIMESTAMP, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
