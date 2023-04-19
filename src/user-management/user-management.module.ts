import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Users } from './model/users.model';
import { UserController } from './controller/user.controller';
import { UserHelperService } from './services/helper/user-helper.service';
import { Repository } from 'typeorm'
import { UserService } from './services/user.service';
@Module({

    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserHelperService,
        UserService,
        Repository
    ]

})
export class UserManagementModule { }
