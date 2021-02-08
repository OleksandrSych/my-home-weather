import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {

    @CreateDateColumn({ type: 'date', nullable: true  })
    createDateTime: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    createdBy: string | null;
}