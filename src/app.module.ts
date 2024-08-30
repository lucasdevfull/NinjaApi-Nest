import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './apps/task/task.module';
import { PrismaModule } from './infra/prisma/prisma.module';
import { UserModule } from './apps/user/user.module';
import { AuthModule } from './apps/auth/modules/auth.module';
import { PasswordModule } from './apps/auth/modules/password.module';
import { PasswordService } from './apps/auth/services/password.service';

@Module({
  imports: [TaskModule, PrismaModule, UserModule, AuthModule, PasswordModule],
  controllers: [AppController],
  providers: [AppService, PasswordService],
})
export class AppModule {}
