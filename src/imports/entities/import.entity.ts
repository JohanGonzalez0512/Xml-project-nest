import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('imports')
export class Import {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    month: string;
    @Column()
    year: string;

    @Column()
    total: number;

    @Column()
    consumerGoods: number;

    @Column()
    intermediateGoods: number;

    @Column()
    capitalGoods: number;


}
