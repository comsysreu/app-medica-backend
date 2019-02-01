import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { PatientsInterface } from './interface/patients.interface';
import { PatientsDto } from './dto/patients.dto';

@Injectable()
export class PatientsService {
  constructor(@Inject('PatientsModelToken') private readonly patientsModel: Model<PatientsInterface>) { }

  async create(patientsDto: PatientsDto): Promise<PatientsInterface> {
    const createUser = new this.patientsModel(patientsDto);
    return await createUser.save();
  }

  async findAll(): Promise<PatientsInterface[]> {
    return await this.patientsModel.find().exec();
  }

  async findById(id: string): Promise<PatientsInterface[]> {
    return await this.patientsModel.find({_id: id}).exec();
  }

  async updateById(patientsDto: PatientsDto): Promise<PatientsInterface[]> {
    return await this.patientsModel.find({_id: patientsDto._id}).updateOne(patientsDto).exec();
  }

  async deleteById(id: string): Promise<PatientsInterface[]> {
    return await this.patientsModel.find({_id: id}).deleteOne().exec();
  }

}