import { BadRequestException, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

import { LoginInput } from './auth.model';

@Injectable()
export class AuthService {
  public async login(data: LoginInput) {
    const result = await fetch(`https://reqres.in/api/login`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (result.status === 200) {
      const token = await result.json();
      await this.setToken(token.token);

      return token;
    } else {
      throw new BadRequestException(`Auth error: Wrong login or password`);
    }
  }

  public async setToken(token: string) {
    return token;
  }
}
