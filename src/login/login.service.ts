import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { LoginInterface } from './interface/login.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(@Inject('LoginModelToken') private readonly loginModel: Model<LoginInterface>) { }

  /* async create(loginDto: LoginDto): Promise<LoginInterface> {
    const createReport = new this.loginModel(loginDto);
    return await createReport.save();
  } */

  async findAll(): Promise<LoginInterface[]> {
    return await this.loginModel.find().exec();
  }

}