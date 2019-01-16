import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Reports } from './interface/reports.interface';
import { CreateReportsDto} from './dto/create-reports.dto';

@Injectable()
export class  ReportsService{
  constructor(@Inject('ReportsModelToken') private readonly reportsModel: Model<Reports>) {}

  async create(CreateReportsDto: CreateReportsDto): Promise<Reports> {
    const createReport = new this.reportsModel(CreateReportsDto);
    return await createReport.save();
  }

  async getReports(starDate, endDate): Promise<Reports[]> {
    console.log(starDate);
    console.log(endDate);
    return await this.reportsModel.find(
        {creationDate: 
            {
                $gte:new Date(starDate),
                $lt:new Date(endDate)
            }
        }
    ).exec();
  }
}