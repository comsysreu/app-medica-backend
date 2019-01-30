import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesDto } from './dto/specialties.dto';
import { ObjectId } from "bson";

@Controller('api/specialties')
export class SpecialtiesController {

    constructor(private readonly specialtiesService: SpecialtiesService) { }

    @Get()
    async findAll() {
        return this.specialtiesService
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
        return this.specialtiesService
            .findById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }
    
    @Get('name/:name')
    async findByUserName(@Param('name') name) {
        return this.specialtiesService
            .findByUserName(name)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Post()
    async create(@Req() request, @Body() specialtiesDto: SpecialtiesDto) {
        specialtiesDto._id = new ObjectId();
        return this.specialtiesService
            .create(specialtiesDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Put()
    async update(@Req() request, @Body() specialtiesDto: SpecialtiesDto) {
        specialtiesDto._id = ObjectId(specialtiesDto._id);
        return this.specialtiesService
            .updateById(specialtiesDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.specialtiesService
            .deleteById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}
