import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto, LogoutDto } from 'src/dto/user/user.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({ type: LoginDto })
  @HttpCode(HttpStatus.OK)
  @Post()
  login(@Body() data: LoginDto) {
    return this.auth.authentication(data);
  }
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: 'Logout successful' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @Post('logout')
  logout(@Body() data: LogoutDto) {
    return this.auth.logout(data.token);
  }
}
