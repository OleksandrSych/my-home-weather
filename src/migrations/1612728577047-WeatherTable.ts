import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class WeatherTable1612728577047 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
        new Table({
          name: 'Weather',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              isGenerated: true, 
            },
            {
              name: 'createDateTime',
              type: 'Date',
              isNullable: false,
            },
            {
              name: 'createdBy',
              type: 'varchar',
              isNullable: true,
            },,
            {
              name: 'Temperature',
              type: 'real',
              isNullable: true,
            },
            {
              name: 'Humidity',
              type: 'real',
              isNullable: true,
            },
            {
              name: 'PPM',
              type: 'real',
              isNullable: true,
            },

          ],
        }),
        false,
      );
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
      queryRunner.query(`DROP TABLE Weather`);
    }
  }