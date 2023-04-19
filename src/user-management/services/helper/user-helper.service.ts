import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/user-management/model/dto/user.dto";
import { UserInterface } from "src/user-management/model/user.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserHelperService {

    userDtoToEntity = async (user: UserDTO): Promise<UserInterface> => {
        return {
            name: user.name,
            email: user.email,
            password: await bcrypt.hash(user.password, 10),
        }

    }

}