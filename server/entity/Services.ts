import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Services {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}