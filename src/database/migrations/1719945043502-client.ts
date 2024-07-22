import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Client1719945043502 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
      new Table({
        name: 'client',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
						length: '255'
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
						length: '14'
          },
					{
            name: 'cnpj',
            type: 'varchar',
						length: '18',
            isNullable: true,
          },
          {
            name: 'numberPhone',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
						length: '320'
          },
        ],
      }),
      true
    );
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('client');
	}

}

