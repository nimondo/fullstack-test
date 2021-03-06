import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Countries {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}