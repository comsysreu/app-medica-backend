import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsDto } from './dto/doctors.dto';
import { ObjectId } from "bson";
import { LoginService } from './../login/login.service';
import { SpecialtiesService } from './../specialties/specialties.service';

@Controller('api/doctors')
export class DoctorsController {

    constructor(
        private readonly doctorsService: DoctorsService,
        private readonly loginService: LoginService,
        private readonly specialtiesService: SpecialtiesService
    ) { }

    @Get()
    async findAll() {
        return this.loginService.findAllDoctors()
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    /* @Get()
    async findAll() {
        let responseData = [];
        return this.loginService.findAllDoctors()
            .then(response => {
                for (let i in response) {
                     this.doctorsService.findByIdUser(response[i]._id)
                        .then(responseDoctor => {
                            responseData.push(
                                {
                                    user: response[i],
                                    doctor: responseDoctor[0]
                                }
                            )
                            
                            if(response.length -1 == +i ){
                                console.log(responseData);
                                return responseData;
                            }
                        })
                        .catch(error => {
                            return error
                        });
                }
            })
            .catch(error => {
                return error;
            });
    } */

    @Get(':id')
    async findById(@Param('id') id) {
        return this.doctorsService
            .findById(ObjectId(id))
            .then(responseDoctor => {
                return this.loginService
                    .findById(ObjectId(responseDoctor[0].userId))
                    .then(responseUser => {
                        return this.specialtiesService
                            .findById(ObjectId(responseDoctor[0].specialtiesId))
                            .then(responseSpecialties => {
                                return {
                                    user: responseUser[0],
                                    doctor: responseDoctor[0],
                                    specialties: responseSpecialties[0]
                                }
                            })
                            .catch(error => {
                                return error;
                            })
                    })
                    .catch(error => {
                        return error;
                    });
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
                return this.doctorsService
                    .findByIdUser(ObjectId(id))
                    .then(responseDoctor => {
                        return this.specialtiesService
                            .findById(ObjectId(responseDoctor[0].specialtiesId))
                            .then(responseSpecialties => {
                                return {
                                    user: responseUser[0],
                                    doctor: responseDoctor[0],
                                    specialties: responseSpecialties[0]
                                }
                            })
                            .catch(error => {
                                return error;
                            })
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
