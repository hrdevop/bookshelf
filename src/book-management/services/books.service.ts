import { Injectable } from "@nestjs/common";
import { BooksAddInterface } from "../models/books.interface";
import { Repository } from 'typeorm'
import { InjectRepository } from "@nestjs/typeorm"
import { Books } from "../models/books.model";
@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Books)
        private bookEntity: Repository<Books>) {

    }

    addBooks = (book: BooksAddInterface): BooksAddInterface | any => {
        return this.bookEntity.save(book);
    }

    getBookList = (search?: { title: string, author: string, category: string }): Promise<BooksAddInterface[]> => {
        return this.bookEntity.find({ where: { ...search } })
    }
} 