import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsDto } from './dto/doctors.dto';
import { ObjectId } from "bson";

@Controller('api/doctors')
export class DoctorsController {

    constructor(private readonly doctorsService: DoctorsService) { }

    @Get()
    async findAll() {
        return this.doctorsService
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
        return this.doctorsService
            .findById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Post()
    async create(@Req() request, @Body() doctorsDto: DoctorsDto) {
        doctorsDto._id = new ObjectId();
        doctorsDto.userId = ObjectId(doctorsDto.userId);
        doctorsDto.specialtiesId = ObjectId(doctorsDto.specialtiesId);
        return this.doctorsService
            .create(doctorsDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Put()
    async update(@Req() request, @Body() doctorsDto: DoctorsDto) {
        doctorsDto._id = ObjectId(doctorsDto._id);
        doctorsDto.userId = ObjectId(doctorsDto.userId);
        doctorsDto.specialtiesId = ObjectId(doctorsDto.specialtiesId);
        return this.doctorsService
            .updateById(doctorsDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.doctorsService
            .deleteById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}
