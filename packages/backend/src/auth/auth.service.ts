import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

import { LoginInput } from './auth.model';

@Injectable()
export class AuthService {
  public async login(data: LoginInput) {
    const result = await fetch(`https://reqres.in/api/login`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if(result.status === 200){
      return await result.json();
    } else {
      throw new Error('Auth error');
    }
  }
}
