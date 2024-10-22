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

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ type: TaskDto, isArray: true })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @Get()
  list() {
    return this.task.list();
  }

  @ApiBadRequestResponse({ description: 'Task already exists' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBody({ type: CreateTaskDto })
  @ApiOkResponse({ type: TaskDto })
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @Post()
  create(@Body() data: CreateTaskDto) {
    return this.task.create(data);
  }
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiOkResponse({ type: TaskDto })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.task.findTask(id);
  }

  @ApiBadRequestResponse({ description: 'Task already exists' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiOkResponse({ type: TaskDto })
  @ApiBody({ type: TaskDto })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: TaskDto) {
    return this.task.update(id, data);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized', })
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiNoContentResponse({ description: 'Task deleted' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.task.delete(id);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Task not found' })
  @ApiOkResponse({ type: TaskDto })
  @HttpCode(HttpStatus.OK)
  @Put(':id/completed')
  @ApiBearerAuth()
  completed(@Param('id') id: number) {
    return this.task.completed(id);
  }
}
