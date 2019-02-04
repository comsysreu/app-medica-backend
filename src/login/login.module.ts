import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginProviders } from './login.provider';

@Module({
  imports: [DatabaseModule],
  exports: [LoginService, ...LoginProviders],
  controllers: [LoginController],
  providers: [LoginService, ...LoginProviders],
})
export class LoginModule { }