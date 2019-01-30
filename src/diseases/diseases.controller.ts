import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { DiseasesDto } from './dto/diseases.dto';
import { ObjectId } from "bson";

@Controller('api/diseases')
export class DiseasesController {

    constructor(private readonly diseasesService: DiseasesService) { }

    @Get()
    async findAll() {
        return this.diseasesService
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
        return this.diseasesService
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
        return this.diseasesService
            .findByUserName(name)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Post()
    async create(@Req() request, @Body() diseasesDto: DiseasesDto) {
        diseasesDto._id = new ObjectId();
        return this.diseasesService
            .create(diseasesDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Put()
    async update(@Req() request, @Body() diseasesDto: DiseasesDto) {
        diseasesDto._id = ObjectId(diseasesDto._id);
        return this.diseasesService
            .updateById(diseasesDto)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.diseasesService
            .deleteById(ObjectId(id))
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}
