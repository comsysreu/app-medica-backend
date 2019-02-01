import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { DoctorsInterface } from './interface/doctors.interface';
import { DoctorsDto } from './dto/doctors.dto';

@Injectable()
export class DoctorsService {
  constructor(@Inject('DoctorsModelToken') private readonly doctorsModel: Model<DoctorsInterface>) { }

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
  
  async updateById(doctorsDto: DoctorsDto): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find({_id: doctorsDto._id}).updateOne(doctorsDto).exec();
  }

  async deleteById(id: string): Promise<DoctorsInterface[]> {
    return await this.doctorsModel.find({_id: id}).deleteOne().exec();
  }

}