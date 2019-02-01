import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsDto } from './dto/patients.dto';
import { ObjectId } from "bson";

@Controller('api/patients')
export class PatientsController {

    constructor(private readonly patientsService: PatientsService) { }

    @Get()
    async findAll() {
        return this.patientsService
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
        return this.patientsService
            .findById(ObjectId(id))
            .then(response => {
                return response;
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
