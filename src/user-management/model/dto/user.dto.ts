import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

import { UserInterface } from "../user.interface";

export class UserDTO implements UserInterface {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}