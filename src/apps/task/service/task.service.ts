import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto, TaskDto } from 'src/dto/task/task.dto';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  async list() {
    return await this.prisma.task.findMany();
  }

  async create(data: CreateTaskDto) {
    const consult = {
      title: data.title,
    };
    const task = await this.prisma.task.findFirst({ where: consult });

    if (task) {
      throw new HttpException('Task already exists', HttpStatus.BAD_REQUEST);
    }
    return await this.prisma.task.create({
      data: { title: data.title, content: data.content },
    });
  }

  async findTask(id: number) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: id,
      },
    });
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async update(id: number, data: TaskDto) {
    await this.findTask(id);

    return await this.prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title: data.title,
        content: data.content,
        status: data.status,
      },
    });
  }

  async delete(id: number) {
    await this.findTask(id);
    return await this.prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
  }

  async completed(id: number) {
    const task = await this.findTask(id);
    const completed: boolean = !task.status;
    return await this.prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        status: completed,
      },
    });
  }
}
