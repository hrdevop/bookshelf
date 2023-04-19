import { BooksHelperService } from '../services/helpers/books-helper.service';
import { Body, Controller, Post, Put, Get, Param, Query } from '@nestjs/common';
import { BooksDTO, BooksReadStatusDTO } from '../models/dto/books.dto';
import { BooksService } from '../services/books.service';

@Controller('books')
export class BooksController {

    constructor(
        private booksHelperService: BooksHelperService,
        private bookService: BooksService) {

    }
    @Post("add")
    addBook(@Body() book: BooksDTO) {
        const data = this.booksHelperService.addBookDtoToEntity(book);
        return this.bookService.addBooks(data);
    }


    @Get("list")
    bookList(@Query() query: { title: string, author: string, category: string }) {
        let search: { title: string, author: string, category: string } = query
        return this.bookService.getBookList(search)
    }

    @Put("readStatus")
    changeReadStatus(@Body() status: BooksReadStatusDTO) {
    }

}
