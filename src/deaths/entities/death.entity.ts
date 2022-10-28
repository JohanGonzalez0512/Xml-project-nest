import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('deaths')
export class Death {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    idIndicator: string;

    @Column()
    descEntidad: string;

    @Column()
    cveMunicipio: number;

    @Column()
    descMunicipio: string;

    @Column()
    indicator: string;

    @Column()
    year: number;

    @Column()
    value: string;

    @Column()
    measure: string;


}
