// import { sha256 } from 'fast-sha256';
import {Entity, Column, PrimaryGeneratedColumn,BeforeInsert, BeforeUpdate} from "typeorm";
import {Md5} from "md5-typescript";
// import  { encodeUTF8,decodeUTF8 } from "tweetnacl-util";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
     hashpassword() {
        this.password = Md5.init(this.password);
        // this.password = encodeUTF8(sha256(decodeUTF8(this.password)));
    }

}