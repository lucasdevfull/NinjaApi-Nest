import { PasswordService } from 'src/apps/auth/services/password.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { UserDto } from 'src/dto/user/user.dto';
import { findId } from '@prisma/client/sql';
import { randomInt } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    private readonly password: PasswordService,
    private readonly prisma: PrismaService,
  ) {}

  async listUsers() {
    return await this.prisma.user.findMany();
  }
  async findByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: { email: email } });
  }
  async createUser(data: UserDto) {
    const password = await this.password.passwordHash(
      data.password,
      randomInt(10, 16),
    );
    return await this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: password,
      },
    });
  }
  async findUser(id: number) {
    const user = await this.prisma.$queryRawTyped(findId(id));
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
