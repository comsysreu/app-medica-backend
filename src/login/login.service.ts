import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { LoginInterface } from './interface/login.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(@Inject('LoginModelToken') private readonly loginModel: Model<LoginInterface>) { }

  async create(loginDto: LoginDto): Promise<LoginInterface> {
    const createUser = new this.loginModel(loginDto);
    return await createUser.save();
  }

  async findAll(): Promise<LoginInterface[]> {
    return await this.loginModel.find().exec();
  }

  async findById(id: string): Promise<LoginInterface[]> {
    return await this.loginModel.find({_id: id}).exec();
  }

  async findByUserName(userName: string): Promise<LoginInterface[]> {
    return await this.loginModel.find({userName: userName}).exec();
  }

  async updateById(loginDto: LoginDto): Promise<LoginInterface[]> {
    const createUser = new this.loginModel(loginDto);
    return await this.loginModel.findByIdAndUpdate(createUser).exec();
  }

  async deleteById(id: string): Promise<LoginInterface[]> {
    return await this.loginModel.find({_id: id}).remove().exec();
  }

}