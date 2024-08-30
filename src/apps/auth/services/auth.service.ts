import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/apps/user/service/user.service';
import { LoginDto } from 'src/dto/user/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly user: UserService,
    private readonly jwt: JwtService,
  ) {}

  async authentication(data: LoginDto) {
    const user = await this.user.findByEmail(data.email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const access = await this.generateToken(user.id);
    return access;
  }

  async generateToken(id: number) {
    return { access_token: this.jwt.sign({ id: id }) };
  }

  async logout(token: string) {
    const access = await this.jwt.verify(token);
    if (!access) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return { message: 'Logout successful' };
  }
}
