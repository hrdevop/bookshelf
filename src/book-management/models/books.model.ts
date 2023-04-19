
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BookCategory, BooksAddInterface } from './books.interface';

@Entity()
export class Books implements BooksAddInterface {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    category: string;

    @Column() //temporary
    coverImage: string;


}
