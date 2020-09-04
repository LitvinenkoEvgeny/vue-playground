import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

import { CreateUserInput, Users } from './users.model';

@Injectable()
export class UsersService {
  public async getAllUsers(page: number): Promise<Users> {
    const { page: page_num, total_pages, data } = await (await fetch(`https://reqres.in/api/users?page=${page}`)).json();
    return { page: page_num, total_pages, users: data };
  }

  public async getUser(id: number) {
    const user = await (await fetch(`https://reqres.in/api/users/${id}`)).json();
    return user.data;
  }

  public async createUser(createUserPayload: CreateUserInput) {
    const response = await (fetch('https://reqres.in/api/users/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createUserPayload),
    }));

    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error('Error while adding user');
    }
  }

  public async deleteUser(id: number) {

    await (fetch(`https://regres.in/api/users/${id}`, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }));

    // return deleted user
    return this.getUser(id)
  }
}
