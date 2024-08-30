import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
  constructor() {}

  async passwordHash(password: string, salt: number) {
    const saltRounds = await genSalt(salt);
    const pass = await hash(password, saltRounds);
    return pass;
  }
}
