import { CreateTaskDto, TaskDto } from 'src/dto/task/task.dto';
import { TaskService } from '../service/task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('task')
@ApiTags('Task')
export class TaskController {
  constructor(private readonly task: TaskService) {}

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ type: TaskDto, isArray: true })
  @Get()
  @HttpCode(HttpStatus.OK)
  list() {
    return this.task.list();
  }

  @ApiBearerAuth()
  @ApiBody({ type: CreateTaskDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ type: TaskDto })
  @ApiBadRequestResponse({ description: 'Task already exists' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateTaskDto) {
    return this.task.create(data);
  }
  @ApiBearerAuth()
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiOkResponse({ type: TaskDto })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.task.findTask(id);
  }

  @ApiBearerAuth()
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiOkResponse({ type: TaskDto })
  @ApiBody({ type: TaskDto })
  @ApiBadRequestResponse({ description: 'Task already exists' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: TaskDto) {
    return this.task.update(id, data);
  }

  @ApiBearerAuth()
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNoContentResponse({ description: 'Task deleted' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.task.delete(id);
  }

  @ApiBearerAuth()
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ type: TaskDto })
  @Put(':id/completed')
  @HttpCode(HttpStatus.OK)
  completed(@Param('id') id: number) {
    return this.task.completed(id);
  }
}
