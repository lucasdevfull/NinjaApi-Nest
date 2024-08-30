import { PasswordService } from '../services/password.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PasswordService],
  exports: [PasswordService],
})
export class PasswordModule {}
