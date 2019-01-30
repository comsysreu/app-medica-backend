import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { SpecialtiesInterface } from './interface/specialties.interface';
import { SpecialtiesDto } from './dto/specialties.dto';

@Injectable()
export class SpecialtiesService {
  constructor(@Inject('SpecialtiesModelToken') private readonly specialtiesModel: Model<SpecialtiesInterface>) { }

  async create(specialtiesDto: SpecialtiesDto): Promise<SpecialtiesInterface> {
    const createUser = new this.specialtiesModel(specialtiesDto);
    return await createUser.save();
  }

  async findAll(): Promise<SpecialtiesInterface[]> {
    return await this.specialtiesModel.find().exec();
  }

  async findById(id: string): Promise<SpecialtiesInterface[]> {
    return await this.specialtiesModel.find({ _id: id }).exec();
  }

  async findByUserName(name: string): Promise<SpecialtiesInterface[]> {
    return await this.specialtiesModel.find({ name: new RegExp(name, 'i') }).exec();
  }

  async updateById(specialtiesDto: SpecialtiesDto): Promise<SpecialtiesInterface[]> {
    return await this.specialtiesModel.find({ _id: specialtiesDto._id }).updateOne(specialtiesDto).exec();
  }

  async deleteById(id: string): Promise<SpecialtiesInterface[]> {
    return await this.specialtiesModel.find({ _id: id }).deleteOne().exec();
  }

}