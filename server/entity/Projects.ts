
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Projects {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company: string;

    @Column()
    description: string;

    @Column()
    country: string;

    @Column()
    service: string;

}