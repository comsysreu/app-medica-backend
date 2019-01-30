import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesDto } from './dto/medicines.dto';
import { ObjectId } from "bson";

@Controller('api/medicines')
export class MedicinesController {

    constructor(private readonly medicinesService: MedicinesService) { }

    @Get()
    async findAll() {
        return this.medicinesService
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
        return this.medicinesService
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
        return this.medicinesService
            .findByUserName(name)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Post()
    async create(@Req() request, @Body() specialtiesDto: MedicinesDto) {
        specialtiesDto._id = new ObjectId();
        return this.medicinesService
            .create(specialtiesDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Put()
    async update(@Req() request, @Body() specialtiesDto: MedicinesDto) {
        specialtiesDto._id = ObjectId(specialtiesDto._id);
        return this.medicinesService
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
        return this.medicinesService
            .deleteById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}
