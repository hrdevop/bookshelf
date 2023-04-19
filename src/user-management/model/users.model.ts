import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';
import { UserInterface } from "./user.interface";

@Entity()
    export class Users implements UserInterface {

        @PrimaryGeneratedColumn('uuid')
        id: string

        @Column()
        name: string

        @Column()
        email: string;

        @Column()
        password: string;


      
    }
