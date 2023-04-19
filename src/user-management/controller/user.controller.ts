import { UserService } from './../services/user.service';
import { UserHelperService } from './../services/helper/user-helper.service';
import { Body, Controller, Post } from "@nestjs/common";
import { UserDTO } from "../model/dto/user.dto";

@Controller("user")
export class UserController {
    constructor(private userHelperService: UserHelperService,
        private userService: UserService) {

    }

    @Post("signup")
    async signUp(@Body() user: UserDTO) {
        const entity = this.userHelperService.userDtoToEntity(user);
        return this.userService.addUser(await entity);
    }
}