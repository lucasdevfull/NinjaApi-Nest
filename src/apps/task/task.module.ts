import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { TaskController } from './controller/task.controller';
import { TaskService } from './service/task.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
