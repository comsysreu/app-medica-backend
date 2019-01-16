import { Controller,Get,Post, Body , Res, Param} from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('api/login')
export class LoginController {

constructor(private readonly loginService: LoginService) {}

    @Get()
    async findAll(){      
        return this.loginService
            .findAll()
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(error => {
                return error;
            });
    } 

}
