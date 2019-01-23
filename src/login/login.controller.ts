import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('api/login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @Get()
    async findAll() {
        return this.loginService
            .findAll()
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Get(':id')
    async findById(@Param('id') id) {
        return this.loginService
            .findById(id)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }
    
    @Get('userName/:name')
    async findByUserName(@Param('name') name) {
        return this.loginService
            .findByUserName(name)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Post()
    async create(@Req() request, @Body() loginDto: LoginDto) {
        return this.loginService
            .create(loginDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Put()
    async update(@Req() request, @Body() loginDto: LoginDto) {
        return this.loginService
            .updateById(loginDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.loginService
            .deleteById(id)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}
