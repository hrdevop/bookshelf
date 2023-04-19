import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserInterface } from '../model/user.interface';
import { Users } from '../model/users.model';
import { Repository } from 'typeorm';
@Injectable()

export class UserService {

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) {

    }

    addUser = async (user: UserInterface): Promise<UserInterface> => {
        return await this.usersRepository.save(user);
    }

}