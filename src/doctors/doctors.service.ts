import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { DoctorsInterface } from './interface/doctors.interface';
import { DoctorsDto } from './dto/doctors.dto';
import { ObjectId } from "bson";
import { LoginService } from './../login/login.service';

@Injectable()
export class DoctorsService {

  constructor(@Inject('DoctorsModelToken') private readonly doctorsModel: Model<DoctorsInterface>,
    readonly loginService: LoginService) { }

  async create(doctorsDto: DoctorsDto): Promise<DoctorsInterface> {
    const createUser = new this.doctorsModel(doctorsDto);
    return await createUser.save();
  }

  async findAll(): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find().exec();
  }

  async findById(id: string): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find({_id: id}).exec();
  }

  async findByIdUser(id: string): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find({userId: id}).exec();
  }

  /*async findById(id: string) {
    let loginService2 = this.loginService;
    let response;

    await this.doctorsModel.find({ _id: id }).exec((error, result) => {
      if (error) { 
        return error;
      }
      else {
        return loginService2.findById(ObjectId(result[0].userId)).then((resultUser) => {
          response = {
            user: resultUser[0],
            doctor: result[0]
          }
          console.log(response);
          return response;
        });
      }
    });
  }*/

  async updateById(doctorsDto: DoctorsDto): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find({ _id: doctorsDto._id }).updateOne(doctorsDto).exec();
  }

  async deleteById(id: string): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find({ _id: id }).deleteOne().exec();
  }

}