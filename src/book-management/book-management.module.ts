import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BooksController } from './controller/books.controller';
import { BooksHelperService } from './services/helpers/books-helper.service';
import { Books } from './models/books.model';
import { UserBooks } from './models/user-books.model';
import { BooksService } from './services/books.service';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Books, UserBooks])
  ],
  controllers: [BooksController],
  providers: [
    Repository,
    BooksHelperService,
    BooksService]
})
export class BookManagementModule { }
