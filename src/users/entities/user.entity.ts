import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
   
}
