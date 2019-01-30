import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { DiseasesInterface } from './interface/diseases.interface';
import { DiseasesDto } from './dto/diseases.dto';

@Injectable()
export class DiseasesService {
  constructor(@Inject('DiseasesModelToken') private readonly diseasesModel: Model<DiseasesInterface>) { }

  async create(diseasesDto: DiseasesDto): Promise<DiseasesInterface> {
    const createUser = new this.diseasesModel(diseasesDto);
    return await createUser.save();
  }

  async findAll(): Promise<DiseasesInterface[]> {
    return await this.diseasesModel.find().exec();
  }

  async findById(id: string): Promise<DiseasesInterface[]> {
    return await this.diseasesModel.find({_id: id}).exec();
  }

  async findByUserName(name: string): Promise<DiseasesInterface[]> {
    return await this.diseasesModel.find({name: new RegExp(name, 'i')}).exec();
  }

  async updateById(diseasesDto: DiseasesDto): Promise<DiseasesInterface[]> {
    return await this.diseasesModel.find({_id: diseasesDto._id}).updateOne(diseasesDto).exec();
  }

  async deleteById(id: string): Promise<DiseasesInterface[]> {
    return await this.diseasesModel.find({_id: id}).deleteOne().exec();
  }

}