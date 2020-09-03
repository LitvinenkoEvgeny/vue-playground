import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

import { CreateUserInput } from './users.model';

@Injectable()
export class UsersService {
  public async getAllUsers(page: number) {
    const users = await (await fetch(`https://reqres.in/api/users?page=${page}`)).json();
    return users.data;
  }

  public async getUser(id: number) {
    const user = await (await fetch(`https://reqres.in/api/users/${id}`)).json();
    return user.data;
  }

  public async createUser(createUserPayload: CreateUserInput) {
    const response = await (fetch('https://reqres.in/api/users/', {
      method: 'post',
      body: JSON.stringify(createUserPayload),
    }));

    if (response.status === 201) {
      return true;
    } else {
      throw new Error('Error while adding user');
    }
  }
}
