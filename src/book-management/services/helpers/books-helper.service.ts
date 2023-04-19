import { BookCategory } from './../../models/books.interface';
import { Injectable } from '@nestjs/common';
import { BooksAddInterface } from 'src/book-management/models/books.interface';
import { BooksDTO } from 'src/book-management/models/dto/books.dto';

@Injectable()
export class BooksHelperService {

    addBookDtoToEntity = (books: BooksDTO): BooksAddInterface => {
        return {
            title: books.title,
            author: books.author,
            category: books.category,
            coverImage: books.coverImage,
        }
    }

}
