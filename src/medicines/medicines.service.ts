import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { MedicinesInterface } from './interface/medicines.interface';
import { MedicinesDto } from './dto/medicines.dto';

@Injectable()
export class MedicinesService {
  constructor(@Inject('MedicinesModelToken') private readonly medicinesModel: Model<MedicinesInterface>) { }

  async create(medicinesDto: MedicinesDto): Promise<MedicinesInterface> {
    const createUser = new this.medicinesModel(medicinesDto);
    return await createUser.save();
  }

  async findAll(): Promise<MedicinesInterface[]> {
    return await this.medicinesModel.find().exec();
  }

  async findById(id: string): Promise<MedicinesInterface[]> {
    return await this.medicinesModel.find({ _id: id }).exec();
  }

  async findByUserName(name: string): Promise<MedicinesInterface[]> {
    return await this.medicinesModel.find({ name: new RegExp(name, 'i') }).exec();
  }

  async updateById(medicinesDto: MedicinesDto): Promise<MedicinesInterface[]> {
    return await this.medicinesModel.find({ _id: medicinesDto._id }).updateOne(medicinesDto).exec();
  }

  async deleteById(id: string): Promise<MedicinesInterface[]> {
    return await this.medicinesModel.find({ _id: id }).deleteOne().exec();
  }

}