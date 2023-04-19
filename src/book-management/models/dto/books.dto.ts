import { IsString, IsNotEmpty, IsUUID } from "class-validator";
import { BookCategory, BookReadStatusInterface, BooksAddInterface } from "../books.interface";
import { Type } from "class-transformer";

export class BooksDTO implements BooksAddInterface {

    @IsString()
    @IsNotEmpty()
    title: string;


    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    category: BookCategory;

    @IsUUID()
    @IsNotEmpty()
    coverImage: string;

}

export class BooksReadStatusDTO implements BookReadStatusInterface {

    status: "Read" | "Want to read";
}