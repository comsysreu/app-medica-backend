import { Controller,Get,Post, Body , Res, Param} from '@nestjs/common';
import { ReportsService } from './reports.service';

import { CreateReportsDto } from './dto/create-reports.dto';
import { Reports } from './interface/reports.interface';


@Controller('api/reports')
export class ReportsController {
constructor(private readonly reportService: ReportsService) {}
    @Get('/getusers')
    async findAll(){             
        let records =123;
        let state, nombres, fecha;
        return records;   
    }    
}
