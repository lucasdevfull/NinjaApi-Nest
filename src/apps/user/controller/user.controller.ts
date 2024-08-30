import { UserService } from '../service/user.service';
import { UserDto } from 'src/dto/user/user.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @ApiBearerAuth()
  @ApiOkResponse({ type: UserDto, isArray: true })
  @Get()
  @HttpCode(HttpStatus.OK)
  listUsers() {
    return this.user.listUsers();
  }

  @ApiCreatedResponse({ type: UserDto })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() data: UserDto) {
    return this.user.createUser(data);
  }

  @ApiBearerAuth()
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiOkResponse({ type: UserDto })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.user.findUser(id);
  }
}
