import { Query, Resolver, Args, Mutation, Int } from '@nestjs/graphql';

import { CreateUserInput, User } from './users.model';
import { UsersService } from './users.service.js';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Resolver(of => User)
export class UsersResolver {

  constructor(private usersService: UsersService) {
  }

  @UseGuards(AuthGuard)
  @Query(returns => [User])
  async users(@Args('page', { type: () => Int }) page: number) {
    return this.usersService.getAllUsers(page);
  }

  @UseGuards(AuthGuard)
  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getUser(id);
  }

  @UseGuards(AuthGuard)
  @Mutation(returns => Boolean)
  async createUser(@Args('userData') userData: CreateUserInput) {
    return this.usersService.createUser(userData);
  }
}
