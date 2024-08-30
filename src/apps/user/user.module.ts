import { PasswordModule } from '../auth/modules/password.module';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, PasswordModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
