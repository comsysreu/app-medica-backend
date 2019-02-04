import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { LoginService } from '../login/login.service';
import { PatientsService } from './patients.service';
import { PatientsDto } from './dto/patients.dto';
import { ObjectId } from "bson";

@Controller('api/patients')
export class PatientsController {

    constructor(private readonly patientsService: PatientsService, private loginService: LoginService) { }

    @Get()
    async findAll() {
        return this.loginService
            .findAllPatients()
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Get(':id')
    async findById(@Param('id') id) {
        return this.patientsService
            .findById(ObjectId(id))
            .then(responsePatients => {
                return this.loginService
                    .findById(ObjectId(responsePatients[0]._id))
                    .then(responseUser => {
                        return {
                            user: responseUser[0],
                            patients: responsePatients[0]
                        }
                    })
                    .catch(error => {
                        return error;
                    })
            })
            .catch(error => {
                return error;
            });
    }

    @Get('user/:id')
    async findByDoctor(@Param('id') id) {
        return this.loginService
            .findById(ObjectId(id))
            .then(responseUser => {
                return this.patientsService
                    .findByIdUser(ObjectId(id))
                    .then(responsePatients => {
                        return {
                            user: responseUser[0],
                            patients: responsePatients[0]
                        }
                    })
                    .catch(error => {
                        return error;
                    });
            })
            .catch(error => {
                return error;
            });
    }

    @Post()
    async create(@Req() request, @Body() patientsDto: PatientsDto) {
        patientsDto._id = new ObjectId();
        patientsDto.userId = ObjectId(patientsDto.userId);
        return this.patientsService
            .create(patientsDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Put()
    async update(@Req() request, @Body() patientsDto: PatientsDto) {
        patientsDto._id = ObjectId(patientsDto._id);
        patientsDto.userId = ObjectId(patientsDto.userId);
        return this.patientsService
            .updateById(patientsDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.patientsService
            .deleteById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}
